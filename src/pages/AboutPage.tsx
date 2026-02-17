// import { useNavigation } from '../context/NavigationContext';
// import { IMG } from '../constants/images';
// import {
//   ArrowRight,
//   Globe2,
//   Target,
//   Eye,
//   Heart,
//   Calendar,
//   TrendingUp,
//   Lightbulb,
//   Handshake,
// } from 'lucide-react';

// function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
//   return (
//     <div className={`relative overflow-hidden bg-cloud ${className}`}>
//       <div className="absolute inset-0 bg-weave opacity-40" />
//       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
//     </div>
//   );
// }

// export function AboutPage() {
//   const { navigate } = useNavigation();

//   return (
//     <div>
//       {/* Page Hero */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={IMG.fabricTexture2} alt="Fabric texture" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-charcoal-dark/85" />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
//           <div className="max-w-3xl">
//             <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">About Us</span>
//             <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
//               Building the Future of Technical Textiles Since 1997
//             </h1>
//             <p className="text-silver text-lg leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. From a single weaving unit to a global textile powerhouse, our journey is defined by innovation, quality, and an unwavering commitment to our partners' success.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Company Story */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div>
//               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Story</span>
//               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6">
//                 From Humble Beginnings to Global Leadership
//               </h2>
//               <p className="text-silver-darker leading-relaxed mb-4">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//               <p className="text-silver-darker leading-relaxed mb-4">
//                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//               </p>
//               <p className="text-silver-darker leading-relaxed mb-8">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
//               </p>
//               <div className="grid grid-cols-3 gap-6">
//                 {[
//                   { value: '1997', label: 'Founded' },
//                   { value: '3,500+', label: 'Employees' },
//                   { value: '$250M+', label: 'Revenue' },
//                 ].map((stat) => (
//                   <div key={stat.label}>
//                     <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
//                     <p className="text-sm text-silver-dark">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <TexImg src={IMG.fabricRolls1} alt="Fabric rolls" className="w-full h-[450px] rounded-2xl" />
//           </div>
//         </div>
//       </section>

//       {/* Vision, Mission, Values */}
//       <section className="py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Eye,
//                 title: 'Our Vision',
//                 text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. To be the world's most trusted partner in technical textile innovation, driving sustainable solutions that empower industries globally.",
//               },
//               {
//                 icon: Target,
//                 title: 'Our Mission',
//                 text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. To deliver exceptional textile products through cutting-edge technology, sustainable practices, and customer-centric innovation.',
//               },
//               {
//                 icon: Heart,
//                 title: 'Our Values',
//                 text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Integrity, Innovation, Sustainability, and Excellence form the cornerstone of everything we do at KK EXPORT .',
//               },
//             ].map((item) => (
//               <div key={item.title} className="bg-white rounded-2xl p-8 border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
//                 <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cloud-light mb-5">
//                   <item.icon className="w-7 h-7 text-charcoal" />
//                 </div>
//                 <h3 className="text-xl font-bold text-charcoal mb-4">{item.title}</h3>
//                 <p className="text-silver-darker leading-relaxed">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-14">
//             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Journey</span>
//             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3">Milestones That Define Us</h2>
//           </div>

