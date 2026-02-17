// // // // import { useState, useRef, useEffect, useCallback } from 'react';
// // // // import { useNavigation } from '../context/NavigationContext';
// // // // import { IMG } from '../constants/images';
// // // // import {
// // // //   ArrowRight,
// // // //   CheckCircle2,
// // // //   Factory,
// // // //   Globe2,
// // // //   Award,
// // // //   Leaf,
// // // //   Shield,
// // // //   Zap,
// // // //   TrendingUp,
// // // //   Users,
// // // //   ChevronRight,
// // // //   Star,
// // // //   Layers,
// // // //   Wrench,
// // // //   Droplets,
// // // //   Wind,
// // // //   Scissors,
// // // //   Quote,
// // // //   AlertCircle,
// // // //   RefreshCw,
// // // // } from 'lucide-react';

// // // // // Simple Image Component (keep this as is)
// // // // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// // // //   return (
// // // //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// // // //       <div className="absolute inset-0 bg-weave opacity-40" />
// // // //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// // // //     </div>
// // // //   );
// // // // }

// // // // // ✅ IMPROVED HERO VIDEO COMPONENT (Auto-play & Error Handling)
// // // // interface HeroVideoProps {
// // // //   src: string;
// // // //   fallbackSrc?: string;
// // // //   fallbackImage: string;
// // // //   posterImage?: string;
// // // // }

// // // // function HeroVideo({ src, fallbackSrc, fallbackImage, posterImage }: HeroVideoProps) {
// // // //   const videoRef = useRef<HTMLVideoElement>(null);
// // // //   const [videoState, setVideoState] = useState<'loading' | 'playing' | 'error'>('loading');
// // // //   const [currentSource, setCurrentSource] = useState<'primary' | 'fallback'>('primary');
// // // //   const retryCountRef = useRef(0);
// // // //   const maxRetries = 3;

// // // //   const attemptPlay = useCallback(async () => {
// // // //     const video = videoRef.current;
// // // //     if (!video) return;

// // // //     try {
// // // //       // 1. वीडियो को सुनिश्चित बनाने के लिए शुरुआत से रीसेट करो
// // // //       video.currentTime = 0;
      
// // // //       // 2. सबसे ज़रूरी: Audio अब हमेशा Muted होना चाहिए ताकि Auto-play काम करे
// // // //       video.muted = true; 
      
// // // //       // 3. Play कोशिश करो
// // // //       await video.play();
// // // //       setVideoState('playing');
// // // //       retryCountRef.current = 0;
// // // //     } catch (error) {
// // // //       console.error('Video play failed:', error);
      
// // // //       retryCountRef.current += 1;
      
// // // //       if (retryCountRef.current < maxRetries) {
// // // //         setTimeout(() => attemptPlay(), 1000);
// // // //       } else if (currentSource === 'primary' && fallbackSrc) {
// // // //         console.log('Trying fallback video');
// // // //         setCurrentSource('fallback');
// // // //         retryCountRef.current = 0;
// // // //       } else {
// // // //         setVideoState('error');
// // // //       }
// // // //     }
// // // //   }, [currentSource, fallbackSrc]);

// // // //   useEffect(() => {
// // // //     const video = videoRef.current;
// // // //     if (!video) return;

// // // //     video.src = (currentSource === 'primary' ? src : fallbackSrc) || src;
// // // //     video.load();

// // // //     video.addEventListener('canplaythrough', attemptPlay);
// // // //     video.addEventListener('error', () => {
// // // //         if (currentSource === 'primary' && fallbackSrc) {
// // // //             setCurrentSource('fallback');
// // // //         } else {
// // // //             setVideoState('error');
// // // //         }
// // // //     });

// // // //     return () => {
// // // //       video.removeEventListener('canplaythrough', attemptPlay);
// // // //       video.removeEventListener('error', () => {});
// // // //     };
// // // //   }, [currentSource, src, fallbackSrc, attemptPlay]);

// // // //   // Handle Error (Show Image)
// // // //   if (videoState === 'error') {
// // // //     return (
// // // //       <div className="relative w-full h-full">
// // // //         <img src={fallbackImage} alt="Hero Background" className="w-full h-full object-cover" />
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // Handle Loading
// // // //   if (videoState === 'loading') {
// // // //     return (
// // // //       <div className="relative w-full h-full bg-charcoal">
// // // //         <img src={posterImage} alt="Loading" className="absolute inset-0 w-full h-full object-cover opacity-30" />
// // // //         <div className="absolute inset-0 flex items-center justify-center">
// // // //           <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <video
// // // //       ref={videoRef}
// // // //       autoPlay
// // // //       loop
// // // //       muted
// // // //       playsInline
// // // //       preload="auto"
// // // //       className="absolute inset-0 w-full h-full object-cover"
// // // //     >
// // // //       <source src={src} type="video/mp4" />
// // // //       {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
// // // //       <img src={fallbackImage} alt="Fallback" className="w-full h-full object-cover" />
// // // //     </video>
// // // //   );
// // // // }

// // // // export function HomePage() {
// // // //   const { navigate } = useNavigation();

// // // //   return (
// // // //     <div>
// // // //       {/* ===== HERO SECTION ===== */}
// // // //       <section className="relative overflow-hidden min-h-screen flex items-center">
// // // //         {/* VIDEO BACKGROUND */}
// // // //         <div className="absolute inset-0">
// // // //           {/* ✅ अब यहाँ सिर्फ Video लगेगा, Image fallback के लिए तैयार रहेगा */}
// // // //           <HeroVideo
// // // //             src="https://www.freepik.com/free-video/african-man-sewing-tissue_2558941#fromView=keyword&page=1&position=2&uuid=4a8103f4-646a-4962-848c-7b417d0728ff" 
// // // //             fallbackSrc="https://www.freepik.com/free-video/african-man-sewing-tissue_2558941#fromView=keyword&page=1&position=2&uuid=4a8103f4-646a-4962-848c-7b417d0728ff" // Optional: अगर एक सोर्स नहीं खुलता तो इसे दूसरा दें
// // // //             fallbackImage={IMG.fabricTexture1}
// // // //             posterImage={IMG.fabricTexture1}
// // // //           />
          
// // // //           {/* Overlay */}
// // // //           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
// // // //         </div>

// // // //         {/* CONTENT */}
// // // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 w-full z-10">
// // // //           <div className="max-w-3xl">
// // // //             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
// // // //               World Class<br />
// // // //               Technical <span className="text-silver-light italic font-display">Textiles</span>
// // // //             </h1>
// // // //             <p className="text-lg sm:text-xl text-white leading-relaxed mb-10 max-w-2xl drop-shadow-md">
// // // //               Delivering high-performance technical textiles, advanced industrial fabrics, and innovative material solutions to leading enterprises across 45+ countries worldwide.
// // // //             </p>
// // // //             <button
// // // //               onClick={() => navigate('products')}
// // // //               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal-dark font-bold rounded-lg text-lg transition-all hover:bg-cloud-light hover:shadow-lg hover:-translate-y-0.5"
// // // //             >
// // // //               Discover More <ArrowRight className="w-5 h-5" />
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* STATS BAR */}
// // // //         <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/30 backdrop-blur-sm">
// // // //           <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // // //             <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
// // // //               {[
// // // //                 { value: '28+', label: 'Years of Excellence', icon: Award },
// // // //                 { value: '45+', label: 'Countries Served', icon: Globe2 },
// // // //                 { value: '2,500+', label: 'Product Variants', icon: Layers },
// // // //                 { value: '150+', label: 'Enterprise Clients', icon: Users },
// // // //               ].map((stat) => (
// // // //                 <div key={stat.label} className="py-6 lg:py-8 px-4 lg:px-8 text-center lg:text-left">
// // // //                   <div className="flex items-center gap-3 justify-center lg:justify-start">
// // // //                     <stat.icon className="w-5 h-5 text-silver-light hidden sm:block" />
// // // //                     <span className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</span>
// // // //                   </div>
// // // //                   <p className="text-silver-light text-sm mt-1">{stat.label}</p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== ABOUT SUMMARY ===== */}
// // // //       <section className="py-16 lg:py-24 bg-white">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // // //           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// // // //             <div className="relative">
// // // //               <TexImg
// // // //                 src={IMG.production1}
// // // //                 alt="Industrial textile production facility"
// // // //                 className="w-full h-[350px] lg:h-[450px] rounded-2xl"
// // // //               />
// // // //               <div className="absolute bottom-6 right-6 bg-charcoal text-white p-5 rounded-xl">
// // // //                 <p className="text-3xl font-bold">28+</p>
// // // //                 <p className="text-sm text-silver-light">Years in Business</p>
// // // //               </div>
// // // //             </div>
// // // //             <div>
// // // //               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">About KK EXPORT </span>
// // // //               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// // // //                 Pioneering Textile Solutions for a{' '}
// // // //                 <span className="font-display italic">Connected World</span>
// // // //               </h2>
// // // //               <p className="text-silver-darker leading-relaxed mb-6">
// // // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// // // //               </p>
// // // //               <p className="text-silver-darker leading-relaxed mb-8">
// // // //                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
// // // //               </p>
// // // //               <div className="grid grid-cols-2 gap-4 mb-8">
// // // //                 {[
// // // //                   { icon: Shield, text: 'ISO 9001:2015 Certified' },
// // // //                   { icon: Globe2, text: 'Global Supply Chain' },
// // // //                   { icon: Zap, text: 'Advanced R&D Center' },
// // // //                   { icon: Leaf, text: 'Eco-Friendly Practices' },
// // // //                 ].map((item) => (
// // // //                   <div key={item.text} className="flex items-center gap-2.5">
// // // //                     <div className="w-8 h-8 bg-cloud-light rounded-lg flex items-center justify-center">
// // // //                       <item.icon className="w-4 h-4 text-charcoal" />
// // // //                     </div>
// // // //                     <span className="text-sm font-medium text-charcoal">{item.text}</span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               <button
// // // //                 onClick={() => navigate('about')}
// // // //                 className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
// // // //               >
// // // //                 Learn More About Us <ArrowRight className="w-4 h-4" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== PRODUCT CATEGORIES ===== */}
// // // //       <section className="py-16 lg:py-24 bg-cloud-lighter">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // // //           <div className="text-center mb-14">
// // // //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Products</span>
// // // //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// // // //               Comprehensive Textile Solutions
// // // //             </h2>
// // // //             <p className="text-silver-darker max-w-2xl mx-auto">
// // // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover our extensive range of technical textiles and industrial fabric solutions.
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {[
// // // //               { title: 'Technical Textiles', desc: 'High-performance engineered fabrics for demanding industrial applications and extreme environments.', icon: Layers, img: IMG.fabricTexture1, count: '450+ Variants' },
// // // //               { title: 'Industrial Fabrics', desc: 'Heavy-duty woven and knitted fabrics designed for filtration, conveyor, and industrial process applications.', icon: Factory, img: IMG.production2, count: '380+ Variants' },
// // // //               { title: 'Coated Textiles', desc: 'Advanced polymer-coated fabrics providing superior protection, durability, and weather resistance.', icon: Shield, img: IMG.fabricTexture2, count: '290+ Variants' },
// // // //               { title: 'Nonwoven Fabrics', desc: 'Versatile nonwoven materials for medical, hygiene, geotextile, and automotive interior applications.', icon: Wind, img: IMG.wovenClose1, count: '520+ Variants' },
// // // //               { title: 'Specialty Yarns', desc: 'Premium synthetic and blended yarns engineered for specific performance and aesthetic requirements.', icon: Scissors, img: IMG.thread1, count: '340+ Variants' },
// // // //               { title: 'Smart Textiles', desc: 'Next-generation fabrics with embedded sensors, conductive fibers, and intelligent material properties.', icon: Zap, img: IMG.fabricTexture4, count: '120+ Variants' },
// // // //             ].map((product) => (
// // // //               <button
// // // //                 key={product.title}
// // // //                 onClick={() => navigate('products')}
// // // //                 className="group bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left"
// // // //               >
// // // //                 <TexImg src={product.img} alt={product.title} className="w-full h-48" />
// // // //                 <div className="p-6">
// // // //                   <div className="flex items-center justify-between mb-3">
// // // //                     <h3 className="text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
// // // //                       <product.icon className="w-5 h-5 text-silver-dark" />
// // // //                       {product.title}
// // // //                     </h3>
// // // //                     <ChevronRight className="w-5 h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
// // // //                   </div>
// // // //                   <p className="text-sm text-silver-darker leading-relaxed mb-4">{product.desc}</p>
// // // //                   <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-3 py-1 rounded-full">
// // // //                     {product.count}
// // // //                   </span>
// // // //                 </div>
// // // //               </button>
// // // //             ))}
// // // //           </div>

// // // //           <div className="text-center mt-10">
// // // //             <button
// // // //               onClick={() => navigate('products')}
// // // //               className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
// // // //             >
// // // //               View All Products <ArrowRight className="w-4 h-4" />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== INDUSTRY APPLICATIONS ===== */}
// // // //       <section className="py-16 lg:py-24 bg-white">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // // //           <div className="text-center mb-14">
// // // //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Industry Solutions</span>
// // // //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// // // //               Textiles Engineered for Every Sector
// // // //             </h2>
// // // //             <p className="text-silver-darker max-w-2xl mx-auto">
// // // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
// // // //             </p>
// // // //           </div>

// // // //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // // //             {[
// // // //               { name: 'Automotive', icon: Wrench },
// // // //               { name: 'Aerospace', icon: Globe2 },
// // // //               { name: 'Healthcare', icon: Shield },
// // // //               { name: 'Construction', icon: Factory },
// // // //               { name: 'Agriculture', icon: Leaf },
// // // //               { name: 'Defense', icon: Award },
// // // //             ].map((ind) => (
// // // //               <button
// // // //                 key={ind.name}
// // // //                 onClick={() => navigate('industries')}
// // // //                 className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all"
// // // //               >
// // // //                 <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
// // // //                   <ind.icon className="w-6 h-6 text-charcoal" />
// // // //                 </div>
// // // //                 <span className="text-sm font-semibold text-charcoal">{ind.name}</span>
// // // //               </button>
// // // //             ))}
// // // //           </div>

// // // //           <div className="mt-12 relative rounded-2xl overflow-hidden">
// // // //             <img src={IMG.wovenClose2} alt="Woven textile close-up" className="w-full h-[200px] lg:h-[240px] object-cover" />
// // // //             <div className="absolute inset-0 bg-charcoal/85" />
// // // //             <div className="absolute inset-0 flex items-center">
// // // //               <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
// // // //                 <div className="grid lg:grid-cols-3 gap-8 items-center">
// // // //                   <div className="lg:col-span-2">
// // // //                     <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Textile Solution?</h3>
// // // //                     <p className="text-silver">
// // // //                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
// // // //                     </p>
// // // //                   </div>
// // // //                   <div className="lg:text-right">
// // // //                     <button
// // // //                       onClick={() => navigate('contact')}
// // // //                       className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
// // // //                     >
// // // //                       Discuss Your Project <ArrowRight className="w-4 h-4" />
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== MANUFACTURING CAPABILITIES ===== */}
// // // //       <section className="py-16 lg:py-24 bg-cloud-lighter">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // // //           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// // // //             <div>
// // // //               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
// // // //               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// // // //                 State-of-the-Art Production Facilities
// // // //               </h2>
// // // //               <p className="text-silver-darker leading-relaxed mb-8">
// // // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our integrated manufacturing ecosystem spans 500,000+ sq. ft. across three strategic locations.
// // // //               </p>

// // // //               <div className="space-y-4 mb-8">
// // // //                 {[
// // // //                   { label: 'Weaving & Knitting', value: '85%', width: 'w-[85%]' },
// // // //                   { label: 'Dyeing & Finishing', value: '92%', width: 'w-[92%]' },
// // // //                   { label: 'Quality Testing', value: '98%', width: 'w-[98%]' },
// // // //                   { label: 'R&D Innovation', value: '78%', width: 'w-[78%]' },
// // // //                 ].map((bar) => (
// // // //                   <div key={bar.label}>
// // // //                     <div className="flex justify-between text-sm mb-1.5">
// // // //                       <span className="font-medium text-charcoal">{bar.label}</span>
// // // //                       <span className="font-semibold text-charcoal">{bar.value} Capacity</span>
// // // //                     </div>
// // // //                     <div className="h-2 bg-cloud-dark rounded-full overflow-hidden">
// // // //                       <div className={`h-full bg-charcoal rounded-full ${bar.width}`} />
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               <button
// // // //                 onClick={() => navigate('manufacturing')}
// // // //                 className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
// // // //               >
// // // //                 Explore Our Facilities <ArrowRight className="w-4 h-4" />
// // // //               </button>
// // // //             </div>

// // // //             <div className="grid grid-cols-2 gap-4">
// // // //               <TexImg src={IMG.production1} alt="Weaving unit" className="h-48 rounded-xl" />
// // // //               <TexImg src={IMG.fabricTexture3} alt="Fabric texture" className="h-48 rounded-xl mt-8" />
// // // //               <TexImg src={IMG.wovenClose1} alt="Woven close-up" className="h-48 rounded-xl" />
// // // //               <TexImg src={IMG.thread1} alt="Thread spools" className="h-48 rounded-xl mt-8" />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== CERTIFICATIONS ===== */}
// // // //       <section className="py-16 lg:py-20 bg-white border-y border-cloud-dark">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // // //           <div className="text-center mb-12">
// // // //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Trust & Compliance</span>
// // // //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// // // //               Globally Certified. Locally Trusted.
// // // //             </h2>
// // // //           </div>

// // // //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
// // // //             {[
// // // //               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
// // // //               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
// // // //             ].map((cert) => (
// // // //               <div
// // // //                 key={cert}
// // // //                 className="flex flex-col items-center gap-3 p-5 bg-cloud-lighter rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
// // // //               >
// // // //                 <div className="w-14 h-14 bg-cloud rounded-full flex items-center justify-center">
// // // //                   <Award className="w-7 h-7 text-charcoal" />
// // // //                 </div>
// // // //                 <span className="text-sm font-semibold text-charcoal text-center">{cert}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           <div className="text-center mt-8">
// // // //             <button
// // // //               onClick={() => navigate('certifications')}
// // // //               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-sm border-b border-charcoal pb-0.5"
// // // //             >
// // // //               View All Certifications <ArrowRight className="w-4 h-4" />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== SUSTAINABILITY ===== */}
// // // //       <section className="py-16 lg:py-24 bg-cloud-lighter">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // // //             <div>
// // // //               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Sustainability</span>
// // // //               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// // // //                 Committed to a Greener Textile Future
// // // //               </h2>
// // // //               <p className="text-silver-darker leading-relaxed mb-8">
// // // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
// // // //               </p>

// // // //               <div className="grid grid-cols-2 gap-4 mb-8">
// // // //                 {[
// // // //                   { value: '40%', label: 'Water Reduction', icon: Droplets },
// // // //                   { value: '60%', label: 'Renewable Energy', icon: Zap },
// // // //                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
// // // //                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
// // // //                 ].map((metric) => (
// // // //                   <div key={metric.label} className="bg-white rounded-xl p-4 border border-cloud-dark">
// // // //                     <metric.icon className="w-5 h-5 text-charcoal mb-2" />
// // // //                     <p className="text-2xl font-bold text-charcoal">{metric.value}</p>
// // // //                     <p className="text-sm text-silver-dark">{metric.label}</p>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               <button
// // // //                 onClick={() => navigate('sustainability')}
// // // //                 className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
// // // //               >
// // // //                 Our Sustainability Journey <ArrowRight className="w-4 h-4" />
// // // //               </button>
// // // //             </div>
// // // //             <TexImg
// // // //               src={IMG.eco1}
// // // //               alt="Sustainable textile manufacturing"
// // // //               className="w-full h-[400px] rounded-2xl"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== TESTIMONIALS ===== */}
// // // //       <section className="py-16 lg:py-24 bg-white">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // // //           <div className="text-center mb-14">
// // // //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
// // // //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// // // //               Trusted by Industry Leaders Worldwide
// // // //             </h2>
// // // //           </div>

// // // //           <div className="grid md:grid-cols-3 gap-6">
// // // //             {[
// // // //               {
// // // //                 quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Their technical expertise and quality consistency are unmatched in the industry.',
// // // //                 name: 'Michael Richardson',
// // // //                 role: 'VP of Procurement',
// // // //                 company: 'AutoTech Industries',
// // // //               },
// // // //               {
// // // //                 quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. TexVista has been our strategic partner for over a decade.',
// // // //                 name: 'Sarah Chen',
// // // //                 role: 'Supply Chain Director',
// // // //                 company: 'AeroSpace Dynamics',
// // // //               },
// // // //               {
// // // //                 quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Their R&D team developed a custom solution that exceeded our specifications.',
// // // //                 name: 'Dr. James Weber',
// // // //                 role: 'Head of Materials',
// // // //                 company: 'MediFlex Healthcare',
// // // //               },
// // // //             ].map((t) => (
// // // //               <div
// // // //                 key={t.name}
// // // //                 className="bg-cloud-lighter rounded-2xl p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
// // // //               >
// // // //                 <Quote className="w-8 h-8 text-silver-light mb-4" />
// // // //                 <div className="flex gap-1 mb-4">
// // // //                   {Array.from({ length: 5 }).map((_, i) => (
// // // //                     <Star key={i} className="w-4 h-4 text-charcoal fill-charcoal" />
// // // //                   ))}
// // // //                 </div>
// // // //                 <p className="text-silver-darker leading-relaxed mb-6">{t.quote}</p>
// // // //                 <div className="flex items-center gap-3">
// // // //                   <div className="w-11 h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-sm">
// // // //                     {t.name.split(' ').map((n) => n[0]).join('')}
// // // //                   </div>
// // // //                   <div>
// // // //                     <p className="font-semibold text-charcoal text-sm">{t.name}</p>
// // // //                     <p className="text-xs text-silver-dark">{t.role}, {t.company}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ===== FINAL CTA ===== */}
// // // //       <section className="relative overflow-hidden">
// // // //         <div className="absolute inset-0">
// // // //           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
// // // //           <div className="absolute inset-0 bg-charcoal-dark/90" />
// // // //           <div className="absolute inset-0 bg-weave-dark" />
// // // //         </div>
// // // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center">
// // // //           <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
// // // //             Ready to Transform Your<br />Textile Supply Chain?
// // // //           </h2>
// // // //           <p className="text-silver max-w-2xl mx-auto mb-10 text-lg">
// // // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
// // // //           </p>
// // // //           <div className="flex flex-wrap gap-4 justify-center">
// // // //             <button
// // // //               onClick={() => navigate('contact')}
// // // //               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5"
// // // //             >
// // // //               Get Started Today <ArrowRight className="w-5 h-5" />
// // // //             </button>
// // // //             <button
// // // //               onClick={() => navigate('products')}
// // // //               className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-lg border border-white/20 transition-all"
// // // //             >
// // // //               Download Catalog
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }








// // // import { useState, useRef, useEffect, useCallback } from 'react';
// // // import { useNavigation } from '../context/NavigationContext';
// // // import { IMG } from '../constants/images';
// // // import {
// // //   ArrowRight,
// // //   CheckCircle2,
// // //   Factory,
// // //   Globe2,
// // //   Award,
// // //   Leaf,
// // //   Shield,
// // //   Zap,
// // //   TrendingUp,
// // //   Users,
// // //   ChevronRight,
// // //   Star,
// // //   Layers,
// // //   Wrench,
// // //   Droplets,
// // //   Wind,
// // //   Scissors,
// // //   Quote,
// // //   AlertCircle,
// // //   RefreshCw,
// // // } from 'lucide-react';

// // // // Simple Image Component (keep this as is)
// // // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// // //   return (
// // //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// // //       <div className="absolute inset-0 bg-weave opacity-40" />
// // //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// // //     </div>
// // //   );
// // // }

// // // // ✅ IMPROVED HERO VIDEO COMPONENT (Auto-play & Error Handling)
// // // interface HeroVideoProps {
// // //   src: string;
// // //   fallbackSrc?: string;
// // //   fallbackImage: string;
// // //   posterImage?: string;
// // // }

// // // function HeroVideo({ src, fallbackSrc, fallbackImage, posterImage }: HeroVideoProps) {
// // //   const videoRef = useRef<HTMLVideoElement>(null);
// // //   const [videoState, setVideoState] = useState<'loading' | 'playing' | 'error'>('loading');
// // //   const [currentSource, setCurrentSource] = useState<'primary' | 'fallback'>('primary');
// // //   const retryCountRef = useRef(0);
// // //   const maxRetries = 3;

// // //   const attemptPlay = useCallback(async () => {
// // //     const video = videoRef.current;
// // //     if (!video) return;

// // //     try {
// // //       // 1. वीडियो को सुनिश्चित बनाने के लिए शुरुआत से रीसेट करो
// // //       video.currentTime = 0;
      
// // //       // 2. सबसे ज़रूरी: Audio अब हमेशा Muted होना चाहिए ताकि Auto-play काम करे
// // //       video.muted = true; 
      
// // //       // 3. Play कोशिश करो
// // //       await video.play();
// // //       setVideoState('playing');
// // //       retryCountRef.current = 0;
// // //     } catch (error) {
// // //       console.error('Video play failed:', error);
      
// // //       retryCountRef.current += 1;
      
// // //       if (retryCountRef.current < maxRetries) {
// // //         setTimeout(() => attemptPlay(), 1000);
// // //       } else if (currentSource === 'primary' && fallbackSrc) {
// // //         console.log('Trying fallback video');
// // //         setCurrentSource('fallback');
// // //         retryCountRef.current = 0;
// // //       } else {
// // //         setVideoState('error');
// // //       }
// // //     }
// // //   }, [currentSource, fallbackSrc]);

// // //   useEffect(() => {
// // //     const video = videoRef.current;
// // //     if (!video) return;

// // //     video.src = (currentSource === 'primary' ? src : fallbackSrc) || src;
// // //     video.load();

// // //     video.addEventListener('canplaythrough', attemptPlay);
// // //     video.addEventListener('error', () => {
// // //         if (currentSource === 'primary' && fallbackSrc) {
// // //             setCurrentSource('fallback');
// // //         } else {
// // //             setVideoState('error');
// // //         }
// // //     });

// // //     return () => {
// // //       video.removeEventListener('canplaythrough', attemptPlay);
// // //       video.removeEventListener('error', () => {});
// // //     };
// // //   }, [currentSource, src, fallbackSrc, attemptPlay]);

