import { useEffect, useRef, useState } from 'react';
import exampleImage from 'figma:asset/547103ab5f82e3d74631b28a3f1e94ef67d6cb26.png';
import { Crosshair, Info } from 'lucide-react';

interface PixelData {
  x: number;
  y: number;
  r: number;
  g: number;
  b: number;
  a: number;
  hex: string;
}

export function PixelMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pixelData, setPixelData] = useState<PixelData | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const imageDataRef = useRef<ImageData | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;
      setImageDimensions({ width: img.width, height: img.height });

      // Draw image on canvas
      ctx.drawImage(img, 0, 0);

      // Store image data for pixel reading
      imageDataRef.current = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setImageLoaded(true);
    };

    img.src = exampleImage;
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !imageDataRef.current) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    // Ensure coordinates are within bounds
    if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
      const index = (y * canvas.width + x) * 4;
      const data = imageDataRef.current.data;

      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const a = data[index + 3];

      const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

      setPixelData({ x, y, r, g, b, a, hex });
    }
  };

  const handleMouseLeave = () => {
    setPixelData(null);
  };

  return (
    <div className="space-y-6">
      {/* Info Panel */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-blue-400" />
          <h2 className="text-white">Pixel Information</h2>
        </div>
        
        {imageLoaded && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-slate-900/50 rounded p-3">
              <div className="text-slate-400 text-sm">Image Size</div>
              <div className="text-white">{imageDimensions.width} × {imageDimensions.height}px</div>
            </div>
            <div className="bg-slate-900/50 rounded p-3">
              <div className="text-slate-400 text-sm">Total Pixels</div>
              <div className="text-white">{(imageDimensions.width * imageDimensions.height).toLocaleString()}</div>
            </div>
            <div className="bg-slate-900/50 rounded p-3">
              <div className="text-slate-400 text-sm">Zoom Level</div>
              <div className="text-white">{zoom}x</div>
            </div>
            <div className="bg-slate-900/50 rounded p-3">
              <div className="text-slate-400 text-sm">Status</div>
              <div className="text-green-400">Interactive</div>
            </div>
          </div>
        )}

        {pixelData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-blue-400" />
                <span className="text-slate-400">Position:</span>
                <span className="text-white">X: {pixelData.x}, Y: {pixelData.y}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Red:</span>
                  <span className="text-red-400">{pixelData.r}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Green:</span>
                  <span className="text-green-400">{pixelData.g}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Blue:</span>
                  <span className="text-blue-400">{pixelData.b}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Alpha:</span>
                  <span className="text-white">{pixelData.a}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-slate-400 mb-2">Color Preview:</div>
                <div 
                  className="w-full h-24 rounded border-2 border-slate-600"
                  style={{ backgroundColor: pixelData.hex }}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-400">HEX:</span>
                <code className="bg-slate-900 px-3 py-1 rounded text-white">{pixelData.hex}</code>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-slate-400">RGB:</span>
                <code className="bg-slate-900 px-3 py-1 rounded text-white">
                  rgb({pixelData.r}, {pixelData.g}, {pixelData.b})
                </code>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400">
            {imageLoaded ? 'Hover over the image to see pixel information' : 'Loading image...'}
          </div>
        )}
      </div>

      {/* Canvas Container */}
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white">Pixel Map Canvas</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setZoom(Math.max(0.5, zoom - 0.5))}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
            >
              Zoom Out
            </button>
            <button
              onClick={() => setZoom(1)}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setZoom(Math.min(10, zoom + 0.5))}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors"
            >
              Zoom In
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="overflow-auto bg-slate-900 rounded-lg p-4"
          style={{ maxHeight: '600px' }}
        >
          <div style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}>
            <canvas
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="cursor-crosshair border border-slate-600"
              style={{ 
                imageRendering: zoom > 2 ? 'pixelated' : 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>

        {pixelData && (
          <div className="mt-4 text-center text-sm text-slate-400">
            Currently inspecting pixel at ({pixelData.x}, {pixelData.y})
          </div>
        )}
      </div>
    </div>
  );
}
