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
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
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

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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

  // Calculate animation delay based on distance from center
  const getAnimationDelay = (pixel: PixelCell) => {
    const PIXELS_PER_ROW = getPixelsPerRow();
    const rows = Math.ceil(dimensions.height / Math.ceil(dimensions.width / PIXELS_PER_ROW));
    
    // Calculate center of the grid
    const centerX = PIXELS_PER_ROW / 2;
    const centerY = rows / 2;
    
    // Calculate distance from center using Euclidean distance
    const distance = Math.sqrt(
      Math.pow(pixel.x - centerX, 2) + 
      Math.pow(pixel.y - centerY, 2)
    );
    
    return distance * 30; // 30ms per unit of distance
  };

  // Get animation direction - scale from center
  const getAnimationTransform = (pixel: PixelCell, revealed: boolean) => {
    return revealed ? 'scale(1)' : 'scale(0)';
  };

  const PIXELS_PER_ROW = getPixelsPerRow();
  const PIXEL_SIZE = Math.ceil(dimensions.width / PIXELS_PER_ROW);

  return (
    <>
      {/* Cursor Pulse Animation */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative w-8 h-8">
          {/* Pulsing ring */}
          <div
            className="absolute inset-0 rounded-full bg-orange-500 opacity-40 animate-ping"
            style={{
              animationDuration: '1.5s',
            }}
          />
          {/* Static center dot */}
          <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-orange-500" />
        </div>
      </div>

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
              {/* Animated color reveal from center outward */}
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