// // //   // Handle Error (Show Image)
// // //   if (videoState === 'error') {
// // //     return (
// // //       <div className="relative w-full h-full">
// // //         <img src={fallbackImage} alt="Hero Background" className="w-full h-full object-cover" />
// // //       </div>
// // //     );
// // //   }

// // //   // Handle Loading
// // //   if (videoState === 'loading') {
// // //     return (
// // //       <div className="relative w-full h-full bg-charcoal">
// // //         <img src={posterImage} alt="Loading" className="absolute inset-0 w-full h-full object-cover opacity-30" />
// // //         <div className="absolute inset-0 flex items-center justify-center">
// // //           <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <video
// // //       ref={videoRef}
// // //       autoPlay
// // //       loop
// // //       muted
// // //       playsInline
// // //       preload="auto"
// // //       className="absolute inset-0 w-full h-full object-cover"
// // //     >
// // //       <source src={src} type="video/mp4" />
// // //       {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
// // //       <img src={fallbackImage} alt="Fallback" className="w-full h-full object-cover" />
// // //     </video>
// // //   );
// // // }

// // // export function HomePage() {
// // //   const { navigate } = useNavigation();

// // //   return (
// // //     <div>
// // //       {/* ===== HERO SECTION ===== */}
// // //     <section className="relative overflow-hidden min-h-screen flex items-center">

// // //   {/* VIDEO BACKGROUND */}
// // //   <div className="absolute inset-0">
// // //     <video
// // //       autoPlay
// // //       loop
// // //       muted
// // //       playsInline
// // //       className="w-full h-full object-cover"
// // //       poster="/images/fallback.jpg"
// // //     >
// // //       <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
// // //     </video>

// // //     {/* Overlay */}
// // //     <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
// // //   </div>

// // //   {/* CONTENT */}
// // //   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32 w-full z-10">
// // //     <div className="max-w-3xl">
// // //       <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
// // //         World Class<br />
// // //         Technical <span className="text-silver-light italic font-display">Textiles</span>
// // //       </h1>

// // //       <p className="text-lg sm:text-xl text-white leading-relaxed mb-10 max-w-2xl drop-shadow-md">
// // //         Delivering high-performance technical textiles, advanced industrial fabrics, and innovative material solutions to leading enterprises across 45+ countries worldwide.
// // //       </p>

// // //       <button
// // //         onClick={() => navigate('products')}
// // //         className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal-dark font-bold rounded-lg text-lg transition-all hover:bg-cloud-light hover:shadow-lg hover:-translate-y-0.5"
// // //       >
// // //         Discover More →
// // //       </button>
// // //     </div>
// // //   </div>

// // //   {/* STATS BAR */}
 

// // // </section>


// // //       {/* ===== ABOUT SUMMARY ===== */}
// // //      <style>{`
// // //   @keyframes scroll-left {
// // //     0% {
// // //       transform: translateX(0);
// // //     }
// // //     100% {
// // //       transform: translateX(-50%); 
// // //     }
// // //   }
// // //   .animate-scroll {
// // //     animation: scroll-left 20s linear infinite;
// // //   }
// // // `}</style>

// // // <section className="py-16 lg:py-24 bg-white relative">
// // //   <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //     <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
// // //       {/* ===== LEFT SIDE IMAGE ===== */}
// // //       <div className="relative">
// // //         <TexImg
// // //           src={IMG.production1}
// // //           alt="Industrial textile production facility"
// // //           className="w-full h-[350px] lg:h-[450px] rounded-2xl"
// // //         />
// // //         <div className="absolute bottom-6 right-6 bg-charcoal text-white p-5 rounded-xl shadow-lg">
// // //           <p className="text-3xl font-bold">28+</p>
// // //           <p className="text-sm text-silver-light">Years in Business</p>
// // //         </div>
// // //       </div>

// // //       {/* ===== RIGHT SIDE TEXT ===== */}
// // //       <div>
// // //         <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">About KK EXPORT </span>
// // //         <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// // //           Pioneering Textile Solutions for a{' '}
// // //           <span className="font-display italic">Connected World</span>
// // //         </h2>
// // //         <p className="text-silver-darker leading-relaxed mb-6">
// // //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// // //         </p>
// // //         <p className="text-silver-darker leading-relaxed mb-8">
// // //           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
// // //         </p>

// // //         <div className="grid grid-cols-2 gap-4 mb-8">
// // //           {[
// // //             { icon: Shield, text: 'ISO 9001:2015 Certified' },
// // //             { icon: Globe2, text: 'Global Supply Chain' },
// // //             { icon: Zap, text: 'Advanced R&D Center' },
// // //             { icon: Leaf, text: 'Eco-Friendly Practices' },
// // //           ].map((item) => (
// // //             <div key={item.text} className="flex items-center gap-2.5">
// // //               <div className="w-8 h-8 bg-cloud-light rounded-lg flex items-center justify-center">
// // //                 <item.icon className="w-4 h-4 text-charcoal" />
// // //               </div>
// // //               <span className="text-sm font-medium text-charcoal">{item.text}</span>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <button
// // //           onClick={() => navigate('about')}
// // //           className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
// // //         >
// // //           Learn More About Us <ArrowRight className="w-4 h-4" />
// // //         </button>
// // //       </div>

// // //     </div>
// // //   </div>

// // //   {/* ===== SCROLLING IMAGE SECTION (Single Image) ===== */}
// // //   <div className="w-full overflow-hidden ">
// // //     {/* Trick: We use w-[200%] so the single image has room to slide from left to right */}
// // //     <div className="">
// // //       {/* ONLY ONE IMAGE */}
// // //       <img 
// // //         src="/image/aboutimg.png" 
// // //         alt="Scrolling Process" 
// // //         className="h-32 w-auto object-contain animate-scroll" 
// // //       />
// // //     </div>
// // //   </div>
// // // </section>

// // //       {/* ===== PRODUCT CATEGORIES ===== */}
// // //       <section className="py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //           <div className="text-center mb-14">
// // //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Our Products</span>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// // //               Comprehensive Textile Solutions
// // //             </h2>
// // //             <p className="text-silver-darker max-w-2xl mx-auto">
// // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover our extensive range of technical textiles and industrial fabric solutions.
// // //             </p>
// // //           </div>

// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {[
// // //               { title: 'Technical Textiles', desc: 'High-performance engineered fabrics for demanding industrial applications and extreme environments.', icon: Layers, img: IMG.fabricTexture1, count: '450+ Variants' },
// // //               { title: 'Industrial Fabrics', desc: 'Heavy-duty woven and knitted fabrics designed for filtration, conveyor, and industrial process applications.', icon: Factory, img: IMG.production2, count: '380+ Variants' },
// // //               { title: 'Coated Textiles', desc: 'Advanced polymer-coated fabrics providing superior protection, durability, and weather resistance.', icon: Shield, img: IMG.fabricTexture2, count: '290+ Variants' },
// // //               { title: 'Nonwoven Fabrics', desc: 'Versatile nonwoven materials for medical, hygiene, geotextile, and automotive interior applications.', icon: Wind, img: IMG.wovenClose1, count: '520+ Variants' },
// // //               { title: 'Specialty Yarns', desc: 'Premium synthetic and blended yarns engineered for specific performance and aesthetic requirements.', icon: Scissors, img: IMG.thread1, count: '340+ Variants' },
// // //               { title: 'Smart Textiles', desc: 'Next-generation fabrics with embedded sensors, conductive fibers, and intelligent material properties.', icon: Zap, img: IMG.fabricTexture4, count: '120+ Variants' },
// // //             ].map((product) => (
// // //               <button
// // //                 key={product.title}
// // //                 onClick={() => navigate('products')}
// // //                 className="group bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left"
// // //               >
// // //                 <TexImg src={product.img} alt={product.title} className="w-full h-48" />
// // //                 <div className="p-6">
// // //                   <div className="flex items-center justify-between mb-3">
// // //                     <h3 className="text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
// // //                       <product.icon className="w-5 h-5 text-silver-dark" />
// // //                       {product.title}
// // //                     </h3>
// // //                     <ChevronRight className="w-5 h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
// // //                   </div>
// // //                   <p className="text-sm text-silver-darker leading-relaxed mb-4">{product.desc}</p>
// // //                   <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-3 py-1 rounded-full">
// // //                     {product.count}
// // //                   </span>
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-10">
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
// // //             >
// // //               View All Products <ArrowRight className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== INDUSTRY APPLICATIONS ===== */}
// // //       <section className="py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //           <div className="text-center mb-14">
// // //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Industry Solutions</span>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// // //               Textiles Engineered for Every Sector
// // //             </h2>
// // //             <p className="text-silver-darker max-w-2xl mx-auto">
// // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // //             {[
// // //               { name: 'Automotive', icon: Wrench },
// // //               { name: 'Aerospace', icon: Globe2 },
// // //               { name: 'Healthcare', icon: Shield },
// // //               { name: 'Construction', icon: Factory },
// // //               { name: 'Agriculture', icon: Leaf },
// // //               { name: 'Defense', icon: Award },
// // //             ].map((ind) => (
// // //               <button
// // //                 key={ind.name}
// // //                 onClick={() => navigate('industries')}
// // //                 className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all"
// // //               >
// // //                 <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
// // //                   <ind.icon className="w-6 h-6 text-charcoal" />
// // //                 </div>
// // //                 <span className="text-sm font-semibold text-charcoal">{ind.name}</span>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="mt-12 relative rounded-2xl overflow-hidden">
// // //             <img src={IMG.wovenClose2} alt="Woven textile close-up" className="w-full h-[200px] lg:h-[240px] object-cover" />
// // //             <div className="absolute inset-0 bg-charcoal/85" />
// // //             <div className="absolute inset-0 flex items-center">
// // //               <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
// // //                 <div className="grid lg:grid-cols-3 gap-8 items-center">
// // //                   <div className="lg:col-span-2">
// // //                     <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Textile Solution?</h3>
// // //                     <p className="text-silver">
// // //                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
// // //                     </p>
// // //                   </div>
// // //                   <div className="lg:text-right">
// // //                     <button
// // //                       onClick={() => navigate('contact')}
// // //                       className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
// // //                     >
// // //                       Discuss Your Project <ArrowRight className="w-4 h-4" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== MANUFACTURING CAPABILITIES ===== */}
// // //       {/* <section className="py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
// // //             <div>
// // //               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Manufacturing Excellence</span>
// // //               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// // //                 State-of-the-Art Production Facilities
// // //               </h2>
// // //               <p className="text-silver-darker leading-relaxed mb-8">
// // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our integrated manufacturing ecosystem spans 500,000+ sq. ft. across three strategic locations.
// // //               </p>

// // //               <div className="space-y-4 mb-8">
// // //                 {[
// // //                   { label: 'Weaving & Knitting', value: '85%', width: 'w-[85%]' },
// // //                   { label: 'Dyeing & Finishing', value: '92%', width: 'w-[92%]' },
// // //                   { label: 'Quality Testing', value: '98%', width: 'w-[98%]' },
// // //                   { label: 'R&D Innovation', value: '78%', width: 'w-[78%]' },
// // //                 ].map((bar) => (
// // //                   <div key={bar.label}>
// // //                     <div className="flex justify-between text-sm mb-1.5">
// // //                       <span className="font-medium text-charcoal">{bar.label}</span>
// // //                       <span className="font-semibold text-charcoal">{bar.value} Capacity</span>
// // //                     </div>
// // //                     <div className="h-2 bg-cloud-dark rounded-full overflow-hidden">
// // //                       <div className={`h-full bg-charcoal rounded-full ${bar.width}`} />
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <button
// // //                 onClick={() => navigate('manufacturing')}
// // //                 className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5"
// // //               >
// // //                 Explore Our Facilities <ArrowRight className="w-4 h-4" />
// // //               </button>
// // //             </div>

// // //             <div className="grid grid-cols-2 gap-4">
// // //               <TexImg src={IMG.production1} alt="Weaving unit" className="h-48 rounded-xl" />
// // //               <TexImg src={IMG.fabricTexture3} alt="Fabric texture" className="h-48 rounded-xl mt-8" />
// // //               <TexImg src={IMG.wovenClose1} alt="Woven close-up" className="h-48 rounded-xl" />
// // //               <TexImg src={IMG.thread1} alt="Thread spools" className="h-48 rounded-xl mt-8" />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section> */}
// // //       <section className="relative w-full h-[600px] overflow-hidden">
// // //   <video
// // //     autoPlay
// // //     loop
// // //     muted
// // //     playsInline
// // //     className="w-full h-full object-cover"
// // //   >
// // //     <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
// // //     Your browser does not support the video tag.
// // //   </video>
// // // </section>

// // //       {/* ===== CERTIFICATIONS ===== */}
// // //       <section className="py-16 lg:py-20 bg-white border-y border-cloud-dark">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //           <div className="text-center mb-12">
// // //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Trust & Compliance</span>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// // //               Globally Certified. Locally Trusted.
// // //             </h2>
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
// // //             {[
// // //               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
// // //               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
// // //             ].map((cert) => (
// // //               <div
// // //                 key={cert}
// // //                 className="flex flex-col items-center gap-3 p-5 bg-cloud-lighter rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
// // //               >
// // //                 <div className="w-14 h-14 bg-cloud rounded-full flex items-center justify-center">
// // //                   <Award className="w-7 h-7 text-charcoal" />
// // //                 </div>
// // //                 <span className="text-sm font-semibold text-charcoal text-center">{cert}</span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-8">
// // //             <button
// // //               onClick={() => navigate('certifications')}
// // //               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-sm border-b border-charcoal pb-0.5"
// // //             >
// // //               View All Certifications <ArrowRight className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== SUSTAINABILITY ===== */}
// // //       <section className="py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //             <div>
// // //               <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Sustainability</span>
// // //               <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
// // //                 Committed to a Greener Textile Future
// // //               </h2>
// // //               <p className="text-silver-darker leading-relaxed mb-8">
// // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
// // //               </p>

// // //               <div className="grid grid-cols-2 gap-4 mb-8">
// // //                 {[
// // //                   { value: '40%', label: 'Water Reduction', icon: Droplets },
// // //                   { value: '60%', label: 'Renewable Energy', icon: Zap },
// // //                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
// // //                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
// // //                 ].map((metric) => (
// // //                   <div key={metric.label} className="bg-white rounded-xl p-4 border border-cloud-dark">
// // //                     <metric.icon className="w-5 h-5 text-charcoal mb-2" />
// // //                     <p className="text-2xl font-bold text-charcoal">{metric.value}</p>
// // //                     <p className="text-sm text-silver-dark">{metric.label}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <button
// // //                 onClick={() => navigate('sustainability')}
// // //                 className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors"
// // //               >
// // //                 Our Sustainability Journey <ArrowRight className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //             <TexImg
// // //               src={IMG.eco1}
// // //               alt="Sustainable textile manufacturing"
// // //               className="w-full h-[400px] rounded-2xl"
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== TESTIMONIALS ===== */}
// // //       <section className="py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //           <div className="text-center mb-14">
// // //             <span className="text-silver-dark font-semibold text-sm uppercase tracking-wider">Client Testimonials</span>
// // //             <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
// // //               Trusted by Industry Leaders Worldwide
// // //             </h2>
// // //           </div>

// // //           <div className="grid md:grid-cols-3 gap-6">
// // //             {[
// // //               {
// // //                 quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Their technical expertise and quality consistency are unmatched in the industry.',
// // //                 name: 'Michael Richardson',
// // //                 role: 'VP of Procurement',
// // //                 company: 'AutoTech Industries',
// // //               },
// // //               {
// // //                 quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. TexVista has been our strategic partner for over a decade.',
// // //                 name: 'Sarah Chen',
// // //                 role: 'Supply Chain Director',
// // //                 company: 'AeroSpace Dynamics',
// // //               },
// // //               {
// // //                 quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Their R&D team developed a custom solution that exceeded our specifications.',
// // //                 name: 'Dr. James Weber',
// // //                 role: 'Head of Materials',
// // //                 company: 'MediFlex Healthcare',
// // //               },
// // //             ].map((t) => (
// // //               <div
// // //                 key={t.name}
// // //                 className="bg-cloud-lighter rounded-2xl p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
// // //               >
// // //                 <Quote className="w-8 h-8 text-silver-light mb-4" />
// // //                 <div className="flex gap-1 mb-4">
// // //                   {Array.from({ length: 5 }).map((_, i) => (
// // //                     <Star key={i} className="w-4 h-4 text-charcoal fill-charcoal" />
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-silver-darker leading-relaxed mb-6">{t.quote}</p>
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="w-11 h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-sm">
// // //                     {t.name.split(' ').map((n) => n[0]).join('')}
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-semibold text-charcoal text-sm">{t.name}</p>
// // //                     <p className="text-xs text-silver-dark">{t.role}, {t.company}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== FINAL CTA ===== */}
// // //       <section className="relative overflow-hidden">
// // //         <div className="absolute inset-0">
// // //           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
// // //           <div className="absolute inset-0 bg-charcoal-dark/90" />
// // //           <div className="absolute inset-0 bg-weave-dark" />
// // //         </div>
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center">
// // //           <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
// // //             Ready to Transform Your<br />Textile Supply Chain?
// // //           </h2>
// // //           <p className="text-silver max-w-2xl mx-auto mb-10 text-lg">
// // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
// // //           </p>
// // //           <div className="flex flex-wrap gap-4 justify-center">
// // //             <button
// // //               onClick={() => navigate('contact')}
// // //               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5"
// // //             >
// // //               Get Started Today <ArrowRight className="w-5 h-5" />
// // //             </button>
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-lg border border-white/20 transition-all"
// // //             >
// // //               Download Catalog
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }






// // // import { useState, useRef, useEffect, useCallback } from 'react';
// // // import { useNavigation } from '../context/NavigationContext';
// // // import { IMG } from '../constants/images';
// // // import {
// // //   ArrowRight,
// // //   CheckCircle2,
// // //   Factory,
// // //   Globe2,
// // //   Award,
// // //   Leaf,
// // //   Shield,
// // //   Zap,
// // //   TrendingUp,
// // //   Users,
// // //   ChevronRight,
// // //   Star,
// // //   Layers,
// // //   Wrench,
// // //   Droplets,
// // //   Wind,
// // //   Scissors,
// // //   Quote,
// // //   AlertCircle,
// // //   RefreshCw,
// // // } from 'lucide-react';

// // // // Simple Image Component
// // // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// // //   return (
// // //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// // //       <div className="absolute inset-0 bg-weave opacity-40" />
// // //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// // //     </div>
// // //   );
// // // }

// // // export function HomePage() {
// // //   const { navigate } = useNavigation();
// // //   const scrollImageRef = useRef<HTMLDivElement>(null);

// // //   // Scroll animation effect for image
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add('in-view');
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.2 }
// // //     );

// // //     if (scrollImageRef.current) {
// // //       observer.observe(scrollImageRef.current);
// // //     }

// // //     return () => {
// // //       if (scrollImageRef.current) {
// // //         observer.unobserve(scrollImageRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="font-body">
// // //       {/* ===== STYLES ===== */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        
// // //         :root {
// // //           --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
// // //           --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
// // //         }
        
// // //         .font-body {
// // //           font-family: var(--font-body);
// // //         }
        
// // //         .font-display {
// // //           font-family: var(--font-display);
// // //         }

// // //         .scroll-slide-container {
// // //           width: 100%;
// // //           position: relative;
// // //         }

// // //         .scroll-slide-image {
// // //           transform: translateX(-100%);
// // //           transition: transform 1.5s ease-out;
// // //         }

// // //         .scroll-slide-container.in-view .scroll-slide-image {
// // //           transform: translateX(0);
// // //         }

// // //         html {
// // //           scroll-behavior: smooth;
// // //         }

// // //         body {
// // //           -webkit-font-smoothing: antialiased;
// // //           -moz-osx-font-smoothing: grayscale;
// // //         }

// // //       `}</style>

// // //       {/* ===== HERO SECTION ===== */}
// // // <section className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[70vh] lg:min-h-screen flex items-center">
// // //   <div className="absolute inset-0">
// // //     <video
// // //       autoPlay
// // //       loop
// // //       muted
// // //       playsInline
// // //       className="w-full h-full object-cover"
// // //       poster="/images/fallback.jpg"
// // //     >
// // //       <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
// // //     </video>
// // //     <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
// // //   </div>

// // //   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full z-10">
// // //     <div className="max-w-4xl">
      
// // //       {/* Top label */}
// // //       <p 
// // //         className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold mb-3 tracking-[0.22em] uppercase drop-shadow-lg"
// // //         style={{ fontFamily: "'Inter', sans-serif" }}
// // //       >
// // //         Your Trusted Global Buying House
// // //       </p>

// // //       {/* Main heading */}
// // //       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
// // //         <span style={{ fontFamily: "'Poppins', sans-serif" }}>
// // //           End-to-End Garment Sourcing
// // //         </span>
// // //         <br />
// // //         <span 
// // //           className="text-gray-300 italic font-light tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
// // //           style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
// // //         >
// // //           Solutions for Global Brands
// // //         </span>
// // //       </h1>

// // //       {/* Description */}
// // //       <p 
// // //         className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-md"
// // //         style={{ fontFamily: "'Inter', sans-serif" }}
// // //       >
// // //         We are a trusted garment buying house in India specializing in apparel sourcing, vendor management, quality assurance, and global supply chain solutions. We connect international fashion brands with certified garment manufacturers to deliver premium quality apparel with on-time delivery
// // //       </p>

// // //       {/* Button */}
// // //       <button
// // //         onClick={() => navigate('/products')}
// // //         className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
// // //         style={{ fontFamily: "'Poppins', sans-serif" }}
// // //       >
// // //         Discover Products
// // //         <ArrowRight className="w-5 h-5" />
// // //       </button>

// // //     </div>
// // //   </div>
// // // </section>

// // //       {/* ===== ABOUT SUMMARY ===== */}
// // //     <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
// // //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //     <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
      
    
// // //       <div className="order-1 lg:order-2">
// // //         {/* Label */}
// // //         <span 
// // //           className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //           style={{ fontFamily: "'Inter', sans-serif" }}
// // //         >
// // //           About KK EXPORT
// // //         </span>
        
// // //         {/* Main Heading */}
// // //         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// // //           <span style={{ fontFamily: "'Poppins', sans-serif" }}>
// // //             Leading Garment Buying{' '}
// // //           </span>
// // //           <span 
// // //             className="italic font-light"
// // //             style={{ fontFamily: "'Playfair Display', serif" }}
// // //           >
// // //             House in India
// // //           </span>
// // //         </h2>
        
// // //         {/* Paragraphs */}
// // //         <p 
// // //           className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //           style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //         >
// // //           KK Exports India is a leading garment buying house in India and a trusted global apparel sourcing partner for international brands and retailers. We specialize in connecting buyers with certified and reliable clothing manufacturers across India.
// // //         </p>
        
// // //         <p 
// // //           className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //           style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //         >
// // //         With a strong network of verified factories, we manage complete textile sourcing, including product development, sampling, bulk production, quality control, and final shipment. Our experienced team ensures strict compliance standards, ethical manufacturing practices, and timely delivery for every order.
// // //         </p>
        
// // //         <p 
// // //           className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //           style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //         >
// // //          As a growing export house, we focus on transparency, cost efficiency, and long-term business relationships. Our mission is to provide seamless garment sourcing solutions while maintaining international quality standards. KK Exports India is committed to excellence, reliability, and responsible sourcing in the global textile industry
// // //         </p>
        
        
// // //         {/* Button */}
// // //         <button
// // //           onClick={() => navigate('about')}
// // //           className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5 text-sm sm:text-base active:scale-95"
// // //           style={{ fontFamily: "'Poppins', sans-serif" }}
// // //         >
// // //           Learn More About Us <ArrowRight className="w-4 h-4" />
// // //         </button>
// // //       </div>
// // //     </div>
// // //   </div>

// // //   {/* ===== SCROLLING IMAGE SECTION ===== */}
// // //   <div className="w-full overflow-hidden mt-12 sm:mt-16">
// // //     <div ref={scrollImageRef} className="scroll-slide-container">
// // //       <img 
// // //         src="/image/aboutimg.png" 
// // //         alt="Scrolling Process" 
// // //         className="h-20 sm:h-24 md:h-32 w-auto object-contain scroll-slide-image" 
// // //       />
// // //     </div>
// // //   </div>
// // // </section>

