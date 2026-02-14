// // import { useState, useRef, useEffect, useCallback } from 'react';
// // import { useNavigation } from '../context/NavigationContext';
// // import { IMG } from '../constants/images';
// // import {
// //   ArrowRight,
// //   CheckCircle2,
// //   Factory,
// //   Globe2,
// //   Award,
// //   Leaf,
// //   Shield,
// //   Zap,
// //   TrendingUp,
// //   Users,
// //   ChevronRight,
// //   Star,
// //   Layers,
// //   Wrench,
// //   Droplets,
// //   Wind,
// //   Scissors,
// //   Quote,
// //   AlertCircle,
// //   RefreshCw,
// // } from 'lucide-react';

// // // Simple Image Component (keep this as is)
// // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// //   return (
// //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// //       <div className="absolute inset-0 bg-weave opacity-40" />
// //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// //     </div>
// //   );
// // }

// // // ✅ IMPROVED HERO VIDEO COMPONENT (Auto-play & Error Handling)
// // interface HeroVideoProps {
// //   src: string;
// //   fallbackSrc?: string;
// //   fallbackImage: string;
// //   posterImage?: string;
// // }

// // function HeroVideo({ src, fallbackSrc, fallbackImage, posterImage }: HeroVideoProps) {
// //   const videoRef = useRef<HTMLVideoElement>(null);
// //   const [videoState, setVideoState] = useState<'loading' | 'playing' | 'error'>('loading');
// //   const [currentSource, setCurrentSource] = useState<'primary' | 'fallback'>('primary');
// //   const retryCountRef = useRef(0);
// //   const maxRetries = 3;

// //   const attemptPlay = useCallback(async () => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     try {
// //       // 1. वीडियो को सुनिश्चित बनाने के लिए शुरुआत से रीसेट करो
// //       video.currentTime = 0;
      
// //       // 2. सबसे ज़रूरी: Audio अब हमेशा Muted होना चाहिए ताकि Auto-play काम करे
// //       video.muted = true; 
      
// //       // 3. Play कोशिश करो
// //       await video.play();
// //       setVideoState('playing');
// //       retryCountRef.current = 0;
// //     } catch (error) {
// //       console.error('Video play failed:', error);
      
// //       retryCountRef.current += 1;
      
// //       if (retryCountRef.current < maxRetries) {
// //         setTimeout(() => attemptPlay(), 1000);
// //       } else if (currentSource === 'primary' && fallbackSrc) {
// //         console.log('Trying fallback video');
// //         setCurrentSource('fallback');
// //         retryCountRef.current = 0;
// //       } else {
// //         setVideoState('error');
// //       }
// //     }
// //   }, [currentSource, fallbackSrc]);

// //   useEffect(() => {
// //     const video = videoRef.current;
// //     if (!video) return;

// //     video.src = (currentSource === 'primary' ? src : fallbackSrc) || src;
// //     video.load();

// //     video.addEventListener('canplaythrough', attemptPlay);
// //     video.addEventListener('error', () => {
// //         if (currentSource === 'primary' && fallbackSrc) {
// //             setCurrentSource('fallback');
// //         } else {
// //             setVideoState('error');
// //         }
// //     });

// //     return () => {
// //       video.removeEventListener('canplaythrough', attemptPlay);
// //       video.removeEventListener('error', () => {});
// //     };
// //   }, [currentSource, src, fallbackSrc, attemptPlay]);

// //   // Handle Error (Show Image)
// //   if (videoState === 'error') {
// //     return (
// //       <div className="relative w-full h-full">
// //         <img src={fallbackImage} alt="Hero Background" className="w-full h-full object-cover" />
// //       </div>
// //     );
// //   }

// //   // Handle Loading
// //   if (videoState === 'loading') {
// //     return (
// //       <div className="relative w-full h-full bg-charcoal">
// //         <img src={posterImage} alt="Loading" className="absolute inset-0 w-full h-full object-cover opacity-30" />
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <video
// //       ref={videoRef}
// //       autoPlay
// //       loop
// //       muted
// //       playsInline
// //       preload="auto"
// //       className="absolute inset-0 w-full h-full object-cover"
// //     >
// //       <source src={src} type="video/mp4" />
// //       {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
// //       <img src={fallbackImage} alt="Fallback" className="w-full h-full object-cover" />
// //     </video>
// //   );
// // }

// // export function HomePage() {
// //   const { navigate } = useNavigation();

// //   return (
// //     <div>
// //       {/* ===== HERO SECTION ===== */}
// //       <section className="relative overflow-hidden min-h-screen flex items-center">
// //         {/* VIDEO BACKGROUND */}
// //         <div className="absolute inset-0">
// //           {/* ✅ अब यहाँ सिर्फ Video लगेगा, Image fallback के लिए तैयार रहेगा */}
// //           <HeroVideo
// //             src="https://www.freepik.com/free-video/african-man-sewing-tissue_2558941#fromView=keyword&page=1&position=2&uuid=4a8103f4-646a-4962-848c-7b417d0728ff" 
// //             fallbackSrc="https://www.freepik.com/free-video/african-man-sewing-tissue_2558941#fromView=keyword&page=1&position=2&uuid=4a8103f4-646a-4962-848c-7b417d0728ff" // Optional: अगर एक सोर्स नहीं खुलता तो इसे दूसरा दें
// //             fallbackImage={IMG.fabricTexture1}
// //             posterImage={IMG.fabricTexture1}
// //           />
          
// //           {/* Overlay */}
// //           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
// //         </div>

// //         {/* CONTENT */}
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 w-full z-10">
// //           <div className="max-w-3xl">
// //             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
// //               World Class<br />
// //               Technical <span className="text-silver-light italic font-display">Textiles</span>
// //             </h1>
// //             <p className="text-lg sm:text-xl text-white leading-relaxed mb-10 max-w-2xl drop-shadow-md">
// //               Delivering high-performance technical textiles, advanced industrial fabrics, and innovative material solutions to leading enterprises across 45+ countries worldwide.
// //             </p>
// //             <button
// //               onClick={() => navigate('products')}
// //               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal-dark font-bold rounded-lg text-lg transition-all hover:bg-cloud-light hover:shadow-lg hover:-translate-y-0.5"
// //             >
// //               Discover More <ArrowRight className="w-5 h-5" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* STATS BAR */}
// //         <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 backdrop-blur-sm">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //             <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
// //               {[
// //                 { value: '28+', label: 'Years of Excellence', icon: Award },
// //                 { value: '45+', label: 'Countries Served', icon: Globe2 },
// //                 { value: '2,500+', label: 'Product Variants', icon: Layers },
// //                 { value: '150+', label: 'Enterprise Clients', icon: Users },
// //               ].map((stat) => (
// //                 <div key={stat.label} className="py-6 lg:py-8 px-4 lg:px-8 text-center lg:text-left">
// //                   <div className="flex items-center gap-3 justify-center lg:justify-start">
// //                     <stat.icon className="w-5 h-5 text-silver-light hidden sm:block" />
// //                     <span className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</span>
// //                   </div>
// //                   <p className="text-silver-light text-sm mt-1">{stat.label}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== ABOUT SUMMARY ===== */}
// //       <section className="py-16 lg:py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// //             <div className="relative">
// //               <TexImg
// //                 src={IMG.production1}
// //                 alt="Industrial textile production facility"
// //                 className="w-full h-[350px] lg:h-[450px] rounded-2xl"
// //               />
// //               <div className="absolute bottom-6 right-6 bg-charcoal text-white p-5 rounded-xl">
// //                 <p className="text-3xl font-bold">28+</p>
// //                 <p className="text-sm text-silver-light">Years in Business</p>
// //               </div>
// //             </div>
// //             <div>
// //               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">About KK EXPORT </span>
// //               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// //                 Pioneering Textile Solutions for a{' '}
// //                 <span className="font-display italic">Connected World</span>
// //               </h2>
// //               <p className="text-silver-darker leading-relaxed mb-6">
// //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// //               </p>
// //               <p className="text-silver-darker leading-relaxed mb-8">
// //                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
// //               </p>
// //               <div className="grid grid-cols-2 gap-4 mb-8">
// //                 {[
// //                   { icon: Shield, text: 'ISO 9001:2015 Certified' },
// //                   { icon: Globe2, text: 'Global Supply Chain' },
// //                   { icon: Zap, text: 'Advanced R&D Center' },
// //                   { icon: Leaf, text: 'Eco-Friendly Practices' },
// //                 ].map((item) => (
// //                   <div key={item.text} className="flex items-center gap-2.5">
// //                     <div className="w-8 h-8 bg-cloud-light rounded-lg flex items-center justify-center">
// //                       <item.icon className="w-4 h-4 text-charcoal" />
// //                     </div>
// //                     <span className="text-sm font-medium text-charcoal">{item.text}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //               <button
// //                 onClick={() => navigate('about')}
// //                 className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
// //               >
// //                 Learn More About Us <ArrowRight className="w-4 h-4" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== PRODUCT CATEGORIES ===== */}
// //       <section className="py-16 lg:py-24 bg-cloud-lighter">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="text-center mb-14">
// //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Products</span>
// //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// //               Comprehensive Textile Solutions
// //             </h2>
// //             <p className="text-silver-darker max-w-2xl mx-auto">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover our extensive range of technical textiles and industrial fabric solutions.
// //             </p>
// //           </div>

