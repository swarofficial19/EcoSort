import React, { useState, useRef, useEffect } from 'react';
import {
  Upload,
  Camera,
  X,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Search,
  Check,
  FileImage,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { WasteAnalysis } from '../types';
import { wasteAnalyzer } from '../lib/ai/waste-analyzer';
import { SAMPLE_ITEMS, SampleItem } from '../data/sample-items';
import { AnalysisResult } from './AnalysisResult';

interface ScannerProps {
  onSearchItem: (query: string) => void;
  onExploreCategory: (category: string) => void;
}

type ScanStage = 'idle' | 'analyzing' | 'complete' | 'error';

export const Scanner: React.FC<ScannerProps> = ({ onSearchItem, onExploreCategory }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMimeType, setSelectedMimeType] = useState<string>('image/jpeg');
  const [fileName, setFileName] = useState<string>('');
  const [fileSize, setFileSize] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Analysis state
  const [scanStage, setScanStage] = useState<ScanStage>('idle');
  const [analysisProgressStep, setAnalysisProgressStep] = useState<number>(0);
  const [analysisResult, setAnalysisResult] = useState<WasteAnalysis | null>(null);

  // File input refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE_BYTES = 25 * 1024 * 1024; // 25MB raw file accepted, compressed client-side

  // Downscale and compress image for fast, reliable vision API processing
  const optimizeImage = (file: File): Promise<{ dataUrl: string; mimeType: string }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = () => {
        img.onload = () => {
          let width = img.width;
          let height = img.height;
          const maxDim = 1280;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve({ dataUrl: reader.result as string, mimeType: file.type || 'image/jpeg' });
            return;
          }

          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);

          // Always produce a clean, standard JPEG
          const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          resolve({ dataUrl: jpegDataUrl, mimeType: 'image/jpeg' });
        };

        img.onerror = () => {
          // If canvas can't decode, resolve with raw data
          resolve({ dataUrl: reader.result as string, mimeType: file.type || 'image/jpeg' });
        };

        img.src = reader.result as string;
      };

      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.readAsDataURL(file);
    });
  };

  // Handle file selection
  const processFile = async (file: File) => {
    setErrorMessage(null);

    // Validate size before compression
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setErrorMessage('Please upload an image smaller than 25 MB.');
      return;
    }

    setFileName(file.name);
    setFileSize((file.size / (1024 * 1024)).toFixed(2) + ' MB');

    try {
      const optimized = await optimizeImage(file);
      setSelectedImage(optimized.dataUrl);
      setSelectedMimeType(optimized.mimeType);
      setScanStage('idle');
      setAnalysisResult(null);
    } catch {
      setErrorMessage('Failed to read the image file. Please try another image.');
    }
  };

  // Drag & drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  // Rasterize SVG data URLs to clean PNG for vision AI
  const rasterizeSvgToPng = (svgDataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 600;
          canvas.height = 600;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 600, 600);
            ctx.drawImage(img, 0, 0, 600, 600);
            resolve(canvas.toDataURL('image/png'));
            return;
          }
        } catch (e) {
          console.warn('Canvas rasterization failed:', e);
        }
        resolve(svgDataUrl);
      };
      img.onerror = () => resolve(svgDataUrl);
      img.src = svgDataUrl;
    });
  };

  // Preset sample click
  const handleSelectSample = async (sample: SampleItem) => {
    setErrorMessage(null);
    setFileName(`${sample.name}.png`);
    setFileSize('Standard Target');
    setSelectedMimeType('image/png');
    setScanStage('idle');
    setAnalysisResult(null);

    try {
      const pngData = await rasterizeSvgToPng(sample.dataUrl);
      setSelectedImage(pngData);
    } catch {
      setSelectedImage(sample.dataUrl);
    }
  };

  // Clear current image
  const handleRemove = () => {
    setSelectedImage(null);
    setFileName('');
    setFileSize('');
    setAnalysisResult(null);
    setScanStage('idle');
    setErrorMessage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  // Trigger analysis
  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setScanStage('analyzing');
    setErrorMessage(null);
    setAnalysisProgressStep(1);

    // Staged progress ticker
    const timer1 = setTimeout(() => setAnalysisProgressStep(2), 600);
    const timer2 = setTimeout(() => setAnalysisProgressStep(3), 1300);
    const timer3 = setTimeout(() => setAnalysisProgressStep(4), 2000);

    try {
      let imagePayload = selectedImage;
      let mimePayload = selectedMimeType;

      if (imagePayload.startsWith('data:image/svg+xml')) {
        imagePayload = await rasterizeSvgToPng(imagePayload);
        mimePayload = 'image/png';
      }

      const result = await wasteAnalyzer.analyzeImage(imagePayload, mimePayload);
      setAnalysisProgressStep(4);
      setAnalysisResult(result);
      setScanStage('complete');
    } catch (err: any) {
      console.error('Analysis error:', err);
      setScanStage('error');
      const errStr = err?.message || '';
      if (errStr.includes('smaller than 10 MB') || errStr.includes('smaller than 25 MB')) {
        setErrorMessage('Please upload an image smaller than 25 MB.');
      } else if (errStr.includes('JPG, PNG')) {
        setErrorMessage('Please upload a JPG, PNG, JPEG, or WEBP image.');
      } else if (errStr.includes('Failed to fetch') || errStr.includes('NetworkError')) {
        setErrorMessage('Unable to connect to the analysis service. Please check your network connection.');
      } else if (errStr.includes('high model demand') || errStr.includes('503')) {
        setErrorMessage('EcoSort AI model is currently under high demand. Please click "Retry" below to analyze again.');
      } else {
        setErrorMessage(errStr || 'EcoSort AI is temporarily unavailable. Try again or search manually.');
      }
    } finally {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    }
  };

  // Steps definition for analysis loader
  const progressSteps = [
    { label: 'Image received and decoded', stepNum: 1 },
    { label: 'Identifying object & materials', stepNum: 2 },
    { label: 'Determining waste category & toxicity', stepNum: 3 },
    { label: 'Preparing safety & disposal guidance', stepNum: 4 },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Title & Intro */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200/60">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Real-time Vision Recognition</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          AI Waste Scanner
        </h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Upload a photo or take a picture of an item to identify its waste category and get responsible disposal guidance.
        </p>
      </div>

      {/* Hidden Inputs */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/jpeg,image/png,image/webp,image/jpg"
        className="hidden"
      />
      <input
        type="file"
        ref={cameraInputRef}
        onChange={handleFileInputChange}
        accept="image/*"
        capture="environment"
        className="hidden"
      />

      {/* Error alert if present */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              <div>
                <p className="font-bold text-rose-950 text-sm">Notice</p>
                <p className="mt-0.5 text-xs sm:text-sm text-rose-800">{errorMessage}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {selectedImage && (
                  <button
                    type="button"
                    onClick={handleAnalyze}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retry Analysis</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onSearchItem('')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-rose-200 text-rose-800 hover:bg-rose-100 text-xs font-semibold transition-colors"
                >
                  <Search className="w-3.5 h-3.5 text-rose-600" />
                  <span>Search Database Instead</span>
                </button>
              </div>
            </div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-rose-400 hover:text-rose-700 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Active State Viewport: Scanner / Loading / Result */}
      {scanStage === 'complete' && analysisResult ? (
        <AnalysisResult
          analysis={analysisResult}
          imagePreview={selectedImage}
          onScanAnother={handleRemove}
          onSearchItem={onSearchItem}
          onExploreCategory={onExploreCategory}
        />
      ) : scanStage === 'analyzing' ? (
        /* Loading Card */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center max-w-xl mx-auto">
          {/* Circular Pulse Graphic */}
          <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-75" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
              <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            EcoSort AI is analyzing your item...
          </h2>
          <p className="text-sm text-slate-500 mt-1 mb-8">
            Extracting visual signatures and matching environmental disposal standards.
          </p>

          {/* Stepped progress indicators */}
          <div className="space-y-3.5 text-left max-w-sm mx-auto">
            {progressSteps.map((step) => {
              const isDone = analysisProgressStep > step.stepNum;
              const isCurrent = analysisProgressStep === step.stepNum;

              return (
                <div
                  key={step.stepNum}
                  className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                    isDone
                      ? 'text-emerald-800 font-medium'
                      : isCurrent
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-400 font-normal'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 transition-colors ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : isCurrent
                        ? 'bg-emerald-100 text-emerald-700 ring-2 ring-emerald-500'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {isDone ? (
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    ) : isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    ) : (
                      <span>○</span>
                    )}
                  </div>
                  <span>{step.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Images are analyzed ephemerally and never stored.</span>
          </div>
        </div>
      ) : !selectedImage ? (
        /* Upload Area */
        <div className="space-y-8">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer relative rounded-2xl border-2 border-dashed p-8 sm:p-14 text-center transition-all bg-white hover:border-emerald-500 hover:bg-emerald-50/20 group ${
              isDragging
                ? 'border-emerald-500 bg-emerald-50/40 ring-4 ring-emerald-500/10'
                : 'border-slate-300 shadow-sm'
            }`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 group-hover:bg-emerald-100 transition-transform">
              <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Upload an image of your waste item
            </h3>
            <p className="mt-1.5 text-sm text-slate-500 max-w-sm mx-auto">
              Drag and drop an image here or choose a file from your device.
            </p>

            {/* Action Buttons */}
            <div
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <FileImage className="w-4 h-4" />
                <span>Upload Image</span>
              </button>

              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <Camera className="w-4 h-4 text-emerald-600" />
                <span>Take Photo</span>
              </button>
            </div>

            {/* Spec metadata */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span>Formats: JPG, JPEG, PNG, WEBP</span>
              <span>&middot;</span>
              <span>Max size: 10 MB</span>
            </div>
          </div>

          {/* Quick Preset Samples */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Or test immediately with a sample item
                </h4>
                <p className="text-xs text-slate-500">
                  Select an everyday object to see how EcoSort classifies and provides disposal steps:
                </p>
              </div>
              <span className="text-[11px] text-emerald-700 font-medium bg-emerald-100/60 px-2 py-0.5 rounded self-start sm:self-auto">
                1-Click Testing
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {SAMPLE_ITEMS.slice(0, 8).map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className="p-3 text-left rounded-xl bg-white border border-slate-200/80 hover:border-emerald-400 hover:shadow-sm transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <p className="text-xs font-semibold text-slate-900 group-hover:text-emerald-700 truncate">
                    {sample.name}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {sample.category}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Image Preview Card */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-center">
            {/* Image Preview Box */}
            <div className="w-full md:w-1/2 aspect-square max-h-[380px] bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200 flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Waste item upload preview"
                className="w-full h-full object-contain p-2"
              />
              <button
                onClick={handleRemove}
                className="absolute top-3 right-3 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                title="Remove image"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Preview Information & Actions */}
            <div className="w-full md:w-1/2 space-y-5">
              <div>
                <span className="text-xs uppercase font-semibold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50">
                  Ready for AI Analysis
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                  Verify Item Image
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Ensure the item is clearly visible in good lighting without severe obstruction for maximum classification accuracy.
                </p>
              </div>

              {/* File details */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/60 text-xs text-slate-600 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target File:</span>
                  <span className="font-medium text-slate-800 truncate max-w-[180px]">
                    {fileName || 'Captured photo'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">File Size:</span>
                  <span className="font-medium text-slate-800">{fileSize || 'Standard'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="font-semibold text-emerald-600">Pending User Execution</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleAnalyze}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-base shadow-sm shadow-emerald-700/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  <Sparkles className="w-5 h-5 text-emerald-200" />
                  <span>Analyze Image</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Choose Another</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleRemove}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