// // //       {/* ===== PRODUCT CATEGORIES ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Products</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Comprehensive Textile Solutions
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4">
// // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover our extensive range of technical textiles and industrial fabric solutions.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //             {[
// // //               { title: 'Technical Textiles', desc: 'High-performance engineered fabrics for demanding industrial applications and extreme environments.', icon: Layers, img: IMG.fabricTexture1, count: '450+ Variants' },
// // //               { title: 'Industrial Fabrics', desc: 'Heavy-duty woven and knitted fabrics designed for filtration, conveyor, and industrial process applications.', icon: Factory, img: IMG.production2, count: '380+ Variants' },
// // //               { title: 'Coated Textiles', desc: 'Advanced polymer-coated fabrics providing superior protection, durability, and weather resistance.', icon: Shield, img: IMG.fabricTexture2, count: '290+ Variants' },
// // //               { title: 'Nonwoven Fabrics', desc: 'Versatile nonwoven materials for medical, hygiene, geotextile, and automotive interior applications.', icon: Wind, img: IMG.wovenClose1, count: '520+ Variants' },
// // //               { title: 'Specialty Yarns', desc: 'Premium synthetic and blended yarns engineered for specific performance and aesthetic requirements.', icon: Scissors, img: IMG.thread1, count: '340+ Variants' },
// // //               { title: 'Smart Textiles', desc: 'Next-generation fabrics with embedded sensors, conductive fibers, and intelligent material properties.', icon: Zap, img: IMG.fabricTexture4, count: '120+ Variants' },
// // //             ].map((product) => (
// // //               <button
// // //                 key={product.title}
// // //                 onClick={() => navigate('products')}
// // //                 className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left active:scale-98"
// // //               >
// // //                 <TexImg src={product.img} alt={product.title} className="w-full h-40 sm:h-48" />
// // //                 <div className="p-4 sm:p-6">
// // //                   <div className="flex items-center justify-between mb-2 sm:mb-3">
// // //                     <h3 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
// // //                       <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0" />
// // //                       <span className="line-clamp-1">{product.title}</span>
// // //                     </h3>
// // //                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all flex-shrink-0" />
// // //                   </div>
// // //                   <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{product.desc}</p>
// // //                   <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full">
// // //                     {product.count}
// // //                   </span>
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-8 sm:mt-10">
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base active:scale-95"
// // //             >
// // //               View All Products <ArrowRight className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== INDUSTRY APPLICATIONS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Industry Solutions</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Textiles Engineered for Every Sector
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4">
// // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
// // //             {[
// // //               { name: 'Automotive', icon: Wrench },
// // //               { name: 'Aerospace', icon: Globe2 },
// // //               { name: 'Healthcare', icon: Shield },
// // //               { name: 'Construction', icon: Factory },
// // //               { name: 'Agriculture', icon: Leaf },
// // //               { name: 'Defense', icon: Award },
// // //             ].map((ind) => (
// // //               <button
// // //                 key={ind.name}
// // //                 onClick={() => navigate('industries')}
// // //                 className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all active:scale-95"
// // //               >
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
// // //                   <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
// // //                 </div>
// // //                 <span className="text-xs sm:text-sm font-semibold text-charcoal text-center">{ind.name}</span>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden">
// // //   <img 
// // //     src={IMG.wovenClose2} 
// // //     alt="Woven textile close-up" 
// // //     className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover" 
// // //   />
// // //   <div className="absolute inset-0 bg-charcoal/85" />
// // //   <div className="absolute inset-0 flex items-center">
// // //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
// // //       <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
// // //         <div className="lg:col-span-2 text-center lg:text-left">
// // //           <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
// // //             Need a Custom Textile Solution?
// // //           </h3>
// // //           <p className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0">
// // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
// // //           </p>
// // //         </div>
// // //         <div className="lg:text-right">
// // //           <button
// // //             onClick={() => navigate('contact')}
// // //             className="inline-flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors text-xs sm:text-sm lg:text-base w-full lg:w-auto justify-center active:scale-95"
// // //           >
// // //             Discuss Your Project <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div>
// // // </div>
// // //         </div>
// // //       </section>

     

// // //       {/* ===== MANUFACTURING VIDEO SECTION ===== */}
// // //       {/* <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
// // //         <video
// // //           autoPlay
// // //           loop
// // //           muted
// // //           playsInline
// // //           className="w-full h-full object-cover"
// // //         >
// // //           <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
// // //         </video>
// // //       </section> */}

// // //       {/* ===== CERTIFICATIONS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-12">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Trust & Compliance</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Globally Certified. Locally Trusted.
// // //             </h2>
// // //           </div>

// // //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
// // //             {[
// // //               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
// // //               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
// // //             ].map((cert) => (
// // //               <div
// // //                 key={cert}
// // //                 className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
// // //               >
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center">
// // //                   <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal" />
// // //                 </div>
// // //                 <span className="text-xs sm:text-sm font-semibold text-charcoal text-center">{cert}</span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-6 sm:mt-8">
// // //             <button
// // //               onClick={() => navigate('certifications')}
// // //               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95"
// // //             >
// // //               View All Certifications <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== SUSTAINABILITY ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
// // //             <div className="order-2 lg:order-1">
// // //               <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Sustainability</span>
// // //               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// // //                 Committed to a Greener Textile Future
// // //               </h2>
// // //               <p className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8">
// // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
// // //               </p>

// // //               <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
// // //                 {[
// // //                   { value: '40%', label: 'Water Reduction', icon: Droplets },
// // //                   { value: '60%', label: 'Renewable Energy', icon: Zap },
// // //                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
// // //                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
// // //                 ].map((metric) => (
// // //                   <div key={metric.label} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark">
// // //                     <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2" />
// // //                     <p className="text-xl sm:text-2xl font-bold text-charcoal">{metric.value}</p>
// // //                     <p className="text-xs sm:text-sm text-silver-dark">{metric.label}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <button
// // //                 onClick={() => navigate('sustainability')}
// // //                 className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95"
// // //               >
// // //                 Our Sustainability Journey <ArrowRight className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //             <TexImg
// // //               src={IMG.eco1}
// // //               alt="Sustainable textile manufacturing"
// // //               className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl order-1 lg:order-2"
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== TESTIMONIALS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Client Testimonials</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Trusted by Industry Leaders Worldwide
// // //             </h2>
// // //           </div>

// // //           {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //             {[
// // //               {
// // //                 quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Their technical expertise and quality consistency are unmatched in the industry.',
// // //                 name: 'Michael Richardson',
// // //                 role: 'VP of Procurement',
// // //                 company: 'AutoTech Industries',
// // //               },
// // //               {
// // //                 quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. TexVista has been our strategic partner for over a decade.',
// // //                 name: 'Sarah Chen',
// // //                 role: 'Supply Chain Director',
// // //                 company: 'AeroSpace Dynamics',
// // //               },
// // //               {
// // //                 quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Their R&D team developed a custom solution that exceeded our specifications.',
// // //                 name: 'Dr. James Weber',
// // //                 role: 'Head of Materials',
// // //                 company: 'MediFlex Healthcare',
// // //               },
// // //             ].map((t) => (
// // //               <div
// // //                 key={t.name}
// // //                 className="bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
// // //               >
// // //                 <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4" />
// // //                 <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
// // //                   {Array.from({ length: 5 }).map((_, i) => (
// // //                     <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6">{t.quote}</p>
// // //                 <div className="flex items-center gap-2.5 sm:gap-3">
// // //                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
// // //                     {t.name.split(' ').map((n) => n[0]).join('')}
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-semibold text-charcoal text-xs sm:text-sm">{t.name}</p>
// // //                     <p className="text-[10px] sm:text-xs text-silver-dark">{t.role}, {t.company}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div> */}
// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //   {[
// // //     {
// // //       quote:
// // //         "We have been sourcing industrial-grade cotton fabrics for our garment manufacturing unit. The fabric durability, color consistency, and timely bulk delivery have significantly improved our production workflow.",
// // //       name: "Rohit Mehta",
// // //       role: "Procurement Manager",
// // //       company: "GlobalTex Apparel Pvt. Ltd.",
// // //     },
// // //     {
// // //       quote:
// // //         "Their technical textile solutions helped us develop high-performance uniforms for industrial workers. Quality testing standards and customization options are truly impressive for large-scale B2B requirements.",
// // //       name: "Anjali Verma",
// // //       role: "Operations Head",
// // //       company: "SafeWear Industries",
// // //     },
// // //     {
// // //       quote:
// // //         "We partnered with them for exporting premium woven fabrics to Europe. Packaging quality, export documentation, and consistent fabric finishing make them a reliable textile manufacturing partner.",
// // //       name: "David Fernandes",
// // //       role: "Director - Supply Chain",
// // //       company: "EuroFab Exports",
// // //     },
// // //   ].map((t) => (
// // //     <div
// // //       key={t.name}
// // //       className="bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
// // //     >
// // //       <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4" />

// // //       <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
// // //         {Array.from({ length: 5 }).map((_, i) => (
// // //           <Star
// // //             key={i}
// // //             className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal"
// // //           />
// // //         ))}
// // //       </div>

// // //       <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6">
// // //         {t.quote}
// // //       </p>

// // //       <div className="flex items-center gap-2.5 sm:gap-3">
// // //         <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
// // //           {t.name.split(" ").map((n) => n[0]).join("")}
// // //         </div>

// // //         <div>
// // //           <p className="font-semibold text-charcoal text-xs sm:text-sm">
// // //             {t.name}
// // //           </p>
// // //           <p className="text-[10px] sm:text-xs text-silver-dark">
// // //             {t.role}, {t.company}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   ))}
// // // </div>

// // //         </div>
// // //       </section>

// // //       {/* ===== FINAL CTA ===== */}
// // //       <section className="relative overflow-hidden">
// // //         <div className="absolute inset-0">
// // //           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
// // //           <div className="absolute inset-0 bg-charcoal-dark/90" />
// // //           <div className="absolute inset-0 bg-weave-dark" />
// // //         </div>
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
// // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
// // //             Ready to Transform Your<br />Textile Supply Chain?
// // //           </h2>
// // //           <p className="text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
// // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
// // //           </p>
// // //           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
// // //             <button
// // //               onClick={() => navigate('contact')}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5 active:scale-95"
// // //             >
// // //               Get Started Today <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //             </button>
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all active:scale-95"
// // //             >
// // //               Download Catalog
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }












// // // import { useState, useRef, useEffect, useCallback } from 'react';
// // // import { useNavigation } from '../context/NavigationContext';
// // // import { IMG } from '../constants/images';
// // // import {
// // //   ArrowRight,
// // //   CheckCircle2,
// // //   Factory,
// // //   Globe2,
// // //   Award,
// // //   Leaf,
// // //   Shield,
// // //   Zap,
// // //   TrendingUp,
// // //   Users,
// // //   ChevronRight,
// // //   Star,
// // //   Layers,
// // //   Wrench,
// // //   Droplets,
// // //   Wind,
// // //   Scissors,
// // //   Quote,
// // //   AlertCircle,
// // //   RefreshCw,
// // // } from 'lucide-react';

// // // // Simple Image Component
// // // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// // //   return (
// // //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// // //       <div className="absolute inset-0 bg-weave opacity-40" />
// // //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// // //     </div>
// // //   );
// // // }

// // // export function HomePage() {
// // //   const { navigate } = useNavigation();
// // //   const scrollImageRef = useRef<HTMLDivElement>(null);
  
// // //   // Auto-slider state
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   // Auto-slide effect (changes every 3 seconds)
// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev + 1) % 4);
// // //     }, 3000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   // Scroll animation effect for image
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add('in-view');
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.2 }
// // //     );

// // //     if (scrollImageRef.current) {
// // //       observer.observe(scrollImageRef.current);
// // //     }

// // //     return () => {
// // //       if (scrollImageRef.current) {
// // //         observer.unobserve(scrollImageRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="font-body">
// // //       {/* ===== STYLES ===== */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&family=Poppins:wght@300;400;600;700;800&display=swap');
        
// // //         :root {
// // //           --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
// // //           --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
// // //         }
        
// // //         .font-body {
// // //           font-family: var(--font-body);
// // //         }
        
// // //         .font-display {
// // //           font-family: var(--font-display);
// // //         }

// // //        @keyframes scroll-left-to-right {
// // //   0% {
// // //     transform: translateX(-100%);
// // //   }
// // //   100% {
// // //     transform: translateX(0);
// // //   }
// // // }

// // //         .animate-scroll-continuous {
// // //           display: flex;
// // //           width: max-content;
// // //           animation: scroll-continuous 20s linear infinite;
// // //         }

// // //         .animate-scroll-continuous:hover {
// // //           animation-play-state: paused;
// // //         }

// // //         html {
// // //           scroll-behavior: smooth;
// // //         }

// // //         body {
// // //           -webkit-font-smoothing: antialiased;
// // //           -moz-osx-font-smoothing: grayscale;
// // //         }
// // //       `}</style>

// // //       {/* ===== HERO SECTION ===== */}
// // //       <section className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[70vh] lg:min-h-screen flex items-center">
// // //         <div className="absolute inset-0">
// // //           <video
// // //             autoPlay
// // //             loop
// // //             muted
// // //             playsInline
// // //             className="w-full h-full object-cover"
// // //             poster="/images/fallback.jpg"
// // //           >
// // //             <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
// // //           </video>
// // //           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
// // //         </div>

// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full z-10">
// // //           <div className="max-w-4xl">
            
// // //             {/* Top label */}
// // //             <p 
// // //               className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold mb-3 tracking-[0.22em] uppercase drop-shadow-lg"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               Your Trusted Global Buying House
// // //             </p>

// // //             {/* Main heading */}
// // //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
// // //               <span style={{ fontFamily: "'Poppins', sans-serif" }}>
// // //                 End-to-End Garment Sourcing
// // //               </span>
// // //               <br />
// // //               <span 
// // //                 className="text-gray-300 italic font-light tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
// // //                 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
// // //               >
// // //                 Solutions for Global Brands
// // //               </span>
// // //             </h1>

// // //             {/* Description */}
// // //             <p 
// // //               className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-md"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               We are a trusted garment buying house in India specializing in apparel sourcing, vendor management, quality assurance, and global supply chain solutions. We connect international fashion brands with certified garment manufacturers to deliver premium quality apparel with on-time delivery
// // //             </p>

// // //             {/* Button */}
// // //             <button
// // //               onClick={() => navigate('/products')}
// // //               className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Discover Products
// // //               <ArrowRight className="w-5 h-5" />
// // //             </button>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== ABOUT SUMMARY WITH AUTO-SLIDER ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
// // //             {/* Auto Slider Section */}
// // //             <div className="relative order-2 lg:order-1">
// // //               <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden">
// // //                 {/* Slide 1 */}
// // //                 <div
// // //                   className={`absolute inset-0 transition-opacity duration-1000 ${
// // //                     currentSlide === 0 ? 'opacity-100' : 'opacity-0'
// // //                   }`}
// // //                 >
// // //                   <img
// // //                     src="/image/aboutslider1.jpg"
// // //                     alt="Slide 1"
// // //                     className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
// // //                   />
// // //                 </div>

// // //                 {/* Slide 2 */}
// // //                 <div
// // //                   className={`absolute inset-0 transition-opacity duration-1000 ${
// // //                     currentSlide === 1 ? 'opacity-100' : 'opacity-0'
// // //                   }`}
// // //                 >
// // //                   <img
// // //                     src="/image/abslider2.png"
// // //                     alt="Slide 2"
// // //                     className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
// // //                   />
// // //                 </div>

// // //                 {/* Slide 3 */}
// // //                 <div
// // //                   className={`absolute inset-0 transition-opacity duration-1000 ${
// // //                     currentSlide === 2 ? 'opacity-100' : 'opacity-0'
// // //                   }`}
// // //                 >
// // //                   <img
// // //                     src="/image/abslider3.jpg"
// // //                     alt="Slide 3"
// // //                     className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
// // //                   />
// // //                 </div>

// // //                 {/* Slide 4 */}
// // //                 <div
// // //                   className={`absolute inset-0 transition-opacity duration-1000 ${
// // //                     currentSlide === 3 ? 'opacity-100' : 'opacity-0'
// // //                   }`}
// // //                 >
// // //                   <img
// // //                     src="/image/abslider4.jpg"
// // //                     alt="Slide 4"
// // //                     className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
// // //                   />
// // //                 </div>
                
// // //                 {/* Slide Indicators */}
// // //                 {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
// // //                   <button
// // //                     onClick={() => setCurrentSlide(0)}
// // //                     className={`w-2 h-2 rounded-full transition-all ${
// // //                       currentSlide === 0 ? 'bg-white w-6' : 'bg-white/50'
// // //                     }`}
// // //                   />
// // //                   <button
// // //                     onClick={() => setCurrentSlide(1)}
// // //                     className={`w-2 h-2 rounded-full transition-all ${
// // //                       currentSlide === 1 ? 'bg-white w-6' : 'bg-white/50'
// // //                     }`}
// // //                   />
// // //                   <button
// // //                     onClick={() => setCurrentSlide(2)}
// // //                     className={`w-2 h-2 rounded-full transition-all ${
// // //                       currentSlide === 2 ? 'bg-white w-6' : 'bg-white/50'
// // //                     }`}
// // //                   />
// // //                   <button
// // //                     onClick={() => setCurrentSlide(3)}
// // //                     className={`w-2 h-2 rounded-full transition-all ${
// // //                       currentSlide === 3 ? 'bg-white w-6' : 'bg-white/50'
// // //                     }`}
// // //                   />
// // //                 </div> */}
// // //               </div>
              
// // //               {/* Stats Badge */}
// // //               <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg z-20">
// // //                 <p 
// // //                   className="text-2xl sm:text-3xl font-bold"
// // //                   style={{ fontFamily: "'Poppins', sans-serif" }}
// // //                 >
// // //                   15+
// // //                 </p>
// // //                 <p 
// // //                   className="text-xs sm:text-sm text-silver-light"
// // //                   style={{ fontFamily: "'Inter', sans-serif" }}
// // //                 >
// // //                   Years in Business
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             <div className="order-1 lg:order-2">
// // //               {/* Label */}
// // //               <span 
// // //                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //                 style={{ fontFamily: "'Inter', sans-serif" }}
// // //               >
// // //                 About KK EXPORT
// // //               </span>
              
// // //               {/* Main Heading */}
// // //               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// // //                 <span style={{ fontFamily: "'Poppins', sans-serif" }}>
// // //                   Leading Garment Buying{' '}
// // //                 </span>
// // //                 <span 
// // //                   className="italic font-light"
// // //                   style={{ fontFamily: "'Playfair Display', serif" }}
// // //                 >
// // //                   House in India
// // //                 </span>
// // //               </h2>
              
// // //               {/* Paragraphs */}
// // //               <p 
// // //                 className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //               >
// // //                 KK Exports India is a leading garment buying house in India and a trusted global apparel sourcing partner for international brands and retailers. We specialize in connecting buyers with certified and reliable clothing manufacturers across India.
// // //               </p>
              
// // //               <p 
// // //                 className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //               >
// // //                 With a strong network of verified factories, we manage complete textile sourcing, including product development, sampling, bulk production, quality control, and final shipment. Our experienced team ensures strict compliance standards, ethical manufacturing practices, and timely delivery for every order.
// // //               </p>
              
// // //               {/* <p 
// // //                 className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //               >
// // //                 As a growing export house, we focus on transparency, cost efficiency, and long-term business relationships. Our mission is to provide seamless garment sourcing solutions while maintaining international quality standards. KK Exports India is committed to excellence, reliability, and responsible sourcing in the global textile industry
// // //               </p>
// // //                */}
// // //               {/* Button */}
// // //               <button
// // //                 onClick={() => navigate('about')}
// // //                 className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5 text-sm sm:text-base active:scale-95"
// // //                 style={{ fontFamily: "'Poppins', sans-serif" }}
// // //               >
// // //                 Learn More About Us <ArrowRight className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* ===== CONTINUOUS SCROLLING IMAGE ===== */}
// // //         <div className="w-full overflow-hidden mt-12 sm:mt-16  py-6">
// // //           <div className="animate-scroll-continuous">
// // //             <img 
// // //               src="/image/aboutimg.png" 
// // //               alt="Process" 
// // //               className="h-20 sm:h-24 md:h-32 w-auto object-contain mx-8" 
// // //             />
            
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== PRODUCT CATEGORIES ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Products</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Comprehensive Textile & Apparel Solutions
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4">
// // //              We specialize in premium menswear manufacturing, bulk garment supply, home furnishing textiles, and high-quality fabrics for domestic and export markets. From corporate uniforms to hospitality towels and fashion fabrics, we deliver excellence in every thread.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //             {[
// // //               { title: 'Menswear Collection', desc: 'We manufacture and supply a wide range of men s apparel including casual wear, formal wear, uniforms, and customized garments tailored for bulk orders and brand requirements', icon: Layers, img: IMG.fabricTexture1, count: '450+ Variants' },
// // //               { title: 'Bulk White T-Shirts (Corporate & Election Supply)', desc: 'We specialize in large-scale production of plain white cotton T-shirts for:', icon: Factory, img: IMG.production2, count: '380+ Variants' },
// // //               { title: 'Home Furnishing & Towels', desc: 'Premium home textile solutions designed for hotels, institutions, and wholesale buyers.', icon: Shield, img: IMG.fabricTexture2, count: '290+ Variants' },
// // //               { title: 'Fabrics Division', desc: 'We deal in a wide range of premium fabrics suitable for apparel and industrial use..', icon: Wind, img: IMG.wovenClose1, count: '520+ Variants' },
// // //               { title: 'Specialty Yarns', desc: 'Premium synthetic and blended yarns engineered for specific performance and aesthetic requirements.', icon: Scissors, img: IMG.thread1, count: '340+ Variants' },
// // //               { title: 'Smart Textiles', desc: 'Next-generation fabrics with embedded sensors, conductive fibers, and intelligent material properties.', icon: Zap, img: IMG.fabricTexture4, count: '120+ Variants' },
// // //             ].map((product) => (
// // //               <button
// // //                 key={product.title}
// // //                 onClick={() => navigate('products')}
// // //                 className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left active:scale-98"
// // //               >
// // //                 <TexImg src={product.img} alt={product.title} className="w-full h-40 sm:h-48" />
// // //                 <div className="p-4 sm:p-6">
// // //                   <div className="flex items-center justify-between mb-2 sm:mb-3">
// // //                     <h3 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
// // //                       <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0" />
// // //                       <span className="line-clamp-1">{product.title}</span>
// // //                     </h3>
// // //                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all flex-shrink-0" />
// // //                   </div>
// // //                   <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{product.desc}</p>
// // //                   <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full">
// // //                     {product.count}
// // //                   </span>
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-8 sm:mt-10">
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base active:scale-95"
// // //             >
// // //               View All Products <ArrowRight className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== INDUSTRY APPLICATIONS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Industry Solutions</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Textiles Engineered for Every Sector
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4">
// // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
// // //             {[
// // //               { name: 'Automotive', icon: Wrench },
// // //               { name: 'Aerospace', icon: Globe2 },
// // //               { name: 'Healthcare', icon: Shield },
// // //               { name: 'Construction', icon: Factory },
// // //               { name: 'Agriculture', icon: Leaf },
// // //               { name: 'Defense', icon: Award },
// // //             ].map((ind) => (
// // //               <button
// // //                 key={ind.name}
// // //                 onClick={() => navigate('industries')}
// // //                 className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all active:scale-95"
// // //               >
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
// // //                   <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
// // //                 </div>
// // //                 <span className="text-xs sm:text-sm font-semibold text-charcoal text-center">{ind.name}</span>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden">
// // //             <img 
// // //               src={IMG.wovenClose2} 
// // //               alt="Woven textile close-up" 
// // //               className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover" 
// // //             />
// // //             <div className="absolute inset-0 bg-charcoal/85" />
// // //             <div className="absolute inset-0 flex items-center">
// // //               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
// // //                 <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
// // //                   <div className="lg:col-span-2 text-center lg:text-left">
// // //                     <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
// // //                       Need a Custom Textile Solution?
// // //                     </h3>
// // //                     <p className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0">
// // //                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
// // //                     </p>
// // //                   </div>
// // //                   <div className="lg:text-right">
// // //                     <button
// // //                       onClick={() => navigate('contact')}
// // //                       className="inline-flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors text-xs sm:text-sm lg:text-base w-full lg:w-auto justify-center active:scale-95"
// // //                     >
// // //                       Discuss Your Project <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== CERTIFICATIONS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-12">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Trust & Compliance</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Globally Certified. Locally Trusted.
// // //             </h2>
// // //           </div>

// // //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
// // //             {[
// // //               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
// // //               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
// // //             ].map((cert) => (
// // //               <div
// // //                 key={cert}
// // //                 className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
// // //               >
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center">
// // //                   <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal" />
// // //                 </div>
// // //                 <span className="text-xs sm:text-sm font-semibold text-charcoal text-center">{cert}</span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-6 sm:mt-8">
// // //             <button
// // //               onClick={() => navigate('certifications')}
// // //               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95"
// // //             >
// // //               View All Certifications <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== SUSTAINABILITY ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
// // //             <div className="order-2 lg:order-1">
// // //               <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Sustainability</span>
// // //               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// // //                 Committed to a Greener Textile Future
// // //               </h2>
// // //               <p className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8">
// // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
// // //               </p>

// // //               <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
// // //                 {[
// // //                   { value: '40%', label: 'Water Reduction', icon: Droplets },
// // //                   { value: '60%', label: 'Renewable Energy', icon: Zap },
// // //                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
// // //                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
// // //                 ].map((metric) => (
// // //                   <div key={metric.label} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark">
// // //                     <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2" />
// // //                     <p className="text-xl sm:text-2xl font-bold text-charcoal">{metric.value}</p>
// // //                     <p className="text-xs sm:text-sm text-silver-dark">{metric.label}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <button
// // //                 onClick={() => navigate('sustainability')}
// // //                 className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95"
// // //               >
// // //                 Our Sustainability Journey <ArrowRight className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //             <TexImg
// // //               src={IMG.eco1}
// // //               alt="Sustainable textile manufacturing"
// // //               className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl order-1 lg:order-2"
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== TESTIMONIALS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Client Testimonials</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Trusted by Industry Leaders Worldwide
// // //             </h2>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //             {[
// // //               {
// // //                 quote: "We have been sourcing industrial-grade cotton fabrics for our garment manufacturing unit. The fabric durability, color consistency, and timely bulk delivery have significantly improved our production workflow.",
// // //                 name: "Rohit Mehta",
// // //                 role: "Procurement Manager",
// // //                 company: "GlobalTex Apparel Pvt. Ltd.",
// // //               },
// // //               {
// // //                 quote: "Their technical textile solutions helped us develop high-performance uniforms for industrial workers. Quality testing standards and customization options are truly impressive for large-scale B2B requirements.",
// // //                 name: "Anjali Verma",
// // //                 role: "Operations Head",
// // //                 company: "SafeWear Industries",
// // //               },
// // //               {
// // //                 quote: "We partnered with them for exporting premium woven fabrics to Europe. Packaging quality, export documentation, and consistent fabric finishing make them a reliable textile manufacturing partner.",
// // //                 name: "David Fernandes",
// // //                 role: "Director - Supply Chain",
// // //                 company: "EuroFab Exports",
// // //               },
// // //             ].map((t) => (
// // //               <div
// // //                 key={t.name}
// // //                 className="bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
// // //               >
// // //                 <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4" />
// // //                 <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
// // //                   {Array.from({ length: 5 }).map((_, i) => (
// // //                     <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6">{t.quote}</p>
// // //                 <div className="flex items-center gap-2.5 sm:gap-3">
// // //                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
// // //                     {t.name.split(' ').map((n) => n[0]).join('')}
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-semibold text-charcoal text-xs sm:text-sm">{t.name}</p>
// // //                     <p className="text-[10px] sm:text-xs text-silver-dark">{t.role}, {t.company}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== FINAL CTA ===== */}
// // //       <section className="relative overflow-hidden">
// // //         <div className="absolute inset-0">
// // //           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
// // //           <div className="absolute inset-0 bg-charcoal-dark/90" />
// // //           <div className="absolute inset-0 bg-weave-dark" />
// // //         </div>
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
// // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
// // //             Ready to Transform Your<br />Textile Supply Chain?
// // //           </h2>
// // //           <p className="text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
// // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
// // //           </p>
// // //           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
// // //             <button
// // //               onClick={() => navigate('contact')}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5 active:scale-95"
// // //             >
// // //               Get Started Today <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //             </button>
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all active:scale-95"
// // //             >
// // //               Download Catalog
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // } 





