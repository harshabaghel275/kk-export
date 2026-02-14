// import { useState, useRef, useEffect, useCallback } from 'react';
// import { useNavigation } from '../context/NavigationContext';
// import { IMG } from '../constants/images';
// import {
//   ArrowRight,
//   CheckCircle2,
//   Factory,
//   Globe2,
//   Award,
//   Leaf,
//   Shield,
//   Zap,
//   TrendingUp,
//   Users,
//   ChevronRight,
//   Star,
//   Layers,
//   Wrench,
//   Droplets,
//   Wind,
//   Scissors,
//   Quote,
//   AlertCircle,
//   RefreshCw,
// } from 'lucide-react';

// // Simple Image Component (keep this as is)
// function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
//   return (
//     <div className={`relative overflow-hidden bg-cloud ${className}`}>
//       <div className="absolute inset-0 bg-weave opacity-40" />
//       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
//     </div>
//   );
// }

// // ✅ IMPROVED HERO VIDEO COMPONENT (Auto-play & Error Handling)
// interface HeroVideoProps {
//   src: string;
//   fallbackSrc?: string;
//   fallbackImage: string;
//   posterImage?: string;
// }

// function HeroVideo({ src, fallbackSrc, fallbackImage, posterImage }: HeroVideoProps) {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [videoState, setVideoState] = useState<'loading' | 'playing' | 'error'>('loading');
//   const [currentSource, setCurrentSource] = useState<'primary' | 'fallback'>('primary');
//   const retryCountRef = useRef(0);
//   const maxRetries = 3;

//   const attemptPlay = useCallback(async () => {
//     const video = videoRef.current;
//     if (!video) return;

//     try {
//       // 1. वीडियो को सुनिश्चित बनाने के लिए शुरुआत से रीसेट करो
//       video.currentTime = 0;
      
//       // 2. सबसे ज़रूरी: Audio अब हमेशा Muted होना चाहिए ताकि Auto-play काम करे
//       video.muted = true; 
      
//       // 3. Play कोशिश करो
//       await video.play();
//       setVideoState('playing');
//       retryCountRef.current = 0;
//     } catch (error) {
//       console.error('Video play failed:', error);
      
//       retryCountRef.current += 1;
      
//       if (retryCountRef.current < maxRetries) {
//         setTimeout(() => attemptPlay(), 1000);
//       } else if (currentSource === 'primary' && fallbackSrc) {
//         console.log('Trying fallback video');
//         setCurrentSource('fallback');
//         retryCountRef.current = 0;
//       } else {
//         setVideoState('error');
//       }
//     }
//   }, [currentSource, fallbackSrc]);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     video.src = (currentSource === 'primary' ? src : fallbackSrc) || src;
//     video.load();

//     video.addEventListener('canplaythrough', attemptPlay);
//     video.addEventListener('error', () => {
//         if (currentSource === 'primary' && fallbackSrc) {
//             setCurrentSource('fallback');
//         } else {
//             setVideoState('error');
//         }
//     });

//     return () => {
//       video.removeEventListener('canplaythrough', attemptPlay);
//       video.removeEventListener('error', () => {});
//     };
//   }, [currentSource, src, fallbackSrc, attemptPlay]);

//   // Handle Error (Show Image)
//   if (videoState === 'error') {
//     return (
//       <div className="relative w-full h-full">
//         <img src={fallbackImage} alt="Hero Background" className="w-full h-full object-cover" />
//       </div>
//     );
//   }

//   // Handle Loading
//   if (videoState === 'loading') {
//     return (
//       <div className="relative w-full h-full bg-charcoal">
//         <img src={posterImage} alt="Loading" className="absolute inset-0 w-full h-full object-cover opacity-30" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <video
//       ref={videoRef}
//       autoPlay
//       loop
//       muted
//       playsInline
//       preload="auto"
//       className="absolute inset-0 w-full h-full object-cover"
//     >
//       <source src={src} type="video/mp4" />
//       {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
//       <img src={fallbackImage} alt="Fallback" className="w-full h-full object-cover" />
//     </video>
//   );
// }

