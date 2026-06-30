export function GeometricArt() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#fdfdfd]" aria-hidden="true">
      {/* 1. Isometric Background Grid */}
      <svg className="absolute w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="iso-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 0 32 L 32 0 L 64 32 L 32 64 Z" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#iso-grid)" />
      </svg>

      {/* 2. Hexagonal Structural Overlay (Tech/Engineering motif) */}
      <svg className="absolute w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex-grid" width="60" height="103.923" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
            <path d="M30 0l25.98 15v30L30 60 4.02 45V15z" fill="none" stroke="#1a1a1a" strokeWidth="1" />
            <path d="M30 103.923l25.98-15v-30l-25.98-15-25.98 15v30z" fill="none" stroke="#1a1a1a" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>

      {/* 3. Gradient Meshes — warm corporate tones */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[160px] opacity-[0.06]"
        style={{ background: 'conic-gradient(from 180deg, #FF6730, #fdc60a, transparent, transparent)' }}
      />
      <div
        className="absolute -bottom-1/4 -left-1/4 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #FF6730 0%, transparent 70%)' }}
      />

      {/* 4. Precision lines & Data Waves */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        {/* Horizontal datum line */}
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="8 16" />
        {/* Vertical datum line */}
        <line x1="720" y1="0" x2="720" y2="900" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="8 16" />
        {/* Diagonal construction line */}
        <line x1="0" y1="900" x2="1440" y2="0" stroke="#1a1a1a" strokeWidth="0.3" strokeDasharray="4 12" />

        {/* Data sine waves */}
        <path d="M 0 600 Q 360 400 720 600 T 1440 600" stroke="#1a1a1a" strokeWidth="0.5" fill="none" strokeDasharray="2 4" />
        <path d="M 0 620 Q 360 420 720 620 T 1440 620" stroke="#FF6730" strokeWidth="0.3" fill="none" opacity="0.6" />
      </svg>

      {/* 5. Topographic Elevation Lines (Growth motif) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <path d="M -100 800 Q 200 700 500 850 T 1500 750" stroke="#1a1a1a" strokeWidth="0.5" />
        <path d="M -100 820 Q 200 720 500 870 T 1500 770" stroke="#1a1a1a" strokeWidth="0.5" />
        <path d="M -100 840 Q 200 740 500 890 T 1500 790" stroke="#1a1a1a" strokeWidth="0.5" />
        <path d="M 1000 -50 Q 1200 150 1500 50" stroke="#FF6730" strokeWidth="0.5" strokeDasharray="4 8" />
        <path d="M 1020 -50 Q 1220 150 1500 70" stroke="#1a1a1a" strokeWidth="0.5" />
      </svg>

      {/* 6. Wireframe Globe/Nodes (Data Intelligence motif) */}
      <svg className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02]" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="250" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        <ellipse cx="300" cy="300" rx="250" ry="80" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        <ellipse cx="300" cy="300" rx="80" ry="250" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        <line x1="50" y1="300" x2="550" y2="300" stroke="#1a1a1a" strokeWidth="1" />
        <line x1="300" y1="50" x2="300" y2="550" stroke="#1a1a1a" strokeWidth="1" />
      </svg>

      {/* 7. Radar/Compass overlay on globe */}
      <svg className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[700px] h-[700px] opacity-[0.025]" viewBox="0 0 700 700">
        <circle cx="350" cy="350" r="320" fill="none" stroke="#FF6730" strokeWidth="0.5" strokeDasharray="4 12" />
        <circle cx="350" cy="350" r="340" fill="none" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="1 6" />
        {/* Radial Spokes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="350" y1="350"
            x2={350 + 340 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={350 + 340 * Math.sin((i * 30 * Math.PI) / 180)}
            stroke="#1a1a1a" strokeWidth="0.3" strokeDasharray="2 8"
          />
        ))}
      </svg>

      {/* 8. Node Graph Scatter / Connections */}
      <svg className="absolute top-[10%] right-[10%] w-[400px] h-[400px] opacity-[0.035]" viewBox="0 0 400 400">
        <circle cx="50" cy="50" r="4" fill="#FF6730" />
        <circle cx="150" cy="120" r="3" fill="#1a1a1a" />
        <circle cx="280" cy="80" r="5" fill="#fdc60a" />
        <circle cx="350" cy="220" r="3" fill="#1a1a1a" />
        <circle cx="100" cy="280" r="4" fill="#1a1a1a" />
        <circle cx="220" cy="350" r="3" fill="#FF6730" />

        <line x1="50" y1="50" x2="150" y2="120" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="150" y1="120" x2="280" y2="80" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="280" y1="80" x2="350" y2="220" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="150" y1="120" x2="100" y2="280" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="100" y1="280" x2="220" y2="350" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="220" y1="350" x2="350" y2="220" stroke="#1a1a1a" strokeWidth="0.5" />
      </svg>

      {/* 9. Measurement Scales */}
      <svg className="absolute top-1/4 right-8 w-8 h-[50vh] opacity-[0.05]" viewBox="0 0 32 600">
        <line x1="16" y1="0" x2="16" y2="600" stroke="#1a1a1a" strokeWidth="1" />
        {Array.from({ length: 30 }).map((_, i) => (
          <line key={i} x1={i % 5 === 0 ? "8" : "12"} y1={i * 20} x2="16" y2={i * 20} stroke="#1a1a1a" strokeWidth="1" />
        ))}
      </svg>
      <svg className="absolute bottom-8 left-1/4 h-8 w-[30vw] opacity-[0.05]" viewBox="0 0 600 32">
        <line x1="0" y1="16" x2="600" y2="16" stroke="#1a1a1a" strokeWidth="1" />
        {Array.from({ length: 30 }).map((_, i) => (
          <line key={i} x1={i * 20} y1={i % 5 === 0 ? "8" : "12"} x2={i * 20} y2="16" stroke="#1a1a1a" strokeWidth="1" />
        ))}
      </svg>

      {/* 10. Architectural Corner Brackets */}
      <svg className="absolute top-12 right-12 opacity-[0.08]" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <path d="M 120 0 L 120 120 L 0 120" stroke="#FF6730" strokeWidth="1.5" />
        <path d="M 100 0 L 100 100 L 0 100" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="2 4" />
      </svg>

      <svg className="absolute bottom-12 left-12 opacity-[0.08]" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <path d="M 0 120 L 0 0 L 120 0" stroke="#FF6730" strokeWidth="1.5" />
        <path d="M 20 120 L 20 20 L 120 20" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="2 4" />
      </svg>

      {/* 11. Tech Stack & Data Points */}
      <div className="absolute top-[20%] left-[25%] opacity-[0.08] text-[#1a1a1a] text-xs font-mono tracking-widest glow-tl transition-all duration-300 z-20">DEVOPS</div>
      <div className="absolute bottom-[25%] right-[20%] opacity-[0.08] text-[#1a1a1a] text-xs font-mono tracking-widest glow-br transition-all duration-300 z-20">FRONTEND</div>
      <div className="absolute top-[15%] right-[25%] opacity-[0.06] text-[#1a1a1a] text-[10px] font-mono tracking-widest transition-all duration-300 z-20">UX/UI</div>
      <div className="absolute bottom-[15%] left-[20%] opacity-[0.06] text-[#1a1a1a] text-[10px] font-mono tracking-widest transition-all duration-300 z-20">FIGMA</div>
      <div className="absolute top-[45%] left-[10%] opacity-[0.05] text-[#1a1a1a] text-[10px] font-mono tracking-widest transition-all duration-300 z-20">CI/CD</div>
      <div className="absolute top-[60%] right-[12%] opacity-[0.05] text-[#1a1a1a] text-[10px] font-mono tracking-widest transition-all duration-300 z-20">BACKEND</div>
      <div className="absolute top-[80%] left-[40%] opacity-[0.04] text-[#1a1a1a] text-[10px] font-mono tracking-widest transition-all duration-300 z-20">MONITORING</div>
      <div className="absolute top-[35%] right-[35%] opacity-[0.15] text-[#FF6730] text-lg font-light leading-none">+</div>
      <div className="absolute bottom-[20%] left-[35%] opacity-[0.1] text-[#1a1a1a] text-lg font-light leading-none">+</div>
      <div className="absolute top-[55%] left-[8%] opacity-[0.12] text-[#fdc60a] text-lg font-light leading-none">+</div>

      <style>
        {`
          @keyframes torch-sweep {
            0% { transform: translate3d(20vw, 82vh, 0); }
            25% { transform: translate3d(25vw, 20vh, 0); }
            50% { transform: translate3d(80vw, 15vh, 0); }
            75% { transform: translate3d(80vw, 75vh, 0); }
            100% { transform: translate3d(20vw, 82vh, 0); }
          }
          @keyframes text-glow-bl {
            0%, 100% { opacity: 0.95; text-shadow: 0 0 12px rgba(255,103,48,0.8); color: #FF6730; }
            10%, 90% { opacity: 0.08; text-shadow: none; color: #1a1a1a; }
          }
          @keyframes text-glow-tl {
            0%, 15%, 35%, 100% { opacity: 0.08; text-shadow: none; color: #1a1a1a; }
            25% { opacity: 0.95; text-shadow: 0 0 12px rgba(255,103,48,0.8); color: #FF6730; }
          }
          @keyframes text-glow-tr {
            0%, 40%, 60%, 100% { opacity: 0.08; text-shadow: none; color: #1a1a1a; }
            50% { opacity: 0.95; text-shadow: 0 0 12px rgba(255,103,48,0.8); color: #FF6730; }
          }
          @keyframes text-glow-br {
            0%, 65%, 85%, 100% { opacity: 0.08; text-shadow: none; color: #1a1a1a; }
            75% { opacity: 0.95; text-shadow: 0 0 12px rgba(255,103,48,0.8); color: #FF6730; }
          }
          .torch-light {
            animation: torch-sweep 20s ease-in-out infinite;
          }
          .glow-bl { animation: text-glow-bl 20s ease-in-out infinite; }
          .glow-tl { animation: text-glow-tl 20s ease-in-out infinite; }
          .glow-tr { animation: text-glow-tr 20s ease-in-out infinite; }
          .glow-br { animation: text-glow-br 20s ease-in-out infinite; }
        `}
      </style>

      {/* 12. Services Technical Readouts */}
      <div className="absolute top-[15%] right-[20%] opacity-[0.08] text-[#1a1a1a] text-[10px] font-mono leading-relaxed tracking-wider glow-tr transition-all duration-300 z-20">
        // CORE_SERVICES<br />
        ENG.SOFTWARE_DEV<br />
        STR.GROWTH_SYSTEMS<br />
        DAT.ANALYTICS_OPT
      </div>
      <div className="absolute bottom-[18%] left-[20%] opacity-[0.08] text-[#1a1a1a] text-[10px] font-mono leading-relaxed tracking-wider glow-bl transition-all duration-300 z-20">
        // CAPABILITIES<br />
        APP_BUILD: TRUE<br />
        SEO_OPT: ACTIVE<br />
        CONV_RATE: MAX
      </div>

      {/* Animated Torch Light */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none torch-light z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255,103,48,0.15) 0%, rgba(253,198,10,0.05) 40%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* 13. Concentric Rings (Targeting / Focus motif) */}
      <svg className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] opacity-[0.015]" viewBox="0 0 800 800">
        <circle cx="400" cy="400" r="200" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="250" fill="none" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="400" cy="400" r="300" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="350" fill="none" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="1 8" />
        <circle cx="400" cy="400" r="400" fill="none" stroke="#FF6730" strokeWidth="0.5" strokeDasharray="20 10" />
      </svg>

      {/* 14. Data Pipeline Traces (Circuit motif) */}
      <svg className="absolute top-[30%] right-0 w-[400px] h-[300px] opacity-[0.03]" viewBox="0 0 400 300">
        <path d="M 400 50 L 300 50 L 250 100 L 100 100" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        <circle cx="100" cy="100" r="3" fill="#FF6730" />

        <path d="M 400 80 L 320 80 L 280 120 L 50 120" fill="none" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="120" r="2" fill="#1a1a1a" />

        <path d="M 400 200 L 250 200 L 200 150 L 80 150" fill="none" stroke="#fdc60a" strokeWidth="1" />
        <circle cx="80" cy="150" r="3" fill="#fdc60a" />
      </svg>

      {/* 15. Abstract Cross Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cross-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 38 40 L 42 40 M 40 38 L 40 42" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cross-grid)" />
      </svg>
    </div>
  );
}