// // // import { useState, useRef, useEffect, useCallback } from 'react';
// // // import { useNavigation } from '../context/NavigationContext';
// // // import { IMG } from '../constants/images';
// // // import {
// // //   ArrowRight,
// // //   CheckCircle2,
// // //   Factory,
// // //   Globe2,
// // //   Award,
// // //   Leaf,
// // //   Shield,
// // //   Zap,
// // //   TrendingUp,
// // //   Users,
// // //   ChevronRight,
// // //   Star,
// // //   Layers,
// // //   Wrench,
// // //   Droplets,
// // //   Wind,
// // //   Scissors,
// // //   Quote,
// // //   AlertCircle,
// // //   RefreshCw,
// // // } from 'lucide-react';

// // // // Simple Image Component
// // // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// // //   return (
// // //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// // //       <div className="absolute inset-0 bg-weave opacity-40" />
// // //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// // //     </div>
// // //   );
// // // }

// // // export function HomePage() {
// // //   const { navigate } = useNavigation();
// // //   const scrollImageRef = useRef<HTMLDivElement>(null);
  
// // //   // Auto-slider state
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   // Auto-slide effect (changes every 3 seconds)
// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev + 1) % 4);
// // //     }, 3000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   // Scroll animation effect for image
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add('in-view');
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.2 }
// // //     );

// // //     if (scrollImageRef.current) {
// // //       observer.observe(scrollImageRef.current);
// // //     }

// // //     return () => {
// // //       if (scrollImageRef.current) {
// // //         observer.unobserve(scrollImageRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="font-body">
// // //       {/* ===== STYLES ===== */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,700&family=Poppins:wght@300;400;600;700;800&display=swap');
        
// // //         :root {
// // //           --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
// // //           --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
// // //         }
        
// // //         .font-body {
// // //           font-family: var(--font-body);
// // //         }
        
// // //         .font-display {
// // //           font-family: var(--font-display);
// // //         }

// // //         @keyframes scroll-left-to-right {
// // //           0% {
// // //             transform: translateX(-100%);
// // //           }
// // //           100% {
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         @keyframes scroll-continuous {
// // //           0% {
// // //             transform: translateX(0);
// // //           }
// // //           100% {
// // //             transform: translateX(-50%);
// // //           }
// // //         }

// // //         .animate-scroll-continuous {
// // //           display: flex;
// // //           width: max-content;
// // //           animation: scroll-continuous 20s linear infinite;
// // //         }

// // //         .animate-scroll-continuous:hover {
// // //           animation-play-state: paused;
// // //         }

// // //         html {
// // //           scroll-behavior: smooth;
// // //         }

// // //         body {
// // //           -webkit-font-smoothing: antialiased;
// // //           -moz-osx-font-smoothing: grayscale;
// // //         }
// // //       `}</style>

// // //       {/* ===== HERO SECTION ===== */}
// // //       <section className="relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[50vh] lg:min-h-[70vh] flex items-center">
// // //         <div className="absolute inset-0">
// // //           <video
// // //             autoPlay
// // //             loop
// // //             muted
// // //             playsInline
// // //             className="w-full h-full object-cover"
// // //             poster="/images/fallback.jpg"
// // //           >
// // //             <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
// // //           </video>
// // //           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
// // //         </div>

// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full z-10">
// // //           <div className="max-w-4xl">
            
// // //             {/* Top label */}
// // //             <p 
// // //               className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold mb-3 tracking-[0.22em] uppercase drop-shadow-lg"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               Your Trusted Global Buying House
// // //             </p>

// // //             {/* Main heading */}
// // //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
// // //               <span style={{ fontFamily: "'Poppins', sans-serif" }}>
// // //                 End-to-End Garment Sourcing
// // //               </span>
// // //               <br />
// // //               <span 
// // //                 className="text-gray-300 italic font-light tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
// // //                 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
// // //               >
// // //                 Solutions for Global Brands
// // //               </span>
// // //             </h1>

// // //             {/* Description */}
// // //             <p 
// // //               className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-md"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               We are a trusted garment buying house in India specializing in apparel sourcing, vendor management, quality assurance, and global supply chain solutions. We connect international fashion brands with certified garment manufacturers to deliver premium quality apparel with on-time delivery
// // //             </p>

// // //             {/* Button */}
// // //             <button
// // //               onClick={() => navigate('/products')}
// // //               className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Discover Products
// // //               <ArrowRight className="w-5 h-5" />
// // //             </button>

// // //           </div>
// // //         </div>
// // //       </section>
// // //       {/* ===== ABOUT SUMMARY WITH AUTO-SLIDER (USING 1 IMAGE) ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
// // //             {/* Auto Slider Section - Using Only 1 Image */}
// // //             <div className="relative order-2 lg:order-1">
// // //               <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden">
// // //                 {/* All 4 slides use the same image */}
// // //                 {[0, 1, 2, 3].map((index) => (
// // //                   <div
// // //                     key={index}
// // //                     className={`absolute inset-0 transition-opacity duration-1000 ${
// // //                       currentSlide === index ? 'opacity-100' : 'opacity-0'
// // //                     }`}
// // //                   >
// // //                     <img
// // //                       src="/image/aboutslider1.jpg"
// // //                       alt={`Slide ${index + 1}`}
// // //                       className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
// // //                     />
// // //                   </div>
// // //                 ))}
                
// // //                 {/* Slide Indicators - Commented out as per your original code */}
// // //                 {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
// // //                   <button
// // //                     onClick={() => setCurrentSlide(0)}
// // //                     className={`w-2 h-2 rounded-full transition-all ${
// // //                       currentSlide === 0 ? 'bg-white w-6' : 'bg-white/50'
// // //                     }`}
// // //                   />
// // //                   <button
// // //                     onClick={() => setCurrentSlide(1)}
// // //                     className={`w-2 h-2 rounded-full transition-all ${
// // //                       currentSlide === 1 ? 'bg-white w-6' : 'bg-white/50'
// // //                     }`}
// // //                   />
// // //                   <button
// // //                     onClick={() => setCurrentSlide(2)}
// // //                     className={`w-2 h-2 rounded-full transition-all ${
// // //                       currentSlide === 2 ? 'bg-white w-6' : 'bg-white/50'
// // //                     }`}
// // //                   />
// // //                   <button
// // //                     onClick={() => setCurrentSlide(3)}
// // //                     className={`w-2 h-2 rounded-full transition-all ${
// // //                       currentSlide === 3 ? 'bg-white w-6' : 'bg-white/50'
// // //                     }`}
// // //                   />
// // //                 </div> */}
// // //               </div>
              
// // //               {/* Stats Badge */}
// // //               <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-lg z-20">
// // //                 <p 
// // //                   className="text-2xl sm:text-3xl font-bold"
// // //                   style={{ fontFamily: "'Poppins', sans-serif" }}
// // //                 >
// // //                   15+
// // //                 </p>
// // //                 <p 
// // //                   className="text-xs sm:text-sm text-silver-light"
// // //                   style={{ fontFamily: "'Inter', sans-serif" }}
// // //                 >
// // //                   Years in Business
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             <div className="order-1 lg:order-2">
// // //               {/* Label */}
// // //               <span 
// // //                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //                 style={{ fontFamily: "'Inter', sans-serif" }}
// // //               >
// // //                 About KK EXPORT
// // //               </span>
              
// // //               {/* Main Heading */}
// // //               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// // //                 <span style={{ fontFamily: "'Poppins', sans-serif" }}>
// // //                   Leading Garment Buying{' '}
// // //                 </span>
// // //                 <span 
// // //                   className="italic font-light"
// // //                   style={{ fontFamily: "'Playfair Display', serif" }}
// // //                 >
// // //                   House in India
// // //                 </span>
// // //               </h2>
              
// // //               {/* Paragraphs */}
// // //               <p 
// // //                 className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //               >
// // //                 KK Exports India is a leading garment buying house in India and a trusted global apparel sourcing partner for international brands and retailers. We specialize in connecting buyers with certified and reliable clothing manufacturers across India.
// // //               </p>
              
// // //               <p 
// // //                 className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //               >
// // //                 With a strong network of verified factories, we manage complete textile sourcing, including product development, sampling, bulk production, quality control, and final shipment. Our experienced team ensures strict compliance standards, ethical manufacturing practices, and timely delivery for every order.
// // //               </p>
              
// // //               {/* <p 
// // //                 className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed mb-4 sm:mb-5"
// // //                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //               >
// // //                 As a growing export house, we focus on transparency, cost efficiency, and long-term business relationships. Our mission is to provide seamless garment sourcing solutions while maintaining international quality standards. KK Exports India is committed to excellence, reliability, and responsible sourcing in the global textile industry
// // //               </p>
// // //                */}
// // //               {/* Button */}
// // //              <button
// // //   onClick={() => navigate('about')}
// // //   className="inline-flex items-center gap-2 bg-charcoal text-white font-semibold hover:bg-charcoal-light hover:gap-3 transition-all px-6 py-3 rounded-lg text-sm sm:text-base active:scale-95 shadow-md hover:shadow-lg"
// // //   style={{ fontFamily: "'Poppins', sans-serif" }}
// // // >
// // //   Read More About Us <ArrowRight className="w-4 h-4" />
// // // </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* ===== CONTINUOUS SCROLLING IMAGE ===== */}
// // //         {/* <div className="w-full overflow-hidden mt-12 sm:mt-16 py-6">
// // //           <div className="animate-scroll-continuous">
// // //             <img 
// // //               src="/image/aboutimg.png" 
// // //               alt="Process" 
// // //               className="h-20 sm:h-24 md:h-32 w-auto object-contain mx-8" 
// // //             />
// // //             <img 
// // //               src="/image/aboutimg.png" 
// // //               alt="Process" 
// // //               className="h-20 sm:h-24 md:h-32 w-auto object-contain mx-8" 
// // //             />
// // //             <img 
// // //               src="/image/aboutimg.png" 
// // //               alt="Process" 
// // //               className="h-20 sm:h-24 md:h-32 w-auto object-contain mx-8" 
// // //             />
// // //             <img 
// // //               src="/image/aboutimg.png" 
// // //               alt="Process" 
// // //               className="h-20 sm:h-24 md:h-32 w-auto object-contain mx-8" 
// // //             />
// // //           </div>
// // //         </div> */}
// // //       </section>

// // //       {/* ===== PRODUCT CATEGORIES ===== */}
// // //       {/* <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Products</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Comprehensive Textile & Apparel Solutions
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4">
// // //              We specialize in premium menswear manufacturing, bulk garment supply, home furnishing textiles, and high-quality fabrics for domestic and export markets. From corporate uniforms to hospitality towels and fashion fabrics, we deliver excellence in every thread.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //             {[
// // //               { title: 'Menswear Collection', desc: 'We manufacture and supply a wide range of men s apparel including casual wear, formal wear, uniforms, and customized garments tailored for bulk orders and brand requirements', icon: Layers, img: IMG.fabricTexture1, count: '450+ Variants' },
// // //               { title: 'Bulk White T-Shirts (Corporate & Election Supply)', desc: 'We specialize in large-scale production of plain white cotton T-shirts for:', icon: Factory, img: IMG.production2, count: '380+ Variants' },
// // //               { title: 'Home Furnishing & Towels', desc: 'Premium home textile solutions designed for hotels, institutions, and wholesale buyers.', icon: Shield, img: IMG.fabricTexture2, count: '290+ Variants' },
// // //               { title: 'Fabrics Division', desc: 'We deal in a wide range of premium fabrics suitable for apparel and industrial use..', icon: Wind, img: IMG.wovenClose1, count: '520+ Variants' },
// // //               { title: 'Specialty Yarns', desc: 'Premium synthetic and blended yarns engineered for specific performance and aesthetic requirements.', icon: Scissors, img: IMG.thread1, count: '340+ Variants' },
// // //               { title: 'Smart Textiles', desc: 'Next-generation fabrics with embedded sensors, conductive fibers, and intelligent material properties.', icon: Zap, img: IMG.fabricTexture4, count: '120+ Variants' },
// // //             ].map((product) => (
// // //               <button
// // //                 key={product.title}
// // //                 onClick={() => navigate('products')}
// // //                 className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left active:scale-98"
// // //               >
// // //                 <TexImg src={product.img} alt={product.title} className="w-full h-40 sm:h-48" />
// // //                 <div className="p-4 sm:p-6">
// // //                   <div className="flex items-center justify-between mb-2 sm:mb-3">
// // //                     <h3 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2">
// // //                       <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0" />
// // //                       <span className="line-clamp-1">{product.title}</span>
// // //                     </h3>
// // //                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all flex-shrink-0" />
// // //                   </div>
// // //                   <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{product.desc}</p>
// // //                   <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full">
// // //                     {product.count}
// // //                   </span>
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-8 sm:mt-10">
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base active:scale-95"
// // //             >
// // //               View All Products <ArrowRight className="w-4 h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section> */}



// // //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //     <div className="text-center mb-10 sm:mb-14">
// // //       {/* Label */}
// // //       <span 
// // //         className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //         style={{ fontFamily: "'Inter', sans-serif" }}
// // //       >
// // //         Our Products
// // //       </span>
      
// // //       {/* Main Heading */}
// // //       <h2 
// // //         className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// // //         style={{ fontFamily: "'Poppins', sans-serif" }}
// // //       >
// // //         Comprehensive Textile & Apparel Solutions
// // //       </h2>
      
// // //       {/* Description */}
// // //       <p 
// // //         className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
// // //         style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //       >
// // //         We specialize in premium menswear, bulk garment supply, home furnishing textiles, and high-quality fabrics,
// // //         delivering superior quality products for domestic and international markets with consistent excellence
// // //       </p>
// // //     </div>

// // //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //       {[
// // //         {
// // //           title: 'Menswear Collection',
// // //           desc: "We manufacture and supply a wide range of men's apparel including casual wear, formal wear, uniforms, and customized garments tailored for bulk orders and brand requirements",
// // //           icon: Layers,
// // //           img: '/image/FULLMENSWEAR.jpg',   // 👈 apni image path yahan daalo
// // //           count: '450+ Variants',
// // //         },
// // //         {
// // //           title: 'Bulk White T-Shirts (Corporate & Election Supply)',
// // //           desc: 'We specialize in large-scale production of plain white cotton T-shirts for corporate and election supply.',
// // //           icon: Factory,
// // //           img: '/image/BULKT-SHIRT.jpg',   // 👈 apni image path yahan daalo
// // //           count: '380+ Variants',
// // //         },
// // //         {
// // //           title: 'Home Furnishing & Towels',
// // //           desc: 'Premium home textile solutions designed for hotels, institutions, and wholesale buyers.',
// // //           icon: Shield,
// // //           img: '/image/TOWELIMAGE.jpg',   // 👈 apni image path yahan daalo
// // //           count: '290+ Variants',
// // //         },
// // //         {
// // //           title: 'Fabrics Division',
// // //           desc: 'We deal in a wide range of premium fabrics suitable for apparel and industrial use.',
// // //           icon: Wind,
// // //           img: '/image/FULLSUITING.jpg',   // 👈 apni image path yahan daalo
// // //           count: '520+ Variants',
// // //         },
// // //         {
// // //           title: 'Custom Order',
// // //           desc: 'Custom Order Products are specially designed and manufactured according to client specifications, ensuring premium quality, accurate sizing, customized fabrics, and timely delivery to meet unique business requirements.',
// // //           icon: Scissors,
// // //           img: '/image/CUSTOM.jpg',   // 👈 apni image path yahan daalo
// // //           count: '340+ Variants',
// // //         },
// // //         {
// // //           title: 'Denim',
// // //           desc: 'Denim Products are crafted using high-quality fabrics and advanced manufacturing techniques, offering durability, comfort, modern designs, and superior finishing for both domestic and international fashion markets.',
// // //           icon: Zap,
// // //           img: '/image/DENIM.jpg',   // 👈 apni image path yahan daalo
// // //           count: '120+ Variants',
// // //         },
// // //       ].map((product) => (
// // //         <button
// // //           key={product.title}
// // //           onClick={() => navigate('products')}
// // //           className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1 text-left active:scale-98"
// // //         >
// // //           {/* ✅ Plain img tag — src="" mein apni image daalo */}
// // //           <img
// // //             src={product.img}
// // //             alt={product.title}
// // //             className="w-full h-40 sm:h-48 object-cover"
// // //             loading="lazy"
// // //           />

// // //           <div className="p-4 sm:p-6">
// // //             <div className="flex items-center justify-between mb-2 sm:mb-3">
// // //               {/* Product Title */}
// // //               <h3 
// // //                 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2"
// // //                 style={{ fontFamily: "'Poppins', sans-serif" }}
// // //               >
// // //                 <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0" />
// // //                 <span className="line-clamp-1">{product.title}</span>
// // //               </h3>
// // //               <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-1 transition-all flex-shrink-0" />
// // //             </div>
            
// // //             {/* Product Description */}
// // //             <p 
// // //               className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
// // //               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //             >
// // //               {product.desc}
// // //             </p>
            
// // //             {/* Count Badge */}
// // //             <span 
// // //               className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full"
// // //               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
// // //             >
// // //               {product.count}
// // //             </span>
// // //           </div>
// // //         </button>
// // //       ))}
// // //     </div>

// // //     <div className="text-center mt-8 sm:mt-10">
// // //       {/* View All Button */}
// // //       <button
// // //         onClick={() => navigate('products')}
// // //         className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base active:scale-95"
// // //         style={{ fontFamily: "'Poppins', sans-serif" }}
// // //       >
// // //         View All Products <ArrowRight className="w-4 h-4" />
// // //       </button>
// // //     </div>
// // //   </div>
// // // </section>

// // //       {/* ===== INDUSTRY APPLICATIONS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Industry Solutions</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Textiles Engineered for Every Sector
// // //             </h2>
// // //             <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4">
// // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our technical fabrics serve mission-critical applications across diverse industries.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
// // //             {[
// // //               { name: 'Automotive', icon: Wrench },
// // //               { name: 'Aerospace', icon: Globe2 },
// // //               { name: 'Healthcare', icon: Shield },
// // //               { name: 'Construction', icon: Factory },
// // //               { name: 'Agriculture', icon: Leaf },
// // //               { name: 'Defense', icon: Award },
// // //             ].map((ind) => (
// // //               <button
// // //                 key={ind.name}
// // //                 onClick={() => navigate('industries')}
// // //                 className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all active:scale-95"
// // //               >
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-cloud transition-colors group-hover:scale-110">
// // //                   <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
// // //                 </div>
// // //                 <span className="text-xs sm:text-sm font-semibold text-charcoal text-center">{ind.name}</span>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden">
// // //             <img 
// // //               src={IMG.wovenClose2} 
// // //               alt="Woven textile close-up" 
// // //               className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover" 
// // //             />
// // //             <div className="absolute inset-0 bg-charcoal/85" />
// // //             <div className="absolute inset-0 flex items-center">
// // //               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
// // //                 <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
// // //                   <div className="lg:col-span-2 text-center lg:text-left">
// // //                     <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
// // //                       Need a Custom Textile Solution?
// // //                     </h3>
// // //                     <p className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0">
// // //                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our engineering team works closely with your R&D department to develop bespoke fabric solutions.
// // //                     </p>
// // //                   </div>
// // //                   <div className="lg:text-right">
// // //                     <button
// // //                       onClick={() => navigate('contact')}
// // //                       className="inline-flex items-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors text-xs sm:text-sm lg:text-base w-full lg:w-auto justify-center active:scale-95"
// // //                     >
// // //                       Discuss Your Project <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== CERTIFICATIONS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-12">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Trust & Compliance</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Globally Certified. Locally Trusted.
// // //             </h2>
// // //           </div>

// // //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
// // //             {[
// // //               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
// // //               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
// // //             ].map((cert) => (
// // //               <div
// // //                 key={cert}
// // //                 className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-md transition-all"
// // //               >
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center">
// // //                   <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal" />
// // //                 </div>
// // //                 <span className="text-xs sm:text-sm font-semibold text-charcoal text-center">{cert}</span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-6 sm:mt-8">
// // //             <button
// // //               onClick={() => navigate('certifications')}
// // //               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95"
// // //             >
// // //               View All Certifications <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== SUSTAINABILITY ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
// // //             <div className="order-2 lg:order-1">
// // //               <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Sustainability</span>
// // //               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// // //                 Committed to a Greener Textile Future
// // //               </h2>
// // //               <p className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8">
// // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We are committed to sustainable manufacturing practices and reducing our environmental footprint.
// // //               </p>

// // //               <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
// // //                 {[
// // //                   { value: '40%', label: 'Water Reduction', icon: Droplets },
// // //                   { value: '60%', label: 'Renewable Energy', icon: Zap },
// // //                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
// // //                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
// // //                 ].map((metric) => (
// // //                   <div key={metric.label} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark">
// // //                     <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2" />
// // //                     <p className="text-xl sm:text-2xl font-bold text-charcoal">{metric.value}</p>
// // //                     <p className="text-xs sm:text-sm text-silver-dark">{metric.label}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <button
// // //                 onClick={() => navigate('sustainability')}
// // //                 className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95"
// // //               >
// // //                 Our Sustainability Journey <ArrowRight className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //             <TexImg
// // //               src={IMG.eco1}
// // //               alt="Sustainable textile manufacturing"
// // //               className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl order-1 lg:order-2"
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== TESTIMONIALS ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14">
// // //             <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider">Client Testimonials</span>
// // //             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4">
// // //               Trusted by Industry Leaders Worldwide
// // //             </h2>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //             {[
// // //               {
// // //                 quote: "We have been sourcing industrial-grade cotton fabrics for our garment manufacturing unit. The fabric durability, color consistency, and timely bulk delivery have significantly improved our production workflow.",
// // //                 name: "Rohit Mehta",
// // //                 role: "Procurement Manager",
// // //                 company: "GlobalTex Apparel Pvt. Ltd.",
// // //               },
// // //               {
// // //                 quote: "Their technical textile solutions helped us develop high-performance uniforms for industrial workers. Quality testing standards and customization options are truly impressive for large-scale B2B requirements.",
// // //                 name: "Anjali Verma",
// // //                 role: "Operations Head",
// // //                 company: "SafeWear Industries",
// // //               },
// // //               {
// // //                 quote: "We partnered with them for exporting premium woven fabrics to Europe. Packaging quality, export documentation, and consistent fabric finishing make them a reliable textile manufacturing partner.",
// // //                 name: "David Fernandes",
// // //                 role: "Director - Supply Chain",
// // //                 company: "EuroFab Exports",
// // //               },
// // //             ].map((t) => (
// // //               <div
// // //                 key={t.name}
// // //                 className="bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all"
// // //               >
// // //                 <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4" />
// // //                 <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
// // //                   {Array.from({ length: 5 }).map((_, i) => (
// // //                     <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6">{t.quote}</p>
// // //                 <div className="flex items-center gap-2.5 sm:gap-3">
// // //                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
// // //                     {t.name.split(' ').map((n) => n[0]).join('')}
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-semibold text-charcoal text-xs sm:text-sm">{t.name}</p>
// // //                     <p className="text-[10px] sm:text-xs text-silver-dark">{t.role}, {t.company}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== FINAL CTA ===== */}
// // //       <section className="relative overflow-hidden">
// // //         <div className="absolute inset-0">
// // //           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
// // //           <div className="absolute inset-0 bg-charcoal-dark/90" />
// // //           <div className="absolute inset-0 bg-weave-dark" />
// // //         </div>
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
// // //           <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
// // //             Ready to Transform Your<br />Textile Supply Chain?
// // //           </h2>
// // //           <p className="text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
// // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities.
// // //           </p>
// // //           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
// // //             <button
// // //               onClick={() => navigate('contact')}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all hover:-translate-y-0.5 active:scale-95"
// // //             >
// // //               Get Started Today <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
// // //             </button>
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all active:scale-95"
// // //             >
// // //               Download Catalog
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }









// // // import { useState, useRef, useEffect, useCallback } from 'react';
// // // import { useNavigation } from '../context/NavigationContext';
// // // import { IMG } from '../constants/images';
// // // import {
// // //   ArrowRight,
// // //   CheckCircle2,
// // //   Factory,
// // //   Globe2,
// // //   Award,
// // //   Leaf,
// // //   Shield,
// // //   Zap,
// // //   TrendingUp,
// // //   Users,
// // //   ChevronRight,
// // //   Star,
// // //   Layers,
// // //   Wrench,
// // //   Droplets,
// // //   Wind,
// // //   Scissors,
// // //   Quote,
// // //   AlertCircle,
// // //   RefreshCw,
// // // } from 'lucide-react';

// // // // Simple Image Component
// // // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// // //   return (
// // //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// // //       <div className="absolute inset-0 bg-weave opacity-40" />
// // //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// // //     </div>
// // //   );
// // // }

// // // export function HomePage() {
// // //   const { navigate } = useNavigation();
// // //   const scrollImageRef = useRef<HTMLDivElement>(null);
  
// // //   // Auto-slider state
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   // Auto-slide effect (changes every 3 seconds)
// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setCurrentSlide((prev) => (prev + 1) % 4);
// // //     }, 3000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   // Scroll animation effect for elements
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             entry.target.classList.add('animate-in');
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     const elements = document.querySelectorAll('.scroll-animate');
// // //     elements.forEach((el) => observer.observe(el));

// // //     return () => {
// // //       elements.forEach((el) => observer.unobserve(el));
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="font-body overflow-x-hidden">
// // //       {/* ===== ENHANCED STYLES WITH ANIMATIONS ===== */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
        
// // //         :root {
// // //           --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
// // //           --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
// // //           --font-heading: 'Poppins', sans-serif;
// // //         }
        
// // //         .font-body {
// // //           font-family: var(--font-body);
// // //         }
        
// // //         .font-display {
// // //           font-family: var(--font-display);
// // //         }

// // //         .font-heading {
// // //           font-family: var(--font-heading);
// // //         }

// // //         /* Smooth Scroll */
// // //         html {
// // //           scroll-behavior: smooth;
// // //         }

// // //         body {
// // //           -webkit-font-smoothing: antialiased;
// // //           -moz-osx-font-smoothing: grayscale;
// // //         }

