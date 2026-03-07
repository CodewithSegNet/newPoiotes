import Arrow from '../assets/arrow.png';
import DottedLine from '../assets/dottedline.png';
import Mascot from '../assets/mascot.png';

export function CTAFooter() {
  return (
    <section className="flex items-center justify-between relative w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden">
      {/* Dotted line decoration — positioned as an arc from top-left toward right */}

      <div className="flex items-center justify-between w-full max-w-[1100px] mx-auto px-4 sm:px-6">

  <img
        src={DottedLine}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[22px] md:top-0 left-0 w-[100%] md:w-[100%] z-[1] select-none opacity-80"
      />

      {/* Arrow decoration — top-left */}
      <img
        src={Arrow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[8%] md:top-[2.5rem] md:left-[20%] w-24 md:w-36 lg:w-44 z-[2] select-none"
      />

      {/* Content wrapper — uses flex to vertically center the text */}
      <div className="relative z-[3] h-full mt-16 sm:mt-24 lg:mt-[8.5rem] px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Left — Text content, vertically centered */}
        <div className="flex flex-col gap-5 max-w-lg">
          <h2 className="font-cabinet leading-tight sm:!leading-[45px] lg:!leading-[55px] font-bold text-2xl sm:text-3xl md:text-[42px] lg:text-[48px] text-[#FF6730]">
            Get Poietes Into Your
            <br />
            Business Today
          </h2>

          <p className="text-black text-sm md:text-base leading-relaxed max-w-md">
            Whether you're looking for faster processing, enhanced security,
            or deeper insights into your revenue, Itump Pay is the partner you
            need to grow
          </p>

          <div className="mt-2">
            <a
              href="#"
              className="inline-block px-4 py-3 md:px-8 md:py-3 rounded-full bg-[#FF6730] text-white text-sm font-semibold
                         hover:bg-[#e55a28] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6730]/25
                         hover:-translate-y-0.5 active:translate-y-0"
            >
              Make Enquiries
            </a>
          </div>
        </div>
      </div>

      {/* Right — Mascot, pinned to bottom-right, independent of text flow */}
      <div className="absolute bottom-[-90px] sm:bottom-[-220px] md:bottom-[-250px] lg:bottom-[-280px] right-0 z-[2]">
        <img
          src={Mascot}
          alt="Poietes Mascot"
          className="w-[160px] sm:w-[340px] md:w-[400px] lg:w-[660px] max-w-full object-contain drop-shadow-2xl"
        />
      </div>


      </div>
    
    </section>
  );
}