// export function HomePage() {
//   const { navigate } = useNavigation();

//   return (
//     <div>
//       {/* ===== HERO SECTION ===== */}
//       <section className="relative overflow-hidden min-h-screen flex items-center">
//         {/* VIDEO BACKGROUND */}
//         <div className="absolute inset-0">
//           {/* ✅ अब यहाँ सिर्फ Video लगेगा, Image fallback के लिए तैयार रहेगा */}
//           <HeroVideo
//             src="https://www.freepik.com/free-video/african-man-sewing-tissue_2558941#fromView=keyword&page=1&position=2&uuid=4a8103f4-646a-4962-848c-7b417d0728ff" 
//             fallbackSrc="https://www.freepik.com/free-video/african-man-sewing-tissue_2558941#fromView=keyword&page=1&position=2&uuid=4a8103f4-646a-4962-848c-7b417d0728ff" // Optional: अगर एक सोर्स नहीं खुलता तो इसे दूसरा दें
//             fallbackImage={IMG.fabricTexture1}
//             posterImage={IMG.fabricTexture1}
//           />
          
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
//         </div>

//         {/* CONTENT */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 w-full z-10">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
//               World Class<br />
//               Technical <span className="text-silver-light italic font-display">Textiles</span>
//             </h1>
//             <p className="text-lg sm:text-xl text-white leading-relaxed mb-10 max-w-2xl drop-shadow-md">
//               Delivering high-performance technical textiles, advanced industrial fabrics, and innovative material solutions to leading enterprises across 45+ countries worldwide.
//             </p>
//             <button
//               onClick={() => navigate('products')}
//               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal-dark font-bold rounded-lg text-lg transition-all hover:bg-cloud-light hover:shadow-lg hover:-translate-y-0.5"
//             >
//               Discover More <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* STATS BAR */}
//         <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 backdrop-blur-sm">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
//               {[
//                 { value: '28+', label: 'Years of Excellence', icon: Award },
//                 { value: '45+', label: 'Countries Served', icon: Globe2 },
//                 { value: '2,500+', label: 'Product Variants', icon: Layers },
//                 { value: '150+', label: 'Enterprise Clients', icon: Users },
//               ].map((stat) => (
//                 <div key={stat.label} className="py-6 lg:py-8 px-4 lg:px-8 text-center lg:text-left">
//                   <div className="flex items-center gap-3 justify-center lg:justify-start">
//                     <stat.icon className="w-5 h-5 text-silver-light hidden sm:block" />
//                     <span className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</span>
//                   </div>
//                   <p className="text-silver-light text-sm mt-1">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== ABOUT SUMMARY ===== */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div className="relative">
//               <TexImg
//                 src={IMG.production1}
//                 alt="Industrial textile production facility"
//                 className="w-full h-[350px] lg:h-[450px] rounded-2xl"
//               />
//               <div className="absolute bottom-6 right-6 bg-charcoal text-white p-5 rounded-xl">
//                 <p className="text-3xl font-bold">28+</p>
//                 <p className="text-sm text-silver-light">Years in Business</p>
//               </div>
//             </div>
//             <div>
//               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">About KK EXPORT </span>
//               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
//                 Pioneering Textile Solutions for a{' '}
//                 <span className="font-display italic">Connected World</span>
//               </h2>
//               <p className="text-silver-darker leading-relaxed mb-6">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//               </p>
//               <p className="text-silver-darker leading-relaxed mb-8">
//                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
//               </p>
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 {[
//                   { icon: Shield, text: 'ISO 9001:2015 Certified' },
//                   { icon: Globe2, text: 'Global Supply Chain' },
//                   { icon: Zap, text: 'Advanced R&D Center' },
//                   { icon: Leaf, text: 'Eco-Friendly Practices' },
//                 ].map((item) => (
//                   <div key={item.text} className="flex items-center gap-2.5">
//                     <div className="w-8 h-8 bg-cloud-light rounded-lg flex items-center justify-center">
//                       <item.icon className="w-4 h-4 text-charcoal" />
//                     </div>
//                     <span className="text-sm font-medium text-charcoal">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 onClick={() => navigate('about')}
//                 className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
//               >
//                 Learn More About Us <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== PRODUCT CATEGORIES ===== */}
//       <section className="py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-14">
//             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Products</span>
//             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
//               Comprehensive Textile Solutions
//             </h2>
//             <p className="text-silver-darker max-w-2xl mx-auto">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover our extensive range of technical textiles and industrial fabric solutions.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { title: 'Technical Textiles', desc: 'High-performance engineered fabrics for demanding industrial applications and extreme environments.', icon: Layers, img: IMG.fabricTexture1, count: '450+ Variants' },
//               { title: 'Industrial Fabrics', desc: 'Heavy-duty woven and knitted fabrics designed for filtration, conveyor, and industrial process applications.', icon: Factory, img: IMG.production2, count: '380+ Variants' },
//               { title: 'Coated Textiles', desc: 'Advanced polymer-coated fabrics providing superior protection, durability, and weather resistance.', icon: Shield, img: IMG.fabricTexture2, count: '290+ Variants' },
//               { title: 'Nonwoven Fabrics', desc: 'Versatile nonwoven materials for medical, hygiene, geotextile, and automotive interior applications.', icon: Wind, img: IMG.wovenClose1, count: '520+ Variants' },
//               { title: 'Specialty Yarns', desc: 'Premium synthetic and blended yarns engineered for specific performance and aesthetic requirements.', icon: Scissors, img: IMG.thread1, count: '340+ Variants' },
//               { title: 'Smart Textiles', desc: 'Next-generation fabrics with embedded sensors, conductive fibers, and intelligent material properties.', icon: Zap, img: IMG.fabricTexture4, count: '120+ Variants' },
//             ].map((product) => (
//               <button
//                 key={product.title}
//                 onClick={() => navigate('products')}
//                 className="group bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left"
//               >
//                 <TexImg src={product.img} alt={product.title} className="w-full h-48" />
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
//                       <product.icon className="w-5 h-5 text-silver-dark" />
//                       {product.title}
//                     </h3>
//                     <ChevronRight className="w-5 h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
//                   </div>
//                   <p className="text-sm text-silver-darker leading-relaxed mb-4">{product.desc}</p>
//                   <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-3 py-1 rounded-full">
//                     {product.count}
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <button
//               onClick={() => navigate('products')}
//               className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
//             >
//               View All Products <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== INDUSTRY APPLICATIONS ===== */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-14">
//             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Industry Solutions</span>
//             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
//               Textiles Engineered for Every Sector
//             </h2>
//             <p className="text-silver-darker max-w-2xl mx-auto">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {[
//               { name: 'Automotive', icon: Wrench },
//               { name: 'Aerospace', icon: Globe2 },
//               { name: 'Healthcare', icon: Shield },
//               { name: 'Construction', icon: Factory },
//               { name: 'Agriculture', icon: Leaf },
//               { name: 'Defense', icon: Award },
//             ].map((ind) => (
//               <button
//                 key={ind.name}
//                 onClick={() => navigate('industries')}
//                 className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all"
//               >
//                 <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
//                   <ind.icon className="w-6 h-6 text-charcoal" />
//                 </div>
//                 <span className="text-sm font-semibold text-charcoal">{ind.name}</span>
//               </button>
//             ))}
//           </div>

//           <div className="mt-12 relative rounded-2xl overflow-hidden">
//             <img src={IMG.wovenClose2} alt="Woven textile close-up" className="w-full h-[200px] lg:h-[240px] object-cover" />
//             <div className="absolute inset-0 bg-charcoal/85" />
//             <div className="absolute inset-0 flex items-center">
//               <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
//                 <div className="grid lg:grid-cols-3 gap-8 items-center">
//                   <div className="lg:col-span-2">
//                     <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Textile Solution?</h3>
//                     <p className="text-silver">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
//                     </p>
//                   </div>
//                   <div className="lg:text-right">
//                     <button
//                       onClick={() => navigate('contact')}
//                       className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
//                     >
//                       Discuss Your Project <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== MANUFACTURING CAPABILITIES ===== */}
//       <section className="py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div>
//               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
//               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
//                 State-of-the-Art Production Facilities
//               </h2>
//               <p className="text-silver-darker leading-relaxed mb-8">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our integrated manufacturing ecosystem spans 500,000+ sq. ft. across three strategic locations.
//               </p>

//               <div className="space-y-4 mb-8">
//                 {[
//                   { label: 'Weaving & Knitting', value: '85%', width: 'w-[85%]' },
//                   { label: 'Dyeing & Finishing', value: '92%', width: 'w-[92%]' },
//                   { label: 'Quality Testing', value: '98%', width: 'w-[98%]' },
//                   { label: 'R&D Innovation', value: '78%', width: 'w-[78%]' },
//                 ].map((bar) => (
//                   <div key={bar.label}>
//                     <div className="flex justify-between text-sm mb-1.5">
//                       <span className="font-medium text-charcoal">{bar.label}</span>
//                       <span className="font-semibold text-charcoal">{bar.value} Capacity</span>
//                     </div>
//                     <div className="h-2 bg-cloud-dark rounded-full overflow-hidden">
//                       <div className={`h-full bg-charcoal rounded-full ${bar.width}`} />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => navigate('manufacturing')}
//                 className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
//               >
//                 Explore Our Facilities <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <TexImg src={IMG.production1} alt="Weaving unit" className="h-48 rounded-xl" />
//               <TexImg src={IMG.fabricTexture3} alt="Fabric texture" className="h-48 rounded-xl mt-8" />
//               <TexImg src={IMG.wovenClose1} alt="Woven close-up" className="h-48 rounded-xl" />
//               <TexImg src={IMG.thread1} alt="Thread spools" className="h-48 rounded-xl mt-8" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CERTIFICATIONS ===== */}
//       <section className="py-16 lg:py-20 bg-white border-y border-cloud-dark">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-12">
//             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Trust & Compliance</span>
//             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
//               Globally Certified. Locally Trusted.
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
//             {[
//               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
//               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
//             ].map((cert) => (
//               <div
//                 key={cert}
//                 className="flex flex-col items-center gap-3 p-5 bg-cloud-lighter rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
//               >
//                 <div className="w-14 h-14 bg-cloud rounded-full flex items-center justify-center">
//                   <Award className="w-7 h-7 text-charcoal" />
//                 </div>
//                 <span className="text-sm font-semibold text-charcoal text-center">{cert}</span>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-8">
//             <button
//               onClick={() => navigate('certifications')}
//               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-sm border-b border-charcoal pb-0.5"
//             >
//               View All Certifications <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== SUSTAINABILITY ===== */}
//       <section className="py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Sustainability</span>
//               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
//                 Committed to a Greener Textile Future
//               </h2>
//               <p className="text-silver-darker leading-relaxed mb-8">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 {[
//                   { value: '40%', label: 'Water Reduction', icon: Droplets },
//                   { value: '60%', label: 'Renewable Energy', icon: Zap },
//                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
//                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
//                 ].map((metric) => (
//                   <div key={metric.label} className="bg-white rounded-xl p-4 border border-cloud-dark">
//                     <metric.icon className="w-5 h-5 text-charcoal mb-2" />
//                     <p className="text-2xl font-bold text-charcoal">{metric.value}</p>
//                     <p className="text-sm text-silver-dark">{metric.label}</p>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => navigate('sustainability')}
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
//               >
//                 Our Sustainability Journey <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//             <TexImg
//               src={IMG.eco1}
//               alt="Sustainable textile manufacturing"
//               className="w-full h-[400px] rounded-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ===== TESTIMONIALS ===== */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="text-center mb-14">
//             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
//             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
//               Trusted by Industry Leaders Worldwide
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Their technical expertise and quality consistency are unmatched in the industry.',
//                 name: 'Michael Richardson',
//                 role: 'VP of Procurement',
//                 company: 'AutoTech Industries',
//               },
//               {
//                 quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. TexVista has been our strategic partner for over a decade.',
//                 name: 'Sarah Chen',
//                 role: 'Supply Chain Director',
//                 company: 'AeroSpace Dynamics',
//               },
//               {
//                 quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Their R&D team developed a custom solution that exceeded our specifications.',
//                 name: 'Dr. James Weber',
//                 role: 'Head of Materials',
//                 company: 'MediFlex Healthcare',
//               },
//             ].map((t) => (
//               <div
//                 key={t.name}
//                 className="bg-cloud-lighter rounded-2xl p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
//               >
//                 <Quote className="w-8 h-8 text-silver-light mb-4" />
//                 <div className="flex gap-1 mb-4">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className="w-4 h-4 text-charcoal fill-charcoal" />
//                   ))}
//                 </div>
//                 <p className="text-silver-darker leading-relaxed mb-6">{t.quote}</p>
//                 <div className="flex items-center gap-3">
//                   <div className="w-11 h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-sm">
//                     {t.name.split(' ').map((n) => n[0]).join('')}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-charcoal text-sm">{t.name}</p>
//                     <p className="text-xs text-silver-dark">{t.role}, {t.company}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== FINAL CTA ===== */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-charcoal-dark/90" />
//           <div className="absolute inset-0 bg-weave-dark" />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center">
//           <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//             Ready to Transform Your<br />Textile Supply Chain?
//           </h2>
//           <p className="text-silver max-w-2xl mx-auto mb-10 text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <button
//               onClick={() => navigate('contact')}
//               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5"
//             >
//               Get Started Today <ArrowRight className="w-5 h-5" />
//             </button>
//             <button
//               onClick={() => navigate('products')}
//               className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-lg border border-white/20 transition-all"
//             >
//               Download Catalog
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }








import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Globe2,
  Award,
  Leaf,
  Shield,
  Zap,
  TrendingUp,
  Users,
  ChevronRight,
  Star,
  Layers,
  Wrench,
  Droplets,
  Wind,
  Scissors,
  Quote,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

// Simple Image Component (keep this as is)
function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cloud ${className}`}>
      <div className="absolute inset-0 bg-weave opacity-40" />
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

// ✅ IMPROVED HERO VIDEO COMPONENT (Auto-play & Error Handling)
interface HeroVideoProps {
  src: string;
  fallbackSrc?: string;
  fallbackImage: string;
  posterImage?: string;
}

function HeroVideo({ src, fallbackSrc, fallbackImage, posterImage }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState<'loading' | 'playing' | 'error'>('loading');
  const [currentSource, setCurrentSource] = useState<'primary' | 'fallback'>('primary');
  const retryCountRef = useRef(0);
  const maxRetries = 3;

  const attemptPlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      // 1. वीडियो को सुनिश्चित बनाने के लिए शुरुआत से रीसेट करो
      video.currentTime = 0;
      
      // 2. सबसे ज़रूरी: Audio अब हमेशा Muted होना चाहिए ताकि Auto-play काम करे
      video.muted = true; 
      
      // 3. Play कोशिश करो
      await video.play();
      setVideoState('playing');
      retryCountRef.current = 0;
    } catch (error) {
      console.error('Video play failed:', error);
      
      retryCountRef.current += 1;
      
      if (retryCountRef.current < maxRetries) {
        setTimeout(() => attemptPlay(), 1000);
      } else if (currentSource === 'primary' && fallbackSrc) {
        console.log('Trying fallback video');
        setCurrentSource('fallback');
        retryCountRef.current = 0;
      } else {
        setVideoState('error');
      }
    }
  }, [currentSource, fallbackSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = (currentSource === 'primary' ? src : fallbackSrc) || src;
    video.load();

    video.addEventListener('canplaythrough', attemptPlay);
    video.addEventListener('error', () => {
        if (currentSource === 'primary' && fallbackSrc) {
            setCurrentSource('fallback');
        } else {
            setVideoState('error');
        }
    });

    return () => {
      video.removeEventListener('canplaythrough', attemptPlay);
      video.removeEventListener('error', () => {});
    };
  }, [currentSource, src, fallbackSrc, attemptPlay]);

  // Handle Error (Show Image)
  if (videoState === 'error') {
    return (
      <div className="relative w-full h-full">
        <img src={fallbackImage} alt="Hero Background" className="w-full h-full object-cover" />
      </div>
    );
  }

  // Handle Loading
  if (videoState === 'loading') {
    return (
      <div className="relative w-full h-full bg-charcoal">
        <img src={posterImage} alt="Loading" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={src} type="video/mp4" />
      {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
      <img src={fallbackImage} alt="Fallback" className="w-full h-full object-cover" />
    </video>
  );
}

export function HomePage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
    <section className="relative overflow-hidden min-h-screen flex items-center">

  {/* VIDEO BACKGROUND */}
  <div className="absolute inset-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      poster="/images/fallback.jpg"
    >
      <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
  </div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 w-full z-10">
    <div className="max-w-3xl">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
        World Class<br />
        Technical <span className="text-silver-light italic font-display">Textiles</span>
      </h1>

      <p className="text-lg sm:text-xl text-white leading-relaxed mb-10 max-w-2xl drop-shadow-md">
        Delivering high-performance technical textiles, advanced industrial fabrics, and innovative material solutions to leading enterprises across 45+ countries worldwide.
      </p>

      <button
        onClick={() => navigate('products')}
        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal-dark font-bold rounded-lg text-lg transition-all hover:bg-cloud-light hover:shadow-lg hover:-translate-y-0.5"
      >
        Discover More →
      </button>
    </div>
  </div>

  {/* STATS BAR */}
 

</section>


      {/* ===== ABOUT SUMMARY ===== */}
     <style>{`
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); 
    }
  }
  .animate-scroll {
    animation: scroll-left 20s linear infinite;
  }