// // //         /* Animation Keyframes */
// // //         @keyframes fadeIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(30px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         @keyframes fadeInUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(50px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         @keyframes fadeInLeft {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(-50px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         @keyframes fadeInRight {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(50px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         @keyframes scaleIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: scale(0.9);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: scale(1);
// // //           }
// // //         }

// // //         @keyframes slideInFromBottom {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(100px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         @keyframes float {
// // //           0%, 100% {
// // //             transform: translateY(0px);
// // //           }
// // //           50% {
// // //             transform: translateY(-20px);
// // //           }
// // //         }

// // //         @keyframes pulse-subtle {
// // //           0%, 100% {
// // //             opacity: 1;
// // //           }
// // //           50% {
// // //             opacity: 0.8;
// // //           }
// // //         }

// // //         @keyframes shimmer {
// // //           0% {
// // //             background-position: -1000px 0;
// // //           }
// // //           100% {
// // //             background-position: 1000px 0;
// // //           }
// // //         }

// // //         /* Scroll Animation Classes */
// // //         .scroll-animate {
// // //           opacity: 0;
// // //           transform: translateY(30px);
// // //           transition: none;
// // //         }

// // //         .scroll-animate.animate-in {
// // //           animation: fadeInUp 0.8s ease-out forwards;
// // //         }

// // //         /* Stagger animations for cards */
// // //         .scroll-animate:nth-child(1).animate-in { animation-delay: 0.1s; }
// // //         .scroll-animate:nth-child(2).animate-in { animation-delay: 0.2s; }
// // //         .scroll-animate:nth-child(3).animate-in { animation-delay: 0.3s; }
// // //         .scroll-animate:nth-child(4).animate-in { animation-delay: 0.4s; }
// // //         .scroll-animate:nth-child(5).animate-in { animation-delay: 0.5s; }
// // //         .scroll-animate:nth-child(6).animate-in { animation-delay: 0.6s; }

// // //         /* Hero Animation */
// // //         .hero-content {
// // //           animation: fadeInLeft 1s ease-out;
// // //         }

// // //         .hero-label {
// // //           animation: fadeIn 1.2s ease-out 0.3s both;
// // //         }

// // //         .hero-title {
// // //           animation: fadeInUp 1s ease-out 0.5s both;
// // //         }

// // //         .hero-description {
// // //           animation: fadeInUp 1s ease-out 0.7s both;
// // //         }

// // //         .hero-button {
// // //           animation: fadeInUp 1s ease-out 0.9s both;
// // //         }

// // //         /* Floating Animation */
// // //         .float-animation {
// // //           animation: float 6s ease-in-out infinite;
// // //         }

// // //         /* Shimmer Effect */
// // //         .shimmer {
// // //           background: linear-gradient(
// // //             90deg,
// // //             transparent 0%,
// // //             rgba(255, 255, 255, 0.3) 50%,
// // //             transparent 100%
// // //           );
// // //           background-size: 1000px 100%;
// // //           animation: shimmer 3s infinite;
// // //         }

// // //         /* Hover Lift Effect */
// // //         .hover-lift {
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //         }

// // //         .hover-lift:hover {
// // //           transform: translateY(-8px);
// // //           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
// // //         }

// // //         /* Smooth Scale */
// // //         .scale-hover {
// // //           transition: transform 0.3s ease;
// // //         }

// // //         .scale-hover:hover {
// // //           transform: scale(1.05);
// // //         }

// // //         /* Gradient Text Animation */
// // //         .gradient-text {
// // //           background: linear-gradient(90deg, #2b2b2b, #5a5a5a, #2b2b2b);
// // //           background-size: 200% auto;
// // //           -webkit-background-clip: text;
// // //           -webkit-text-fill-color: transparent;
// // //           background-clip: text;
// // //           animation: shimmer 3s linear infinite;
// // //         }

// // //         /* Continuous Scroll Animation */
// // //         @keyframes scroll-continuous {
// // //           0% {
// // //             transform: translateX(0);
// // //           }
// // //           100% {
// // //             transform: translateX(-50%);
// // //           }
// // //         }

// // //         .animate-scroll-continuous {
// // //           display: flex;
// // //           width: max-content;
// // //           animation: scroll-continuous 20s linear infinite;
// // //         }

// // //         .animate-scroll-continuous:hover {
// // //           animation-play-state: paused;
// // //         }

// // //         /* Slide Transition */
// // //         .slide-transition {
// // //           transition: opacity 1s ease-in-out, transform 1s ease-in-out;
// // //         }
// // //       `}</style>

// // //       {/* ===== HERO SECTION WITH ENHANCED ANIMATIONS ===== */}
// // //       <section className="relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[50vh] lg:min-h-[70vh] flex items-center">
// // //         <div className="absolute inset-0">
// // //           <video
// // //             autoPlay
// // //             loop
// // //             muted
// // //             playsInline
// // //             className="w-full h-full object-cover"
// // //             poster="/images/fallback.jpg"
// // //           >
// // //             <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
// // //           </video>
// // //           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
// // //         </div>

// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full z-10">
// // //           <div className="max-w-4xl hero-content">
            
// // //             {/* Top label with animation */}
// // //             <p 
// // //               className="hero-label text-xs sm:text-sm lg:text-base text-gray-300 font-semibold mb-3 tracking-[0.22em] uppercase drop-shadow-lg"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               Your Trusted Global Buying House
// // //             </p>

// // //             {/* Main heading with gradient effect */}
// // //             <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
// // //               <span style={{ fontFamily: "'Poppins', sans-serif" }} className="inline-block">
// // //                 End-to-End Garment Sourcing
// // //               </span>
// // //               <br />
// // //               <span 
// // //                 className="text-gray-300 italic font-light tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block mt-2"
// // //                 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
// // //               >
// // //                 Solutions for Global Brands
// // //               </span>
// // //             </h1>

// // //             {/* Description with fade animation */}
// // //             <p 
// // //               className="hero-description text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-md"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               We are a trusted garment buying house in India specializing in apparel sourcing, vendor management, quality assurance, and global supply chain solutions. We connect international fashion brands with certified garment manufacturers to deliver premium quality apparel with on-time delivery
// // //             </p>

// // //             {/* Button with hover animation */}
// // //             <button
// // //               onClick={() => navigate('/products')}
// // //               className="hero-button inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-2xl transform hover:-translate-y-1 hover:gap-4 active:scale-95"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Discover Products
// // //               <ArrowRight className="w-5 h-5 transition-transform duration-300" />
// // //             </button>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== ABOUT SUMMARY WITH ENHANCED AUTO-SLIDER ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
// // //             {/* Auto Slider Section with smooth transitions */}
// // //             <div className="relative order-2 lg:order-1 scroll-animate">
// // //               <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
// // //                 {[0, 1, 2, 3].map((index) => (
// // //                   <div
// // //                     key={index}
// // //                     className={`absolute inset-0 slide-transition ${
// // //                       currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
// // //                     }`}
// // //                   >
// // //                     <img
// // //                       src="/image/aboutslider1.jpg"
// // //                       alt={`Slide ${index + 1}`}
// // //                       className="w-full h-full object-cover rounded-xl sm:rounded-2xl transform hover:scale-105 transition-transform duration-700"
// // //                     />
// // //                   </div>
// // //                 ))}
                
// // //                 {/* Shimmer overlay effect */}
// // //                 <div className="absolute inset-0 shimmer pointer-events-none" />
// // //               </div>
              
// // //               {/* Animated Stats Badge */}
// // //               <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-2xl z-20 hover-lift">
// // //                 <p 
// // //                   className="text-2xl sm:text-3xl font-bold gradient-text"
// // //                   style={{ 
// // //                     fontFamily: "'Poppins', sans-serif",
// // //                     background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
// // //                     backgroundSize: '200% auto',
// // //                     WebkitBackgroundClip: 'text',
// // //                     WebkitTextFillColor: 'transparent',
// // //                     backgroundClip: 'text'
// // //                   }}
// // //                 >
// // //                   15+
// // //                 </p>
// // //                 <p 
// // //                   className="text-xs sm:text-sm text-silver-light"
// // //                   style={{ fontFamily: "'Inter', sans-serif" }}
// // //                 >
// // //                   Years in Business
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             <div className="order-1 lg:order-2 scroll-animate">
// // //               {/* Label */}
// // //               <span 
// // //                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider inline-block mb-2"
// // //                 style={{ fontFamily: "'Inter', sans-serif" }}
// // //               >
// // //                 About KK EXPORT
// // //               </span>
              
// // //               {/* Main Heading */}
// // //               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// // //                 <span style={{ fontFamily: "'Poppins', sans-serif" }}>
// // //                   Leading Garment Buying{' '}
// // //                 </span>
// // //                 <span 
// // //                   className="italic font-light block mt-1"
// // //                   style={{ fontFamily: "'Playfair Display', serif" }}
// // //                 >
// // //                   House in India
// // //                 </span>
// // //               </h2>
              
// // //               {/* Paragraphs with improved spacing */}
// // //               <div className="space-y-4">
// // //                 <p 
// // //                   className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
// // //                   style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //                 >
// // //                   KK Exports India is a leading garment buying house in India and a trusted global apparel sourcing partner for international brands and retailers. We specialize in connecting buyers with certified and reliable clothing manufacturers across India.
// // //                 </p>
                
// // //                 <p 
// // //                   className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
// // //                   style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //                 >
// // //                   With a strong network of verified factories, we manage complete textile sourcing, including product development, sampling, bulk production, quality control, and final shipment. Our experienced team ensures strict compliance standards, ethical manufacturing practices, and timely delivery for every order.
// // //                 </p>
// // //               </div>
              
// // //               {/* Enhanced Button */}
// // //               <button
// // //                 onClick={() => navigate('about')}
// // //                 className="mt-6 inline-flex items-center gap-2 bg-charcoal text-white font-semibold hover:bg-charcoal-light hover:gap-3 transition-all duration-300 px-6 py-3 rounded-lg text-sm sm:text-base active:scale-95 shadow-md hover:shadow-xl group"
// // //                 style={{ fontFamily: "'Poppins', sans-serif" }}
// // //               >
// // //                 Read More About Us 
// // //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== PRODUCT CATEGORIES WITH STAGGER ANIMATION ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14 scroll-animate">
// // //             {/* Label */}
// // //             <span 
// // //               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               Our Products
// // //             </span>
            
// // //             {/* Main Heading */}
// // //             <h2 
// // //               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Comprehensive Textile & Apparel Solutions
// // //             </h2>
            
// // //             {/* Description */}
// // //             <p 
// // //               className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
// // //               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //             >
// // //               We specialize in premium menswear, bulk garment supply, home furnishing textiles, and high-quality fabrics,
// // //               delivering superior quality products for domestic and international markets with consistent excellence
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //             {[
// // //               {
// // //                 title: 'Menswear Collection',
// // //                 desc: "We manufacture and supply a wide range of men's apparel including casual wear, formal wear, uniforms, and customized garments tailored for bulk orders and brand requirements",
// // //                 icon: Layers,
// // //                 img: '/image/FULLMENSWEAR.jpg',
// // //                 count: '450+ Variants',
// // //               },
// // //               {
// // //                 title: 'Bulk White T-Shirts (Corporate & Election Supply)',
// // //                 desc: 'We specialize in large-scale production of plain white cotton T-shirts for corporate and election supply.',
// // //                 icon: Factory,
// // //                 img: '/image/BULKT-SHIRT.jpg',
// // //                 count: '380+ Variants',
// // //               },
// // //               {
// // //                 title: 'Home Furnishing & Towels',
// // //                 desc: 'Premium home textile solutions designed for hotels, institutions, and wholesale buyers.',
// // //                 icon: Shield,
// // //                 img: '/image/TOWELIMAGE.jpg',
// // //                 count: '290+ Variants',
// // //               },
// // //               {
// // //                 title: 'Fabrics Division',
// // //                 desc: 'We deal in a wide range of premium fabrics suitable for apparel and industrial use.',
// // //                 icon: Wind,
// // //                 img: '/image/FULLSUITING.jpg',
// // //                 count: '520+ Variants',
// // //               },
// // //               {
// // //                 title: 'Custom Order',
// // //                 desc: 'Custom Order Products are specially designed and manufactured according to client specifications, ensuring premium quality, accurate sizing, customized fabrics, and timely delivery to meet unique business requirements.',
// // //                 icon: Scissors,
// // //                 img: '/image/CUSTOM.jpg',
// // //                 count: '340+ Variants',
// // //               },
// // //               {
// // //                 title: 'Denim',
// // //                 desc: 'Denim Products are crafted using high-quality fabrics and advanced manufacturing techniques, offering durability, comfort, modern designs, and superior finishing for both domestic and international fashion markets.',
// // //                 icon: Zap,
// // //                 img: '/image/DENIM.jpg',
// // //                 count: '120+ Variants',
// // //               },
// // //             ].map((product, index) => (
// // //               <button
// // //                 key={product.title}
// // //                 onClick={() => navigate('products')}
// // //                 className="scroll-animate group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.12)] transition-all duration-500 hover:-translate-y-2 text-left active:scale-98"
// // //               >
// // //                 {/* Product Image with Overlay */}
// // //                 <div className="relative overflow-hidden">
// // //                   <img
// // //                     src={product.img}
// // //                     alt={product.title}
// // //                     className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
// // //                     loading="lazy"
// // //                   />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // //                 </div>

// // //                 <div className="p-4 sm:p-6">
// // //                   <div className="flex items-center justify-between mb-2 sm:mb-3">
// // //                     {/* Product Title */}
// // //                     <h3 
// // //                       className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2"
// // //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// // //                     >
// // //                       <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
// // //                       <span className="line-clamp-1">{product.title}</span>
// // //                     </h3>
// // //                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
// // //                   </div>
                  
// // //                   {/* Product Description */}
// // //                   <p 
// // //                     className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
// // //                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //                   >
// // //                     {product.desc}
// // //                   </p>
                  
// // //                   {/* Count Badge */}
// // //                   <span 
// // //                     className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full group-hover:bg-charcoal group-hover:text-white transition-all duration-300"
// // //                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
// // //                   >
// // //                     {product.count}
// // //                   </span>
// // //                 </div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-8 sm:mt-10 scroll-animate">
// // //             {/* View All Button */}
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl group"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               View All Products 
// // //               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== INDUSTRY APPLICATIONS WITH ENHANCED ANIMATION ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14 scroll-animate">
// // //             <span 
// // //               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               Industry Solutions
// // //             </span>
// // //             <h2 
// // //               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Textiles Engineered for Every Sector
// // //             </h2>
// // //             <p 
// // //               className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
// // //               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //             >
// // //               Our technical fabrics serve mission-critical applications across diverse industries with excellence and precision
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
// // //             {[
// // //               { name: 'Automotive', icon: Wrench },
// // //               { name: 'Aerospace', icon: Globe2 },
// // //               { name: 'Healthcare', icon: Shield },
// // //               { name: 'Construction', icon: Factory },
// // //               { name: 'Agriculture', icon: Leaf },
// // //               { name: 'Defense', icon: Award },
// // //             ].map((ind, index) => (
// // //               <button
// // //                 key={ind.name}
// // //                 onClick={() => navigate('industries')}
// // //                 className="scroll-animate group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all duration-300 hover:-translate-y-1 active:scale-95"
// // //               >
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
// // //                   <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white transition-colors duration-300" />
// // //                 </div>
// // //                 <span 
// // //                   className="text-xs sm:text-sm font-semibold text-charcoal text-center group-hover:text-charcoal-light transition-colors"
// // //                   style={{ fontFamily: "'Inter', sans-serif" }}
// // //                 >
// // //                   {ind.name}
// // //                 </span>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden scroll-animate shadow-xl hover:shadow-2xl transition-shadow duration-300">
// // //             <img 
// // //               src={IMG.wovenClose2} 
// // //               alt="Woven textile close-up" 
// // //               className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover" 
// // //             />
// // //             <div className="absolute inset-0 bg-charcoal/85" />
// // //             <div className="absolute inset-0 flex items-center">
// // //               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
// // //                 <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
// // //                   <div className="lg:col-span-2 text-center lg:text-left">
// // //                     <h3 
// // //                       className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3"
// // //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// // //                     >
// // //                       Need a Custom Textile Solution?
// // //                     </h3>
// // //                     <p 
// // //                       className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0"
// // //                       style={{ fontFamily: "'Inter', sans-serif" }}
// // //                     >
// // //                       Our engineering team works closely with your R&D department to develop bespoke fabric solutions tailored to your specific requirements
// // //                     </p>
// // //                   </div>
// // //                   <div className="lg:text-right">
// // //                     <button
// // //                       onClick={() => navigate('contact')}
// // //                       className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-all duration-300 text-xs sm:text-sm lg:text-base w-full lg:w-auto hover:shadow-lg active:scale-95 group"
// // //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// // //                     >
// // //                       Discuss Your Project 
// // //                       <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== CERTIFICATIONS WITH PULSE ANIMATION ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-12 scroll-animate">
// // //             <span 
// // //               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               Trust & Compliance
// // //             </span>
// // //             <h2 
// // //               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Globally Certified. Locally Trusted.
// // //             </h2>
// // //           </div>

// // //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
// // //             {[
// // //               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
// // //               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
// // //             ].map((cert, index) => (
// // //               <div
// // //                 key={cert}
// // //                 className="scroll-animate flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
// // //               >
// // //                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110">
// // //                   <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal group-hover:text-white transition-colors duration-300" />
// // //                 </div>
// // //                 <span 
// // //                   className="text-xs sm:text-sm font-semibold text-charcoal text-center"
// // //                   style={{ fontFamily: "'Inter', sans-serif" }}
// // //                 >
// // //                   {cert}
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="text-center mt-6 sm:mt-8 scroll-animate">
// // //             <button
// // //               onClick={() => navigate('certifications')}
// // //               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95 group"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               View All Certifications 
// // //               <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== SUSTAINABILITY WITH COUNTER ANIMATION ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
// // //             <div className="order-2 lg:order-1 scroll-animate">
// // //               <span 
// // //                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //                 style={{ fontFamily: "'Inter', sans-serif" }}
// // //               >
// // //                 Sustainability
// // //               </span>
// // //               <h2 
// // //                 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight"
// // //                 style={{ fontFamily: "'Poppins', sans-serif" }}
// // //               >
// // //                 Committed to a Greener Textile Future
// // //               </h2>
// // //               <p 
// // //                 className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8"
// // //                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// // //               >
// // //                 We are committed to sustainable manufacturing practices and reducing our environmental footprint through innovative solutions and responsible resource management
// // //               </p>

// // //               <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
// // //                 {[
// // //                   { value: '40%', label: 'Water Reduction', icon: Droplets },
// // //                   { value: '60%', label: 'Renewable Energy', icon: Zap },
// // //                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
// // //                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
// // //                 ].map((metric, index) => (
// // //                   <div 
// // //                     key={metric.label} 
// // //                     className="scroll-animate bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
// // //                   >
// // //                     <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
// // //                     <p 
// // //                       className="text-xl sm:text-2xl font-bold text-charcoal"
// // //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// // //                     >
// // //                       {metric.value}
// // //                     </p>
// // //                     <p 
// // //                       className="text-xs sm:text-sm text-silver-dark"
// // //                       style={{ fontFamily: "'Inter', sans-serif" }}
// // //                     >
// // //                       {metric.label}
// // //                     </p>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <button
// // //                 onClick={() => navigate('sustainability')}
// // //                 className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95 shadow-lg hover:shadow-xl group"
// // //                 style={{ fontFamily: "'Poppins', sans-serif" }}
// // //               >
// // //                 Our Sustainability Journey 
// // //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //               </button>
// // //             </div>
// // //             <div className="order-1 lg:order-2 scroll-animate">
// // //               <TexImg
// // //                 src={IMG.eco1}
// // //                 alt="Sustainable textile manufacturing"
// // //                 className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== TESTIMONIALS WITH CARD ANIMATION ===== */}
// // //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-10 sm:mb-14 scroll-animate">
// // //             <span 
// // //               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// // //               style={{ fontFamily: "'Inter', sans-serif" }}
// // //             >
// // //               Client Testimonials
// // //             </span>
// // //             <h2 
// // //               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Trusted by Industry Leaders Worldwide
// // //             </h2>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// // //             {[
// // //               {
// // //                 quote: "We have been sourcing industrial-grade cotton fabrics for our garment manufacturing unit. The fabric durability, color consistency, and timely bulk delivery have significantly improved our production workflow.",
// // //                 name: "Rohit Mehta",
// // //                 role: "Procurement Manager",
// // //                 company: "GlobalTex Apparel Pvt. Ltd.",
// // //               },
// // //               {
// // //                 quote: "Their technical textile solutions helped us develop high-performance uniforms for industrial workers. Quality testing standards and customization options are truly impressive for large-scale B2B requirements.",
// // //                 name: "Anjali Verma",
// // //                 role: "Operations Head",
// // //                 company: "SafeWear Industries",
// // //               },
// // //               {
// // //                 quote: "We partnered with them for exporting premium woven fabrics to Europe. Packaging quality, export documentation, and consistent fabric finishing make them a reliable textile manufacturing partner.",
// // //                 name: "David Fernandes",
// // //                 role: "Director - Supply Chain",
// // //                 company: "EuroFab Exports",
// // //               },
// // //             ].map((t, index) => (
// // //               <div
// // //                 key={t.name}
// // //                 className="scroll-animate bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
// // //               >
// // //                 <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
// // //                 <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
// // //                   {Array.from({ length: 5 }).map((_, i) => (
// // //                     <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />
// // //                   ))}
// // //                 </div>
// // //                 <p 
// // //                   className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6"
// // //                   style={{ fontFamily: "'Inter', sans-serif" }}
// // //                 >
// // //                   {t.quote}
// // //                 </p>
// // //                 <div className="flex items-center gap-2.5 sm:gap-3">
// // //                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
// // //                     {t.name.split(' ').map((n) => n[0]).join('')}
// // //                   </div>
// // //                   <div>
// // //                     <p 
// // //                       className="font-semibold text-charcoal text-xs sm:text-sm"
// // //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// // //                     >
// // //                       {t.name}
// // //                     </p>
// // //                     <p 
// // //                       className="text-[10px] sm:text-xs text-silver-dark"
// // //                       style={{ fontFamily: "'Inter', sans-serif" }}
// // //                     >
// // //                       {t.role}, {t.company}
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===== FINAL CTA WITH PULSE EFFECT ===== */}
// // //       <section className="relative overflow-hidden">
// // //         <div className="absolute inset-0">
// // //           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
// // //           <div className="absolute inset-0 bg-charcoal-dark/90" />
// // //           <div className="absolute inset-0 bg-weave-dark" />
// // //         </div>
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
// // //           <h2 
// // //             className="scroll-animate text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
// // //             style={{ fontFamily: "'Poppins', sans-serif" }}
// // //           >
// // //             Ready to Transform Your<br />Textile Supply Chain?
// // //           </h2>
// // //           <p 
// // //             className="scroll-animate text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
// // //             style={{ fontFamily: "'Inter', sans-serif" }}
// // //           >
// // //             Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities for your business
// // //           </p>
// // //           <div className="scroll-animate flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
// // //             <button
// // //               onClick={() => navigate('contact')}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 group"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Get Started Today 
// // //               <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
// // //             </button>
// // //             <button
// // //               onClick={() => navigate('products')}
// // //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all duration-300 hover:border-white/40 active:scale-95"
// // //               style={{ fontFamily: "'Poppins', sans-serif" }}
// // //             >
// // //               Download Catalog
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }












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

// // // Simple Image Component
// // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// //   return (
// //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// //       <div className="absolute inset-0 bg-weave opacity-40" />
// //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// //     </div>
// //   );
// // }

// // export function HomePage() {
// //   const { navigate } = useNavigation();
// //   const scrollImageRef = useRef<HTMLDivElement>(null);
  
// //   // Auto-slider state
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   // Auto-slide effect (changes every 3 seconds) - 3 images
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % 3);
// //     }, 3000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   // Scroll animation effect for elements
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add('animate-in');
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     const elements = document.querySelectorAll('.scroll-animate');
// //     elements.forEach((el) => observer.observe(el));

// //     return () => {
// //       elements.forEach((el) => observer.unobserve(el));
// //     };
// //   }, []);

// //   return (
// //     <div className="font-body overflow-x-hidden">
// //       {/* ===== ENHANCED STYLES WITH ANIMATIONS ===== */}
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
        
// //         :root {
// //           --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
// //           --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
// //           --font-heading: 'Poppins', sans-serif;
// //         }
        
// //         .font-body {
// //           font-family: var(--font-body);
// //         }
        
// //         .font-display {
// //           font-family: var(--font-display);
// //         }

// //         .font-heading {
// //           font-family: var(--font-heading);
// //         }

// //         /* Smooth Scroll */
// //         html {
// //           scroll-behavior: smooth;
// //         }

// //         body {
// //           -webkit-font-smoothing: antialiased;
// //           -moz-osx-font-smoothing: grayscale;
// //         }

// //         /* Animation Keyframes */
// //         @keyframes fadeIn {
// //           from { opacity: 0; transform: translateY(30px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         @keyframes fadeInUp {
// //           from { opacity: 0; transform: translateY(50px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         @keyframes fadeInLeft {
// //           from { opacity: 0; transform: translateX(-50px); }
// //           to { opacity: 1; transform: translateX(0); }
// //         }

// //         @keyframes fadeInRight {
// //           from { opacity: 0; transform: translateX(50px); }
// //           to { opacity: 1; transform: translateX(0); }
// //         }

// //         @keyframes scaleIn {
// //           from { opacity: 0; transform: scale(0.9); }
// //           to { opacity: 1; transform: scale(1); }
// //         }

// //         @keyframes slideInFromBottom {
// //           from { opacity: 0; transform: translateY(100px); }
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px); }
// //           50% { transform: translateY(-20px); }
// //         }

// //         @keyframes pulse-subtle {
// //           0%, 100% { opacity: 1; }
// //           50% { opacity: 0.8; }
// //         }

// //         @keyframes shimmer {
// //           0% { background-position: -1000px 0; }
// //           100% { background-position: 1000px 0; }
// //         }

// //         /* Scroll Animation Classes */
// //         .scroll-animate {
// //           opacity: 0;
// //           transform: translateY(30px);
// //           transition: none;
// //         }

// //         .scroll-animate.animate-in {
// //           animation: fadeInUp 0.8s ease-out forwards;
// //         }

