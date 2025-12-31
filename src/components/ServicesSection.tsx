import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    title: 'Web Application Development',
    description: 'Custom web applications built with cutting-edge technologies like React, Next.js, and modern backend frameworks.',
    image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY2OTMyNzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#ff6730'
  },
  {
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.',
    image: 'https://images.unsplash.com/photo-1765728617352-895327fcf036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwd29ya3NwYWNlJTIwb2ZmaWNlfGVufDF8fHx8MTc2NjkzNDQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#fdc60a'
  },
  {
    title: 'Enterprise Systems',
    description: 'Scalable enterprise solutions designed to streamline operations and drive business transformation at scale.',
    image: 'https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY2OTM0NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: '#ff6730'
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgba(253,198,10,0.1)] px-6 py-2 rounded-full mb-6">
            <span>🚀</span>
            <span className="text-[#fdc60a]">Our Services</span>
          </div>
          <h2 className="text-[#282323] mb-4">Comprehensive Software Solutions</h2>
          <p className="text-[#818181] max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end software development services tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#282323] via-transparent to-transparent opacity-60" />
                <div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: service.color }}
                >
                  <span className="text-white text-xl">0{index + 1}</span>
                </div>
              </div>
              <h3 className="text-[#282323] mb-3">{service.title}</h3>
              <p className="text-[#818181] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
