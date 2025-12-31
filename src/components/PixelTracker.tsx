import { useEffect, useState, useRef } from 'react';

interface PixelCell {
  x: number;
  y: number;
  color: string;
  revealed: boolean;
}

interface PixelTrackerProps {
  containerRef?: React.RefObject<HTMLElement>;
}

export function PixelTracker({ containerRef }: PixelTrackerProps = {}) {
  const [pixels, setPixels] = useState<PixelCell[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Responsive pixels per row: 7 on mobile, 13 on desktop
  const getPixelsPerRow = () => {
    return dimensions.width < 768 ? 6 : 13;
  };
  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      } else {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [containerRef]);

  useEffect(() => {
    const PIXELS_PER_ROW = getPixelsPerRow();
    const PIXEL_SIZE = Math.ceil(dimensions.width / PIXELS_PER_ROW);
    
    // Initialize grid based on container or viewport size
    const cols = PIXELS_PER_ROW;
    const rows = Math.ceil(dimensions.height / PIXEL_SIZE);
    
    const initialPixels: PixelCell[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        initialPixels.push({
          x,
          y,
          color: 'transparent',
          revealed: false
        });
      }
    }
    setPixels(initialPixels);
  }, [dimensions]);

  const capturePageColors = () => {
    // We'll sample colors on mouse move instead of pre-capturing
    // This is more efficient and accurate
  };

  const getColorAtPosition = (clientX: number, clientY: number): string => {
    const element = document.elementFromPoint(clientX, clientY);
    if (!element) return '#ffffff';

    const computedStyle = window.getComputedStyle(element);
    const bgColor = computedStyle.backgroundColor;
    const color = computedStyle.color;

    // Use background color if it's not transparent, otherwise use text color
    const colorToParse = bgColor !== 'rgba(0, 0, 0, 0)' ? bgColor : color;
    const rgbMatch = colorToParse.match(/\d+/g);
    
    if (rgbMatch && rgbMatch.length >= 3) {
      const r = parseInt(rgbMatch[0]);
      const g = parseInt(rgbMatch[1]);
      const b = parseInt(rgbMatch[2]);
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    
    return '#ffffff';
  };

  const handlePixelHover = (pixelX: number, pixelY: number, clientX: number, clientY: number) => {
    const color = getColorAtPosition(clientX, clientY);
    
    // Update the specific pixel to be revealed
    setPixels(prev => prev.map(p => {
      if (p.x === pixelX && p.y === pixelY) {
        return { ...p, color, revealed: true };
      }
      return p;
    }));
  };

  const handlePixelLeave = (pixelX: number, pixelY: number) => {
    // Fade out the specific pixel
    setPixels(prev => prev.map(p => {
      if (p.x === pixelX && p.y === pixelY) {
        return { ...p, revealed: false };
      }
      return p;
    }));
  };

  const handleMouseLeave = () => {
    // No longer needed
  };

  // Determine pixel color scheme based on column position
  const getPixelColorScheme = (pixel: PixelCell) => {
    const PIXELS_PER_ROW = getPixelsPerRow();
    const midpoint = Math.floor(PIXELS_PER_ROW / 2);
    // Left half gets orange, right half gets gray
    return pixel.x < midpoint ? 'rgba(255, 103, 48, 0.2)' : 'rgba(156, 163, 175, 0.4)';
  };

  // Calculate diagonal animation delay based on position
  const getAnimationDelay = (pixel: PixelCell) => {
    const PIXELS_PER_ROW = getPixelsPerRow();
    const midpoint = Math.floor(PIXELS_PER_ROW / 2);
    
    if (pixel.x < midpoint) {
      // Left half (orange): diagonal from bottom-right to top-left
      const distanceFromRight = midpoint - 1 - pixel.x;
      const diagonal = distanceFromRight + pixel.y;
      return diagonal * 20; // 20ms per diagonal step
    } else {
      // Right half (gray): diagonal from bottom-left to top-right
      const distanceFromLeft = pixel.x - midpoint;
      const diagonal = distanceFromLeft + pixel.y;
      return diagonal * 20; // 20ms per diagonal step
    }
  };

  // Get animation direction based on position
  const getAnimationTransform = (pixel: PixelCell, revealed: boolean) => {
    const PIXELS_PER_ROW = getPixelsPerRow();
    const midpoint = Math.floor(PIXELS_PER_ROW / 2);
    
    if (pixel.x < midpoint) {
      // Left half: slide from bottom-right
      return revealed ? 'translate(0%, 0%)' : 'translate(100%, 100%)';
    } else {
      // Right half: slide from bottom-left
      return revealed ? 'translate(0%, 0%)' : 'translate(-100%, 100%)';
    }
  };

  const PIXELS_PER_ROW = getPixelsPerRow();
  const PIXEL_SIZE = Math.ceil(dimensions.width / PIXELS_PER_ROW);

  return (
    <>
      {/* Pixel Grid Overlay */}
      <div 
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${PIXELS_PER_ROW}, ${PIXEL_SIZE}px)`,
          gridTemplateRows: `repeat(${Math.ceil(dimensions.height / PIXEL_SIZE)}, ${PIXEL_SIZE}px)`,
        }}
      >
        {pixels.map((pixel, index) => {
          const pixelColorScheme = getPixelColorScheme(pixel);
          const animationDelay = getAnimationDelay(pixel);
          
          return (
            <div
              key={index}
              className="pointer-events-auto bg-white relative overflow-hidden"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                handlePixelHover(pixel.x, pixel.y, rect.left + PIXEL_SIZE / 2, rect.top + PIXEL_SIZE / 2);
              }}
              onMouseLeave={() => handlePixelLeave(pixel.x, pixel.y)}
            >
              {/* Animated color reveal with mirrored diagonal animations */}
              <div
                className="absolute inset-0 transition-all duration-[800ms] ease-out"
                style={{
                  backgroundColor: pixelColorScheme,
                  transform: getAnimationTransform(pixel, pixel.revealed),
                  opacity: pixel.revealed ? 1 : 0,
                  transitionDelay: pixel.revealed ? `${animationDelay}ms` : '0ms',
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}