// //         /* Stagger animations for cards */
// //         .scroll-animate:nth-child(1).animate-in { animation-delay: 0.1s; }
// //         .scroll-animate:nth-child(2).animate-in { animation-delay: 0.2s; }
// //         .scroll-animate:nth-child(3).animate-in { animation-delay: 0.3s; }
// //         .scroll-animate:nth-child(4).animate-in { animation-delay: 0.4s; }
// //         .scroll-animate:nth-child(5).animate-in { animation-delay: 0.5s; }
// //         .scroll-animate:nth-child(6).animate-in { animation-delay: 0.6s; }

// //         /* Hero Animation */
// //         .hero-content { animation: fadeInLeft 1s ease-out; }
// //         .hero-label { animation: fadeIn 1.2s ease-out 0.3s both; }
// //         .hero-title { animation: fadeInUp 1s ease-out 0.5s both; }
// //         .hero-description { animation: fadeInUp 1s ease-out 0.7s both; }
// //         .hero-button { animation: fadeInUp 1s ease-out 0.9s both; }

// //         /* Floating Animation */
// //         .float-animation { animation: float 6s ease-in-out infinite; }

// //         /* Shimmer Effect */
// //         .shimmer {
// //           background: linear-gradient(
// //             90deg,
// //             transparent 0%,
// //             rgba(255, 255, 255, 0.3) 50%,
// //             transparent 100%
// //           );
// //           background-size: 1000px 100%;
// //           animation: shimmer 3s infinite;
// //         }

// //         /* Hover Lift Effect */
// //         .hover-lift {
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }

// //         .hover-lift:hover {
// //           transform: translateY(-8px);
// //           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
// //         }

// //         /* Smooth Scale */
// //         .scale-hover { transition: transform 0.3s ease; }
// //         .scale-hover:hover { transform: scale(1.05); }

// //         /* Gradient Text Animation */
// //         .gradient-text {
// //           background: linear-gradient(90deg, #2b2b2b, #5a5a5a, #2b2b2b);
// //           background-size: 200% auto;
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //           animation: shimmer 3s linear infinite;
// //         }

// //         /* Continuous Scroll Animation */
// //         @keyframes scroll-continuous {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }

// //         .animate-scroll-continuous {
// //           display: flex;
// //           width: max-content;
// //           animation: scroll-continuous 20s linear infinite;
// //         }

// //         .animate-scroll-continuous:hover {
// //           animation-play-state: paused;
// //         }

// //         /* Slide Transition */
// //         .slide-transition {
// //           transition: opacity 1s ease-in-out, transform 1s ease-in-out;
// //         }
// //       `}</style>

// //       {/* ===== HERO SECTION WITH ENHANCED ANIMATIONS ===== */}
// //       <section className="relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[50vh] lg:min-h-[70vh] flex items-center">
// //         <div className="absolute inset-0">
// //           <video
// //             autoPlay
// //             loop
// //             muted
// //             playsInline
// //             className="w-full h-full object-cover"
// //             poster="/images/fallback.jpg"
// //           >
// //             <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
// //           </video>
// //           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
// //         </div>

// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full z-10">
// //           <div className="max-w-4xl hero-content">
            
// //             {/* Top label with animation */}
// //             <p 
// //               className="hero-label text-xs sm:text-sm lg:text-base text-gray-300 font-semibold mb-3 tracking-[0.22em] uppercase drop-shadow-lg"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
// //               Your Trusted Global Buying House
// //             </p>

// //             {/* Main heading with gradient effect */}
// //             <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
// //               <span style={{ fontFamily: "'Poppins', sans-serif" }} className="inline-block">
// //                 End-to-End Garment Sourcing
// //               </span>
// //               <br />
// //               <span 
// //                 className="text-gray-300 italic font-light tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block mt-2"
// //                 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
// //               >
// //                 Solutions for Global Brands
// //               </span>
// //             </h1>

// //             {/* Description with fade animation */}
// //             <p 
// //               className="hero-description text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-md"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
// //               We are a trusted garment buying house in India specializing in apparel sourcing, vendor management, quality assurance, and global supply chain solutions. We connect international fashion brands with certified garment manufacturers to deliver premium quality apparel with on-time delivery
// //             </p>

// //             {/* Button with hover animation */}
// //             <button
// //               onClick={() => navigate('/products')}
// //               className="hero-button inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-2xl transform hover:-translate-y-1 hover:gap-4 active:scale-95"
// //               style={{ fontFamily: "'Poppins', sans-serif" }}
// //             >
// //               Discover Products
// //               <ArrowRight className="w-5 h-5 transition-transform duration-300" />
// //             </button>

// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== ABOUT SUMMARY WITH 3-IMAGE AUTO-SLIDER ===== */}
// //       <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            
// //             {/* Auto Slider Section with smooth transitions */}
// //             <div className="relative order-2 lg:order-1 scroll-animate">
// //               <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                
// //                 {/* 3 Alag Images */}
// //                 {[
// //                   "/image/aboutslider1.jpg",
// //                   "/image/abslider2.png",
// //                   "/image/abslider3.jpg",
// //                 ].map((imgSrc, index) => (
// //                   <div
// //                     key={index}
// //                     className={`absolute inset-0 slide-transition ${
// //                       currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
// //                     }`}
// //                   >
// //                     <img
// //                       src={imgSrc}
// //                       alt={`Slide ${index + 1}`}
// //                       className="w-full h-full object-cover rounded-xl sm:rounded-2xl transform hover:scale-105 transition-transform duration-700"
// //                     />
// //                   </div>
// //                 ))}
                
// //                 {/* Shimmer overlay effect */}
// //                 <div className="absolute inset-0 shimmer pointer-events-none" />

// //                 {/* Dot Indicators */}
// //                 {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
// //                   {[0, 1, 2].map((dot) => (
// //                     <button
// //                       key={dot}
// //                       onClick={() => setCurrentSlide(dot)}
// //                       className={`h-2 rounded-full transition-all duration-300 ${
// //                         currentSlide === dot ? 'bg-white w-6' : 'bg-white/50 w-2'
// //                       }`}
// //                     />
// //                   ))}
// //                 </div> */}
// //               </div>
              
// //               {/* Animated Stats Badge */}
// //               <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-2xl z-20 hover-lift">
// //                 <p 
// //                   className="text-2xl sm:text-3xl font-bold gradient-text"
// //                   style={{ 
// //                     fontFamily: "'Poppins', sans-serif",
// //                     background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
// //                     backgroundSize: '200% auto',
// //                     WebkitBackgroundClip: 'text',
// //                     WebkitTextFillColor: 'transparent',
// //                     backgroundClip: 'text'
// //                   }}
// //                 >
// //                   15+
// //                 </p>
// //                 <p 
// //                   className="text-xs sm:text-sm text-silver-light"
// //                   style={{ fontFamily: "'Inter', sans-serif" }}
// //                 >
// //                   Years in Business
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="order-1 lg:order-2 scroll-animate">
// //               {/* Label */}
// //               <span 
// //                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider inline-block mb-2"
// //                 style={{ fontFamily: "'Inter', sans-serif" }}
// //               >
// //                 About KK EXPORT
// //               </span>
              
// //               {/* Main Heading */}
// //               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// //                 <span style={{ fontFamily: "'Poppins', sans-serif" }}>
// //                   Leading Garment Buying{' '}
// //                 </span>
// //                 <span 
// //                   className="italic font-light block mt-1"
// //                   style={{ fontFamily: "'Playfair Display', serif" }}
// //                 >
// //                   House in India
// //                 </span>
// //               </h2>
              
// //               {/* Paragraphs with improved spacing */}
// //               <div className="space-y-4">
// //                 <p 
// //                   className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
// //                   style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// //                 >
// //                   KK Exports India is a leading garment buying house in India and a trusted global apparel sourcing partner for international brands and retailers. We specialize in connecting buyers with certified and reliable clothing manufacturers across India.
// //                 </p>
                
// //                 <p 
// //                   className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
// //                   style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// //                 >
// //                   With a strong network of verified factories, we manage complete textile sourcing, including product development, sampling, bulk production, quality control, and final shipment. Our experienced team ensures strict compliance standards, ethical manufacturing practices, and timely delivery for every order.
// //                 </p>
// //               </div>
              
// //               {/* Enhanced Button */}
// //               <button
// //                 onClick={() => navigate('about')}
// //                 className="mt-6 inline-flex items-center gap-2 bg-charcoal text-white font-semibold hover:bg-charcoal-light hover:gap-3 transition-all duration-300 px-6 py-3 rounded-lg text-sm sm:text-base active:scale-95 shadow-md hover:shadow-xl group"
// //                 style={{ fontFamily: "'Poppins', sans-serif" }}
// //               >
// //                 Read More About Us 
// //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== PRODUCT CATEGORIES WITH STAGGER ANIMATION ===== */}
// //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-10 sm:mb-14 scroll-animate">
// //             <span 
// //               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
// //               Our Products
// //             </span>
            
// //             <h2 
// //               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// //               style={{ fontFamily: "'Poppins', sans-serif" }}
// //             >
// //               Comprehensive Textile & Apparel Solutions
// //             </h2>
            
// //             <p 
// //               className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
// //               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// //             >
// //               We specialize in premium menswear, bulk garment supply, home furnishing textiles, and high-quality fabrics,
// //               delivering superior quality products for domestic and international markets with consistent excellence
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// //             {[
// //               {
// //                 title: 'Menswear Collection',
// //                 desc: "We manufacture and supply a wide range of men's apparel including casual wear, formal wear, uniforms, and customized garments tailored for bulk orders and brand requirements",
// //                 icon: Layers,
// //                 img: '/image/FULLMENSWEAR.jpg',
// //                 count: '450+ Variants',
// //               },
// //               {
// //                 title: 'Bulk White T-Shirts (Corporate & Election Supply)',
// //                 desc: 'We specialize in large-scale production of plain white cotton T-shirts for corporate and election supply.',
// //                 icon: Factory,
// //                 img: '/image/BULKT-SHIRT.jpg',
// //                 count: '380+ Variants',
// //               },
// //               {
// //                 title: 'Home Furnishing & Towels',
// //                 desc: 'Premium home textile solutions designed for hotels, institutions, and wholesale buyers.',
// //                 icon: Shield,
// //                 img: '/image/TOWELIMAGE.jpg',
// //                 count: '290+ Variants',
// //               },
// //               {
// //                 title: 'Fabrics Division',
// //                 desc: 'We deal in a wide range of premium fabrics suitable for apparel and industrial use.',
// //                 icon: Wind,
// //                 img: '/image/FULLSUITING.jpg',
// //                 count: '520+ Variants',
// //               },
// //               {
// //                 title: 'Custom Order',
// //                 desc: 'Custom Order Products are specially designed and manufactured according to client specifications, ensuring premium quality, accurate sizing, customized fabrics, and timely delivery to meet unique business requirements.',
// //                 icon: Scissors,
// //                 img: '/image/CUSTOM.jpg',
// //                 count: '340+ Variants',
// //               },
// //               {
// //                 title: 'Denim',
// //                 desc: 'Denim Products are crafted using high-quality fabrics and advanced manufacturing techniques, offering durability, comfort, modern designs, and superior finishing for both domestic and international fashion markets.',
// //                 icon: Zap,
// //                 img: '/image/DENIM.jpg',
// //                 count: '120+ Variants',
// //               },
// //             ].map((product, index) => (
// //               <button
// //                 key={product.title}
// //                 onClick={() => navigate('products')}
// //                 className="scroll-animate group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.12)] transition-all duration-500 hover:-translate-y-2 text-left active:scale-98"
// //               >
// //                 <div className="relative overflow-hidden">
// //                   <img
// //                     src={product.img}
// //                     alt={product.title}
// //                     className="w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
// //                     loading="lazy"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //                 </div>

// //                 <div className="p-4 sm:p-6">
// //                   <div className="flex items-center justify-between mb-2 sm:mb-3">
// //                     <h3 
// //                       className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2"
// //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// //                     >
// //                       <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
// //                       <span className="line-clamp-1">{product.title}</span>
// //                     </h3>
// //                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
// //                   </div>
                  
// //                   <p 
// //                     className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
// //                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// //                   >
// //                     {product.desc}
// //                   </p>
                  
// //                   <span 
// //                     className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full group-hover:bg-charcoal group-hover:text-white transition-all duration-300"
// //                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
// //                   >
// //                     {product.count}
// //                   </span>
// //                 </div>
// //               </button>
// //             ))}
// //           </div>

// //           <div className="text-center mt-8 sm:mt-10 scroll-animate">
// //             <button
// //               onClick={() => navigate('products')}
// //               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl group"
// //               style={{ fontFamily: "'Poppins', sans-serif" }}
// //             >
// //               View All Products 
// //               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== INDUSTRY APPLICATIONS WITH ENHANCED ANIMATION ===== */}
// //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-10 sm:mb-14 scroll-animate">
// //             <span 
// //               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
               
// //             </span>
// //             <h2 
// //               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// //               style={{ fontFamily: "'Poppins', sans-serif" }}
// //             >
// //                Our Textile Product
// //             </h2>
// //             <p 
// //               className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
// //               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// //             >
// //               A comprehensive range of export-quality cotton textile solutions
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
// //             {[
// //               { name: 'Bath Towels', icon: Wrench },
// //               { name: 'Hand Towels', icon: Globe2 },
// //               { name: 'Face Towels', icon: Shield },
// //               { name: 'Kitchen Towels', icon: Factory },
// //               { name: 'Custom Textile Solutions', icon: Leaf },
// //               { name: 'Hotel Collection', icon: Award },
// //             ].map((ind, index) => (
// //               <button
// //                 key={ind.name}
// //                 onClick={() => navigate('industries')}
// //                 className="scroll-animate group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all duration-300 hover:-translate-y-1 active:scale-95"
// //               >
// //                 <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
// //                   <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white transition-colors duration-300" />
// //                 </div>
// //                 <span 
// //                   className="text-xs sm:text-sm font-semibold text-charcoal text-center group-hover:text-charcoal-light transition-colors"
// //                   style={{ fontFamily: "'Inter', sans-serif" }}
// //                 >
// //                   {ind.name}
// //                 </span>
// //               </button>
// //             ))}
// //           </div>

// //           <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden scroll-animate shadow-xl hover:shadow-2xl transition-shadow duration-300">
// //             <img 
// //               src={IMG.wovenClose2} 
// //               alt="Woven textile close-up" 
// //               className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover" 
// //             />
// //             <div className="absolute inset-0 bg-charcoal/85" />
// //             <div className="absolute inset-0 flex items-center">
// //               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
// //                 <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
// //                   <div className="lg:col-span-2 text-center lg:text-left">
// //                     <h3 
// //                       className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3"
// //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// //                     >
// //                       Need a Custom Textile Solution?
// //                     </h3>
// //                     <p 
// //                       className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0"
// //                       style={{ fontFamily: "'Inter', sans-serif" }}
// //                     >
// //                       Our engineering team works closely with your R&D department to develop bespoke fabric solutions tailored to your specific requirements
// //                     </p>
// //                   </div>
// //                   <div className="lg:text-right">
// //                     <button
// //                       onClick={() => navigate('contact')}
// //                       className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-all duration-300 text-xs sm:text-sm lg:text-base w-full lg:w-auto hover:shadow-lg active:scale-95 group"
// //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// //                     >
// //                       Discuss Your Project 
// //                       <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== CERTIFICATIONS WITH PULSE ANIMATION ===== */}
// //       <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-10 sm:mb-12 scroll-animate">
// //             <span 
// //               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
// //               Trust & Compliance
// //             </span>
// //             <h2 
// //               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// //               style={{ fontFamily: "'Poppins', sans-serif" }}
// //             >
// //               Globally Certified. Locally Trusted.
// //             </h2>
// //           </div>

// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
// //             {[
// //               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
// //               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
// //             ].map((cert, index) => (
// //               <div
// //                 key={cert}
// //                 className="scroll-animate flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
// //               >
// //                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110">
// //                   <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal group-hover:text-white transition-colors duration-300" />
// //                 </div>
// //                 <span 
// //                   className="text-xs sm:text-sm font-semibold text-charcoal text-center"
// //                   style={{ fontFamily: "'Inter', sans-serif" }}
// //                 >
// //                   {cert}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="text-center mt-6 sm:mt-8 scroll-animate">
// //             <button
// //               onClick={() => navigate('certifications')}
// //               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95 group"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
// //               View All Certifications 
// //               <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== SUSTAINABILITY WITH COUNTER ANIMATION ===== */}
// //       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
// //             <div className="order-2 lg:order-1 scroll-animate">
// //               <span 
// //                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// //                 style={{ fontFamily: "'Inter', sans-serif" }}
// //               >
// //                 Sustainability
// //               </span>
// //               <h2 
// //                 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight"
// //                 style={{ fontFamily: "'Poppins', sans-serif" }}
// //               >
// //                Responsible Garment Sourcing for a Better Future
// //               </h2>
// //               <p 
// //                 className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8"
// //                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
// //               >At KK Export, sustainability is an essential part of our garment sourcing process. As a responsible garment buying house in India, we work closely with compliant manufacturers to ensure ethical production, environmental responsibility, and transparent supply chains.. We are committed to sustainable manufacturing practices and reducing our environmental footprint through innovative solutions and responsible resource management
// //               </p>

// //               <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
// //                 {[
// //                   { value: '40%', label: 'Water Reduction', icon: Droplets },
// //                   { value: '60%', label: 'Renewable Energy', icon: Zap },
// //                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
// //                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
// //                 ].map((metric, index) => (
// //                   <div 
// //                     key={metric.label} 
// //                     className="scroll-animate bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
// //                   >
// //                     <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
// //                     <p 
// //                       className="text-xl sm:text-2xl font-bold text-charcoal"
// //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// //                     >
// //                       {metric.value}
// //                     </p>
// //                     <p 
// //                       className="text-xs sm:text-sm text-silver-dark"
// //                       style={{ fontFamily: "'Inter', sans-serif" }}
// //                     >
// //                       {metric.label}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>

// //               <button
// //                 onClick={() => navigate('sustainability')}
// //                 className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95 shadow-lg hover:shadow-xl group"
// //                 style={{ fontFamily: "'Poppins', sans-serif" }}
// //               >
// //                 Our Sustainability Journey 
// //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //               </button>
// //             </div>
// //             <div className="order-1 lg:order-2 scroll-animate">
// //               <TexImg
// //                 src= "/image/eco1.png"
// //                 alt="Sustainable textile manufacturing"
// //                 className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== TESTIMONIALS WITH CARD ANIMATION ===== */}
// //       <section className="py-12 sm:py-16 lg:py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-10 sm:mb-14 scroll-animate">
// //             <span 
// //               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
// //               Client Testimonials
// //             </span>
// //             <h2 
// //               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
// //               style={{ fontFamily: "'Poppins', sans-serif" }}
// //             >
// //               Trusted by Industry Leaders Worldwide
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// //             {[
// //               {
// //                 quote: "We have been sourcing industrial-grade cotton fabrics for our garment manufacturing unit. The fabric durability, color consistency, and timely bulk delivery have significantly improved our production workflow.",
// //                 name: "Rohit Mehta",
// //                 role: "Procurement Manager",
// //                 company: "GlobalTex Apparel Pvt. Ltd.",
// //               },
// //               {
// //                 quote: "Their technical textile solutions helped us develop high-performance uniforms for industrial workers. Quality testing standards and customization options are truly impressive for large-scale B2B requirements.",
// //                 name: "Anjali Verma",
// //                 role: "Operations Head",
// //                 company: "SafeWear Industries",
// //               },
// //               {
// //                 quote: "We partnered with them for exporting premium woven fabrics to Europe. Packaging quality, export documentation, and consistent fabric finishing make them a reliable textile manufacturing partner.",
// //                 name: "David Fernandes",
// //                 role: "Director - Supply Chain",
// //                 company: "EuroFab Exports",
// //               },
// //             ].map((t, index) => (
// //               <div
// //                 key={t.name}
// //                 className="scroll-animate bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
// //               >
// //                 <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
// //                 <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
// //                   {Array.from({ length: 5 }).map((_, i) => (
// //                     <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />
// //                   ))}
// //                 </div>
// //                 <p 
// //                   className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6"
// //                   style={{ fontFamily: "'Inter', sans-serif" }}
// //                 >
// //                   {t.quote}
// //                 </p>
// //                 <div className="flex items-center gap-2.5 sm:gap-3">
// //                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
// //                     {t.name.split(' ').map((n) => n[0]).join('')}
// //                   </div>
// //                   <div>
// //                     <p 
// //                       className="font-semibold text-charcoal text-xs sm:text-sm"
// //                       style={{ fontFamily: "'Poppins', sans-serif" }}
// //                     >
// //                       {t.name}
// //                     </p>
// //                     <p 
// //                       className="text-[10px] sm:text-xs text-silver-dark"
// //                       style={{ fontFamily: "'Inter', sans-serif" }}
// //                     >
// //                       {t.role}, {t.company}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ===== FINAL CTA WITH PULSE EFFECT ===== */}
// //       <section className="relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
// //           <div className="absolute inset-0 bg-charcoal-dark/90" />
// //           <div className="absolute inset-0 bg-weave-dark" />
// //         </div>
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
// //           <h2 
// //             className="scroll-animate text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
// //             style={{ fontFamily: "'Poppins', sans-serif" }}
// //           >
// //             Ready to Transform Your<br />Textile Supply Chain?
// //           </h2>
// //           <p 
// //             className="scroll-animate text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
// //             style={{ fontFamily: "'Inter', sans-serif" }}
// //           >
// //             Connect with our B2B specialists to explore custom solutions, bulk pricing, and partnership opportunities for your business
// //           </p>
// //           <div className="scroll-animate flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
// //             <button
// //               onClick={() => navigate('contact')}
// //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 group"
// //               style={{ fontFamily: "'Poppins', sans-serif" }}
// //             >
// //               Get Started Today 
// //               <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
// //             </button>
// //             <button
// //               onClick={() => navigate('products')}
// //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all duration-300 hover:border-white/40 active:scale-95"
// //               style={{ fontFamily: "'Poppins', sans-serif" }}
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

// // Simple Image Component
// function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
//   return (
//     <div className={`relative overflow-hidden bg-cloud ${className}`}>
//       <div className="absolute inset-0 bg-weave opacity-40" />
//       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
//     </div>
//   );
// }

// // ─── Product Image Slider Component ───────────────────────────────────────────
// function ProductImageSlider({ images, title }: { images: string[]; title: string }) {
//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const startAuto = useCallback(() => {
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 2500);
//   }, [images.length]);

//   const stopAuto = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   }, []);

//   useEffect(() => {
//     startAuto();
//     return () => stopAuto();
//   }, [startAuto, stopAuto]);

//   return (
//     <div
//       className="relative overflow-hidden w-full h-40 sm:h-48"
//       onMouseEnter={stopAuto}
//       onMouseLeave={startAuto}
//     >
//       {/* Slides */}
//       {images.map((img, idx) => (
//         <div
//           key={idx}
//           className="absolute inset-0 transition-opacity duration-700"
//           style={{ opacity: idx === current ? 1 : 0 }}
//         >
//           <img
//             src={img}
//             alt={`${title} - view ${idx + 1}`}
//             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//             loading="lazy"
//           />
//         </div>
//       ))}

//       {/* Hover overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//       {/* Dot indicators */}
//       {/* <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={(e) => {
//               e.stopPropagation();
//               setCurrent(idx);
//             }}
//             className="transition-all duration-300 rounded-full"
//             style={{
//               width: idx === current ? '18px' : '6px',
//               height: '6px',
//               background: idx === current ? '#fff' : 'rgba(255,255,255,0.5)',
//             }}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div> */}

//       {/* Slide counter badge */}
//       {/* <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm z-10">
//         {current + 1}/{images.length}
//       </div> */}
//     </div>
//   );
// }

// export function HomePage() {
//   const { navigate } = useNavigation();
//   const scrollImageRef = useRef<HTMLDivElement>(null);

//   // About section auto-slider state
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // About section auto-slide (3 seconds)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % 3);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   // Scroll animation observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.scroll-animate');
//     elements.forEach((el) => observer.observe(el));

//     return () => {
//       elements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   // ─── Product data with 3 images each ─────────────────────────────────────
//   const products = [
//     {
//       title: 'Menswear Collection',
//       desc: "We manufacture and supply a wide range of men's apparel including casual wear, formal wear, uniforms, and customized garments tailored for bulk orders and brand requirements",
//       icon: Layers,
//       images: [
//         '/image/FULLMENSWEAR.jpg',
//         '/image/MENSWEAR2.jpg',
//         '/image/MENSWEAR3.jpg',
//       ],
//       count: '450+ Variants',
//     },
//     {
//       title: 'Bulk White T-Shirts (Corporate & Election Supply)',
//       desc: 'We specialize in large-scale production of plain white cotton T-shirts for corporate and election supply.',
//       icon: Factory,
//       images: [
//         '/image/FULLBULKT-SHIRT3.jpg',
//         '/image/FULLBULKT-SHIRT2.jpg',
//         '/image/FULLBULKT-SHIRT1.jpg',
//       ],
//       count: '380+ Variants',
//     },
//     {
//       title: 'Home Furnishing & Towels',
//       desc: 'Premium home textile solutions designed for hotels, institutions, and wholesale buyers.',
//       icon: Shield,
//       images: [
//         '/image/TOWEL1.jpg',
//         '/image/TOWEL2.jpg',
//         '/image/TOWEL1.jpg',
//       ],
//       count: '290+ Variants',
//     },
//     {
//       title: 'Fabrics Division',
//       desc: 'We deal in a wide range of premium fabrics suitable for apparel and industrial use.',
//       icon: Wind,
//       images: [
//         '/image/SUITING1.jpg',
//         '/image/SUITING2.jpg',
//         '/image/SUITING1.jpg',
//       ],
//       count: '520+ Variants',
//     },
//     {
//       title: 'Custom Order',
//       desc: 'Custom Order Products are specially designed and manufactured according to client specifications, ensuring premium quality, accurate sizing, customized fabrics, and timely delivery to meet unique business requirements.',
//       icon: Scissors,
//       images: [
//         '/image/CUSTOM1.jpg',
//         '/image/CUSTOM2.jpg',
//         '/image/CUSTOM1.jpg',
//       ],
//       count: '340+ Variants',
//     },
//     {
//       title: 'Denim',
//       desc: 'Denim Products are crafted using high-quality fabrics and advanced manufacturing techniques, offering durability, comfort, modern designs, and superior finishing for both domestic and international fashion markets.',
//       icon: Zap,
//       images: [
//         '/image/DENIM1.jpg',
//         '/image/DENIM2.jpg',
//         '/image/DENIM1.jpg',
//       ],
//       count: '120+ Variants',
//     },
//   ];

