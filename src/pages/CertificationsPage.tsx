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
      name: 'ISO 9001:2015',
      category: 'Quality Management',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. International standard for quality management systems ensuring consistent product quality.',
      scope: 'All manufacturing facilities',
      validUntil: 'Dec 2026',
      body: 'Bureau Veritas',
    },
    {
      name: 'ISO 14001:2015',
      category: 'Environmental Management',
      desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Environmental management certification demonstrating commitment to sustainability.',
      scope: 'Mumbai & Ahmedabad plants',
      validUntil: 'Jun 2026',
      body: 'TÜV SÜD',
    },
    {
      name: 'OEKO-TEX® Standard 100',
      category: 'Product Safety',
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Certification that textiles are free from harmful substances at every stage.',
      scope: 'Medical & consumer textiles',
      validUntil: 'Mar 2026',
      body: 'Hohenstein Institute',
    },
    {
      name: 'REACH Compliance',
      category: 'Chemical Safety',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Full compliance with EU REACH regulations for chemical substance safety.',
      scope: 'All EU-destined products',
      validUntil: 'Ongoing',
      body: 'European Chemicals Agency',
    },
    {
      name: 'GRS (Global Recycled Standard)',
      category: 'Sustainability',
      desc: 'Excepteur sint occaecat cupidatat non proident. Verification of recycled content and responsible practices in production.',
      scope: 'Recycled product lines',
      validUntil: 'Sep 2025',
      body: 'Control Union',
    },
    {
      name: 'BSCI Audited',
      category: 'Social Compliance',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Audit certification for social compliance covering labor rights.',
      scope: 'All facilities & suppliers',
      validUntil: 'Aug 2025',
      body: 'amfori BSCI',
    },
    {
      name: 'ISO 45001:2018',
      category: 'Health & Safety',
      desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Occupational health and safety management system certification.',
      scope: 'All manufacturing facilities',
      validUntil: 'Feb 2027',
      body: 'DNV GL',
    },
    {
      name: 'IATF 16949:2016',
      category: 'Automotive Quality',
      desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse. Automotive quality management system standard for supply chain.',
      scope: 'Automotive product lines',
      validUntil: 'Nov 2025',
      body: 'SGS',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.wovenClose1} alt="Woven textile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Certifications & Compliance</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Globally Certified. Uncompromisingly Compliant.
            </h1>
            <p className="text-silver text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our comprehensive certification portfolio reflects our commitment to quality, safety, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-cloud-lighter border-b border-cloud-dark">
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
      </section>

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
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-cloud-light text-charcoal border border-cloud-dark">
                        {cert.category}
                      </span>
                    </div>
                    <p className="text-sm text-silver-darker leading-relaxed mb-4">{cert.desc}</p>
                    <div className="grid grid-cols-3 gap-3 text-xs">
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Lab */}
      <section className="py-16 lg:py-24 bg-cloud-lighter">
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
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Certification Documentation?</h2>
          <p className="text-silver mb-8">
            Lorem ipsum dolor sit amet. Request copies of our certifications, test reports, or compliance documentation for your records.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
          >
            Request Documentation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
