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
  { step: '01', title: 'Raw Material Sourcing', desc: 'Lorem ipsum dolor sit amet. Premium fibers and yarns sourced from certified global suppliers with full traceability.', icon: PackageCheck },
  { step: '02', title: 'Yarn Preparation', desc: 'Consectetur adipiscing elit. Advanced warping, sizing, and winding processes for optimal yarn performance.', icon: Scissors },
  { step: '03', title: 'Weaving & Knitting', desc: 'Sed do eiusmod tempor. State-of-the-art looms and knitting machines with Industry 4.0 integration.', icon: Factory },
  { step: '04', title: 'Dyeing & Finishing', desc: 'Ut enim ad minim veniam. Precision color matching and advanced chemical finishing processes.', icon: Droplets },
  { step: '05', title: 'Coating & Lamination', desc: 'Quis nostrud exercitation. PVC, PU, PTFE, and silicone coating with controlled thickness application.', icon: Cog },
  { step: '06', title: 'Quality Testing', desc: 'Ullamco laboris nisi. Multi-stage inspection with tensile, abrasion, flame, and chemical testing.', icon: Microscope },
  { step: '07', title: 'Packaging & Dispatch', desc: 'Duis aute irure dolor. Custom packaging with full documentation and worldwide logistics support.', icon: Truck },
];

export function ManufacturingPage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.production1} alt="Industrial production" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Advanced Apparel Sourcing & Production Network
            </h1>
            <p className="text-silver text-lg leading-relaxed">
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
              { location: 'Delhi, India', type: 'Headquarters & Primary Plant', area: '300,000 sq. ft.', capabilities: ['Weaving', 'Dyeing', 'Finishing', 'R&D Center'], img: IMG.production1 },
              { location: 'Bhilwara, India', type: 'Coating & Specialty Plant', area: '150,000 sq. ft.', capabilities: ['Coating', 'Lamination', 'Nonwoven', 'Testing Lab'], img: IMG.fabricTexture3 },
              { location: 'Noida, UK', type: 'European Operations Hub', area: '50,000 sq. ft.', capabilities: ['Finishing', 'Quality Control', 'Distribution', 'Custom Solutions'], img: IMG.wovenClose2 },
            ].map((facility) => (
              <div key={facility.location} className="bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
                <TexImg src={facility.img} alt={facility.location} className="w-full h-48" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal">{facility.location}</h3>
                  <p className="text-sm text-silver-dark font-medium mb-1">{facility.type}</p>
                  <p className="text-sm text-silver-darker mb-4">{facility.area}</p>
                  <div className="space-y-1.5">
                    {facility.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-charcoal" />
                        <span className="text-sm text-silver-darker">{cap}</span>
                      </div>
                    ))}
                  </div>
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
              <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Technology</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6">Industry 4.0 Enabled Manufacturing</h2>
              <p className="text-silver-darker leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our smart factory ecosystem integrates IoT sensors, AI-powered quality inspection, and real-time production monitoring.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'AI Quality Inspection', desc: 'Machine vision systems detecting defects at 99.97% accuracy.' },
                  { title: 'IoT Production Monitoring', desc: 'Real-time dashboards tracking every machine parameter.' },
                  { title: 'Predictive Maintenance', desc: 'AI algorithms preventing downtime before it occurs.' },
                  { title: 'Digital Twin Simulation', desc: 'Virtual process modeling for optimal fabric development.' },
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
            <TexImg src={IMG.fabricTexture4} alt="Smart factory technology" className="w-full h-[400px] rounded-2xl" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.thread1} alt="Thread spools" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Schedule a Virtual Factory Tour</h2>
          <p className="text-silver mb-8">
            Lorem ipsum dolor sit amet. Experience our manufacturing capabilities firsthand with a guided virtual tour.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
          >
            Book a Tour <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