//           <div className="relative">
//             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cloud-dark hidden lg:block" />
//             <div className="space-y-8 lg:space-y-12">
//               {[
//                 { year: '1997', title: 'Foundation', desc: 'Lorem ipsum dolor sit amet. KK EXPORT  founded with a single weaving unit in Mumbai, India.' },
//                 { year: '2003', title: 'ISO Certification', desc: 'Consectetur adipiscing elit. Achieved ISO 9001 certification and expanded to 3 production lines.' },
//                 { year: '2008', title: 'Global Expansion', desc: 'Sed do eiusmod tempor. Opened international offices in New York and Manchester.' },
//                 { year: '2014', title: 'R&D Innovation Center', desc: 'Ut enim ad minim veniam. Launched state-of-the-art research facility for smart textiles.' },
//                 { year: '2019', title: 'Sustainability Pledge', desc: 'Quis nostrud exercitation. Committed to 50% carbon reduction and circular economy targets.' },
//                 { year: '2024', title: 'Industry 4.0', desc: 'Ullamco laboris nisi. Full digital transformation with AI-powered quality systems.' },
//               ].map((milestone, i) => (
//                 <div key={milestone.year} className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
//                   <div className={`flex-1 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
//                     <div className="bg-cloud-lighter rounded-xl p-6 border border-cloud-dark">
//                       <span className="text-charcoal font-bold text-lg">{milestone.year}</span>
//                       <h3 className="text-lg font-bold text-charcoal mt-1">{milestone.title}</h3>
//                       <p className="text-silver-darker text-sm mt-2">{milestone.desc}</p>
//                     </div>
//                   </div>
//                   <div className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center shrink-0 z-10">
//                     <Calendar className="w-4 h-4 text-white" />
//                   </div>
//                   <div className="flex-1 hidden lg:block" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Leadership */}
//       <section className="py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-14">
//             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
//             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3">The Minds Behind TexVista</h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { name: 'Rajesh Mehta', role: 'Chairman & Founder', initials: 'RM' },
//               { name: 'Priya Sharma', role: 'CEO & Managing Director', initials: 'PS' },
//               { name: 'David Collins', role: 'CTO — Innovation', initials: 'DC' },
//               { name: 'Akira Tanaka', role: 'VP — Global Operations', initials: 'AT' },
//             ].map((person) => (
//               <div key={person.name} className="bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
//                 <div className="h-52 bg-cloud flex items-center justify-center">
//                   <span className="text-4xl font-bold text-silver">{person.initials}</span>
//                 </div>
//                 <div className="p-5 text-center">
//                   <h3 className="font-bold text-charcoal">{person.name}</h3>
//                   <p className="text-sm text-silver-dark mt-1">{person.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-14">
//             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Why TexVista</span>
//             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3">The TexVista Advantage</h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: Lightbulb, title: 'Innovation-First', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.' },
//               { icon: Globe2, title: 'Global Reach', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
//               { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
//               { icon: Handshake, title: 'Partner-Centric', desc: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia.' },
//             ].map((item) => (
//               <div key={item.title} className="text-center p-6 rounded-xl hover:bg-cloud-lighter transition-colors">
//                 <div className="w-14 h-14 bg-cloud-light rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <item.icon className="w-7 h-7 text-charcoal" />
//                 </div>
//                 <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
//                 <p className="text-sm text-silver-darker">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={IMG.wovenClose3} alt="Woven textile" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-charcoal/90" />
//         </div>
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Partner With KK EXPORT </h2>
//           <p className="text-silver mb-8 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join 150+ enterprise clients who trust TexVista for their mission-critical textile requirements.
//           </p>
//           <button
//             onClick={() => navigate('contact')}
//             className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
//           >
//             Start a Conversation <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }






import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  Globe2,
  Target,
  Eye,
  Heart,
  Calendar,
  TrendingUp,
  Lightbulb,
  Handshake,
  Sparkles,
} from 'lucide-react';