// //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {[
// //               { title: 'Technical Textiles', desc: 'High-performance engineered fabrics for demanding industrial applications and extreme environments.', icon: Layers, img: IMG.fabricTexture1, count: '450+ Variants' },
// //               { title: 'Industrial Fabrics', desc: 'Heavy-duty woven and knitted fabrics designed for filtration, conveyor, and industrial process applications.', icon: Factory, img: IMG.production2, count: '380+ Variants' },
// //               { title: 'Coated Textiles', desc: 'Advanced polymer-coated fabrics providing superior protection, durability, and weather resistance.', icon: Shield, img: IMG.fabricTexture2, count: '290+ Variants' },
// //               { title: 'Nonwoven Fabrics', desc: 'Versatile nonwoven materials for medical, hygiene, geotextile, and automotive interior applications.', icon: Wind, img: IMG.wovenClose1, count: '520+ Variants' },
// //               { title: 'Specialty Yarns', desc: 'Premium synthetic and blended yarns engineered for specific performance and aesthetic requirements.', icon: Scissors, img: IMG.thread1, count: '340+ Variants' },
// //               { title: 'Smart Textiles', desc: 'Next-generation fabrics with embedded sensors, conductive fibers, and intelligent material properties.', icon: Zap, img: IMG.fabricTexture4, count: '120+ Variants' },
// //             ].map((product) => (
// //               <button
// //                 key={product.title}
// //                 onClick={() => navigate('products')}
// //                 className="group bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left"
// //               >
// //                 <TexImg src={product.img} alt={product.title} className="w-full h-48" />
// //                 <div className="p-6">
// //                   <div className="flex items-center justify-between mb-3">
// //                     <h3 className="text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
// //                       <product.icon className="w-5 h-5 text-silver-dark" />
// //                       {product.title}
// //                     </h3>
// //                     <ChevronRight className="w-5 h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
// //                   </div>
// //                   <p className="text-sm text-silver-darker leading-relaxed mb-4">{product.desc}</p>
// //                   <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-3 py-1 rounded-full">
// //                     {product.count}
// //                   </span>
// //                 </div>
// //               </button>
// //             ))}
// //           </div>

// //           <div className="text-center mt-10">
// //             <button
// //               onClick={() => navigate('products')}
// //               className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
// //             >
// //               View All Products <ArrowRight className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== INDUSTRY APPLICATIONS ===== */}
// //       <section className="py-16 lg:py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="text-center mb-14">
// //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Industry Solutions</span>
// //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// //               Textiles Engineered for Every Sector
// //             </h2>
// //             <p className="text-silver-darker max-w-2xl mx-auto">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// //             {[
// //               { name: 'Automotive', icon: Wrench },
// //               { name: 'Aerospace', icon: Globe2 },
// //               { name: 'Healthcare', icon: Shield },
// //               { name: 'Construction', icon: Factory },
// //               { name: 'Agriculture', icon: Leaf },
// //               { name: 'Defense', icon: Award },
// //             ].map((ind) => (
// //               <button
// //                 key={ind.name}
// //                 onClick={() => navigate('industries')}
// //                 className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all"
// //               >
// //                 <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
// //                   <ind.icon className="w-6 h-6 text-charcoal" />
// //                 </div>
// //                 <span className="text-sm font-semibold text-charcoal">{ind.name}</span>
// //               </button>
// //             ))}
// //           </div>

// //           <div className="mt-12 relative rounded-2xl overflow-hidden">
// //             <img src={IMG.wovenClose2} alt="Woven textile close-up" className="w-full h-[200px] lg:h-[240px] object-cover" />
// //             <div className="absolute inset-0 bg-charcoal/85" />
// //             <div className="absolute inset-0 flex items-center">
// //               <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
// //                 <div className="grid lg:grid-cols-3 gap-8 items-center">
// //                   <div className="lg:col-span-2">
// //                     <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Textile Solution?</h3>
// //                     <p className="text-silver">
// //                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
// //                     </p>
// //                   </div>
// //                   <div className="lg:text-right">
// //                     <button
// //                       onClick={() => navigate('contact')}
// //                       className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
// //                     >
// //                       Discuss Your Project <ArrowRight className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== MANUFACTURING CAPABILITIES ===== */}
// //       <section className="py-16 lg:py-24 bg-cloud-lighter">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// //             <div>
// //               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
// //               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// //                 State-of-the-Art Production Facilities
// //               </h2>
// //               <p className="text-silver-darker leading-relaxed mb-8">
// //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our integrated manufacturing ecosystem spans 500,000+ sq. ft. across three strategic locations.
// //               </p>

// //               <div className="space-y-4 mb-8">
// //                 {[
// //                   { label: 'Weaving & Knitting', value: '85%', width: 'w-[85%]' },
// //                   { label: 'Dyeing & Finishing', value: '92%', width: 'w-[92%]' },
// //                   { label: 'Quality Testing', value: '98%', width: 'w-[98%]' },
// //                   { label: 'R&D Innovation', value: '78%', width: 'w-[78%]' },
// //                 ].map((bar) => (
// //                   <div key={bar.label}>
// //                     <div className="flex justify-between text-sm mb-1.5">
// //                       <span className="font-medium text-charcoal">{bar.label}</span>
// //                       <span className="font-semibold text-charcoal">{bar.value} Capacity</span>
// //                     </div>
// //                     <div className="h-2 bg-cloud-dark rounded-full overflow-hidden">
// //                       <div className={`h-full bg-charcoal rounded-full ${bar.width}`} />
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>

// //               <button
// //                 onClick={() => navigate('manufacturing')}
// //                 className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
// //               >
// //                 Explore Our Facilities <ArrowRight className="w-4 h-4" />
// //               </button>
// //             </div>

// //             <div className="grid grid-cols-2 gap-4">
// //               <TexImg src={IMG.production1} alt="Weaving unit" className="h-48 rounded-xl" />
// //               <TexImg src={IMG.fabricTexture3} alt="Fabric texture" className="h-48 rounded-xl mt-8" />
// //               <TexImg src={IMG.wovenClose1} alt="Woven close-up" className="h-48 rounded-xl" />
// //               <TexImg src={IMG.thread1} alt="Thread spools" className="h-48 rounded-xl mt-8" />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== CERTIFICATIONS ===== */}
// //       <section className="py-16 lg:py-20 bg-white border-y border-cloud-dark">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="text-center mb-12">
// //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Trust & Compliance</span>
// //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// //               Globally Certified. Locally Trusted.
// //             </h2>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
// //             {[
// //               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
// //               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
// //             ].map((cert) => (
// //               <div
// //                 key={cert}
// //                 className="flex flex-col items-center gap-3 p-5 bg-cloud-lighter rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
// //               >
// //                 <div className="w-14 h-14 bg-cloud rounded-full flex items-center justify-center">
// //                   <Award className="w-7 h-7 text-charcoal" />
// //                 </div>
// //                 <span className="text-sm font-semibold text-charcoal text-center">{cert}</span>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="text-center mt-8">
// //             <button
// //               onClick={() => navigate('certifications')}
// //               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-sm border-b border-charcoal pb-0.5"
// //             >
// //               View All Certifications <ArrowRight className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== SUSTAINABILITY ===== */}
// //       <section className="py-16 lg:py-24 bg-cloud-lighter">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Sustainability</span>
// //               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// //                 Committed to a Greener Textile Future
// //               </h2>
// //               <p className="text-silver-darker leading-relaxed mb-8">
// //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
// //               </p>

// //               <div className="grid grid-cols-2 gap-4 mb-8">
// //                 {[
// //                   { value: '40%', label: 'Water Reduction', icon: Droplets },
// //                   { value: '60%', label: 'Renewable Energy', icon: Zap },
// //                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
// //                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
// //                 ].map((metric) => (
// //                   <div key={metric.label} className="bg-white rounded-xl p-4 border border-cloud-dark">
// //                     <metric.icon className="w-5 h-5 text-charcoal mb-2" />
// //                     <p className="text-2xl font-bold text-charcoal">{metric.value}</p>
// //                     <p className="text-sm text-silver-dark">{metric.label}</p>
// //                   </div>
// //                 ))}
// //               </div>

