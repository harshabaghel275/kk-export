import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  Car,
  Plane,
  Stethoscope,
  HardHat,
  Tractor,
  Flame,
  Droplets,
  Shirt,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cloud ${className}`}>
      <div className="absolute inset-0 bg-weave opacity-40" />
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

const industries = [
  {
    name: 'Automotive',
    icon: Car,
    img: IMG.fabricTexture1,
    headline: 'Advanced Textiles for Automotive Innovation',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. From interior upholstery to structural reinforcements, our automotive textiles meet the stringent requirements of leading OEMs worldwide.',
    applications: ['Seat Cover Fabrics', 'Airbag Textiles', 'Headliner Materials', 'Tire Cord Fabric', 'Acoustic Insulation', 'Trunk Lining'],
    stats: [{ value: '35+', label: 'OEM Partners' }, { value: '120+', label: 'SKUs' }],
  },
  {
    name: 'Aerospace & Defense',
    icon: Plane,
    img: IMG.fabricTexture2,
    headline: 'Mission-Critical Fabrics for Aerospace',
    desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our aerospace-grade textiles undergo rigorous testing and certification to meet the most demanding specifications.',
    applications: ['Composite Reinforcement', 'Ballistic Protection', 'Thermal Barriers', 'Parachute Fabrics', 'Interior Textiles', 'Camouflage Nets'],
    stats: [{ value: '15+', label: 'Defense Contracts' }, { value: '90+', label: 'SKUs' }],
  },
  {
    name: 'Healthcare & Medical',
    icon: Stethoscope,
    img: IMG.fabricTexture3,
    headline: 'Hygienic Textiles for Healthcare',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Our medical textiles combine antimicrobial properties with comfort and breathability for critical healthcare environments.',
    applications: ['Surgical Gowns', 'Wound Dressings', 'Implantable Meshes', 'Bed Linens', 'Protective Coveralls', 'Face Mask Media'],
    stats: [{ value: '200+', label: 'Hospital Partners' }, { value: '180+', label: 'SKUs' }],
  },
  {
    name: 'Construction & Architecture',
    icon: HardHat,
    img: IMG.wovenClose1,
    headline: 'Structural Textiles for Construction',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Our construction-grade fabrics provide reinforcement, protection, and aesthetic solutions for modern architecture.',
    applications: ['Tensile Structures', 'Geotextiles', 'Scaffolding Nets', 'Roofing Membranes', 'Concrete Reinforcement', 'Facade Systems'],
    stats: [{ value: '500+', label: 'Projects' }, { value: '150+', label: 'SKUs' }],
  },
  {
    name: 'Agriculture',
    icon: Tractor,
    img: IMG.wovenClose2,
    headline: 'Protective Textiles for Agriculture',
    desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. Our agro-textiles enhance crop protection, soil management, and agricultural productivity.',
    applications: ['Crop Covers', 'Shade Nets', 'Mulch Films', 'Greenhouse Fabrics', 'Irrigation Textiles', 'Silage Covers'],
    stats: [{ value: '1000+', label: 'Farms Served' }, { value: '80+', label: 'SKUs' }],
  },
  {
    name: 'Energy & Environment',
    icon: Flame,
    img: IMG.production1,
    headline: 'High-Performance Textiles for Energy Sector',
    desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Our filtration and insulation textiles serve power generation and environmental applications.',
    applications: ['Baghouse Filters', 'Thermal Insulation', 'Cable Wrapping', 'Wind Turbine Fabrics', 'Oil Spill Barriers', 'Solar Panel Covers'],
    stats: [{ value: '75+', label: 'Energy Clients' }, { value: '110+', label: 'SKUs' }],
  },
];

export function IndustryPage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.production2} alt="Textile production" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Industry Solutions</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Textiles Engineered for Every Industry
            </h1>
            <p className="text-silver text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We develop and supply specialized textile solutions for the world's most demanding industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 lg:space-y-24">
          {industries.map((industry, i) => (
            <div key={industry.name} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <TexImg
                  src={industry.img}
                  alt={`${industry.name} textile applications`}
                  className="w-full h-[300px] lg:h-[380px] rounded-2xl"
                />
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-cloud-light text-charcoal">
                  <industry.icon className="w-4 h-4" />
                  {industry.name}
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">{industry.headline}</h2>
                <p className="text-silver-darker leading-relaxed mb-6">{industry.desc}</p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {industry.applications.map((app) => (
                    <div key={app} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-charcoal shrink-0" />
                      <span className="text-sm text-silver-darker">{app}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 mb-6">
                  {industry.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
                      <p className="text-sm text-silver-dark">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
                >
                  Discuss {industry.name} Solutions <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Sectors */}
      <section className="py-16 lg:py-20 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal">Additional Sectors We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Marine & Offshore', icon: Droplets },
              { name: 'Sports & Leisure', icon: Shirt },
              { name: 'Safety & PPE', icon: ShieldCheck },
              { name: 'Packaging', icon: HardHat },
            ].map((sector) => (
              <div key={sector.name} className="bg-white rounded-xl p-6 text-center border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
                <sector.icon className="w-8 h-8 text-charcoal mx-auto mb-3" />
                <h3 className="font-semibold text-charcoal text-sm">{sector.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.fabricRolls1} alt="Fabric rolls" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Which Industry Do You Serve?</h2>
          <p className="text-silver mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Let our application engineers recommend the perfect textile solution for your specific industry needs.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
          >
            Get Industry-Specific Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
