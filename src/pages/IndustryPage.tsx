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
    
    
    img: '/image/endtoend2.png',
    headline: 'Integrated Garment Production & Global Supply Chain Management',
    desc: 'KK Export provides comprehensive garment manufacturing solutions, specializing in bulk men’s wear, denim production, terry towels, and custom textile orders. Our vertically coordinated production system ensures cost efficiency, fabric consistency, and timely international shipments',
    applications: ['Garment manufacturer in India', 'Bulk garment production', 'Textile export company', 'Denim manufacturing', 'Private label garment supplier', 'Terry towel manufacturer'],
    stats: [{  }, {  }],
  },
  {
  
    img: '/image/bulk1.png',
    headline: 'Bulk Plain T-Shirt Manufacturing & Order Management',
    desc: 'We specialize in high-volume plain T-shirt production for global brands, wholesalers, and private labels. From fabric sourcing to final shipment, we manage every stage with precision and efficiency',
    applications: ['Large-scale production capacity coordination', ' Multi-factory production planning', ' On-time delivery management', 'Cost optimization', 'Risk control & continuous production monitoring'],
    stats: [{ }, {  }],
  },
  {
    name: 'Bulk Order Handling Expertise',
    icon: Stethoscope,
    img: '/image/Health.png',
    headline: 'Hygienic Textiles for Healthcare',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Our medical textiles combine antimicrobial properties with comfort and breathability for critical healthcare environments.',
    applications: ['Surgical Gowns', 'Wound Dressings', 'Implantable Meshes', 'Bed Linens', 'Protective Coveralls', 'Face Mask Media'],
    stats: [{ value: '200+', label: 'Hospital Partners' }, { value: '180+', label: 'SKUs' }],
  },
  {
  
    img: '/image/location.png',
    headline: 'Strong Vendor Network Across India',
    desc: 'As an established garment buying house in India, we work with:',
    applications: ['Certified garment manufacturers', 'Compliant export factories', 'Specialized knit and woven units', 'Sustainable production partners'],
    stats: [{  }, {  }],
  },
  {
    
    img:'/image/ocues1.png',
    headline: 'Quality & Compliance Focus',
    desc: 'Quality is at the core of our operations',
    applications: ['Pre-production approvals', 'Inline inspections', 'Mulch Films', 'Measurement verification', 'Packaging checks', 'Social and technical compliance coordination'],
    stats: [{ }, { }],
  },
  // {
  //   name: 'International Market Expertise',
  //   icon: Flame,
  //   img: IMG.production1,
  //   headline: 'International Market Expertise',
  //   desc: 'We serve global clients across',
  //   applications: ['Europe', 'USA', 'Middle East', 'Australia', 'Emerging fashion markets'],
  //   stats: [{  }, {  }],
  // },
];

export function IndustryPage() {
  const { navigate } = useNavigation();

  return (
    <div className="font-['Inter',sans-serif]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.production2} alt="Textile production" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-xs sm:text-sm uppercase tracking-wider">Industry Solutions</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
             Global Garment Buying House Capabilities
            </h1>
            <p className="text-silver text-base sm:text-lg leading-relaxed">
              KK Export is one of the leading garment buying house agencies in India, delivering complete apparel sourcing and bulk production solutions for international fashion brands and retailers With a strong vendor network, experienced merchandising team, and structured quality systems, we manage large-scale garment orders from development to final dispatch
            </p>
             {/* <p className="text-silver text-base sm:text-lg leading-relaxed">
            With a strong vendor network, experienced merchandising team, and structured quality systems, we manage large-scale garment orders from development to final dispatch
            </p> */}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 lg:space-y-24">
          {industries.map((industry, i) => (
            <div key={industry.name} className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
              {/* Image */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <TexImg
                  src={industry.img}
                  alt={`${industry.name} textile applications`}
                  className="w-full h-[240px] sm:h-[300px] lg:h-[380px] rounded-xl sm:rounded-2xl"
                />
              </div>
              
              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 bg-cloud-light text-charcoal">
                  <industry.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {industry.name}
                </div> */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-3 sm:mb-4">
                  {industry.headline}
                </h2>
                <p className="text-silver-darker text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {industry.desc}
                </p>

                {/* Applications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5 sm:mb-6">
                  {industry.applications.map((app) => (
                    <div key={app} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal shrink-0" />
                      <span className="text-xs sm:text-sm text-silver-darker">{app}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                {/* <div className="flex gap-6 sm:gap-8 mb-5 sm:mb-6">
                  {industry.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl sm:text-2xl font-bold text-charcoal">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-silver-dark">{stat.label}</p>
                    </div>
                  ))}
                </div> */}

                {/* CTA Button */}
                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2 text-charcoal font-semibold text-sm sm:text-base hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
                >
                  Discuss {industry.name} Solutions <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Sectors */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal">Additional Sectors We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: 'Marine & Offshore', icon: Droplets },
              { name: 'Sports & Leisure', icon: Shirt },
              { name: 'Safety & PPE', icon: ShieldCheck },
              { name: 'Packaging', icon: HardHat },
            ].map((sector) => (
              <div 
                key={sector.name} 
                className="bg-white rounded-xl p-4 sm:p-6 text-center border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
              >
                <sector.icon className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal mx-auto mb-2 sm:mb-3" />
                <h3 className="font-semibold text-charcoal text-xs sm:text-sm">{sector.name}</h3>
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