`}</style>

<section className="py-16 lg:py-24 bg-white relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* ===== LEFT SIDE IMAGE ===== */}
      <div className="relative">
        <TexImg
          src={IMG.production1}
          alt="Industrial textile production facility"
          className="w-full h-[350px] lg:h-[450px] rounded-2xl"
        />
        <div className="absolute bottom-6 right-6 bg-charcoal text-white p-5 rounded-xl shadow-lg">
          <p className="text-3xl font-bold">28+</p>
          <p className="text-sm text-silver-light">Years in Business</p>
        </div>
      </div>

      {/* ===== RIGHT SIDE TEXT ===== */}
      <div>
        <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">About KK EXPORT </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
          Pioneering Textile Solutions for a{' '}
          <span className="font-display italic">Connected World</span>
        </h2>
        <p className="text-silver-darker leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-silver-darker leading-relaxed mb-8">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { icon: Shield, text: 'ISO 9001:2015 Certified' },
            { icon: Globe2, text: 'Global Supply Chain' },
            { icon: Zap, text: 'Advanced R&D Center' },
            { icon: Leaf, text: 'Eco-Friendly Practices' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-cloud-light rounded-lg flex items-center justify-center">
                <item.icon className="w-4 h-4 text-charcoal" />
              </div>
              <span className="text-sm font-medium text-charcoal">{item.text}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('about')}
          className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
        >
          Learn More About Us <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  </div>

  {/* ===== SCROLLING IMAGE SECTION (Single Image) ===== */}
  <div className="w-full overflow-hidden ">
    {/* Trick: We use w-[200%] so the single image has room to slide from left to right */}
    <div className="">
      {/* ONLY ONE IMAGE */}
      <img 
        src="/image/aboutimg.png" 
        alt="Scrolling Process" 
        className="h-32 w-auto object-contain animate-scroll" 
      />
    </div>
  </div>
</section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
              Comprehensive Textile Solutions
            </h2>
            <p className="text-silver-darker max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover our extensive range of technical textiles and industrial fabric solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Technical Textiles', desc: 'High-performance engineered fabrics for demanding industrial applications and extreme environments.', icon: Layers, img: IMG.fabricTexture1, count: '450+ Variants' },
              { title: 'Industrial Fabrics', desc: 'Heavy-duty woven and knitted fabrics designed for filtration, conveyor, and industrial process applications.', icon: Factory, img: IMG.production2, count: '380+ Variants' },
              { title: 'Coated Textiles', desc: 'Advanced polymer-coated fabrics providing superior protection, durability, and weather resistance.', icon: Shield, img: IMG.fabricTexture2, count: '290+ Variants' },
              { title: 'Nonwoven Fabrics', desc: 'Versatile nonwoven materials for medical, hygiene, geotextile, and automotive interior applications.', icon: Wind, img: IMG.wovenClose1, count: '520+ Variants' },
              { title: 'Specialty Yarns', desc: 'Premium synthetic and blended yarns engineered for specific performance and aesthetic requirements.', icon: Scissors, img: IMG.thread1, count: '340+ Variants' },
              { title: 'Smart Textiles', desc: 'Next-generation fabrics with embedded sensors, conductive fibers, and intelligent material properties.', icon: Zap, img: IMG.fabricTexture4, count: '120+ Variants' },
            ].map((product) => (
              <button
                key={product.title}
                onClick={() => navigate('products')}
                className="group bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <TexImg src={product.img} alt={product.title} className="w-full h-48" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
                      <product.icon className="w-5 h-5 text-silver-dark" />
                      {product.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-silver-darker leading-relaxed mb-4">{product.desc}</p>
                  <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-3 py-1 rounded-full">
                    {product.count}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => navigate('products')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY APPLICATIONS ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Industry Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
              Textiles Engineered for Every Sector
            </h2>
            <p className="text-silver-darker max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Automotive', icon: Wrench },
              { name: 'Aerospace', icon: Globe2 },
              { name: 'Healthcare', icon: Shield },
              { name: 'Construction', icon: Factory },
              { name: 'Agriculture', icon: Leaf },
              { name: 'Defense', icon: Award },
            ].map((ind) => (
              <button
                key={ind.name}
                onClick={() => navigate('industries')}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
                  <ind.icon className="w-6 h-6 text-charcoal" />
                </div>
                <span className="text-sm font-semibold text-charcoal">{ind.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-12 relative rounded-2xl overflow-hidden">
            <img src={IMG.wovenClose2} alt="Woven textile close-up" className="w-full h-[200px] lg:h-[240px] object-cover" />
            <div className="absolute inset-0 bg-charcoal/85" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Textile Solution?</h3>
                    <p className="text-silver">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <button
                      onClick={() => navigate('contact')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
                    >
                      Discuss Your Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MANUFACTURING CAPABILITIES ===== */}
      {/* <section className="py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
                State-of-the-Art Production Facilities
              </h2>
              <p className="text-silver-darker leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our integrated manufacturing ecosystem spans 500,000+ sq. ft. across three strategic locations.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Weaving & Knitting', value: '85%', width: 'w-[85%]' },
                  { label: 'Dyeing & Finishing', value: '92%', width: 'w-[92%]' },
                  { label: 'Quality Testing', value: '98%', width: 'w-[98%]' },
                  { label: 'R&D Innovation', value: '78%', width: 'w-[78%]' },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-charcoal">{bar.label}</span>
                      <span className="font-semibold text-charcoal">{bar.value} Capacity</span>
                    </div>
                    <div className="h-2 bg-cloud-dark rounded-full overflow-hidden">
                      <div className={`h-full bg-charcoal rounded-full ${bar.width}`} />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('manufacturing')}
                className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
              >
                Explore Our Facilities <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <TexImg src={IMG.production1} alt="Weaving unit" className="h-48 rounded-xl" />
              <TexImg src={IMG.fabricTexture3} alt="Fabric texture" className="h-48 rounded-xl mt-8" />
              <TexImg src={IMG.wovenClose1} alt="Woven close-up" className="h-48 rounded-xl" />
              <TexImg src={IMG.thread1} alt="Thread spools" className="h-48 rounded-xl mt-8" />
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative w-full h-[600px] overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="py-16 lg:py-20 bg-white border-y border-cloud-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Trust & Compliance</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
              Globally Certified. Locally Trusted.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
              'REACH Compliant', 'GRS Certified', 'BSCI Audited',
            ].map((cert) => (
              <div
                key={cert}
                className="flex flex-col items-center gap-3 p-5 bg-cloud-lighter rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-cloud rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-charcoal" />
                </div>
                <span className="text-sm font-semibold text-charcoal text-center">{cert}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('certifications')}
              className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-sm border-b border-charcoal pb-0.5"
            >
              View All Certifications <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY ===== */}
      <section className="py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Sustainability</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
                Committed to a Greener Textile Future
              </h2>
              <p className="text-silver-darker leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '40%', label: 'Water Reduction', icon: Droplets },
                  { value: '60%', label: 'Renewable Energy', icon: Zap },
                  { value: '85%', label: 'Waste Recycled', icon: Leaf },
                  { value: '30%', label: 'Carbon Reduction', icon: Wind },
                ].map((metric) => (
                  <div key={metric.label} className="bg-white rounded-xl p-4 border border-cloud-dark">
                    <metric.icon className="w-5 h-5 text-charcoal mb-2" />
                    <p className="text-2xl font-bold text-charcoal">{metric.value}</p>
                    <p className="text-sm text-silver-dark">{metric.label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('sustainability')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
              >
                Our Sustainability Journey <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <TexImg
              src={IMG.eco1}
              alt="Sustainable textile manufacturing"
              className="w-full h-[400px] rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
              Trusted by Industry Leaders Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Their technical expertise and quality consistency are unmatched in the industry.',
                name: 'Michael Richardson',
                role: 'VP of Procurement',
                company: 'AutoTech Industries',
              },
              {
                quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. TexVista has been our strategic partner for over a decade.',
                name: 'Sarah Chen',
                role: 'Supply Chain Director',
                company: 'AeroSpace Dynamics',
              },
              {
                quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Their R&D team developed a custom solution that exceeded our specifications.',
                name: 'Dr. James Weber',
                role: 'Head of Materials',
                company: 'MediFlex Healthcare',
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-cloud-lighter rounded-2xl p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
              >
                <Quote className="w-8 h-8 text-silver-light mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-charcoal fill-charcoal" />
                  ))}
                </div>
                <p className="text-silver-darker leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                    <p className="text-xs text-silver-dark">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/90" />
          <div className="absolute inset-0 bg-weave-dark" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your<br />Textile Supply Chain?
          </h2>
          <p className="text-silver max-w-2xl mx-auto mb-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5"
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('products')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-lg border border-white/20 transition-all"
            >
              Download Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}