// //               <button
// //                 onClick={() => navigate('sustainability')}
// //                 className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
// //               >
// //                 Our Sustainability Journey <ArrowRight className="w-4 h-4" />
// //               </button>
// //             </div>
// //             <TexImg
// //               src={IMG.eco1}
// //               alt="Sustainable textile manufacturing"
// //               className="w-full h-[400px] rounded-2xl"
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== TESTIMONIALS ===== */}
// //       <section className="py-16 lg:py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="text-center mb-14">
// //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
// //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// //               Trusted by Industry Leaders Worldwide
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-6">
// //             {[
// //               {
// //                 quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Their technical expertise and quality consistency are unmatched in the industry.',
// //                 name: 'Michael Richardson',
// //                 role: 'VP of Procurement',
// //                 company: 'AutoTech Industries',
// //               },
// //               {
// //                 quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. TexVista has been our strategic partner for over a decade.',
// //                 name: 'Sarah Chen',
// //                 role: 'Supply Chain Director',
// //                 company: 'AeroSpace Dynamics',
// //               },
// //               {
// //                 quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Their R&D team developed a custom solution that exceeded our specifications.',
// //                 name: 'Dr. James Weber',
// //                 role: 'Head of Materials',
// //                 company: 'MediFlex Healthcare',
// //               },
// //             ].map((t) => (
// //               <div
// //                 key={t.name}
// //                 className="bg-cloud-lighter rounded-2xl p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
// //               >
// //                 <Quote className="w-8 h-8 text-silver-light mb-4" />
// //                 <div className="flex gap-1 mb-4">
// //                   {Array.from({ length: 5 }).map((_, i) => (
// //                     <Star key={i} className="w-4 h-4 text-charcoal fill-charcoal" />
// //                   ))}
// //                 </div>
// //                 <p className="text-silver-darker leading-relaxed mb-6">{t.quote}</p>
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-11 h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-sm">
// //                     {t.name.split(' ').map((n) => n[0]).join('')}
// //                   </div>
// //                   <div>
// //                     <p className="font-semibold text-charcoal text-sm">{t.name}</p>
// //                     <p className="text-xs text-silver-dark">{t.role}, {t.company}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== FINAL CTA ===== */}
// //       <section className="relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
// //           <div className="absolute inset-0 bg-charcoal-dark/90" />
// //           <div className="absolute inset-0 bg-weave-dark" />
// //         </div>
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center">
// //           <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
// //             Ready to Transform Your<br />Textile Supply Chain?
// //           </h2>
// //           <p className="text-silver max-w-2xl mx-auto mb-10 text-lg">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
// //           </p>
// //           <div className="flex flex-wrap gap-4 justify-center">
// //             <button
// //               onClick={() => navigate('contact')}
// //               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5"
// //             >
// //               Get Started Today <ArrowRight className="w-5 h-5" />
// //             </button>
// //             <button
// //               onClick={() => navigate('products')}
// //               className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-lg border border-white/20 transition-all"
// //             >
// //               Download Catalog
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }








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
//     <section className="relative overflow-hidden min-h-screen flex items-center">

//   {/* VIDEO BACKGROUND */}
//   <div className="absolute inset-0">
//     <video
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="w-full h-full object-cover"
//       poster="/images/fallback.jpg"
//     >
//       <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
//     </video>

//     {/* Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
//   </div>

//   {/* CONTENT */}
//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 w-full z-10">
//     <div className="max-w-3xl">
//       <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
//         World Class<br />
//         Technical <span className="text-silver-light italic font-display">Textiles</span>
//       </h1>

//       <p className="text-lg sm:text-xl text-white leading-relaxed mb-10 max-w-2xl drop-shadow-md">
//         Delivering high-performance technical textiles, advanced industrial fabrics, and innovative material solutions to leading enterprises across 45+ countries worldwide.
//       </p>

//       <button
//         onClick={() => navigate('products')}
//         className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal-dark font-bold rounded-lg text-lg transition-all hover:bg-cloud-light hover:shadow-lg hover:-translate-y-0.5"
//       >
//         Discover More →
//       </button>
//     </div>
//   </div>

//   {/* STATS BAR */}
 

// </section>


//       {/* ===== ABOUT SUMMARY ===== */}
//      <style>{`
//   @keyframes scroll-left {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-50%); 
//     }
//   }
//   .animate-scroll {
//     animation: scroll-left 20s linear infinite;
//   }
// `}</style>

// <section className="py-16 lg:py-24 bg-white relative">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6">
//     <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
//       {/* ===== LEFT SIDE IMAGE ===== */}
//       <div className="relative">
//         <TexImg
//           src={IMG.production1}
//           alt="Industrial textile production facility"
//           className="w-full h-[350px] lg:h-[450px] rounded-2xl"
//         />
//         <div className="absolute bottom-6 right-6 bg-charcoal text-white p-5 rounded-xl shadow-lg">
//           <p className="text-3xl font-bold">28+</p>
//           <p className="text-sm text-silver-light">Years in Business</p>
//         </div>
//       </div>

//       {/* ===== RIGHT SIDE TEXT ===== */}
//       <div>
//         <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">About KK EXPORT </span>
//         <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
//           Pioneering Textile Solutions for a{' '}
//           <span className="font-display italic">Connected World</span>
//         </h2>
//         <p className="text-silver-darker leading-relaxed mb-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </p>
//         <p className="text-silver-darker leading-relaxed mb-8">
//           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
//         </p>

//         <div className="grid grid-cols-2 gap-4 mb-8">
//           {[
//             { icon: Shield, text: 'ISO 9001:2015 Certified' },
//             { icon: Globe2, text: 'Global Supply Chain' },
//             { icon: Zap, text: 'Advanced R&D Center' },
//             { icon: Leaf, text: 'Eco-Friendly Practices' },
//           ].map((item) => (
//             <div key={item.text} className="flex items-center gap-2.5">
//               <div className="w-8 h-8 bg-cloud-light rounded-lg flex items-center justify-center">
//                 <item.icon className="w-4 h-4 text-charcoal" />
//               </div>
//               <span className="text-sm font-medium text-charcoal">{item.text}</span>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={() => navigate('about')}
//           className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
//         >
//           Learn More About Us <ArrowRight className="w-4 h-4" />
//         </button>
//       </div>

//     </div>
//   </div>

//   {/* ===== SCROLLING IMAGE SECTION (Single Image) ===== */}
//   <div className="w-full overflow-hidden ">
//     {/* Trick: We use w-[200%] so the single image has room to slide from left to right */}
//     <div className="">
//       {/* ONLY ONE IMAGE */}
//       <img 
//         src="/image/aboutimg.png" 
//         alt="Scrolling Process" 
//         className="h-32 w-auto object-contain animate-scroll" 
//       />
//     </div>
//   </div>
// </section>

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
//       {/* <section className="py-16 lg:py-24 bg-cloud-lighter">
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
//       </section> */}
//       <section className="relative w-full h-[600px] overflow-hidden">
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="w-full h-full object-cover"
//   >
//     <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
// </section>

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

