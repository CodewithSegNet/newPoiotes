import { ArrowRight, Mail, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-[#282323] via-[#1a1818] to-[#282323]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[rgba(253,198,10,0.1)] px-6 py-2 rounded-full mb-8">
          <span>💬</span>
          <span className="text-[#fdc60a]">Let's Talk</span>
        </div>

        <h2 className="text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-[#818181] mb-12 max-w-2xl mx-auto">
          Let's discuss your project and discover how we can help transform your vision into a powerful software solution that drives your business forward.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <button className="group flex items-center gap-2 bg-[#ff6730] hover:bg-[#ff7845] text-white px-8 py-4 rounded-full transition-all duration-300">
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center gap-2 bg-[#fdc60a] hover:bg-[#fdd040] text-[#282323] px-8 py-4 rounded-full transition-all duration-300">
            <span>View Portfolio</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-[#1a1818] rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-[rgba(253,198,10,0.1)] rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-[#fdc60a]" />
            </div>
            <div className="text-left">
              <div className="text-[#818181] text-sm mb-1">Email Us</div>
              <div className="text-white">hello@poietes.dev</div>
            </div>
          </div>

          <div className="bg-[#1a1818] rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-[rgba(255,103,48,0.1)] rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#ff6730]" />
            </div>
            <div className="text-left">
              <div className="text-[#818181] text-sm mb-1">Call Us</div>
              <div className="text-white">+1 (555) 123-4567</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#818181]/20">
          <p className="text-[#818181] text-sm">
            © 2025 Poietes. Building software solutions for businesses that think ahead.
          </p>
        </div>
      </div>
    </section>
  );
}