//   return (
//     <div className="font-body overflow-x-hidden">
//       {/* ===== ENHANCED STYLES WITH ANIMATIONS ===== */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
        
//         :root {
//           --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//           --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
//           --font-heading: 'Poppins', sans-serif;
//         }
        
//         .font-body { font-family: var(--font-body); }
//         .font-display { font-family: var(--font-display); }
//         .font-heading { font-family: var(--font-heading); }

//         html { scroll-behavior: smooth; }
//         body {
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(50px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeInRight {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.9); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         @keyframes slideInFromBottom {
//           from { opacity: 0; transform: translateY(100px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes pulse-subtle {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.8; }
//         }
//         @keyframes shimmer {
//           0% { background-position: -1000px 0; }
//           100% { background-position: 1000px 0; }
//         }

//         .scroll-animate {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: none;
//         }
//         .scroll-animate.animate-in {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//         .scroll-animate:nth-child(1).animate-in { animation-delay: 0.1s; }
//         .scroll-animate:nth-child(2).animate-in { animation-delay: 0.2s; }
//         .scroll-animate:nth-child(3).animate-in { animation-delay: 0.3s; }
//         .scroll-animate:nth-child(4).animate-in { animation-delay: 0.4s; }
//         .scroll-animate:nth-child(5).animate-in { animation-delay: 0.5s; }
//         .scroll-animate:nth-child(6).animate-in { animation-delay: 0.6s; }

//         .hero-content { animation: fadeInLeft 1s ease-out; }
//         .hero-label { animation: fadeIn 1.2s ease-out 0.3s both; }
//         .hero-title { animation: fadeInUp 1s ease-out 0.5s both; }
//         .hero-description { animation: fadeInUp 1s ease-out 0.7s both; }
//         .hero-button { animation: fadeInUp 1s ease-out 0.9s both; }

//         .float-animation { animation: float 6s ease-in-out infinite; }

//         .shimmer {
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             rgba(255, 255, 255, 0.3) 50%,
//             transparent 100%
//           );
//           background-size: 1000px 100%;
//           animation: shimmer 3s infinite;
//         }

//         .hover-lift {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .hover-lift:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
//         }

//         .scale-hover { transition: transform 0.3s ease; }
//         .scale-hover:hover { transform: scale(1.05); }

//         .gradient-text {
//           background: linear-gradient(90deg, #2b2b2b, #5a5a5a, #2b2b2b);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: shimmer 3s linear infinite;
//         }

//         @keyframes scroll-continuous {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll-continuous {
//           display: flex;
//           width: max-content;
//           animation: scroll-continuous 20s linear infinite;
//         }
//         .animate-scroll-continuous:hover {
//           animation-play-state: paused;
//         }

//         .slide-transition {
//           transition: opacity 1s ease-in-out, transform 1s ease-in-out;
//         }
//       `}</style>

//       {/* ===== HERO SECTION ===== */}
//       <section className="relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[50vh] lg:min-h-[70vh] flex items-center">
//         <div className="absolute inset-0">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//             poster="/images/fallback.jpg"
//           >
//             <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full z-10">
//           <div className="max-w-4xl hero-content">
//             <p
//               className="hero-label text-xs sm:text-sm lg:text-base text-gray-300 font-semibold mb-3 tracking-[0.22em] uppercase drop-shadow-lg"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Your Trusted Global Buying House
//             </p>

//             <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
//               <span style={{ fontFamily: "'Poppins', sans-serif" }} className="inline-block">
//                 End-to-End Garment Sourcing
//               </span>
//               <br />
//               <span
//                 className="text-gray-300 italic font-light tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block mt-2"
//                 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
//               >
//                 Solutions for Global Brands
//               </span>
//             </h1>

//             <p
//               className="hero-description text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-md"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               We are a trusted garment buying house in India specializing in apparel sourcing, vendor management, quality assurance, and global supply chain solutions. We connect international fashion brands with certified garment manufacturers to deliver premium quality apparel with on-time delivery
//             </p>

//             <button
//               onClick={() => navigate('/products')}
//               className="hero-button inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-2xl transform hover:-translate-y-1 hover:gap-4 active:scale-95"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Discover Products
//               <ArrowRight className="w-5 h-5 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== ABOUT SUMMARY WITH 3-IMAGE AUTO-SLIDER ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

//             {/* About Auto Slider */}
//             <div className="relative order-2 lg:order-1 scroll-animate">
//               <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
//                 {[
//                   '/image/aboutslider1.jpg',
//                   '/image/abslider2.png',
//                   '/image/abslider3.jpg',
//                 ].map((imgSrc, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 slide-transition ${
//                       currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//                     }`}
//                   >
//                     <img
//                       src={imgSrc}
//                       alt={`Slide ${index + 1}`}
//                       className="w-full h-full object-cover rounded-xl sm:rounded-2xl transform hover:scale-105 transition-transform duration-700"
//                     />
//                   </div>
//                 ))}
//                 <div className="absolute inset-0 shimmer pointer-events-none" />
//               </div>

//               {/* Stats Badge */}
//               <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-2xl z-20 hover-lift">
//                 <p
//                   className="text-2xl sm:text-3xl font-bold"
//                   style={{
//                     fontFamily: "'Poppins', sans-serif",
//                     background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
//                     backgroundSize: '200% auto',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                   }}
//                 >
//                   15+
//                 </p>
//                 <p className="text-xs sm:text-sm text-silver-light" style={{ fontFamily: "'Inter', sans-serif" }}>
//                   Years in Business
//                 </p>
//               </div>
//             </div>

//             <div className="order-1 lg:order-2 scroll-animate">
//               <span
//                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider inline-block mb-2"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 About KK EXPORT
//               </span>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
//                 <span style={{ fontFamily: "'Poppins', sans-serif" }}>
//                   Leading Garment Buying{' '}
//                 </span>
//                 <span className="italic font-light block mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
//                   House in India
//                 </span>
//               </h2>

//               <div className="space-y-4">
//                 <p
//                   className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
//                   style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//                 >
//                   KK Exports India is a leading garment buying house in India and a trusted global apparel sourcing partner for international brands and retailers. We specialize in connecting buyers with certified and reliable clothing manufacturers across India.
//                 </p>
//                 <p
//                   className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
//                   style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//                 >
//                   With a strong network of verified factories, we manage complete textile sourcing, including product development, sampling, bulk production, quality control, and final shipment. Our experienced team ensures strict compliance standards, ethical manufacturing practices, and timely delivery for every order.
//                 </p>
//               </div>

//               <button
//                 onClick={() => navigate('about')}
//                 className="mt-6 inline-flex items-center gap-2 bg-charcoal text-white font-semibold hover:bg-charcoal-light hover:gap-3 transition-all duration-300 px-6 py-3 rounded-lg text-sm sm:text-base active:scale-95 shadow-md hover:shadow-xl group"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 Read More About Us
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== PRODUCT CATEGORIES WITH IMAGE SLIDER ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-14 scroll-animate">
//             <span
//               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Our Products
//             </span>
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Comprehensive Textile &amp; Apparel Solutions
//             </h2>
//             <p
//               className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
//               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//             >
//               We specialize in premium menswear, bulk garment supply, home furnishing textiles, and high-quality fabrics,
//               delivering superior quality products for domestic and international markets with consistent excellence
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {products.map((product) => (
//               <button
//                 key={product.title}
//                 onClick={() => navigate('products')}
//                 className="scroll-animate group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.12)] transition-all duration-500 hover:-translate-y-2 text-left active:scale-98"
//               >
//                 {/* ── 3-Image Auto Slider ── */}
//                 <ProductImageSlider images={product.images} title={product.title} />

//                 <div className="p-4 sm:p-6">
//                   <div className="flex items-center justify-between mb-2 sm:mb-3">
//                     <h3
//                       className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2"
//                       style={{ fontFamily: "'Poppins', sans-serif" }}
//                     >
//                       <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
//                       <span className="line-clamp-1">{product.title}</span>
//                     </h3>
//                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
//                   </div>

//                   <p
//                     className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
//                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//                   >
//                     {product.desc}
//                   </p>

//                   <span
//                     className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full group-hover:bg-charcoal group-hover:text-white transition-all duration-300"
//                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
//                   >
//                     {product.count}
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>

//           <div className="text-center mt-8 sm:mt-10 scroll-animate">
//             <button
//               onClick={() => navigate('products')}
//               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl group"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               View All Products
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== INDUSTRY APPLICATIONS ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-14 scroll-animate">
//             <span
//               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
               
//             </span>
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Our Textile Product
//             </h2>
//             <p
//               className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
//               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//             >
//               A comprehensive range of export-quality cotton textile solutions
//             </p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
//             {[
//               { name: 'Bath Towels', icon: Wrench },
//               { name: 'Hand Towels', icon: Globe2 },
//               { name: 'Face Towels', icon: Shield },
//               { name: 'Kitchen Towels', icon: Factory },
//               { name: 'Custom Textile Solutions', icon: Leaf },
//               { name: 'Hotel Collection', icon: Award },
//             ].map((ind) => (
//               <button
//                 key={ind.name}
//                 onClick={() => navigate('industries')}
//                 className="scroll-animate group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all duration-300 hover:-translate-y-1 active:scale-95"
//               >
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
//                   <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <span
//                   className="text-xs sm:text-sm font-semibold text-charcoal text-center group-hover:text-charcoal-light transition-colors"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {ind.name}
//                 </span>
//               </button>
//             ))}
//           </div>

//           <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden scroll-animate shadow-xl hover:shadow-2xl transition-shadow duration-300">
//             <img
//               src={IMG.wovenClose2}
//               alt="Woven textile close-up"
//               className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover"
//             />
//             <div className="absolute inset-0 bg-charcoal/85" />
//             <div className="absolute inset-0 flex items-center">
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
//                 <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
//                   <div className="lg:col-span-2 text-center lg:text-left">
//                     <h3
//                       className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3"
//                       style={{ fontFamily: "'Poppins', sans-serif" }}
//                     >
//                       Need a Custom Textile Solution?
//                     </h3>
//                     <p
//                       className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0"
//                       style={{ fontFamily: "'Inter', sans-serif" }}
//                     >
//                       Our engineering team works closely with your R&D department to develop bespoke fabric solutions tailored to your specific requirements
//                     </p>
//                   </div>
//                   <div className="lg:text-right">
//                     <button
//                       onClick={() => navigate('contact')}
//                       className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-all duration-300 text-xs sm:text-sm lg:text-base w-full lg:w-auto hover:shadow-lg active:scale-95 group"
//                       style={{ fontFamily: "'Poppins', sans-serif" }}
//                     >
//                       Discuss Your Project
//                       <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CERTIFICATIONS ===== */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-12 scroll-animate">
//             <span
//               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Trust &amp; Compliance
//             </span>
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Globally Certified. Locally Trusted.
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
//             {[
//               'ISO 9001:2015', 'ISO 14001', 'OEKO-TEX®',
//               'REACH Compliant', 'GRS Certified', 'BSCI Audited',
//             ].map((cert) => (
//               <div
//                 key={cert}
//                 className="scroll-animate flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
//               >
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110">
//                   <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <span
//                   className="text-xs sm:text-sm font-semibold text-charcoal text-center"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {cert}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-6 sm:mt-8 scroll-animate">
//             <button
//               onClick={() => navigate('certifications')}
//               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95 group"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               View All Certifications
//               <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== SUSTAINABILITY ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <div className="order-2 lg:order-1 scroll-animate">
//               <span
//                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 Sustainability
//               </span>
//               <h2
//                 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 Responsible Garment Sourcing for a Better Future
//               </h2>
//               <p
//                 className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8"
//                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//               >
//                 At KK Export, sustainability is an essential part of our garment sourcing process. As a responsible garment buying house in India, we work closely with compliant manufacturers to ensure ethical production, environmental responsibility, and transparent supply chains. We are committed to sustainable manufacturing practices and reducing our environmental footprint through innovative solutions and responsible resource management
//               </p>

//               <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
//                 {[
//                   { value: '40%', label: 'Water Reduction', icon: Droplets },
//                   { value: '60%', label: 'Renewable Energy', icon: Zap },
//                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
//                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
//                 ].map((metric) => (
//                   <div
//                     key={metric.label}
//                     className="scroll-animate bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
//                   >
//                     <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
//                     <p className="text-xl sm:text-2xl font-bold text-charcoal" style={{ fontFamily: "'Poppins', sans-serif" }}>
//                       {metric.value}
//                     </p>
//                     <p className="text-xs sm:text-sm text-silver-dark" style={{ fontFamily: "'Inter', sans-serif" }}>
//                       {metric.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => navigate('sustainability')}
//                 className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95 shadow-lg hover:shadow-xl group"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 Our Sustainability Journey
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div className="order-1 lg:order-2 scroll-animate">
//               <TexImg
//                 src="/image/eco1.png"
//                 alt="Sustainable textile manufacturing"
//                 className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== TESTIMONIALS ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-14 scroll-animate">
//             <span
//               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Client Testimonials
//             </span>
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Trusted by Industry Leaders Worldwide
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {[
//               {
//                 quote: "We have been sourcing industrial-grade cotton fabrics for our garment manufacturing unit. The fabric durability, color consistency, and timely bulk delivery have significantly improved our production workflow.",
//                 name: 'Rohit Mehta',
//                 role: 'Procurement Manager',
//                 company: 'GlobalTex Apparel Pvt. Ltd.',
//               },
//               {
//                 quote: "Their technical textile solutions helped us develop high-performance uniforms for industrial workers. Quality testing standards and customization options are truly impressive for large-scale B2B requirements.",
//                 name: 'Anjali Verma',
//                 role: 'Operations Head',
//                 company: 'SafeWear Industries',
//               },
//               {
//                 quote: "We partnered with them for exporting premium woven fabrics to Europe. Packaging quality, export documentation, and consistent fabric finishing make them a reliable textile manufacturing partner.",
//                 name: 'David Fernandes',
//                 role: 'Director - Supply Chain',
//                 company: 'EuroFab Exports',
//               },
//             ].map((t) => (
//               <div
//                 key={t.name}
//                 className="scroll-animate bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
//               >
//                 <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
//                 <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />
//                   ))}
//                 </div>
//                 <p
//                   className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {t.quote}
//                 </p>
//                 <div className="flex items-center gap-2.5 sm:gap-3">
//                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     {t.name.split(' ').map((n) => n[0]).join('')}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-charcoal text-xs sm:text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
//                       {t.name}
//                     </p>
//                     <p className="text-[10px] sm:text-xs text-silver-dark" style={{ fontFamily: "'Inter', sans-serif" }}>
//                       {t.role}, {t.company}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== FINAL CTA ===== */}
//       <section className="relative overflow-hidden">
//   <div className="absolute inset-0">
//     <img
//       src={IMG.fabricTexture1}
//       alt="Fabric texture"
//       className="w-full h-full object-cover"
//     />
//     <div className="absolute inset-0 bg-charcoal-dark/90" />
//     <div className="absolute inset-0 bg-weave-dark" />
//   </div>

//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
    
//     <h2
//       className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       Experience Our Quality Firsthand
//     </h2>

//     <p
//       className="text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       Request a free fabric sample and evaluate our premium materials, 
//       craftsmanship, and finishing standards before placing your bulk order.
//       Our team will ensure quick dispatch with complete product details.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
      
//       {/* Primary Button */}
//       <button
//         onClick={() => navigate('contact')}
//         className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 group"
//         style={{ fontFamily: "'Poppins', sans-serif" }}
//       >
//         Request a Free Sample
//         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//       </button>

//       {/* Secondary Button */}
//       <button
//         onClick={() => navigate('products')}
//         className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all duration-300 hover:border-white/40 active:scale-95"
//         style={{ fontFamily: "'Poppins', sans-serif" }}
//       >
//         View Our Products
//       </button>

//     </div>
//   </div>
// </section>

//     </div>
//   );
// }





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
//   // === NEW ICONS ADDED BELOW ===
//   Bath,       // For Bath Towels
//   Hand,       // For Hand Towels
//   Smile,      // For Face Towels
//   Utensils,   // For Kitchen Towels
//   Hotel,      // For Hotel Collection
// } from 'lucide-react';

// // Simple Image Component
// function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
//   return (
//     <div className={`relative overflow-hidden bg-cloud ${className}`}>
//       <div className="absolute inset-0 bg-weave opacity-40" />
//       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
//     </div>
//   );
// }

// // ─── Product Image Slider Component ───────────────────────────────────────────
// function ProductImageSlider({ images, title }: { images: string[]; title: string }) {
//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const startAuto = useCallback(() => {
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 2500);
//   }, [images.length]);

//   const stopAuto = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   }, []);

//   useEffect(() => {
//     startAuto();
//     return () => stopAuto();
//   }, [startAuto, stopAuto]);

//   return (
//     <div
//       className="relative overflow-hidden w-full h-40 sm:h-48"
//       onMouseEnter={stopAuto}
//       onMouseLeave={startAuto}
//     >
//       {/* Slides */}
//       {images.map((img, idx) => (
//         <div
//           key={idx}
//           className="absolute inset-0 transition-opacity duration-700"
//           style={{ opacity: idx === current ? 1 : 0 }}
//         >
//           <img
//             src={img}
//             alt={`${title} - view ${idx + 1}`}
//             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//             loading="lazy"
//           />
//         </div>
//       ))}

//       {/* Hover overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//     </div>
//   );
// }

// export function HomePage() {
//   const { navigate } = useNavigation();
//   const scrollImageRef = useRef<HTMLDivElement>(null);

//   // About section auto-slider state
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // About section auto-slide (3 seconds)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % 3);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   // Scroll animation observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.scroll-animate');
//     elements.forEach((el) => observer.observe(el));

//     return () => {
//       elements.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   // ─── Product data with 3 images each ─────────────────────────────────────
//   const products = [
//     {
//       title: 'Menswear Collection',
//       desc: "We manufacture and supply a wide range of men's apparel including casual wear, formal wear, uniforms, and customized garments tailored for bulk orders and brand requirements",
//       icon: Layers,
//       images: [
//         '/image/FULLMENSWEAR.jpg',
//         '/image/MENSWEAR2.jpg',
//         '/image/MENSWEAR3.jpg',
//       ],
//       count: '450+ Variants',
//     },
//     {
//       title: 'Bulk White T-Shirts (Corporate & Election Supply)',
//       desc: 'We specialize in large-scale production of plain white cotton T-shirts for corporate and election supply.',
//       icon: Factory,
//       images: [
//         '/image/FULLBULKT-SHIRT3.jpg',
//         '/image/FULLBULKT-SHIRT2.jpg',
//         '/image/FULLBULKT-SHIRT1.jpg',
//       ],
//       count: '380+ Variants',
//     },
//     {
//       title: 'Home Furnishing & Towels',
//       desc: 'Premium home textile solutions designed for hotels, institutions, and wholesale buyers.',
//       icon: Shield,
//       images: [
//         '/image/TOWEL1.jpg',
//         '/image/TOWEL2.jpg',
//         '/image/TOWEL1.jpg',
//       ],
//       count: '290+ Variants',
//     },
//     {
//       title: 'Fabrics Division',
//       desc: 'We deal in a wide range of premium fabrics suitable for apparel and industrial use.',
//       icon: Wind,
//       images: [
//         '/image/SUITING1.jpg',
//         '/image/SUITING2.jpg',
//         '/image/SUITING1.jpg',
//       ],
//       count: '520+ Variants',
//     },
//     {
//       title: 'Custom Order',
//       desc: 'Custom Order Products are specially designed and manufactured according to client specifications, ensuring premium quality, accurate sizing, customized fabrics, and timely delivery to meet unique business requirements.',
//       icon: Scissors,
//       images: [
//         '/image/CUSTOM1.jpg',
//         '/image/CUSTOM2.jpg',
//         '/image/CUSTOM1.jpg',
//       ],
//       count: '340+ Variants',
//     },
//     {
//       title: 'Denim',
//       desc: 'Denim Products are crafted using high-quality fabrics and advanced manufacturing techniques, offering durability, comfort, modern designs, and superior finishing for both domestic and international fashion markets.',
//       icon: Zap,
//       images: [
//         '/image/DENIM1.jpg',
//         '/image/DENIM2.jpg',
//         '/image/DENIM1.jpg',
//       ],
//       count: '120+ Variants',
//     },
//   ];

//   return (
//     <div className="font-body overflow-x-hidden">
//       {/* ===== ENHANCED STYLES WITH ANIMATIONS ===== */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
        
//         :root {
//           --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
//           --font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
//           --font-heading: 'Poppins', sans-serif;
//         }
        
//         .font-body { font-family: var(--font-body); }
//         .font-display { font-family: var(--font-display); }
//         .font-heading { font-family: var(--font-heading); }

//         html { scroll-behavior: smooth; }
//         body {
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(50px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInLeft {
//           from { opacity: 0; transform: translateX(-50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes fadeInRight {
//           from { opacity: 0; transform: translateX(50px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.9); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         @keyframes slideInFromBottom {
//           from { opacity: 0; transform: translateY(100px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes pulse-subtle {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.8; }
//         }
//         @keyframes shimmer {
//           0% { background-position: -1000px 0; }
//           100% { background-position: 1000px 0; }
//         }

//         .scroll-animate {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: none;
//         }
//         .scroll-animate.animate-in {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }
//         .scroll-animate:nth-child(1).animate-in { animation-delay: 0.1s; }
//         .scroll-animate:nth-child(2).animate-in { animation-delay: 0.2s; }
//         .scroll-animate:nth-child(3).animate-in { animation-delay: 0.3s; }
//         .scroll-animate:nth-child(4).animate-in { animation-delay: 0.4s; }
//         .scroll-animate:nth-child(5).animate-in { animation-delay: 0.5s; }
//         .scroll-animate:nth-child(6).animate-in { animation-delay: 0.6s; }

//         .hero-content { animation: fadeInLeft 1s ease-out; }
//         .hero-label { animation: fadeIn 1.2s ease-out 0.3s both; }
//         .hero-title { animation: fadeInUp 1s ease-out 0.5s both; }
//         .hero-description { animation: fadeInUp 1s ease-out 0.7s both; }
//         .hero-button { animation: fadeInUp 1s ease-out 0.9s both; }

//         .float-animation { animation: float 6s ease-in-out infinite; }

//         .shimmer {
//           background: linear-gradient(
//             90deg,
//             transparent 0%,
//             rgba(255, 255, 255, 0.3) 50%,
//             transparent 100%
//           );
//           background-size: 1000px 100%;
//           animation: shimmer 3s infinite;
//         }

//         .hover-lift {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .hover-lift:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
//         }

//         .scale-hover { transition: transform 0.3s ease; }
//         .scale-hover:hover { transform: scale(1.05); }

//         .gradient-text {
//           background: linear-gradient(90deg, #2b2b2b, #5a5a5a, #2b2b2b);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: shimmer 3s linear infinite;
//         }

//         @keyframes scroll-continuous {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll-continuous {
//           display: flex;
//           width: max-content;
//           animation: scroll-continuous 20s linear infinite;
//         }
//         .animate-scroll-continuous:hover {
//           animation-play-state: paused;
//         }

//         .slide-transition {
//           transition: opacity 1s ease-in-out, transform 1s ease-in-out;
//         }
//       `}</style>

//       {/* ===== HERO SECTION ===== */}
//     <section className="relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[50vh] lg:min-h-[70vh] flex items-center">
//     <div className="absolute inset-0">
//         <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//             poster="/images/fallback.jpg"
//           >
//             <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full z-10">
//           <div className="max-w-4xl hero-content">
//             <p
//               className="hero-label text-xs sm:text-sm lg:text-base text-gray-300 font-semibold mb-3 tracking-[0.22em] uppercase drop-shadow-lg"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Your Trusted Global Buying House
//             </p>

//             <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
//               <span style={{ fontFamily: "'Poppins', sans-serif" }} className="inline-block">
//                 End-to-End Garment Sourcing
//               </span>
//               <br />
//               <span
//                 className="text-gray-300 italic font-light tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block mt-2"
//                 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
//               >
//                 Solutions for Global Brands
//               </span>
//             </h1>

//             <p
//               className="hero-description text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-md"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               We are a trusted garment buying house in India specializing in apparel sourcing, vendor management, quality assurance, and global supply chain solutions. We connect international fashion brands with certified garment manufacturers to deliver premium quality apparel with on-time delivery
//             </p>

//             <button
//               onClick={() => navigate('/products')}
//               className="hero-button inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-2xl transform hover:-translate-y-1 hover:gap-4 active:scale-95"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Discover Products
//               <ArrowRight className="w-5 h-5 transition-transform duration-300" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== ABOUT SUMMARY WITH 3-IMAGE AUTO-SLIDER ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

//             {/* About Auto Slider */}
//             <div className="relative order-2 lg:order-1 scroll-animate">
//               <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
//                 {[
//                   '/image/aboutslider1.jpg',
//                   '/image/abslider2.png',
//                   '/image/abslider3.jpg',
//                 ].map((imgSrc, index) => (
//                   <div
//                     key={index}
//                     className={`absolute inset-0 slide-transition ${
//                       currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//                     }`}
//                   >
//                     <img
//                       src={imgSrc}
//                       alt={`Slide ${index + 1}`}
//                       className="w-full h-full object-cover rounded-xl sm:rounded-2xl transform hover:scale-105 transition-transform duration-700"
//                     />
//                   </div>
//                 ))}
//                 <div className="absolute inset-0 shimmer pointer-events-none" />
//               </div>

//               {/* Stats Badge */}
//               <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-2xl z-20 hover-lift">
//                 <p
//                   className="text-2xl sm:text-3xl font-bold"
//                   style={{
//                     fontFamily: "'Poppins', sans-serif",
//                     background: 'linear-gradient(90deg, #ffffff, #e0e0e0, #ffffff)',
//                     backgroundSize: '200% auto',
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     backgroundClip: 'text',
//                   }}
//                 >
//                   15+
//                 </p>
//                 <p className="text-xs sm:text-sm text-silver-light" style={{ fontFamily: "'Inter', sans-serif" }}>
//                   Years in Business
//                 </p>
//               </div>
//             </div>

//             <div className="order-1 lg:order-2 scroll-animate">
//               <span
//                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider inline-block mb-2"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 About KK EXPORT
//               </span>
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
//                 <span style={{ fontFamily: "'Poppins', sans-serif" }}>
//                   Leading Garment Buying{' '}
//                 </span>
//                 <span className="italic font-light block mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
//                   House in India
//                 </span>
//               </h2>

//               <div className="space-y-4">
//                 <p
//                   className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
//                   style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//                 >
//                   KK Exports India is a leading garment buying house in India and a trusted global apparel sourcing partner for international brands and retailers. We specialize in connecting buyers with certified and reliable clothing manufacturers across India.
//                 </p>
//                 <p
//                   className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
//                   style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//                 >
//                   With a strong network of verified factories, we manage complete textile sourcing, including product development, sampling, bulk production, quality control, and final shipment. Our experienced team ensures strict compliance standards, ethical manufacturing practices, and timely delivery for every order.
//                 </p>
//               </div>

//               <button
//                 onClick={() => navigate('about')}
//                 className="mt-6 inline-flex items-center gap-2 bg-charcoal text-white font-semibold hover:bg-charcoal-light hover:gap-3 transition-all duration-300 px-6 py-3 rounded-lg text-sm sm:text-base active:scale-95 shadow-md hover:shadow-xl group"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 Read More About Us
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== PRODUCT CATEGORIES WITH IMAGE SLIDER ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-14 scroll-animate">
//             <span
//               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Our Products
//             </span>
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Comprehensive Textile &amp; Apparel Solutions
//             </h2>
//             <p
//               className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
//               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//             >
//               We specialize in premium menswear, bulk garment supply, home furnishing textiles, and high-quality fabrics,
//               delivering superior quality products for domestic and international markets with consistent excellence
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {products.map((product) => (
//               <button
//                 key={product.title}
//                 onClick={() => navigate('products')}
//                 className="scroll-animate group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.12)] transition-all duration-500 hover:-translate-y-2 text-left active:scale-98"
//               >
//                 {/* ── 3-Image Auto Slider ── */}
//                 <ProductImageSlider images={product.images} title={product.title} />

//                 <div className="p-4 sm:p-6">
//                   <div className="flex items-center justify-between mb-2 sm:mb-3">
//                     <h3
//                       className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2"
//                       style={{ fontFamily: "'Poppins', sans-serif" }}
//                     >
//                       <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
//                       <span className="line-clamp-1">{product.title}</span>
//                     </h3>
//                     <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
//                   </div>

//                   <p
//                     className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
//                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//                   >
//                     {product.desc}
//                   </p>

//                   <span
//                     className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full group-hover:bg-charcoal group-hover:text-white transition-all duration-300"
//                     style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
//                   >
//                     {product.count}
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>

//           <div className="text-center mt-8 sm:mt-10 scroll-animate">
//             <button
//               onClick={() => navigate('products')}
//               className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl group"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               View All Products
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== INDUSTRY APPLICATIONS / TEXTILE PRODUCT ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-14 scroll-animate">
//             <span
//               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
               
//             </span>
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Our Textile Product
//             </h2>
//             <p
//               className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
//               style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//             >
//               A comprehensive range of export-quality cotton textile solutions
//             </p>
//           </div>

//           {/* === UPDATED ICONS HERE BASED ON NAME === */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
//             {[
//               { name: 'Bath Towels', icon: Bath },          // Changed to Bath
//               { name: 'Hand Towels', icon: Hand },          // Changed to Hand
//               { name: 'Face Towels', icon: Smile },         // Changed to Smile/Face
//               { name: 'Kitchen Towels', icon: Utensils },   // Changed to Utensils/Kitchen
//               { name: 'Custom Textile Solutions', icon: Scissors }, // Custom = Scissors
//               { name: 'Hotel Collection', icon: Hotel },    // Changed to Hotel
//             ].map((ind) => (
//               <button
//                 key={ind.name}
//                 onClick={() => navigate('industries')}
//                 className="scroll-animate group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all duration-300 hover:-translate-y-1 active:scale-95"
//               >
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
//                   <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <span
//                   className="text-xs sm:text-sm font-semibold text-charcoal text-center group-hover:text-charcoal-light transition-colors"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {ind.name}
//                 </span>
//               </button>
//             ))}
//           </div>

//           <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden scroll-animate shadow-xl hover:shadow-2xl transition-shadow duration-300">
//             <img
//               src={IMG.wovenClose2}
//               alt="Woven textile close-up"
//               className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover"
//             />
//             <div className="absolute inset-0 bg-charcoal/85" />
//             <div className="absolute inset-0 flex items-center">
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
//                 <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
//                   <div className="lg:col-span-2 text-center lg:text-left">
//                     <h3
//                       className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3"
//                       style={{ fontFamily: "'Poppins', sans-serif" }}
//                     >
//                       Need a Custom Textile Solution?
//                     </h3>
//                     <p
//                       className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0"
//                       style={{ fontFamily: "'Inter', sans-serif" }}
//                     >
//                       Our engineering team works closely with your R&D department to develop bespoke fabric solutions tailored to your specific requirements
//                     </p>
//                   </div>
//                   <div className="lg:text-right">
//                     <button
//                       onClick={() => navigate('contact')}
//                       className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-all duration-300 text-xs sm:text-sm lg:text-base w-full lg:w-auto hover:shadow-lg active:scale-95 group"
//                       style={{ fontFamily: "'Poppins', sans-serif" }}
//                     >
//                       Discuss Your Project
//                       <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CERTIFICATIONS ===== */}
//       <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-12 scroll-animate">
//             <span
//               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Trust &amp; Compliance
//             </span>
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Compliance & Certification Readiness
//             </h2>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
//             {[
//               'ISO Quality System Aligned', 'OEKO-TEX Standard Compatible Production', 'REACH-Aware Chemical Usage',
//               'Sustainable Processing Practices', 'Ethical Manufacturing Commitment', 'Third-Party Audit Ready',
//             ].map((cert) => (
//               <div
//                 key={cert}
//                 className="scroll-animate flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
//               >
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110">
//                   <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal group-hover:text-white transition-colors duration-300" />
//                 </div>
//                 <span
//                   className="text-xs sm:text-sm font-semibold text-charcoal text-center"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {cert}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-6 sm:mt-8 scroll-animate">
//             <button
//               onClick={() => navigate('certifications')}
//               className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95 group"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               View All Certifications
//               <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ===== SUSTAINABILITY ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
//             <div className="order-2 lg:order-1 scroll-animate">
//               <span
//                 className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 Sustainability
//               </span>
//               <h2
//                 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 Responsible Garment Sourcing for a Better Future
//               </h2>
//               <p
//                 className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8"
//                 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
//               >
//                 At KK Export, sustainability is an essential part of our garment sourcing process. As a responsible garment buying house in India, we work closely with compliant manufacturers to ensure ethical production, environmental responsibility, and transparent supply chains. We are committed to sustainable manufacturing practices and reducing our environmental footprint through innovative solutions and responsible resource management
//               </p>

//               <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
//                 {[
//                   { value: '40%', label: 'Water Reduction', icon: Droplets },
//                   { value: '60%', label: 'Renewable Energy', icon: Zap },
//                   { value: '85%', label: 'Waste Recycled', icon: Leaf },
//                   { value: '30%', label: 'Carbon Reduction', icon: Wind },
//                 ].map((metric) => (
//                   <div
//                     key={metric.label}
//                     className="scroll-animate bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
//                   >
//                     <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
//                     <p className="text-xl sm:text-2xl font-bold text-charcoal" style={{ fontFamily: "'Poppins', sans-serif" }}>
//                       {metric.value}
//                     </p>
//                     <p className="text-xs sm:text-sm text-silver-dark" style={{ fontFamily: "'Inter', sans-serif" }}>
//                       {metric.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => navigate('sustainability')}
//                 className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95 shadow-lg hover:shadow-xl group"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 Our Sustainability Journey
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div className="order-1 lg:order-2 scroll-animate">
//               <TexImg
//                 src="/image/eco2.png"
//                 alt="Sustainable textile manufacturing"
//                 className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== TESTIMONIALS ===== */}
//       <section className="py-12 sm:py-16 lg:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10 sm:mb-14 scroll-animate">
//             <span
//               className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Client Testimonials
//             </span>
//             <h2
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Trusted by Industry Leaders Worldwide
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {[
//               {
//                 quote: "We have been working with KK Export for bulk cotton towel sourcing. The GSM accuracy and fabric finishing are consistent, and shipments are delivered as committed. Communication throughout the order cycle is clear and professional",
//                 name: 'Rohit Mehta',
//                 role: 'Procurement Manager',
//                 company: 'GlobalTex Apparel Pvt. Ltd.',
//               },
//               {
//                 quote: "Their basic T-shirt production program in white and black works well for our wholesale distribution. Quality remains stable even in large volumes, which is important for our African retail market",
//                 name: 'Anjali Verma',
//                 role: 'Director',
//                 company: 'Apparel Trading Company',
//               },
//               {
//                 quote: "Reliable supplier for terry towels and cotton fabrics. Lead times are respected and quality control checks are shared before dispatch, which builds confidence",
//                 name: 'David Fernandes',
//                 role: 'Buying Agent',
//                 company: 'EuroFab Exports',
//               },
//             ].map((t) => (
//               <div
//                 key={t.name}
//                 className="scroll-animate bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
//               >
//                 <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
//                 <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />
//                   ))}
//                 </div>
//                 <p
//                   className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {t.quote}
//                 </p>
//                 <div className="flex items-center gap-2.5 sm:gap-3">
//                   <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     {t.name.split(' ').map((n) => n[0]).join('')}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-charcoal text-xs sm:text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
//                       {t.name}
//                     </p>
//                     <p className="text-[10px] sm:text-xs text-silver-dark" style={{ fontFamily: "'Inter', sans-serif" }}>
//                       {t.role}, {t.company}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== FINAL CTA ===== */}
//       <section className="relative overflow-hidden">
//   <div className="absolute inset-0">
//     <img
//       src={IMG.fabricTexture1}
//       alt="Fabric texture"
//       className="w-full h-full object-cover"
//     />
//     <div className="absolute inset-0 bg-charcoal-dark/90" />
//     <div className="absolute inset-0 bg-weave-dark" />
//   </div>

//   <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
    
//     <h2
//       className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       Experience Our Quality Firsthand
//     </h2>

//     <p
//       className="text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       Request a free fabric sample and evaluate our premium materials, 
//       craftsmanship, and finishing standards before placing your bulk order.
//       Our team will ensure quick dispatch with complete product details.
//     </p>

//     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
      
//       {/* Primary Button */}
//       <button
//         onClick={() => navigate('contact')}
//         className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 group"
//         style={{ fontFamily: "'Poppins', sans-serif" }}
//       >
//         Request a Free Sample
//         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//       </button>

//       {/* Secondary Button */}
//       <button
//         onClick={() => navigate('products')}
//         className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all duration-300 hover:border-white/40 active:scale-95"
//         style={{ fontFamily: "'Poppins', sans-serif" }}
//       >
//         View Our Products
//       </button>

//     </div>
//   </div>
// </section>

//     </div>
//   );
// }







import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  Factory,
  Globe2,
  Award,
  Leaf,
  Shield,
  Zap,
  ChevronRight,
  ChevronLeft,
  Star,
  Layers,
  Droplets,
  Wind,
  Scissors,
  Quote,
  Bath,
  Hand,
  Smile,
  Utensils,
  Hotel,
} from 'lucide-react';

// ─── Product Image Slider ─────────────────────────────────────────────────────
function ProductImageSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
  }, [images.length]);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  return (
    <div
      className="relative overflow-hidden w-full h-40 sm:h-48"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <img
            src={img}
            alt={`${title} - view ${idx + 1}`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

// ─── Sustainability 3-Image Auto Slider ──────────────────────────────────────
const ecoImages = [
  { src: '/image/abslider3.jpg', alt: 'Eco-friendly manufacturing' },
  { src: '/image/aboutslider1.jpg', alt: 'Sustainable textile manufacturing' },
  { src: '/image/abslider3.jpg', alt: 'Renewable energy in production' },
];

function SustainabilitySlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ecoImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

 

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Slides */}
      {ecoImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          loading="lazy"
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Prev / Next arrows */}
      {/* <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all duration-200 active:scale-95 z-10"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button> */}
      {/* <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all duration-200 active:scale-95 z-10"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button> */}

      {/* Dot indicators */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {ecoImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '100px',
              background: i === current ? '#ffffff' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              padding: 0,
            }}
          />
        ))}
      </div> */}
    </div>
  );
}

// ─── Main HomePage ────────────────────────────────────────────────────────────
export function HomePage() {
  const { navigate } = useNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // About section auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));
    return () => { elements.forEach((el) => observer.unobserve(el)); };
  }, []);

  const products = [
    {
      title: 'Menswear Collection',
      desc: "We manufacture and supply a wide range of men's apparel including casual wear, formal wear, uniforms, and customized garments tailored for bulk orders.",
     
      images: ['/image/FULLMENSWEAR.jpg', '/image/MENSWEAR2.jpg', '/image/MENSWEAR3.jpg'],
      count: '450+ Variants',
    },
    {
      title: 'Bulk White T-Shirts (Corporate & Election Supply)',
      desc: 'We specialize in large-scale production of plain white cotton T-shirts for corporate and election supply.',
     
      images: ['/image/FULLBULKT-SHIRT3.jpg', '/image/FULLBULKT-SHIRT2.jpg', '/image/FULLBULKT-SHIRT1.jpg'],
      count: '380+ Variants',
    },
    {
      title: 'Home Furnishing & Towels',
      desc: 'Premium home textile solutions designed for hotels, institutions, and wholesale buyers.',
      
      images: ['/image/TOWEL1.jpg', '/image/TOWEL2.jpg', '/image/TOWEL1.jpg'],
      count: '290+ Variants',
    },
    {
      title: 'Fabrics Division',
      desc: 'We deal in a wide range of premium fabrics suitable for apparel and industrial use.',
     
      images: ['/image/SUITING1.jpg', '/image/SUITING2.jpg', '/image/SUITING1.jpg'],
      count: '520+ Variants',
    },
    {
      title: 'Custom Order',
      desc: 'Custom Order Products are specially designed and manufactured according to client specifications, ensuring premium quality and timely delivery.',
     
      images: ['/image/CUSTOM1.jpg', '/image/CUSTOM2.jpg', '/image/CUSTOM1.jpg'],
      count: '340+ Variants',
    },
    {
      title: 'Denim',
      desc: 'Denim Products are crafted using high-quality fabrics and advanced manufacturing techniques, offering durability, comfort, and modern designs.',
      
      images: ['/image/DENIM1.jpg', '/image/DENIM2.jpg', '/image/DENIM1.jpg'],
      count: '120+ Variants',
    },
  ];

  return (
    <div className="font-body overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
        :root { --font-body:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; --font-display:'Playfair Display',Georgia,serif; --font-heading:'Poppins',sans-serif; }
        .font-body { font-family: var(--font-body); }
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(50px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInLeft { from { opacity:0; transform:translateX(-50px); } to { opacity:1; transform:translateX(0); } }
        @keyframes shimmer { 0% { background-position:-1000px 0; } 100% { background-position:1000px 0; } }
        .scroll-animate { opacity:0; transform:translateY(30px); transition:none; }
        .scroll-animate.animate-in { animation:fadeInUp 0.8s ease-out forwards; }
        .scroll-animate:nth-child(1).animate-in { animation-delay:0.1s; }
        .scroll-animate:nth-child(2).animate-in { animation-delay:0.2s; }
        .scroll-animate:nth-child(3).animate-in { animation-delay:0.3s; }
        .scroll-animate:nth-child(4).animate-in { animation-delay:0.4s; }
        .scroll-animate:nth-child(5).animate-in { animation-delay:0.5s; }
        .scroll-animate:nth-child(6).animate-in { animation-delay:0.6s; }
        .hero-content { animation:fadeInLeft 1s ease-out; }
        .hero-label { animation:fadeInUp 1.2s ease-out 0.3s both; }
        .hero-title { animation:fadeInUp 1s ease-out 0.5s both; }
        .hero-description { animation:fadeInUp 1s ease-out 0.7s both; }
        .hero-button { animation:fadeInUp 1s ease-out 0.9s both; }
        .shimmer { background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.3) 50%,transparent 100%); background-size:1000px 100%; animation:shimmer 3s infinite; }
        .hover-lift { transition:all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .hover-lift:hover { transform:translateY(-8px); box-shadow:0 20px 40px rgba(0,0,0,0.12); }
        .slide-transition { transition:opacity 1s ease-in-out,transform 1s ease-in-out; }
        @keyframes scroll-continuous { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }
        .animate-scroll-continuous { display:flex; width:max-content; animation:scroll-continuous 20s linear infinite; }
        .animate-scroll-continuous:hover { animation-play-state:paused; }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[50vh] lg:min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster="/images/fallback.jpg">
            <source src="/vedio/hemosectionvedio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full z-10">
          <div className="max-w-4xl hero-content">
            <p className="hero-label text-xs sm:text-sm lg:text-base text-gray-300 font-semibold mb-3 tracking-[0.22em] uppercase drop-shadow-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              Your Trusted Global Buying House
            </p>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
              <span style={{ fontFamily: "'Poppins', sans-serif" }} className="inline-block">End-to-End Garment Sourcing</span>
              <br />
              <span className="text-gray-300 italic font-light tracking-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block mt-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}>
                Solutions for Global Brands
              </span>
            </h1>
            <p className="hero-description text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-md" style={{ fontFamily: "'Inter', sans-serif" }}>
              We are a trusted garment buying house in India specializing in apparel sourcing, vendor management, quality assurance, and global supply chain solutions. We connect international fashion brands with certified garment manufacturers to deliver premium quality apparel with on-time delivery.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="hero-button inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-gray-900 font-bold rounded-full text-base sm:text-lg transition-all duration-300 hover:bg-gray-200 hover:shadow-2xl transform hover:-translate-y-1 hover:gap-4 active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Discover Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1 scroll-animate">
              <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                {['/image/aboutslider1.jpg', '/image/abslider2.png', '/image/abslider3.jpg'].map((imgSrc, index) => (
                  <div key={index} className={`absolute inset-0 slide-transition ${currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                    <img src={imgSrc} alt={`About slide ${index + 1}`} className="w-full h-full object-cover rounded-xl sm:rounded-2xl" loading="lazy" />
                  </div>
                ))}
                <div className="absolute inset-0 shimmer pointer-events-none" />
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-2xl z-20 hover-lift">
                <p className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>15+</p>
                <p className="text-xs sm:text-sm text-silver-light" style={{ fontFamily: "'Inter', sans-serif" }}>Years in Business</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 scroll-animate">
              <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider inline-block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>About KK EXPORT</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
                <span style={{ fontFamily: "'Poppins', sans-serif" }}>Leading Garment Buying </span>
                <span className="italic font-light block mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>House in India</span>
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  KK Exports India is a leading garment buying house in India and a trusted global apparel sourcing partner for international brands and retailers. We specialize in connecting buyers with certified and reliable clothing manufacturers across India.
                </p>
                <p className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  With a strong network of verified factories, we manage complete textile sourcing, including product development, sampling, bulk production, quality control, and final shipment.
                </p>
              </div>
              <button onClick={() => navigate('about')} className="mt-6 inline-flex items-center gap-2 bg-charcoal text-white font-semibold hover:bg-charcoal-light hover:gap-3 transition-all duration-300 px-6 py-3 rounded-lg text-sm sm:text-base active:scale-95 shadow-md hover:shadow-xl group" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Read More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 scroll-animate">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Our Products</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Comprehensive Textile & Apparel Solutions</h2>
            <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              We specialize in premium menswear, bulk garment supply, home furnishing textiles, and high-quality fabrics, delivering superior quality products for domestic and international markets.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <button key={product.title} onClick={() => navigate('products')} className="scroll-animate group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.12)] transition-all duration-500 hover:-translate-y-2 text-left">
                <ProductImageSlider images={product.images} title={product.title} />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors flex items-center gap-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {/* <product.icon className="w-4 h-4 sm:w-5 sm:h-5 text-silver-dark flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" /> */}
                      <span className="line-clamp-1">{product.title}</span>
                    </h3>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>{product.desc}</p>
                  <span className="inline-flex items-center text-xs font-semibold text-charcoal bg-cloud-light px-2.5 sm:px-3 py-1 rounded-full group-hover:bg-charcoal group-hover:text-white transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>{product.count}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10 scroll-animate">
            <button onClick={() => navigate('products')} className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl group" style={{ fontFamily: "'Poppins', sans-serif" }}>
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── TEXTILE PRODUCTS ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 scroll-animate">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Textile Product</h2>
            <p className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>A comprehensive range of export-quality cotton textile solutions</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { name: 'Bath Towels', icon: Bath },
              { name: 'Hand Towels', icon: Hand },
              { name: 'Face Towels', icon: Smile },
              { name: 'Kitchen Towels', icon: Utensils },
              { name: 'Custom Textile Solutions', icon: Scissors },
              { name: 'Hotel Collection', icon: Hotel },
            ].map((ind) => (
              <button key={ind.name} onClick={() => navigate('industries')} className="scroll-animate group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:bg-cloud-lighter transition-all duration-300 hover:-translate-y-1 active:scale-95">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center bg-cloud-light group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <ind.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-charcoal text-center group-hover:text-charcoal-light transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{ind.name}</span>
              </button>
            ))}
          </div>
          <div className="mt-10 sm:mt-12 relative rounded-xl sm:rounded-2xl overflow-hidden scroll-animate shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img src={IMG.wovenClose2} alt="Woven textile close-up" className="w-full h-[250px] sm:h-[280px] md:h-[220px] lg:h-[240px] object-cover" />
            <div className="absolute inset-0 bg-charcoal/85" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
                <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Need a Custom Textile Solution?</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed px-2 sm:px-0" style={{ fontFamily: "'Inter', sans-serif" }}>Our engineering team works closely with your R&D department to develop bespoke fabric solutions tailored to your specific requirements.</p>
                  </div>
                  <div className="lg:text-right">
                    <button onClick={() => navigate('contact')} className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-all duration-300 text-xs sm:text-sm lg:text-base w-full lg:w-auto hover:shadow-lg active:scale-95 group" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Discuss Your Project
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 scroll-animate">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Trust & Compliance</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Compliance & Certification Readiness</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {['ISO Quality System Aligned','OEKO-TEX Standard Compatible Production','REACH-Aware Chemical Usage','Sustainable Processing Practices','Ethical Manufacturing Commitment','Third-Party Audit Ready'].map((cert) => (
              <div key={cert} className="scroll-animate flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-charcoal text-center" style={{ fontFamily: "'Inter', sans-serif" }}>{cert}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8 scroll-animate">
            <button onClick={() => navigate('certifications')} className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all text-xs sm:text-sm border-b border-charcoal pb-0.5 active:scale-95 group" style={{ fontFamily: "'Inter', sans-serif" }}>
              View All Certifications
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY — 3-Image Auto Slider ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 scroll-animate">
              <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Sustainability</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Responsible Garment Sourcing for a Better Future
              </h2>
              <p className="text-sm sm:text-base text-silver-darker leading-relaxed mb-6 sm:mb-8" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                At KK Export, sustainability is an essential part of our garment sourcing process. As a responsible garment buying house in India, we work closely with compliant manufacturers to ensure ethical production, environmental responsibility, and transparent supply chains. We are committed to sustainable manufacturing practices and reducing our environmental footprint through innovative solutions and responsible resource management.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { value: '40%', label: 'Water Reduction', icon: Droplets },
                  { value: '60%', label: 'Renewable Energy', icon: Zap },
                  { value: '85%', label: 'Waste Recycled', icon: Leaf },
                  { value: '30%', label: 'Carbon Reduction', icon: Wind },
                ].map((metric) => (
                  <div key={metric.label} className="scroll-animate bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-xl sm:text-2xl font-bold text-charcoal" style={{ fontFamily: "'Poppins', sans-serif" }}>{metric.value}</p>
                    <p className="text-xs sm:text-sm text-silver-dark" style={{ fontFamily: "'Inter', sans-serif" }}>{metric.label}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('sustainability')} className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal hover:bg-charcoal-light text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95 shadow-lg hover:shadow-xl group" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Our Sustainability Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* ✅ 3-Image Auto Slider */}
            <div className="order-1 lg:order-2 scroll-animate">
              <SustainabilitySlider />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 scroll-animate">
            <span className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Client Testimonials</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Trusted by Industry Leaders Worldwide</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { quote: "We have been working with KK Export for bulk cotton towel sourcing. The GSM accuracy and fabric finishing are consistent, and shipments are delivered as committed. Communication throughout the order cycle is clear and professional.", name: 'Rohit Mehta', role: 'Procurement Manager', company: 'GlobalTex Apparel Pvt. Ltd.' },
              { quote: "Their basic T-shirt production program in white and black works well for our wholesale distribution. Quality remains stable even in large volumes, which is important for our African retail market.", name: 'Anjali Verma', role: 'Director', company: 'Apparel Trading Company' },
              { quote: "Reliable supplier for terry towels and cotton fabrics. Lead times are respected and quality control checks are shared before dispatch, which builds confidence.", name: 'David Fernandes', role: 'Buying Agent', company: 'EuroFab Exports' },
            ].map((t) => (
              <div key={t.name} className="scroll-animate bg-cloud-lighter rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-cloud-dark hover:border-silver transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-silver-light mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-charcoal fill-charcoal" />)}
                </div>
                <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>{t.quote}</p>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-xs sm:text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-silver-dark" style={{ fontFamily: "'Inter', sans-serif" }}>{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.fabricTexture1} alt="Fabric texture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/90" />
          <div className="absolute inset-0 bg-weave-dark" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>Experience Our Quality Firsthand</h2>
          <p className="text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Request a free fabric sample and evaluate our premium materials, craftsmanship, and finishing standards before placing your bulk order. Our team will ensure quick dispatch with complete product details.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button onClick={() => navigate('contact')} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 group" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Request a Free Sample
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigate('products')} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all duration-300 hover:border-white/40 active:scale-95" style={{ fontFamily: "'Poppins', sans-serif" }}>
              View Our Products
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}













    