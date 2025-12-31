import svgPaths from "./svg-0mwn22yd52";
import clsx from "clsx";
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center px-[22.931px] py-[11.465px] relative rounded-[76.435px] shrink-0", additionalClassNames)}>
      <p className="font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10.701px] text-nowrap text-white">{text}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(253,198,10,0.1)] content-stretch flex flex-col items-center justify-center px-[6.115px] py-[4.586px] relative rounded-[76.435px] shrink-0">
      <p className="font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fdc60a] text-[9.172px] text-center text-nowrap">🎉 New</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[9.172px] items-center relative shrink-0">
      <Frame2 />
      <p className="font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#fdc60a] text-[9.172px] text-center text-nowrap">Poietes is here with the best properties listings 🔥</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[9.172px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.1722 9.1722">
        <g id="Frame">
          <path d={svgPaths.p374c1a80} fill="var(--fill-0, #FDC60A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[7.644px] items-center relative shrink-0">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(253,198,10,0.02)] content-stretch flex flex-col items-start overflow-clip px-[5.35px] py-[6.879px] relative rounded-[26.752px] shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[7.644px] items-center relative shrink-0">
      <Text text="See all Services" additionalClassNames="bg-[#fdc60a]" />
      <Text text="Make Enquiries" additionalClassNames="bg-[#ff6730]" />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[19.109px] items-center relative size-full">
      <Frame4 />
      <p className="font-['Cabinet_Grotesk:Regular',sans-serif] leading-[53.505px] min-w-full not-italic relative shrink-0 text-[#282323] text-[0px] text-[48.918px] text-center w-[min-content]">
        <span className="text-[#ff6730]">Building Softwares</span>
        <span>{` for Businesses That Thinks Ahead of Your Competition `}</span>
      </p>
      <p className="font-['Cabinet_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#818181] text-[12.23px] w-[477.447px]">Premium software solutions meticulously crafted for visionary businesses that demand excellence in every pixel, every interaction, every outcome.</p>
      <Frame5 />
    </div>
  );
}