function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cloud ${className}`}>
      <div className="absolute inset-0 bg-weave opacity-40" />
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

export function AboutPage() {
  const { navigate } = useNavigation();

  return (
    <div className="font-['Inter',sans-serif]">
      {/* Page Hero */}
      <section className="relative overflow-hidden">
  <div className="absolute inset-0">
    {/* ✅ src="" mein apni image path daalo */}
    <img
      src="/image/Banner1.jpg"
      alt="Fabric texture"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 " />
  </div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
    <div className="max-w-3xl">
      <span className="text-silver-light font-semibold text-xs sm:text-sm uppercase tracking-wider">
        About Us
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
        India's Trusted Garment Buying House Since 2014
      </h1>
      <p className="text-silver text-base sm:text-lg leading-relaxed">
        KK Export is a leading garment buying house in India, providing complete apparel sourcing
        solutions to global fashion brands and retailers. Since 2014, we have been connecting
        international buyers with reliable garment manufacturers across India. We specialize in
        garment sourcing, vendor management, quality control, and on-time global shipments
      </p>
    </div>
  </div>
</section>

      {/* Company Story */}
     <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div>
              <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6">
                From Local Sourcing Partner to Global Garment Buying House
              </h2>
              <p className="text-silver-darker text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Founded in 2014, KK Export began as a small, dedicated sourcing unit with a strong commitment to delivering high-quality garments. Over the years, we have evolved into a full-fledged professional apparel buying house in India, managing end-to-end garment production for clients across multiple countries
              </p>
              <p className="text-silver-darker text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Our journey has been driven by a focus on quality, reliability, and innovation. From sourcing premium fabrics to coordinating precise manufacturing, finishing, and timely delivery, we ensure that every product meets international standards
              </p>
            </div>
            <TexImg
              src="/image/abslider2.png"
              alt="Fabric rolls"
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl sm:rounded-2xl order-first lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                text: "To become the most trusted garment buying house in India, delivering sustainable and high-quality apparel sourcing solutions worldwide.",
              },
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To provide reliable garment sourcing, strict quality assurance, and seamless supply chain management for global fashion brands',
              },
              {
                icon: Heart,
                title: 'Our Values',
                text: 'At KK Exports India, our values are built on integrity, transparency, quality excellence, ethical sourcing, and long-term partnerships, ensuring trust, reliability, and sustainable growth in every business relationship',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light mb-3 sm:mb-5">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2 sm:mb-4">{item.title}</h3>
                <p className="text-silver-darker text-sm sm:text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3">Milestones That Define Us</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Mobile & Desktop Timeline */}
            <div className="space-y-4 sm:space-y-6">
              {[
                { year: '2014', title: 'Humble Beginning', desc: 'Started as a small garment sourcing company in India with a focus on quality and buyer trust.' },
                { year: '2016', title: 'Vendor Network Expansion', desc: 'Built a strong network of verified garment manufacturers across multiple cities..' },
                { year: '2018', title: 'International Client Growth', desc: 'Expanded operations to serve global fashion brands and retailers.' },
                { year: '2020', title: 'Quality & Process Strengthening', desc: 'Implemented structured quality control systems and professional merchandising processes..' },
                { year: '2022', title: 'Global Buyer Expansion', desc: 'Strengthened our position as a reliable garment buying house serving multiple international markets..' },
                { year: '2024', title: 'Established Apparel Sourcing Partner', desc: 'Today, KK Export stands as a trusted garment buying house in India, delivering end-to-end apparel sourcing and export solutions worldwide.' },
              ].map((milestone, i) => (
                <div key={milestone.year} className="relative">
                  {/* Connection Line - Desktop Only */}
                  {i !== 5 && (
                    <div className="hidden lg:block absolute left-[52px] top-[72px] w-0.5 h-[calc(100%+24px)] bg-gradient-to-b from-cloud-dark to-transparent" />
                  )}
                  
                  <div className="flex gap-4 sm:gap-6 items-start group">
                    {/* Year Badge */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-20 sm:w-24 lg:w-28 h-16 sm:h-18 lg:h-20 bg-gradient-to-br from-charcoal to-charcoal-dark rounded-xl sm:rounded-2xl flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-silver-light mb-1" />
                        <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">{milestone.year}</span>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 bg-cloud-lighter hover:bg-white border border-cloud-dark hover:border-silver rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all group-hover:translate-x-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-bold text-charcoal">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-silver-darker text-sm sm:text-base leading-relaxed ml-0 sm:ml-11">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Leadership Team</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3">The Minds Behind TexVista</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { name: 'Rajesh Mehta', role: 'Chairman & Founder', initials: 'RM' },
              { name: 'Priya Sharma', role: 'CEO & Managing Director', initials: 'PS' },
              { name: 'David Collins', role: 'CTO — Innovation', initials: 'DC' },
              { name: 'Akira Tanaka', role: 'VP — Global Operations', initials: 'AT' },
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-md transition-all">
                <div className="h-32 sm:h-48 lg:h-52 bg-cloud flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-silver">{person.initials}</span>
                </div>
                <div className="p-3 sm:p-5 text-center">
                  <h3 className="font-bold text-charcoal text-sm sm:text-base">{person.name}</h3>
                  <p className="text-xs sm:text-sm text-silver-dark mt-0.5 sm:mt-1">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Why TexVista</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3">The KK Exports Advantage</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { icon: Lightbulb, title: 'Innovation-Driven Approach', desc: 'We adopt modern sourcing strategies, advanced manufacturing practices, and continuous improvement methods to deliver innovative and trend-focused apparel solutions' },
              { icon: Globe2, title: 'Global Market Expertise', desc: 'With strong international exposure, we understand global quality standards, compliance requirements, and market demands across diverse regions.' },
              { icon: TrendingUp, title: 'Scalable & Flexible Solutions', desc: 'From small custom orders to large bulk production, we provide flexible and scalable sourcing solutions tailored to client needs..' },
              { icon: Handshake, title: 'Client-Focused Partnerships', desc: 'We believe in transparency, long-term relationships, and dedicated support, ensuring trust, reliability, and seamless collaboration in every project' },
            ].map((item) => (
              <div key={item.title} className="text-center p-3 sm:p-6 rounded-xl hover:bg-cloud-lighter transition-colors">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud-light rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-charcoal" />
                </div>
                <h3 className="font-bold text-charcoal text-sm sm:text-base mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-silver-darker leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.wovenClose3} alt="Woven textile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Partner With KK EXPORT</h2>
          <p className="text-silver text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join 150+ enterprise clients who trust TexVista for their mission-critical textile requirements.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold text-sm sm:text-base rounded-lg hover:bg-cloud-light transition-colors"
          >
            Start a Conversation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
