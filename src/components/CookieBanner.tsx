export function CookieBanner() {
  return (
    <div className="w-full bg-[rgba(255,103,48,1)] py-4 px-4">
      <p className="font-cabinet text-center text-white text-sm">
        This website uses cookies to enhance your experience.{' '}
        <a href="#" className="">
          Learn more here
        </a>
        {' '}
        <a href="#" className="font-montserrat font-bold hover:no-underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