// Simple Image Component
function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cloud ${className}`}>
      <div className="absolute inset-0 bg-weave opacity-40" />
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

export function HomePage() {
  const { navigate } = useNavigation();
  const scrollImageRef = useRef<HTMLDivElement>(null);

  // Scroll animation effect for image
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (scrollImageRef.current) {
      observer.observe(scrollImageRef.current);
    }

    return () => {
      if (scrollImageRef.current) {
        observer.unobserve(scrollImageRef.current);
      }
    };
  }, []);

  return (
    <div className="font-body">
      {/* ===== STYLES ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        
        :root {
          --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
        }
        
        .font-body {
          font-family: var(--font-body);
        }
        
        .font-display {
          font-family: var(--font-display);
        }

        .scroll-slide-container {
          width: 100%;
          position: relative;
        }

        .scroll-slide-image {
          transform: translateX(-100%);
          transition: transform 1.5s ease-out;
        }

        .scroll-slide-container.in-view .scroll-slide-image {
          transform: translateX(0);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
          
      `}</style>

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[70vh] lg:min-h-screen flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32 w-full z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
              End to<br />
              end solutions <span className="text-silver-light italic font-display">from concept to store</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed mb-8 sm:mb-10 max-w-2xl drop-shadow-md">
              Delivering high-performance technical textiles, advanced industrial fabrics, and innovative material solutions to leading enterprises across 45+ countries worldwide.
            </p>

            <button
              onClick={() => navigate('products')}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal-dark font-bold rounded-lg text-base sm:text-lg transition-all hover:bg-cloud-light hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              Discover Product <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SUMMARY ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
            <div className="relative order-2 lg:order-1">
              <TexImg
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxsaGRgYGBggIBgaHhgYGBghGx0aHSggIBomGx0dIjEhJikrLi4uGh8zODMsNygtLisBCgoKDg0OGxAQGy8lHyUtLS0tLTIuLS0tOC0tLS0tLS0tLi8tLS0tLS0tLS0tLS0vLS0tLS0tLS0tKy0tLS0tLf/AABEIAL8BBwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAcCAf/EAEoQAAIBAgQCBwQHBAcHAwUAAAECEQADBBIhMQVBBhMiUWFxgTKRobEjQlJicsHRFBWC8AdDU5LS4fEkM2OTorLCFnOzNERVZaP/xAAaAQACAwEBAAAAAAAAAAAAAAABAwACBAUG/8QANREAAQMCAwYEBgAGAwAAAAAAAQACEQMhBBIxQVFhkaHwE4GxwQUiMnHR4RQjQmKS8RVSgv/aAAwDAQACEQMRAD8A8vwKwx7IYCGI7ROk3PtTyC++qU6OW9MrMNJkhDodjoo1391auAq1tbdu4ynRgGBOxkgagaaD+9RAXRlQgicsEegUfmawGqwjVd9tOo0xHfYQbBcOk/7yNQN2+8DGsbgfGteCwF9mypcM6/WEfEbV6w9oEANzX8yresGaIcNUzmJ1CnN5r2f0PrWQ1SCIKOJoi5joviYbHIdCx1I2DbTro35VpPGMfbHbs5h95L//AIT8qwXL7lsymJBgePtLPjuPOjnCMY9wQToAGXyPL0OlaKGIzOglcmtSjQIXd6TqdL2EU+RQf/LbB+NXcGx+Ea4Taw/VvlMmE1Gk6oxHwphV7qHOusAihb47O2RkUMNSQBMd0+tdPLtCxg3grVdvoVbTWDWaPowfGvF0aHyqk3uzHjQmVaIV9q3mbKApn7QkbcxIketLfSPo7et3kxFnD2j9W51OdTl/AWIJnXv0o7bAchWJAMAkbjXlRYcHdlhMRcRl07LOJMabswg6HaplcdFCQBdZeC2rVzL+0WULAHKbqgwxgMBmGkwD6UffhOG7IyquYSMsr4/VIFcn40OLtZGGxLhWuEzm6tg6qQey6qSOXjXReiXD+owOFt3GDsASYaMmZi2VZ1KrMa/DaoXOa2FGtDnIld6MJ9V3XyIP/ep+dBekWCuYW3nVlftKMrKQYJicytHwpq4nftLZV7rW1QEDNdaACdB2tIJOlLfTC8Hs2TbKsjEiUYMvZ1EH30M4JiOluamUjaifBkgHyH50SoVwlp18IopTKDswI3GPdJrNh0719qVKlOSVKlSpUUUqVKlFFfaycUv5LTH007jvt4VqqjG2c6FaqdERqucYS4zXldWyrJMBiNANAAG1Gs7VqwPSPEdfcTPmRWKwyjs9mZmASvqaxY/hJt37UzC3GYTPOQfD3154dYd8TdRFJJfWJ0Gnz7/CsZatgKfcFh3v2hcBXXlqPnQYcQtxGcCeR0n36U2YVDatqgG2/nzrlzICBRAQlM+DUKwKnKCQZnbWJpxwOLDiCQSOYMhh3g0hdGrCq2gGrp86dsXwpHBKjq3kw6SpnxK7ig/iiFvuICIqVg4CGW31dy49y4pOYvlnUkj2QBljQGpSiFYFcw/dV4ZZtsIHh4f51WmAuCOw+kfVPcK32+G3R7PFrn/MQfpV64TGcuIq34rts6/3tqyHCN4rst+Iv/t6hC8PhXWCbbwO9TtrI2+yT8KvLZDE98+IWP8Axg+lEVw3EeWKwreYU/nVscTA7LYZz3C2B8RND+EB2nkhWx5fqB/l+kIImY0kyvgdW92YMf4hVskWzlJkNyPJobl3SfdRQtxLnh7TeSkflVYOMg5sDa8vpNfcY/1qtPCZHAz0KwVaxcNOoSxj+lOKsnKp7NxZ1kww0YAnYZp2qdGuMtdvXCw1yEk95LLyo3iQ7D6ThStHIFvWJNZcOqCcuAbDN9otIYd35+ld9r6fgZct99lystTxcxcY80WuXZU+VZZrwrfKvVZgIC0kyrLVvNKjeDHnuKZeFYzOivzjK3mDB9zfBvCl3B3FDS2aI+qpY+4a0QwHEcOrFVd5cg5Ws3hJCkGIt81XX8JPfWhjoZpt3JTvqhWdMcMbloZRLq2ZI3kbj3flXjo9bTEAakErIg/3hXvFcXtK9ss57LA6pcGx551FCruJs2DcezjcLaJYtbW80BCeR1BK+6qVHCQQoxtiCmP9269X1p3jKwkH0OlDuP4Frdm3qAhuCFUACSCSdABNZOhHTU4s3OuCdYjAg2klXXaQSZ0I3HJlox0quTZVOaYmPTKzL/0sKzUalV2YPix6cynVKbW5XNFirOFWX6yZAQbiNSeXpFG6x8MHZY/fj/pWtlaqQAbI2rNVJLoUqVKlNS1KlSpUUUqVKlRRSpUr5ccAEnQCgoqMbh1ZTKgmNzuPKvPDBYBHVqvWaZ40J5EkEa0D4j0pSerQCW01Op8hXrh3SS3cPVXrQENlRwdyNN91NJeQnsBAumtyCwHI71yRHrpNs3Z7NyV+y+pH8USfWuZiqBMR3gV0A5jsGUn0Mmui2L4cSs69/wCtcx4RZNxXtq2Vn7Ib7JYFQfQmaLX8BxDD/syLira9petfq5Rp9pYPaHeNRUUTBxrF9X9IwZGXQMFJBB0glZFSiNjGyWRsrMsSB47aE/nUoQEZXHl/c/8AY3hp/ZLXtf3RyN9f4V/xeNfV6R//AKxP+Rd/x1rucSgEnhtowJ0RyfQB96zQOC6Ac7+7osvV8LjTE4gcuX+PevQscOOi4/ED+LxHex8vWp++1/8AxS/8q5/ir0OLrDN+6rYyjuYHXTTtTVTA3dVcNe4WnorLSYFST+8bxG0FucnuO+hHpW7DJhnJFvHMxHLMZ3PKKG2+Pqx7WAAB3MN4bjNPKidprbiRh7emu5B8OfL9fOsdV0ncfuVHYZwEkHkFoHD/ALONuD1P+GseKwtxAS2Me+pOiMD2d9ZgA93rRJMQOdkEeBPf4n+fnRxm4pVcqZdd5Pd40cLWqiqGkiCs1WiAJhDLbVfNZk3rSK7BWRehdVdWcIPtEKQDOk5tInnW/tD2L2GPcSbPdA9lxyrFYQk6KG02LBfiQdfSsZxItMPoUyycym6hUzp2T1fZY+7vHOrMqFtokLPV1umRutb6+H5fVB89r35Vgx6m2sM+FusTAS9bAEc+0tw+4isNjjGGuEqbYs66Z7luGOpME24Gk7+lErKrkOVLTKZ0Jsmd9R9HJHke+mGiHtzN76qzK28+qReJYe/g8QmLuWLFmyzZQmGc5W0JaQTIJAzbQSvrTrxTCBRaYEkOwOp30EHzg0lcY4PaTOycPm6qkI9i82jxKkhpV17xvyFbej3GHazasXAZsON5kKxGUGQDpqIjkKS10AtKc+kZDu+a6pwn2WP3vyWt1KuF426OLS2WfMZzhXIE6aldBtR9cS8gdXO0kE6d8StMY8ZYVKlF0zvvqFrqVKlNWdSpUqVFFKlSpUUUofx65lssfCiFZuI2M9tlG5GnnQOiI1XJMGJuq2Ya5p7y0iY8PlFfeFXib15NcrO+hnQiYI15xHKveKwBt4lAykZZI7pIMweQ51Vw7DXHvuLcki4dAPvc/CskLXK6n0fxAuYZLh1JBBnnGk1zmdKfLFjJaCA6Af50iZaIQRbgJ3/EKeExqHNauyFOg6wFfTtaE+IpG4FufxL866O9kXVZXWVNVciF6s4cBQJmOdSsHBMLbww/Z1UIJZgRs0mSfPwqUoq4MLkP/rXiQ/rHP8CD/wAaLYTpLjXCn9rEkaoQmbnMfCgVnpFdI7V9z/Aq/wDa1a8NxFnBh7xygbO438n8KAJ3rWWR/QOcoq3HMdGuK1g7AancRt6ismG43jHc9ZiGUCIESZ58xpXteIwpDZoCgliWbmw7XeBG++vOtNy7InPc8Stzxg6iZ00nlzqriRqtFMU3aC/ffcK9MXcYiMQxnuDevhV3WXxqLr/Ghg4NxEkkJc6sSQesUllmRAzTMEyIma9YS8uyPcZtgJmfa0PoDSnN3BOa+17jeIPOO94Ry1isQTGa6D4Bo7940rLxh7pC9Y7kToGnQxy5bVTLExctsJ7yfkeX8xWa/bCgBSYnaSY8p+VCi0iqP2lYmiPBLxHlG9eENaJrMhq+a6RXHW/hSy51uCFJ+jIDHbSTWy/bQkycQGO5a7Z+Izz+dZODPDnb2T8xRhmtnV1tnzymsNbFmlVyFsjfEq4oh7ZlLuIwaZ9GOcagrdtyD3iG+dCruIv2JIvXtZIy3AQT+HOVHn84p3a7ZA0t228CwHxCmgWPtMZ6tEAO4zsx+NsCOXf51rp1cvzsPT2WGrQcNJS7d4y145bjXM2/bJza7EAkjl4g67619wOGysmVizM4JJgfWBXwmrcX0eDuLj2xK7EOQQNyPETyMjwNbFwNsR9KIjZ9x5tsfh+nQFfDYluWoMrt+xVo1MVQk05I2tPsm/hWONpYe2csk5l+Mj86MYTG27om26tG8HUeY3Fc/scSeyItYqxl/s7hLIT4aZl8ga0DiWFYZ7r2bV0fWtX5313cIwJ7iW8KS9vhj5XArWw0613NLT05fvyXQKlJWC6Y2lYK2Nw1xdNGu2w/oQ2vqNaKv0uw4+sDrGjKdeY8/CqCq3aqPoOaYBB+37hMFSla502sElE1eJAnfSd4itd7pZhwEIJbMAYWCVBjXUgRGu/LnU8Vswq+E6EeqRS/iOmOFRc2Zm20C66/iI18N/hOe/07wqxPWQSQTk0WI3k+NWztVch3JoqUsJ05wpJBzaREZTM8onQ0Ys8aw7IXF5CBE6iRIBEjcHUe+jIKEFY+keADLmESCNdKQeHJfs4/OzWjZuM4XKrk7EgFwuUHTv1pux/SNbjBFSADmksJIH3eQ8a04PH4XFLpbNm6ddIB01nuI9KS4ibJ7AQLr2FLIYY7GCZpHmnp8DfZGHWGNwyvlMDkRlYR5fCkLNVQrotwV4k9xBrpHDccLqhhGvdy94rm3BEzAg7FgD5HQ0Y4r0JS3asBL2INuyykstz6Ts85AAIjQiKiiZuL27uUxb60TIytBHofyNSrsJiTMDMywCrNBBB8RrPnUoEgIidy4WOjmE0m25j/AIp/IVvwNq3YRktWyqv7QLsZ0jntp3UN/bCe/f7R/WrUxgVHcpnAIkZoMEqDBIMHWduVZW12kwAu3V+G1qdMve8QEWwuOyODkQqdGVtmXWQZkc+6t/G8Xbw1tb+Hwoe05LMVYIUcnXMI5nSZ305ictk2b/8A9OQHMTbcgNvOg2b+EnyFFcIUVmVp6q77aOCAGOhgnSeRG5HfAp4E2hclxgggox0Z6Qk2Fa8QrFnMFphcxjXmI591It7pNiMx6uzhAsnKSzTlkx9YCa8dIuGHDPESjew3h3eY+O9BLlxj3gD/AFoEbVancxomAdJsZ9jDDyL/AOM1dgcdeu5utKGIjKrCJ3nN6UvWcO7fWM+dGOA2WGcNM6b+tUZUBdC118G5lIvkQior3mrwahatK5i8Y26wXsXGtmd132Om4gePhQ25iL0SMVebbTrIaDMEDXQgT8NxFTpHizbtKwAJzwJ5Eo4nz19xNL+F6SkXWRhKHNEQCMpBQgxvKgnxJpT2SZV2uhFLnEWWFuXbw31NyQSCVInvBBg7HL4zXh7SurZ3fQTJzbgkEHUQNN5I7LHaaB4jjTMsaDNuANIOZTGukgD1JqvFcQPW6ExoPCJtg6eQPvoBvBQoueG25J6qRJiTcBA7Wp7XeNuUHevIw9ntZragLGYZdiRyJk6xsByI31peXG3CB2jqE92VN+/n5yZmasa+72iurFmB5mYDx8WqxkKtij9vDoACotqx29nukRC6HQaEj2jr7My6XBCMy5iYBECNZ1ka6D46jXVY6p8gkGQwiR9+Tv6USxdp3vZp0hSSTzKp+hNFGdivXi9tzOd1GjGCeZ1HIR4anczyOo41DGZmIkifEkBvcCD6rzBgLe6P3bIGcqMw0gztE7VfgMMS8ZxALH2A28DYka6DXcRNAgFQEhb24iHAYMpAQnTmVzEeWgA0jc1Z+25nFuNWViCCRoiFm1BBjszHlyo7d6MDEjrL1w3GHYa7bADaCAGLM4kA7HwpZw2EW3fVddBeWSeRt3V2qNMKOE3hZbnGXVQ4+tl0Ovp8T/JrbdxzLMQIXSB3EgesE6itnCTgBhrovtbz9TFsEy3WZiBA15eHM1MLxXD27iuwBAMmAJI1G2nhV80pZbCEYHir3QofKwNwJ7K+zKaA8vaMendWO1exIYG2bmUSNJjcz4d2lMnG+l2GxF+41q2UR3QqHVQRBtljoTuVJ3mlk9IJPVombXfMx5jZQN/1oAmUYEJq6H45i1w3t4GrOq84MyDrFGsBxWxZCL1/aQ9gnJIHKWzAZT5HekrAcMx1w9jB3mnWTZZV/vXAF95ove6I4vq2e+tuyY0N7EWRy+45PpFRzZKIMBddfjNi7hrjWnUnLoMyyfZJygEyNfMcwK59moB0ceyLYt3bttmFxmBdEZV07OVrighiRAynUgDmJNtj7AbVmIjfKymZ8QREc5oiyKNcGMD+IflXQDiblosbls9X9bIcwXxAgNHhBrnXBXW8Rbt3AmYmHlGykLmkrI7vKj/QTpkcXd6o3BcBUsGa2ELAeAYj0jaaq6VAm/hOMsXUJsMGVWKmJ0YbiCJBr5XkEYcwf90TofsHeD4GpSi1WlcAWI/nuq7GLlw9ydCSpHlmSsGGuyw1jUa+JIUfE/CtVzDhbBk5m5sdz9JOtIw9L+or0HxXGkfyW7RdYkwt8am24GhnI0eGsU2dHOOYllZXCXrSABjcdFYA6DtMe15EH0obh+kGJRRlvPG0EzppMZgYOUBR3CtTcedxN2xYu6SAUC9onTUclXQDWtpXnQimM6WWUK21tG7bBB5KbbSwGTWIADbGIOm8DVYw+DxstacEkSy5Tn2nXM0ie/ujSk7FcKuX16xVS3EjQ9mYI1kyD2u7mKHNdNpgzrrJAZTr9UAhge6Y86WQdiuDvT5c4GbS5woRZghzM++YHkOdebdo8xHug+UHWsOE4KLwFy1dDEakyxK/jRtR5jTxrTgMNctlhcg7QQd9/X31Gi+iLnnLlmy0MkCqia0XdqzU5KQnpQoNoSYGcGYnYHlIpObDKGDAkzPyn86bOl13LZXbW4Br+FqSUx2ZgCQFG0DyHf3VQyiIRbh2FUqGIzctfMnl50Z4pw+0lrOtoBvGT9UndiT7jSnZxpJyIzEyIUefhrzq+3wLiF0z+zYlxOmdXjcHQvpVCCdquIjRXq4H2F5QAB3gae6iXCOLWra/SXCBEaKxk78lPKrMB0D4o8EYdEAI9t18/qZjRJP6L7qr/tGLsWuehmNh9coeUbUXAFAWSvicejl2XMQTInTdjHPwr7dxeUgQDOXn3GO7u+VM9joNw1dLnEGubSLIH+Fo99FsFwHhKt2bT3WH9o7fIFh/00C5osiGuNwudY/pI97VlRABynnHefyqvB3rrseoF19f6u2TpJn2Qa6e+OsWAf2fhlskfZtEn3ZVohw/jGNupJw5sDkLiBfdufjSziGBpcLjgiabgYNklcP4VxK5w+9h+pu9bcvK4Z2CmALc7kGDBqrAf0a8QUh3Ni0Bm1dzOoIP1Y599P2PwmLupH7V1Z7wGPyddKEYjosmUtfu4u6wHt2UtBY0EEEM+YzoddtY5rpY6jUsDB3GyDqTggyf0aWlTNiOIoFBGqqANj9Ylhzr0nBOA2oNzE3sQfshgM3kFKmheIxuEshzbtYi6iHtrdto6qSY1NwHKZ7gp8dqL8F47ZRfora4csPaVM6781Y5x6MRrtWoPg/MLLK+oRs77+y04bE8KTTC8Je8eXWKGP8A/Ukx/FW5ukeOtqVXh1rCg6LcKl7a7R1nVucs+WnjrAnEXMWQ7rct3FH1rKrlG851SGXlOb38gI/e2v01piPtpLCPL2hp51tpfwtQwHZTuP5WY4io3ZPQ8tvkt93jGOvKxuYoQD/9vaUgDx6uLi/xJzGtALjYZyQ+ILFtZYiBr9qIHlPnRLh/CMLcJfDvDDYqxBUnuggrpygeNMOF6O9cmt5LmJns9YpGnLNctkO2nKTuZmn1cE0XEjiLha6HxFv0uaDwIg80oLw24qqEW0UDIQwUZiM4YyxkkBZjWNoGgNF3ugMFO7TGhgxqddhX3inA71nV3uWnzMJci4rZVLaPbEgAAwCp274FYrWMxCrna3nt83t5XUR3vaLKPIxWU4apEtIcOq3B2FfrLD/kPytvG7Y/YLxjkfksVr/o3xVu1jbD3XVECPLMQBLAIok97MB61RhsTav2shI6tpmWgaQSM3syfOaKcG4NaLkMogoIW6CVK51Y5hGxC6EGJjes7pBhwhWOEcQXU3Bw4H2XW8bgrjgm1cXXkyhh7xB+JqUNt8TtWmUF7VsOvZAaO0Pag+yVAjxqVCQs/hP3LgXBLQvFu0QVhh45defmDRUv1qMFEamMw3IOunpQLgVtijFdAWZC3cWtqo+Jo1fcqoHMEf3gKWxsBOxLy+o4lZrghYjY+6r7LdkUQscEW7D5yBcgzppJHLwkc9gaHPbKFkb2lJB8YJEjwq0pEQV9uqGjNqBsNYHParcTibeVVGGUkASzMSJjcKdvyk1mL15a6BuaKCYMJxHC2LYe4hN4zkKOwKjvgMACDpr3VrtdI7N05rqPaYx9KkT/ABrsw13pV4hxi4zg2kQIsdlUAJ0AJMDXWTGwk18tXMzBe9gNdt/DlUQT4bRdCyMt5ft2t/4k3BrCKox/HcFh7adRacYrTOFkKpjUZtzr41pxHSC0cKMR+zK99mCtnLFdt9GGug+NGVFWuCsYo9VcBuAGcoYgyAe7XYmtWO4fwjBoHbAhtY7b22g6xIZmbl3Ut/8Aqe7ccdatm1ZEyERVE8pJ1+NUcQ6V4MDKUTEaghWL5Qe/sEz5GqunYmU8urk42ul6rYNzB4W2ANMttWePMW8oHqBQBenPEr5iyjCduqt2056Szh4pd4f0ry3c9gCy4EAW1C6DzkN5Gmy1x2zjBluk4a7t1tuerYnldtyMpPeN/hWcvcCurTw1J7ZFxvGo8jM+V+CrxmD4qy5sTeFkf8XFKT3+ykL8KFW+Gq3abEhu8prHqKz9IOAXbR+lGjexcQiG/wDbuRqfuPBpZu4HEW26xHYkTrJzCIMMp8+7nVHAVNsFOYKmGA+UPbvGvLviQnaxwzBKZuJfvxya8ygfEkfCa9Y3pMMPBTBgIPslmI82fVT5g0sYHpEQALwjWMygxzmVnTY+yRTHhslxQysGHIqf0iPhSn5miKgkd7U5lDD4r5qDod3qEw8E6eWb8IWGbkj6P/CQdf4Wb8IonjMDbxQIRyTzRjDDyMjXwOWI2NIPEejlq6Jy9rvWATz1+qfUetV8JfG2XChuvUQAjyHGumU+0O4QWWk+E13zU3X3H2P5Wath6tG1RsjePcfhGP8A0xisNcJw+KuJJGa3c7awSNYiIG0lP4hRDD9Jblllt4uye1n+ktg5OyWGoJOpAnRp12oxb4leQm1fsXIXX6VDBG+ZLoGWNRuVgmDrWg2LN6YYoxGz/wCIDtDwcMKVVEmKzZ46HntWUU2uE0z7jks72MHjrTLmS4p0YA6iDoCNGWCOWXUUBx3QYRFp4AB0Oo7+/Mo/vnxpmwXQi1lLSLd0scrIYOp1Modz90RPKjXBeA3LaRicQjGT2oAMchyHjrJq9KhWpiaD7bj3Hosr4Jh48wuK4ThWLwiXWuBiy5SjKWaPaMyIdBt7QXwpi4NbvYmx1/7OMQv1oH0kQCpzIMzTDe0G9nyroOKx2BZ8guI7A7Dvnk2gJ8jNa/3gyLlsoi+YP8z5/GmnGBjstcQeCQ7CNeJaucYjgQtwyhrbH6t+EaNIGfRY00nL61q4TbKuVxKOgjsg6Fj3pp2xHcTvvRjiuDxF5gb18uokhSq9mdoyZVnx+JobiFewkIWVD7StlZGPOVIKfOt1DEkGaT1lqYUi0SNynE7uW3mZ+yDBmZEgr48jqKArw62T1lpsjcntsUPoyGKvxWMwt0hbqm04+tZYEbc7TtMRyRh5V4Xglwy+HZb4Gp6okOB962QHHuI8a6NP4jFqrZ4ixWR7HNPykjr+0T4Vwp7xh2VyzGSy5XIAkS9ojrDy7YajgW9ZGUoDbHJhEDkc9pSrHuU21/FroI6LEvAM5g5Ut2ezAWNNNZJHL2TTrbW9bMe2O7cj3w3zp3jU6n0HyNv0n03vAk8wlHiih2FwHIAI7QlAZP8AW28yA+B15QNhKZnt2HOYqbbD6yMVPjqvnzFSqeEza1bm/EKwEB/ofVcawd12Qo7pDEDsBYWCrL7IA38/arZhZuZ1BhmkA+MH8hWDAW1e2yrba3JETLZjpqY1G0bcqOcLwRCG6xiGCwRrtodJMad3Kue3RNq/WVUz31tJZtGcj9pgYO4YLvpvrRzC27V7EXrVwSrwwPNTlmVPIy36zQrBWOrzBZJLZt517zWi3cy4q2RsVA92b9BUVEF6S8NuYVte1bbRbg2PgRybw58vAF+0evjXX7yI6lHAZWEEHY1zjpP0YbDzcty9n3m3+LvX73v7zGO2FVcFMV0inS3bRRABhQJOUA6TAkydBzoPbuEzV+A4LiLq57dlyn2ogaaGCYkTppNfcXw25YaLiwY75q9lVfBcmjuCYmyqz2d48aW5pl4T/ul9fnUUQTpbhosoR/aD/talACn3pZaJsrAJAeTA2GVtT4Ujlf59BRUV2HsglpBMKx9QpjbxohhsWQCSCQv1huATA15iSBFU4S3GbkIj3wPzrZYwbdWwAJzqIgTMXlGkeUVUgGxTKdV9My0pm6O9KXtKUbLdsMIZGEqRHMGcp9CNzHOjl3gFnEqHwTajXqHMMuxPVMTt4Ekd5G1IGE4fcBzKCDp7iV1PhIb0FHsJxPqwF0DiNQYggAaHltWZ9IjRdjD45r9bO6HvnxKzcT4Vm7Lq2YEzplddxqp0Ya+dCsBgbttx1dzsllBdeQJAOdTtA11roNnjlrEqExqMzD2b9uA6+fJh5615xPR0qOutst+2P61NGUd1xdx66VRryLahaKuHp1Dm+l28fn834gK/DYO4yKyiQR4AzLfoPf4Vs4dhFzKXYABg0xMFZifUnmIisWG4jdCBEjTnEkem1Y2uvmLs4k7mJmO8ARQNFjrssUs4vEU2+HWu3ft8x76cSup2+lVpfbcEeEkg90AT6wo7poRxPpdYAizhQ7SPbyqOzGUiAZHZGkg6Ckq1jVPh4nb4bVoz1V1aoyzgpSwGGriaTro9Z6VMxl1W0dNIhTy848IjxrZc6q8BJgnadVPdB1HwMUonDEjQZvOPgT8gRQ3FcRv4c/RqV11FwwrDnBggd0sB5mkuptqXaY9PyEp+Hq0jlIn1/BTzieGFYJRWHJiA3uYk+kER3Vktm4GIR2Y/YeT7uYHjAXxobwr+kXDqQl9LuEc/b7aN5ON18SoHjTdh8VYvKHVkIOz2yGU+g29KDmvaIfcdPx6fdZiGuNrHry19VOGksoN3sNrKyD/1DT+edEMMttDMIe48/Sf8tqHYy26rmQBx3zp6nceu3caWeN8Tum2PbsENLFCHEAH2syAdXz7fV8txurwqLTNM5T5xy/2qZXnW4772Jr6WW7V3CXlABZwFlQM2rCSDBPf8fMcsucCvWyDbcPG31WEcxJyiPBgTyFMWD47fVQXCYhSGM2AQ4URlYIdLkzGZCFHjRHBY/DYr/duCw3A7LjzUifMketA4rEU7uEt5j9dEp1BjrHqq+i37TeKdYAzw0daCHAAOzyHg/eJHgaP3WuJCsGtn7wkeMEDKfMov4qs6O2cjjtSIbXbfy+dNJaRBAYHka30cQ2o2R37rM6hksEvIwYAtkYcmJC+4yVP8L+lSiOI4RaYlkLWmO5UkT+KDr4AnSpWoVXAWd1SyzeFwVMU15nV7ruFEqCxAAmNhA2iqcNehDkHYYT+KARr7zND8HbbrgqmC1pvgyN+Va3cZ2Vdg0D1Wfnp60KZlsrdi6fh1S37egWy2WUTnOu0E/wClXXL5D2STJg6+cfrUsWgFVWJCsZExIYz2TpoPzqvilrK9sfeA+K1eVnITl19e1viggxBr0uJ8apCkqviwv2bLphSFtyWyLvqIaARAXwFIf7SzntEz4kn509YjiKjQsAfOg2J4St9ustwpkZgZAYTr4g00KqX4mmXg1wCyk6HXTnuaK8U4tg8PZXqLQF0+0oTRT+M+0PyrJgeN3Vwxe3lW41wy4VSQO5SRIqSgr7Nxx2ryNatGYdkJB8gNSfh5Us9K7GEyh7AuBs3aJCqpkHZFLGdN8w8q1Frt5y124zmN2Jb5mr/3ajCGGbXb/Ia0ERKU1BZOzrOhAHcZ2/nQ099Db1u0jm9mDC2otrlmWksZBHIxzXzrzawKWxACWx6D4DU+6vhu2x3t8B8ZPwqIwrcewuNIlQd9t+e1Upwld8une23x0qDFn6oC+Q1951rwXJ1JJPeTUUlaRkX60+Cj8zFasBxN7TZ7Rynzodg7LXWyWwGYCSJXbv1Oo8qOYPo4dDcuAeCf4m/SlupA6LVRxjqdjcblsz2MV/wb3h7Lfw7eq/3TQnG4N7LQ6kdxGzeR2PkdfKiXCsCptglQXBIM94JGndXi/wAZNu6bN1estELIbcT3HvHjWd9MtXXoYllWwuN20fbv7FZ7PCswBJ3bLC7kDcidJrN0mxdvDIqWV7RMsXzHTu12J7hFMa8NkZ8M3WqCT1Z9oHmMp5+XupF4s1wu7MDJMMN45Q6NyA56HTc1bxLQ5KOEzOz0zBG0WPmO+JKv4Z0mU6E5T3NsfJvyNMC8QBEMPQwRH+nmKRTwxLjObZACqzkgyhCqWIk6odNjpuRIoThOIYrDsFYEjfK0lT4qRt5g0s0Ab0zHBMbjXstiGyP+w9x/rgCug8WwNg25RIYkdjdDrJOUgifEQSY1FAMNbuWrgfDk22G69oo3KCFObc7AuBAmKM8MvdZY65TEGGXQ5T4nY8vfvV1y0twaiD38/CfD3ik53sMOC2/w2HxDM1Mz3zC+cF6aYi0/+02+qEn6VCSnhmAJ8tDuRK06cP41h8UoYwfvpyP3lOx8wppS4tj7rWzbIXXKSyxO4I3MDTfv+yaG2sLcynJd6knc2raK0AyJJWRqNSCJ+zQNKm/6bdRy2eS5z8PVpiT++eh8+afcb0dV5dDmBGptxPgSjaE/iDAcqA3OFF3HXW1cDmQQ6xsQ3tE+JdR3JVfCuJ37Cg3CbgmA6LlJ2mQNCZO8LvTNgukFm+IaGPevZceYOv8AO9LLH079dRz1Hd1nOV1jy0/R8lq6L2znCZmKhD7RzNuNcxhm/mKYnBXVTMd3LzHI0I4bZVTmtMXEHRTDDWTpOvvoZxhb17shlK7ZABqO4o2UsfLMPumrAtI0vw7v1SHUzPBGsZxbTQBj5wPfBr5SH+yPZJFsvaI3VBnX/lMND45bY86lIPjTZw8wfafVTw+C55wZ1OIVm2yso7w2XOD5dmPWtyOLjEjdXcH3nIf57qErdzMrojBV5hYB32jejMlcjZSpaJVh5bj412miLJWIqOqVC4rbxHCtdCqhH29TyOm0d/zrDxQsHtq5khl18ioB91FOF4ch1vFjKyhXSIjYaeR86D9JsSBiSeS/lr+VWG5JdpK323uP7KnzNe3sHnckzsAdvIUHvdI8xCooAJ3cmAO+F5VTieJcjdZvBRkX46/CigBKYMJw629xVOp5ksBlA3MAmfIldSPQjbw2R2USBOgO8a7nmaWujrsboi1CmZaD3SJJ5f5U4udh3CrBAiEJ4rwtLi6iCNiOVDsFgMiBSZgmmO+NDQoVYqqzXIQTAOv87VSMU/fA7l0+WtbL2EuXIS1be40zlUEmO88gPEwNa34Toncy9Zib1rD2+faV28QTItL/AHz5VWFJQIVfh8O7+ypI79h7zpRniXGOFWQosWHxLzEqC4fTmbnZiYPZDgR3TV6cSu5FuNhxYLyQIBO5HtEQDHJQsVIUlZsJ0duMAzkKvfoB6O8A+QBNXcN4XgxcfrHbElT/ALtQyou+hdoLHyX1r4uLZjLEknmSSfedazcDPbxB+/8Am1GEEwY21auBVS1ashXVx1aKCSu0se0dNNxWhGrmXGemT3HyWCUtzGaYLaxOb6q90Rpv3DZ0b6SEYnqWutdt3Jykycj6mJJmN15gmCNKMiYUiyacZxi3hLV531y3DlUbszagD4knkATSDb46+IxDO9xLZI3OigKOysd/mZNXf0lXWNy1AIU5iJ2JAQT7vnS1Z4Y27grIlT3jSqOEiCr03OaQW6p9wnSgvadkm3dR1BIMAhmMQeYMEQaZMB0hsYpcuMtww0F9RBH4v5I8qVeD8LwtzCXEtNBcdsuZZSD2MwPIciBFAcBjupJtYhyFBMOFYqT5rr8DSH0Ts5LqYbHtsKljscNR3y4Lo17or+zMcQiretspGdfstvmUfPbeljiy2rCjqw622nrDBdVECJUEQDrqvrNbOAdKzag4a51ij2lgwPQwQfEfGmuxbwuO7Vr6C+d1PssfL9Ne8Um4t0/C6Lsrvmd/kNP/AEPcLmrKoUnC3iHbbKXykcxnIH91vWvnAsZfVyt5WyidGEAbRlI20nbSm/iHB3sNDpkJ5gDK/lGh+dB8UWGkAL5Eg/GVPlTA4OGU34bVkqUH0j4jDl/uF2n77vTgUWwTq/siD/POtjJAnSRtpp/pQbBNEAE+AJ+R51sx+PyWWYiYjTbmBvS3YYa0z5JrPiLhDcQLbxp314LVirjXVAIAyyOwSN425qfI1h/ZF35/aGh+Gh/nWpgcctxJUkGTodDpv/IrSzk+ff8Ar3+tKFRzTDrFaXYenVZNKCNytwnFb1o6/SDvmHH6/GmLAdJbd7sXAH8G0f38/jSzcssFBjNzMDb41Q6K+4n5j1399QsY6+n29xp6LCaDhofI+x19U/GznEWroYD+ruhTHlnmPQipSPYxl637LZx3PuPJp/P0qVXI/YQfMe4J9kksIN2nkT6WSjd43cbVEaO/2R7/APMV84Zj87ZXKSdViTBHfOh99C8RhbpM3my/+40n0G/yr5ZewhmWdhBUiVEz6mIrpLBAT3gLoQMWGmjCeZEbfCku/aa875YjmWMADYSffXjF9ImykBQJ0meVCrjSeZUjly/zFWASnbkSTDYe37V3Oe62P/I6VavEgNLVlQe89pvjX3hPDLBAzNduXD/V2rZMfiYwo+NNWFwYRZt2bdoc3vEXWHoMtpT5zUREQgOFt4u4wcFuyZB5Dz+qB5kU3YHGrc2ZGYAZgjBgp10kEj0mhGLxOHGt12xRH22m2PJRltD0DVr4Jxrr2dRlCoFhV2Ek9wC8uQFEFBxlFbqkiBudBQC7fd7jWrDKMs5nMake1l09kQdfAnQUax09W0aGNKRBIka6iCPMRUfMWQHFaf3peTNFw5oOvZb3TI/kGhWMxD3GzXXa43e7FiPKdh4Ct2IwpFvMZBJA9I/yrGLdAIKu25Uzypjt9M8W9j9nRUZSYDuqs+0wuYxp9qCfKlXir5VA+0fgN/yrNgMe9ps9v2gNDlVonwYETRvFlLbU1cC4pea+tgnrC8wAuoYKWMQNdjWziV5kweLZdywWfBnCt8CffS90U4hct4n9pQgXbZLDMAe0wIJIiNQW5aT4U3cGxhuG6rqrG4QzAgtOec0jUET31JtdSLrmuHtM509/IedNHQjB2xifpHOdRNobKxMgjXdhyHPXurbxDg7JefDYcSiZSyq2Y6qG75ME+MUN4th+ptfSASWEK2jGDJ03AHefjUlWgQuiY6xYK/7SqFAZ7YB9w3ny1rm9i5ZYZnvhWBgq4uCADyhSDWEcYuMczXGJX2ZM+QM+1/FO1M2Ma3cMtbVz9pwCe7SeVEmUAIuEt8SxmZy1guVWO2FI15xzA5Rzg6a1t4AxhpSQQPa1BOskd+kUaweAe6cqJMdwgD8hTBhOjiqJuHMe4bD13PwoQpKAYe2eQjyED9KJ2rsb794rficLAgAADaKGukVVzA7VOo4h9Iy0po4d0kOXq8QovWzprqR79/n41ZjOjyXFN3COHXnbJ1HgCfkaU7bEVuwONZGzW2KN4c/PvFZ30iNbrq4fFtd9ByndsPfC/wB1nfCZSRBRuakR7war4ifoyGiJA123HPcU3rxOxigFxKhLmwuDb38vWRQvjnBLtpSYz29ww108aWHEa3C0mnTqGB8rt2w9/wC0pjC9lAp3zNBInV+RGh/0q/CcQuISLkMukbhgI1k89astWRAC6Qo05bsdv0r66zow9/5N+tNzNeIdf1WR2HfRdmpnKenfYCZ8LqqkcwD8PhX27YR/aWD9oaH3/rXvhrQoHKAPhW02lPh8qoaG1hRbjr5a4jihFzhVz6hDju2I9NqlEWlNZgeegnx5fD1qUokCzgtbWvcJY6QuV8Y4OetLL7D9oGQAJ9oSSBvPoRWWxg7R0Utdb7NpS3vcgIPjTDfFo2gtxeu6thE7yRHOB3c+VD8Zx4WxkACfdVZPxAQe41vhef8AEgQvWB4TenNltWQObQ7D1bsA0TTh9ntXHJvEntMcoBIWdzlWYA2zcqTMZxZ7h56bZmJP6D0FU4jH3HJLMTJ5k90fIVMpSy6UdvdLzlizbCAbAgEx8FHur5iul90s5tqEDHQ+0ygoFIDPJA3MCNzS0q1cEo5QhKjuSZJJPjTZ/R97d78KfNqVkt029BhD3fwr8zVggm2/7JoBkAnSj972TQFjRUWHjHsD8Q+RoPHKi/FvYH4h8jQpO+qqLPi8J1giYIOh8a9WbSW+yikmCGLCTm0Egcoog2DKiW7I95+FUXOOZQRfwqvc36wXGXN4kAET7qkSrNMGVhxeGRMlxXKMWgyDEQTqN+UR41qw3F+0GCajQsGI8JA00jlv+dGItXsQA5C2rYnKok+Z3JJ8WIqjC8JuTq0LIPnGu1RCRKPcQ4NaaCTkcT2lJzN6bR6etYrHCbSmYLnvcz8Bp75raxjetvBLlg3ALwYg6Dun7wGseVRRZOHcBNx5t2szTvyHiSdAfjWo4NreNt4ZwpEZmiddJgbc66Rh7KqAqgAcgBA+FLPFLC/tgf63sz4QDVoQlGeH2gLagCBB0HmatdK98PT6NPL9atuCighl2zQzFYejd5DWO9bqQogTW68i2aI3bVZ4oQivKMRvRHBceuYZZXtJOqHb07qwZaFdJbhSzKmDmFKdSBuFso4st+V9wnVcHhMaC1g9Vd5odj6fmPdS/wAQ4fcsMVupE8+R8jQLguNJUk6MHAkd+UH03p24b0nleqxSi6h+sRqPPv8APesrmQb2XYpV8w/lnMN239/YqrD3IHd4ir3xwtiSdNhH1jBMAH63wG5rZjeB9nrcOcyxOQ6aeBNLeJdUBu3e0w2tgaeXdl8OfPwsHkJJoseJGm79bOoW+86MvW37rIJ7CprlGxyz7Vw87h0CghYBJPylvihe6OtzB5OqkQFPLLG2nyr7R8Ypf/HN4jv7Ff/Z"
                alt="Industrial textile production facility"
                className="w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl"
              />
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg">
                <p className="text-2xl sm:text-3xl font-bold">28+</p>
                <p className="text-xs sm:text-sm text-silver-light">Years in Business</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">About KK EXPORT</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
                Pioneering Textile Solutions for a{' '}
                <span className="font-display italic">Connected World</span>
              </h2>
              <p className="text-sm sm:text-base text-silver-darker leading-relaxed mb-4 sm:mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { icon: Shield, text: 'ISO 9001:2015 Certified' },
                  { icon: Globe2, text: 'Global Supply Chain' },
                  { icon: Zap, text: 'Advanced R&D Center' },
                  { icon: Leaf, text: 'Eco-Friendly Practices' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cloud-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-charcoal">{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('about')}
                className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5 text-sm sm:text-base active:scale-95"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ===== SCROLLING IMAGE SECTION ===== */}
        <div className="w-full overflow-hidden mt-12 sm:mt-16">
          <div ref={scrollImageRef} className="scroll-slide-container">
            <img 
              src="/image/aboutimg.png" 
              alt="Scrolling Process" 
              className="h-20 sm:h-24 md:h-32 w-auto object-contain scroll-slide-image" 
            />
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
              Comprehensive Textile Solutions
            </h2>
            <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover our extensive range of technical textiles and industrial fabric solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left active:scale-98"
              >
                <TexImg src={product.img} alt={product.title} className="w-full h-40 sm:h-48" />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
                      <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0" />
                      <span className="line-clamp-1">{product.title}</span>
                    </h3>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{product.desc}</p>
                  <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full">
                    {product.count}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <button
              onClick={() => navigate('products')}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base active:scale-95"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY APPLICATIONS ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Industry Solutions</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
              Textiles Engineered for Every Sector
            </h2>
            <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
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
                className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all active:scale-95"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
                  <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-charcoal text-center">{ind.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden">
  <img 
    src={IMG.wovenClose2} 
    alt="Woven textile close-up" 
    className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover" 
  />
  <div className="absolute inset-0 bg-charcoal/85" />
  <div className="absolute inset-0 flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
        <div className="lg:col-span-2 text-center lg:text-left">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
            Need a Custom Textile Solution?
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
          </p>
        </div>
        <div className="lg:text-right">
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors text-xs sm:text-sm lg:text-base w-full lg:w-auto justify-center active:scale-95"
          >
            Discuss Your Project <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

     

      {/* ===== MANUFACTURING VIDEO SECTION ===== */}
      {/* <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
        </video>
      </section> */}

      {/* ===== CERTIFICATIONS ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Trust & Compliance</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
              Globally Certified. Locally Trusted.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
              'REACH Compliant', 'GRS Certified', 'BSCI Audited',
            ].map((cert) => (
              <div
                key={cert}
                className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-charcoal text-center">{cert}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={() => navigate('certifications')}
              className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95"
            >
              View All Certifications <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Sustainability</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
                Committed to a Greener Textile Future
              </h2>
              <p className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { value: '40%', label: 'Water Reduction', icon: Droplets },
                  { value: '60%', label: 'Renewable Energy', icon: Zap },
                  { value: '85%', label: 'Waste Recycled', icon: Leaf },
                  { value: '30%', label: 'Carbon Reduction', icon: Wind },
                ].map((metric) => (
                  <div key={metric.label} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark">
                    <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2" />
                    <p className="text-xl sm:text-2xl font-bold text-charcoal">{metric.value}</p>
                    <p className="text-xs sm:text-sm text-silver-dark">{metric.label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('sustainability')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95"
              >
                Our Sustainability Journey <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <TexImg
              src={IMG.eco1}
              alt="Sustainable textile manufacturing"
              className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl order-1 lg:order-2"
            />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Client Testimonials</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
              Trusted by Industry Leaders Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                className="bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
              >
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4" />
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6">{t.quote}</p>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-xs sm:text-sm">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-silver-dark">{t.role}, {t.company}</p>
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Transform Your<br />Textile Supply Chain?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Get Started Today <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => navigate('products')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all active:scale-95"
            >
              Download Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}