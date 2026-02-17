import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  Leaf,
  Droplets,
  Wind,
  Recycle,
  TreePine,
  Sun,
  Target,
  TrendingDown,
} from 'lucide-react';

function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cloud ${className}`}>
      <div className="absolute inset-0 bg-weave opacity-40" />
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

export function SustainabilityPage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/image/slider3.jpg" alt="Sustainability" className="w-full h-full object-cover" />
          <div className="absolute inset-0 " />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Sustainability</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
             Responsible Garment Sourcing for a Better Future
            </h1>
            <p className="text-silver text-lg leading-relaxed">
              At KK Export, sustainability is an essential part of our garment sourcing process. As a responsible garment buying house in India, we work closely with compliant manufacturers to ensure ethical production, environmental responsibility, and transparent supply chains..
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-white border-b border-cloud-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '40%', label: 'Water Usage Reduction', icon: Droplets },
              { value: '60%', label: 'Renewable Energy', icon: Sun },
              { value: '85%', label: 'Waste Recycled', icon: Recycle },
              { value: '30%', label: 'Carbon Footprint Reduction', icon: TrendingDown },
            ].map((metric) => (
              <div key={metric.label} className="text-center p-6 bg-cloud-lighter rounded-xl border border-cloud-dark">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-cloud">
                  <metric.icon className="w-6 h-6 text-charcoal" />
                </div>
                <p className="text-3xl font-bold text-charcoal">{metric.value}</p>
                <p className="text-sm text-silver-dark mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Pillars */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our ESG Framework</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
              Three Pillars of Sustainable Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Environmental Responsibility',
                items: [
                  'Waste reduction practices',
                  'Water management systems',
                  'Energy-efficient production',
                  'Reduced chemical usage',
                  'Sustainable packaging solutions',
                ],
              },
              {
                icon: Target,
                title: 'Social Responsibility',
                items: [
                  'Fair labor practices',
                  'Safe working environments',
                  'No child or forced labor',
                  'Compliance with international social standards',
                  'Worker welfare and transparency',
                ],
              },
              {
                icon: Wind,
                title: 'Ethical Governance',
                items: [
                  'Transparent vendor management',
                  'Factory compliance monitoring',
                  'Clear documentation & reporting',
                  'Long-term responsible partnerships',
                  
                ],
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-cloud-lighter rounded-2xl p-8 border border-cloud-dark">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cloud mb-5">
                  <pillar.icon className="w-7 h-7 text-charcoal" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-4">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-silver-dark mt-0.5 shrink-0" />
                      <span className="text-sm text-silver-darker">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider"></span>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6">
                Our Vision for Sustainable Growth
              </h2>
              <p className="text-silver-darker leading-relaxed mb-6">
               We aim to strengthen our position as a trusted garment buying house in India by promoting sustainable apparel sourcing and responsible manufacturing practices for global brands.
              </p>
              <p className="text-silver-darker leading-relaxed mb-8">
                Our long-term goal is to support environmentally conscious production while delivering high-quality garments to international markets.
              </p>
              <div className="space-y-3">
                {[
                  'Post-consumer PET bottle to fiber conversion',
                  'Closed-loop water recycling systems',
                  'Textile waste composting program',
                  'Recycled content certification (GRS)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Recycle className="w-5 h-5 text-charcoal shrink-0" />
                    <span className="text-silver-darker">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <TexImg src={IMG.eco2} alt="Circular economy" className="w-full h-[400px] rounded-2xl" />
          </div>
        </div>
      </section>

      {/* 2030 Goals */}
      {/* <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Vision 2030</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3">Our Sustainability Roadmap</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '2025', goal: 'Carbon Neutral Operations', icon: TreePine, progress: 75 },
              { year: '2027', goal: '100% Renewable Energy', icon: Sun, progress: 60 },
              { year: '2028', goal: 'Zero Waste to Landfill', icon: Recycle, progress: 45 },
              { year: '2030', goal: 'Fully Circular Production', icon: Leaf, progress: 30 },
            ].map((target) => (
              <div key={target.year} className="bg-cloud-lighter rounded-xl p-6 border border-cloud-dark">
                <target.icon className="w-8 h-8 text-charcoal mb-3" />
                <span className="text-sm font-bold text-charcoal">{target.year}</span>
                <h3 className="text-lg font-bold text-charcoal mt-1 mb-3">{target.goal}</h3>
                <div className="h-2 bg-cloud-dark rounded-full overflow-hidden">
                  <div className="h-full bg-charcoal rounded-full" style={{ width: `${target.progress}%` }} />
                </div>
                <p className="text-xs text-silver-dark mt-2">{target.progress}% Complete</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
