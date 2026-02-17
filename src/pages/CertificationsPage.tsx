import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  Award,
  Shield,
  FileCheck,
  Globe2,
  BadgeCheck,
} from 'lucide-react';

export function CertificationsPage() {
  const { navigate } = useNavigation();

  const certifications = [
    {
      name: 'ISO Quality System Alignment',
      
      desc: 'Structured quality management processes ensuring consistent production standards and documented traceability',
     
    },
    {
      name: 'OEKO-TEX® Compatible Production Environment',
      // category: 'Environmental Management',
      desc: 'Manufacturing processes designed to meet international product safety requirements and restricted substance standards',
      // scope: 'Mumbai & Ahmedabad plants',
      // validUntil: 'Jun 2026',
      // body: 'TÜV SÜD',
    },
    {
      name: 'REACH-Aware Chemical Management',
      // category: 'Product Safety',
      desc: 'Strict monitoring and controlled usage of chemicals in accordance with EU regulatory guidelines.',
      // scope: 'Medical & consumer textiles',
      // validUntil: 'Mar 2026',
      // body: 'Hohenstein Institute',
    },
    {
      name: 'Sustainable Processing Practices',
      // category: 'Chemical Safety',
      desc: 'Energy-efficient production methods, responsible water usage, and environmentally conscious waste management systems.',
      // scope: 'All EU-destined products',
      // validUntil: 'Ongoing',
      // body: 'European Chemicals Agency',
    },
    {
      name: 'Ethical Manufacturing Commitment',
      // category: 'Sustainability',
      desc: 'Fair labor practices, safe working conditions, and responsible sourcing across all facilities and approved partners',
      // scope: 'Recycled product lines',
      // validUntil: 'Sep 2025',
      // body: 'Control Union',
    },
    {
      name: 'Third-Party Audit Ready Infrastructure',
      // category: 'Social Compliance',
      desc: 'Transparent documentation, internal audit systems, and readiness for buyer inspections at any time.',
      // scope: 'All facilities & suppliers',
      // validUntil: 'Aug 2025',
      // body: 'amfori BSCI',
    },
    // {
    //   name: 'ISO 45001:2018',
    //   category: 'Health & Safety',
    //   desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Occupational health and safety management system certification.',
    //   scope: 'All manufacturing facilities',
    //   validUntil: 'Feb 2027',
    //   body: 'DNV GL',
    // },
    // {
    //   name: 'IATF 16949:2016',
    //   category: 'Automotive Quality',
    //   desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse. Automotive quality management system standard for supply chain.',
    //   scope: 'Automotive product lines',
    //   validUntil: 'Nov 2025',
    //   body: 'SGS',
    // },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/image/slider1.jpg" alt="Woven textile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 " />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider"></span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Compliance & Certification Readiness
            </h1>
            <p className="text-silver text-lg leading-relaxed">
           Our systems are fully aligned with global textile manufacturing standards, ensuring smooth audits, regulatory compliance, and buyer confidence across international markets.
            </p>
            <p className="text-silver text-lg leading-relaxed">
            We proactively maintain structured processes, documentation, and operational controls to meet the evolving requirements of global brands and regulatory authorities
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      {/* <section className="py-8 bg-cloud-lighter border-b border-cloud-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              { value: '8+', label: 'Active Certifications' },
              { value: '12+', label: 'Accreditation Bodies' },
              { value: '100%', label: 'Audit Pass Rate' },
              { value: 'Annual', label: 'Renewal Cycle' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-bold text-charcoal">{item.value}</p>
                <p className="text-sm text-silver-dark">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-2xl p-6 lg:p-8 border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-cloud-light rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7 text-charcoal" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-charcoal">{cert.name}</h3>
                      {/* <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-cloud-light text-charcoal border border-cloud-dark">
                        {cert.category}
                      </span> */}
                    </div>
                    <p className="text-sm text-silver-darker leading-relaxed mb-4">{cert.desc}</p>
                    {/* <div className="grid grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-silver block">Scope</span>
                        <span className="text-charcoal font-medium">{cert.scope}</span>
                      </div>
                      <div>
                        <span className="text-silver block">Valid Until</span>
                        <span className="text-charcoal font-medium">{cert.validUntil}</span>
                      </div>
                      <div>
                        <span className="text-silver block">Certified By</span>
                        <span className="text-charcoal font-medium">{cert.body}</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Lab */}
      {/* <section className="py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Quality Assurance</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">In-House Testing Laboratory</h2>
            <p className="text-silver-darker max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet. Our NABL-accredited lab conducts 50+ quality tests on every batch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Tensile Strength', icon: Shield },
              { title: 'Abrasion Resistance', icon: FileCheck },
              { title: 'Colorfastness', icon: BadgeCheck },
              { title: 'Flame Retardancy', icon: Shield },
              { title: 'Chemical Analysis', icon: FileCheck },
              { title: 'Dimensional Stability', icon: Globe2 },
              { title: 'Water Resistance', icon: BadgeCheck },
              { title: 'UV Degradation', icon: Shield },
            ].map((test) => (
              <div key={test.title} className="bg-white rounded-xl p-5 border border-cloud-dark flex items-center gap-3 hover:border-silver transition-colors">
                <div className="w-10 h-10 bg-cloud-light rounded-lg flex items-center justify-center shrink-0">
                  <test.icon className="w-5 h-5 text-charcoal" />
                </div>
                <span className="text-sm font-semibold text-charcoal">{test.title}</span>
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
