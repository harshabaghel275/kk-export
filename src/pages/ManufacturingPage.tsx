import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  Factory,
  Cpu,
  Gauge,
  Microscope,
  Cog,
  Droplets,
  Scissors,
  PackageCheck,
  Truck,
  CheckCircle2,
  Zap,
} from 'lucide-react';

function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cloud ${className}`}>
      <div className="absolute inset-0 bg-weave opacity-40" />
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

const processSteps = [
  { step: '01', title: 'Fabric & Raw Material Sourcing', desc: 'Premium fabrics sourced from certified mills with quality verification and compliance standards..', icon: PackageCheck },
  { step: '02', title: 'Product Development & Sampling', desc: 'Tech pack review, prototype development, fit samples, and buyer approval before bulk production..', icon: Scissors },
  { step: '03', title: 'Bulk Production Planning', desc: 'Capacity allocation, production scheduling, and factory coordination for timely execution..', icon: Factory },
  { step: '04', title: 'Stitching & Finishing', desc: 'Precision stitching, washing, ironing, trimming, and final finishing as per export standards.', icon: Droplets },
  { step: '05', title: 'Branding & Customization', desc: 'Private labeling, embroidery, screen printing, packaging customization as per buyer requirement..', icon: Cog },
  { step: '06', title: 'Quality Inspection', desc: 'Multi-stage quality checks including inline inspection, final random inspection (AQL), and measurement verification.', icon: Microscope },
  { step: '07', title: 'Packaging & Shipment', desc: 'Export documentation, barcode tagging, custom packaging, and worldwide logistics coordination.', icon: Truck },
];

export function ManufacturingPage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/image/slider3.jpg" alt="Industrial production" className="w-full h-full object-cover" />
          <div className="absolute inset-0 " />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Advanced Apparel Sourcing & Production Network
            </h1>
            <p className="text-silver-dark text-lg leading-relaxed">
              KK Exports India operates through a strong network of certified garment manufacturing units across India. Our integrated sourcing and production ecosystem ensures high-quality apparel manufacturing with strict compliance, modern machinery, and efficient bulk order execution
            </p>
          </div>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="py-12 bg-white border-b border-cloud-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { value: '500K+', label: 'Garment Production Capacity (Monthly Units)', icon: Factory },
              { value: '350+', label: 'Associated Manufacturing Units', icon: Cog },
              { value: '3,500+', label: 'Skilled Workforce Across Partner Factories', icon: Gauge },
              { value: '24/7', label: 'Production Coordination & Monitoring', icon: Zap },
              { value: '99.2%', label: 'On-Time Delivery', icon: Truck },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <stat.icon className="w-6 h-6 text-charcoal mx-auto mb-2" />
                <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
                <p className="text-sm text-silver-dark">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
              End-to-End Manufacturing Workflow
            </h2>
            <p className="text-silver-darker max-w-2xl mx-auto">
              Our structured workflow ensures complete transparency and quality control from fabric sourcing to final shipment.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="bg-white rounded-xl p-6 lg:p-8 border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-4xl font-black text-cloud">{step.step}</span>
                    <div className="w-12 h-12 bg-cloud-light rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-charcoal" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-charcoal mb-2">{step.title}</h3>
                    <p className="text-silver-darker">{step.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-silver hidden md:block shrink-0 mt-3" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Facilities</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3">Global Manufacturing Locations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { location: 'Delhi, India', type: '', area: '', img: '/image/office1.png' },
              { location: 'Bhilwara, India', type: '', area: '',  img: '/image/office2.png' },
              { location: 'Noida, India', type: '', area: '',  img: '/image/office1.png' },
            ].map((facility) => (
              <div key={facility.location} className="bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
                <TexImg src={facility.img} alt={facility.location} className="w-full h-48" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal">{facility.location}</h3>
                  <p className="text-sm text-silver-dark font-medium mb-1">{facility.type}</p>
                  <p className="text-sm text-silver-darker mb-4">{facility.area}</p>
                  {/* <div className="space-y-1.5">
                    {facility.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-charcoal" />
                        <span className="text-sm text-silver-darker">{cap}</span>
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Technology & Compliance</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6">Modern, Transparent & Ethical Manufacturing</h2>
              <p className="text-silver-darker leading-relaxed mb-8">
                KK Exports India integrates modern production tracking systems and strict compliance monitoring to ensure global quality standards
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Digital Production Monitoring', desc: 'Real-time production updates and order tracking for buyers..' },
                  { title: 'Quality Management System', desc: 'AQL-based inspection process with export-grade standards..' },
                  { title: 'Compliance & Ethical Sourcing', desc: 'Partner factories follow social compliance, safe working conditions, and sustainable practices.' },
                  { title: 'Efficient Supply Chain Coordination', desc: 'Streamlined sourcing, manufacturing, and logistics management for seamless bulk execution..' },
                ].map((tech) => (
                  <div key={tech.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cloud rounded-full flex items-center justify-center mt-0.5 shrink-0">
                      <Cpu className="w-3.5 h-3.5 text-charcoal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal text-sm">{tech.title}</h4>
                      <p className="text-sm text-silver-darker">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <TexImg src="/image/techology.png" alt="Smart factory technology" className="w-full h-[400px] rounded-2xl" />
          </div>
        </div>
      </section>

      {/* CTA */}
     <section className="relative overflow-hidden">
  <div className="absolute inset-0">
    <img
      src={IMG.fabricTexture1}
      alt="Fabric texture"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-charcoal-dark/90" />
    <div className="absolute inset-0 bg-weave-dark" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
    
    <h2
      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Experience Our Quality Firsthand
    </h2>

    <p
      className="text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      Request a free fabric sample and evaluate our premium materials, 
      craftsmanship, and finishing standards before placing your bulk order.
      Our team will ensure quick dispatch with complete product details.
    </p>

    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
      
      {/* Primary Button */}
      <button
        onClick={() => navigate('contact')}
        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 group"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Request a Free Sample
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Secondary Button */}
      <button
        onClick={() => navigate('products')}
        className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all duration-300 hover:border-white/40 active:scale-95"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        View Our Products
      </button>

    </div>
  </div>
</section>

    </div>
  );
}
