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
          <img src={IMG.eco1} alt="Sustainability" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Sustainability</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Weaving a Sustainable Future for Textiles
            </h1>
            <p className="text-silver text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our commitment to environmental stewardship drives every decision, from raw material sourcing to final product delivery.
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
                title: 'Environmental Stewardship',
                items: [
                  'Zero liquid discharge water treatment',
                  'Solar-powered production facilities',
                  'Biodegradable packaging initiative',
                  'Chemical management ZDHC compliance',
                  'Scope 1 & 2 emission tracking',
                ],
              },
              {
                icon: Target,
                title: 'Social Responsibility',
                items: [
                  'Fair wage & benefits program',
                  'Worker safety excellence (0 LTI)',
                  'Community development initiatives',
                  'Gender diversity & inclusion targets',
                  'Education & skill development programs',
                ],
              },
              {
                icon: Wind,
                title: 'Governance & Ethics',
                items: [
                  'Transparent supply chain mapping',
                  'Anti-corruption policies & audits',
                  'Board-level ESG oversight',
                  'Stakeholder engagement framework',
                  'Annual sustainability reporting',
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
              <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Circular Economy</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6">
                Closing the Loop in Textile Production
              </h2>
              <p className="text-silver-darker leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our circular economy model transforms textile waste into valuable raw materials.
              </p>
              <p className="text-silver-darker leading-relaxed mb-8">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Through innovative recycling technologies we convert waste into premium recycled fibers.
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
      <section className="py-16 lg:py-24 bg-white">
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
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.fabricTexture3} alt="Fabric texture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Download Our Sustainability Report</h2>
          <p className="text-silver mb-8">
            Lorem ipsum dolor sit amet. Get detailed insights into our environmental impact, social initiatives, and governance framework.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors">
              Download Report 2024 <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
