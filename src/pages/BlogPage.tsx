// // import { useNavigation } from '../context/NavigationContext';
// // import { IMG } from '../constants/images';
// // import {
// //   ArrowRight,
// //   Calendar,
// //   Clock,
// //   Tag,
// //   User,
// //   BookOpen,
// //   TrendingUp,
// //   Lightbulb,
// //   FileText,
// //   ChevronRight,
// // } from 'lucide-react';

// // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// //   return (
// //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// //       <div className="absolute inset-0 bg-weave opacity-40" />
// //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// //     </div>
// //   );
// // }

// // const featuredPost = {
// //   title: 'The Future of Smart Textiles: How IoT is Revolutionizing the Fabric Industry',
// //   excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Discover how embedded sensors and conductive fibers are creating a new generation of intelligent fabrics.',
// //   date: 'Jan 15, 2025',
// //   readTime: '8 min read',
// //   author: 'Dr. David Collins',
// //   category: 'Innovation',
// //   img: IMG.fabricTexture1,
// // };

// // const posts = [
// //   { title: 'Understanding Technical Textile Standards: A Guide for Procurement Teams', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Navigating ISO, OEKO-TEX compliance.', date: 'Jan 8, 2025', readTime: '6 min', category: 'Compliance', img: IMG.wovenClose1, icon: FileText },
// //   { title: 'Sustainable Manufacturing: How TexVista Achieves 40% Water Reduction', excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our zero discharge approach.', date: 'Dec 28, 2024', readTime: '5 min', category: 'Sustainability', img: IMG.eco1, icon: TrendingUp },
// //   { title: '5 Key Trends Shaping the Global Nonwoven Fabric Market in 2025', excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.', date: 'Dec 15, 2024', readTime: '7 min', category: 'Market Insights', img: IMG.fabricRolls1, icon: TrendingUp },
// //   { title: 'Aramid vs. Carbon Fiber: Choosing the Right Technical Textile', excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.', date: 'Dec 5, 2024', readTime: '9 min', category: 'Product Guide', img: IMG.fabricTexture2, icon: BookOpen },
// //   { title: 'Industry 4.0 in Textile Manufacturing: Our Digital Transformation', excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.', date: 'Nov 22, 2024', readTime: '6 min', category: 'Innovation', img: IMG.production1, icon: Lightbulb },
// //   { title: 'The Complete Guide to Geotextile Selection for Civil Engineering', excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', date: 'Nov 10, 2024', readTime: '10 min', category: 'Technical', img: IMG.wovenClose2, icon: FileText },
// // ];

// // const blogCategories = ['All', 'Innovation', 'Sustainability', 'Technical', 'Market Insights', 'Product Guide', 'Compliance'];

// // export function BlogPage() {
// //   const { navigate } = useNavigation();

// //   return (
// //     <div>
// //       {/* Hero */}
// //       <section className="relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img src={IMG.fabricTexture4} alt="Fabric texture" className="w-full h-full object-cover" />
// //           <div className="absolute inset-0 bg-charcoal-dark/85" />
// //         </div>
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
// //           <div className="max-w-3xl">
// //             <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Blog & Insights</span>
// //             <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
// //               Industry Knowledge & Technical Insights
// //             </h1>
// //             <p className="text-silver text-lg leading-relaxed">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stay informed with the latest textile industry trends, technical guides, and sustainability insights.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Category Filter */}
// //       <section className="bg-white border-b border-cloud-dark sticky top-16 lg:top-20 z-30">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
// //             {blogCategories.map((cat, i) => (
// //               <button
// //                 key={cat}
// //                 className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
// //                   i === 0 ? 'bg-charcoal text-white' : 'text-silver-darker hover:bg-cloud-lighter'
// //                 }`}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Featured Post */}
// //       <section className="py-12 lg:py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <div className="grid lg:grid-cols-2 gap-0 items-stretch bg-cloud-lighter rounded-2xl overflow-hidden border border-cloud-dark">
// //             <TexImg src={featuredPost.img} alt="Featured article" className="w-full h-[280px] lg:h-full" />
// //             <div className="p-6 lg:p-10 flex flex-col justify-center">
// //               <div className="flex items-center gap-3 mb-4">
// //                 <span className="text-xs font-semibold text-charcoal bg-cloud px-3 py-1 rounded-full">
// //                   {featuredPost.category}
// //                 </span>
// //                 <span className="text-xs text-silver-dark">Featured</span>
// //               </div>
// //               <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4 leading-tight">
// //                 {featuredPost.title}
// //               </h2>
// //               <p className="text-silver-darker leading-relaxed mb-6 line-clamp-3">{featuredPost.excerpt}</p>
// //               <div className="flex items-center gap-4 text-sm text-silver-dark mb-6">
// //                 <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {featuredPost.author}</span>
// //                 <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
// //                 <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
// //               </div>
// //               <button className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5 self-start">
// //                 Read Full Article <ArrowRight className="w-4 h-4" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Post Grid */}
// //       <section className="py-8 lg:py-12 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           <h3 className="text-xl font-bold text-charcoal mb-8">Latest Articles</h3>
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {posts.map((post) => (
// //               <article
// //                 key={post.title}
// //                 className="group bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all"
// //               >
// //                 <TexImg src={post.img} alt={post.category} className="w-full h-44" />
// //                 <div className="p-6">
// //                   <div className="flex items-center gap-3 mb-3">
// //                     <span className="text-xs font-medium text-charcoal bg-cloud-light px-2.5 py-0.5 rounded-full flex items-center gap-1">
// //                       <Tag className="w-3 h-3" /> {post.category}
// //                     </span>
// //                     <span className="text-xs text-silver-dark">{post.readTime}</span>
// //                   </div>
// //                   <h3 className="text-base font-bold text-charcoal mb-2 group-hover:text-charcoal-light transition-colors line-clamp-2">
// //                     {post.title}
// //                   </h3>
// //                   <p className="text-sm text-silver-darker line-clamp-2 mb-4">{post.excerpt}</p>
// //                   <div className="flex items-center justify-between pt-4 border-t border-cloud-dark">
// //                     <span className="text-xs text-silver-dark flex items-center gap-1">
// //                       <Calendar className="w-3.5 h-3.5" /> {post.date}
// //                     </span>
// //                     <button className="text-sm font-semibold text-charcoal flex items-center gap-1 hover:gap-2 transition-all">
// //                       Read <ChevronRight className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </article>
// //             ))}
// //           </div>

// //           <div className="text-center mt-12">
// //             <button className="inline-flex items-center gap-2 px-6 py-3 border border-cloud-dark text-charcoal font-semibold rounded-lg hover:bg-cloud-lighter transition-colors">
// //               Load More Articles <ArrowRight className="w-4 h-4" />
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Newsletter CTA */}
// //       <section className="relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img src={IMG.fabricRolls1} alt="Fabric rolls" className="w-full h-full object-cover" />
// //           <div className="absolute inset-0 bg-charcoal/90" />
// //         </div>
// //         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
// //           <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
// //           <p className="text-silver mb-8">
// //             Lorem ipsum dolor sit amet. Get monthly industry insights, product updates, and technical resources delivered to your inbox.
// //           </p>
// //           <div className="flex gap-3 max-w-md mx-auto">
// //             <input
// //               type="email"
// //               placeholder="Enter your business email"
// //               className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-silver-dark focus:outline-none focus:border-silver"
// //             />
// //             <button
// //               onClick={() => navigate('contact')}
// //               className="px-6 py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors whitespace-nowrap"
// //             >
// //               Subscribe
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }












// import { useNavigation } from '../context/NavigationContext';
// import { IMG } from '../constants/images';
// import {
//   ArrowRight,
//   Calendar,
//   Clock,
//   Tag,
//   User,
//   BookOpen,
//   TrendingUp,
//   Lightbulb,
//   FileText,
//   ChevronRight,
// } from 'lucide-react';

// function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
//   return (
//     <div className={`relative overflow-hidden bg-cloud ${className}`}>
//       <div className="absolute inset-0 bg-weave opacity-40" />
//       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
//     </div>
//   );
// }

// const featuredPost = {
//   title: 'The Future of Smart Textiles: How IoT is Revolutionizing the Fabric Industry',
//   excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Discover how embedded sensors and conductive fibers are creating a new generation of intelligent fabrics.',
//   date: 'Jan 15, 2025',
//   readTime: '8 min read',
//   author: 'Dr. David Collins',
//   category: 'Innovation',
//   img: IMG.fabricTexture1,
// };

// const posts = [
//   { title: 'Understanding Technical Textile Standards: A Guide for Procurement Teams', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Navigating ISO, OEKO-TEX compliance.', date: 'Jan 8, 2025', readTime: '6 min', category: 'Compliance', img: IMG.wovenClose1, icon: FileText },
//   { title: 'Sustainable Manufacturing: How TexVista Achieves 40% Water Reduction', excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our zero discharge approach.', date: 'Dec 28, 2024', readTime: '5 min', category: 'Sustainability', img: IMG.eco1, icon: TrendingUp },
//   { title: '5 Key Trends Shaping the Global Nonwoven Fabric Market in 2025', excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.', date: 'Dec 15, 2024', readTime: '7 min', category: 'Market Insights', img: IMG.fabricRolls1, icon: TrendingUp },
//   { title: 'Aramid vs. Carbon Fiber: Choosing the Right Technical Textile', excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.', date: 'Dec 5, 2024', readTime: '9 min', category: 'Product Guide', img: IMG.fabricTexture2, icon: BookOpen },
//   { title: 'Industry 4.0 in Textile Manufacturing: Our Digital Transformation', excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.', date: 'Nov 22, 2024', readTime: '6 min', category: 'Innovation', img: IMG.production1, icon: Lightbulb },
//   { title: 'The Complete Guide to Geotextile Selection for Civil Engineering', excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', date: 'Nov 10, 2024', readTime: '10 min', category: 'Technical', img: IMG.wovenClose2, icon: FileText },
// ];

// const blogCategories = ['All', 'Innovation', 'Sustainability', 'Technical', 'Market Insights', 'Product Guide', 'Compliance'];

// export function BlogPage() {
//   const { navigate } = useNavigation();

//   return (
//     <div className="font-['Inter',sans-serif]">
//       {/* Hero */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={IMG.fabricTexture4} alt="Fabric texture" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-charcoal-dark/85" />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
//           <div className="max-w-3xl">
//             <span className="text-silver-light font-semibold text-xs sm:text-sm uppercase tracking-wider">Blog & Insights</span>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
//               Industry Knowledge & Technical Insights
//             </h1>
//             <p className="text-silver text-base sm:text-lg leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stay informed with the latest textile industry trends, technical guides, and sustainability insights.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="bg-white border-b border-cloud-dark sticky top-16 lg:top-20 z-30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex gap-2 overflow-x-auto py-3 sm:py-4 hide-scrollbar">
//             {blogCategories.map((cat, i) => (
//               <button
//                 key={cat}
//                 className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all flex-shrink-0 ${
//                   i === 0 ? 'bg-charcoal text-white shadow-md' : 'text-silver-darker hover:bg-cloud-lighter border border-cloud-dark'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Post */}
//       <section className="py-8 sm:py-12 lg:py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-2 gap-0 items-stretch bg-cloud-lighter rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver transition-colors">
//             <TexImg src={featuredPost.img} alt="Featured article" className="w-full h-[200px] sm:h-[280px] lg:h-full" />
//             <div className="p-5 sm:p-6 lg:p-10 flex flex-col justify-center">
//               <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//                 <span className="text-xs font-semibold text-charcoal bg-cloud px-2.5 sm:px-3 py-1 rounded-full">
//                   {featuredPost.category}
//                 </span>
//                 <span className="text-xs text-silver-dark">Featured</span>
//               </div>
//               <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-3 sm:mb-4 leading-tight">
//                 {featuredPost.title}
//               </h2>
//               <p className="text-sm sm:text-base text-silver-darker leading-relaxed mb-4 sm:mb-6 line-clamp-3">
//                 {featuredPost.excerpt}
//               </p>
//               <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-silver-dark mb-4 sm:mb-6">
//                 <span className="flex items-center gap-1.5">
//                   <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
//                   <span className="hidden sm:inline">{featuredPost.author}</span>
//                   <span className="sm:hidden">Author</span>
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {featuredPost.date}
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {featuredPost.readTime}
//                 </span>
//               </div>
//               <button className="inline-flex items-center gap-2 text-charcoal font-semibold text-sm sm:text-base hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5 self-start">
//                 Read Full Article <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Post Grid */}
//       <section className="py-8 sm:py-10 lg:py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-6 sm:mb-8">Latest Articles</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {posts.map((post) => (
//               <article
//                 key={post.title}
//                 className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all"
//               >
//                 <TexImg src={post.img} alt={post.category} className="w-full h-40 sm:h-44" />
//                 <div className="p-4 sm:p-6">
//                   <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                     <span className="text-xs font-medium text-charcoal bg-cloud-light px-2 sm:px-2.5 py-0.5 rounded-full flex items-center gap-1">
//                       <Tag className="w-3 h-3" /> {post.category}
//                     </span>
//                     <span className="text-xs text-silver-dark">{post.readTime}</span>
//                   </div>
//                   <h3 className="text-sm sm:text-base font-bold text-charcoal mb-2 group-hover:text-charcoal-light transition-colors line-clamp-2">
//                     {post.title}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-silver-darker line-clamp-2 mb-3 sm:mb-4">
//                     {post.excerpt}
//                   </p>
//                   <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-cloud-dark">
//                     <span className="text-xs text-silver-dark flex items-center gap-1">
//                       <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {post.date}
//                     </span>
//                     <button className="text-xs sm:text-sm font-semibold text-charcoal flex items-center gap-1 hover:gap-2 transition-all">
//                       Read <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="text-center mt-8 sm:mt-12">
//             <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-cloud-dark text-charcoal font-semibold text-sm sm:text-base rounded-lg hover:bg-cloud-lighter transition-colors">
//               Load More Articles <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter CTA */}
    
//     <section className="relative overflow-hidden">
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


//       {/* Hide scrollbar styling */}
//       <style>{`
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }








import { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  ArrowRight,
  Leaf,
  Users,
  Heart,
  Globe2,
  Award,
  Droplets,
  Zap,
  Wind,
  Shield,
  TreePine,
  GraduationCap,
  HandHeart,
  Factory,
  ChevronRight,
} from 'lucide-react';

export function BlogPage() {
  const { navigate } = useNavigation();

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
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="font-body overflow-x-hidden">

      {/* ===== GLOBAL STYLES ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

        :root {
          --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-display: 'Playfair Display', Georgia, serif;
          --font-heading: 'Poppins', sans-serif;
        }
        .font-body    { font-family: var(--font-body); }
        .font-display { font-family: var(--font-display); }
        .font-heading { font-family: var(--font-heading); }

        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: none;
        }
        .scroll-animate.animate-in { animation: fadeInUp 0.8s ease-out forwards; }
        .scroll-animate:nth-child(1).animate-in { animation-delay: 0.1s; }
        .scroll-animate:nth-child(2).animate-in { animation-delay: 0.2s; }
        .scroll-animate:nth-child(3).animate-in { animation-delay: 0.3s; }
        .scroll-animate:nth-child(4).animate-in { animation-delay: 0.4s; }
        .scroll-animate:nth-child(5).animate-in { animation-delay: 0.5s; }
        .scroll-animate:nth-child(6).animate-in { animation-delay: 0.6s; }

        .hero-label       { animation: fadeIn 1.2s ease-out 0.3s both; }
        .hero-title       { animation: fadeInUp 1s ease-out 0.5s both; }
        .hero-description { animation: fadeInUp 1s ease-out 0.7s both; }
        .hero-button      { animation: fadeInUp 1s ease-out 0.9s both; }

        .shimmer {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/image/csr-hero.jpg"
            alt="CSR Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full z-10">
          <div className="max-w-3xl">
            <span
              className="hero-label inline-block text-xs sm:text-sm text-silver font-semibold uppercase tracking-[0.22em] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Corporate Social Responsibility
            </span>
            <h1
              className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5"
            >
              <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                Giving Back to
              </span>
              <br />
              <span
                className="italic font-light text-silver-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 inline-block"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 300 }}
              >
                Society &amp; Planet
              </span>
            </h1>
            <p
              className="hero-description text-base sm:text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              At KK Exports, we believe that business success must go hand in hand with social responsibility. Our CSR initiatives focus on empowering communities, protecting the environment, and building a sustainable future for generations to come.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="hero-button inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-charcoal font-bold rounded-full text-base sm:text-lg transition-all duration-300 hover:bg-cloud-light hover:shadow-2xl transform hover:-translate-y-1 hover:gap-4 active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Join Our Mission
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className="py-10 sm:py-14 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '10,000+', label: 'Lives Impacted',     icon: Users    },
              { value: '500+',    label: 'Trees Planted',      icon: TreePine },
              { value: '15+',     label: 'NGO Partnerships',   icon: HandHeart},
              { value: '40%',     label: 'Carbon Reduction',   icon: Leaf     },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="scroll-animate flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <p
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs sm:text-sm text-silver font-medium"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR COMMITMENT ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

            <div className="scroll-animate">
              <span
                className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider inline-block mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
                <span style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Building a Better{' '}
                </span>
                <span
                  className="italic font-light block mt-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Tomorrow, Today
                </span>
              </h2>
              <div className="space-y-4">
                <p
                  className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  KK Exports is committed to making a meaningful difference in the communities where we operate. From supporting education and healthcare to promoting environmental sustainability, our CSR programmes are deeply integrated into our business strategy.
                </p>
                <p
                  className="text-sm sm:text-base lg:text-[17px] text-silver-darker leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  We partner with local NGOs, government bodies, and international organisations to create sustainable impact. Our goal is not just to run a profitable business, but to be a force for positive change in society.
                </p>
              </div>
              <button
                onClick={() => navigate('about')}
                className="mt-6 inline-flex items-center gap-2 bg-charcoal text-white font-semibold hover:bg-charcoal-light hover:gap-3 transition-all duration-300 px-6 py-3 rounded-lg text-sm sm:text-base active:scale-95 shadow-md hover:shadow-xl group"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Know More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="scroll-animate">
              <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[430px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/image/csr-commitment.jpg"
                  alt="CSR Commitment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 shimmer pointer-events-none" />
              </div>
              {/* Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-charcoal text-white p-4 sm:p-5 rounded-lg sm:rounded-xl shadow-2xl z-20 hover-lift">
                <p className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  15+
                </p>
                <p className="text-xs sm:text-sm text-silver-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Years of Impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CSR PILLARS ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 scroll-animate">
            <span
              className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Focus Areas
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Four Pillars of Our CSR
            </h2>
            <p
              className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Our corporate social responsibility strategy is built on four key pillars that guide every initiative and investment we make
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Leaf,
                title: 'Environment',
                desc: 'We actively reduce our carbon footprint through renewable energy adoption, waste reduction programmes, and sustainable manufacturing practices.',
                color: 'bg-cloud-light',
              },
              {
                icon: GraduationCap,
                title: 'Education',
                desc: 'Providing scholarships, vocational training, and digital literacy programmes to underprivileged youth and communities near our facilities.',
                color: 'bg-cloud-light',
              },
              {
                icon: Heart,
                title: 'Community',
                desc: 'Supporting local communities through healthcare camps, infrastructure development, and livelihood generation for marginalised groups.',
                color: 'bg-cloud-light',
              },
              {
                icon: Users,
                title: 'Employee Welfare',
                desc: 'Ensuring safe working conditions, fair wages, skill development, and equal opportunities for all our employees and supply chain workers.',
                color: 'bg-cloud-light',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="scroll-animate group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.12)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cloud-light flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <pillar.icon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="text-base sm:text-lg font-bold text-charcoal mb-2 sm:mb-3 group-hover:text-charcoal-light transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-xs sm:text-sm text-silver-darker leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INITIATIVES GRID ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 scroll-animate">
            <span
              className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              What We Do
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Key Initiatives
            </h2>
            <p
              className="text-sm sm:text-base text-silver-darker max-w-2xl mx-auto px-4"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              From tree plantation drives to women empowerment programmes, here is a glimpse of what we have been doing on the ground
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                img: '/image/csr-tree.jpg',
                tag: 'Environment',
                title: 'Green Earth Drive',
                desc: 'Planted 500+ trees across 10 districts in partnership with local forest departments and environmental NGOs.',
              },
              {
                img: '/image/csr-education.jpg',
                tag: 'Education',
                title: 'Scholarship Programme',
                desc: 'Providing annual scholarships to 200+ meritorious students from economically weaker sections near our factories.',
              },
              {
                img: '/image/csr-women.jpg',
                tag: 'Community',
                title: 'Women Empowerment',
                desc: 'Vocational training in garment stitching and embroidery for 1,000+ rural women, enabling self-sufficiency.',
              },
              {
                img: '/image/csr-health.jpg',
                tag: 'Healthcare',
                title: 'Free Health Camps',
                desc: 'Organising quarterly health checkup camps providing free medical consultation and medicines to 5,000+ beneficiaries.',
              },
              {
                img: '/image/csr-water.jpg',
                tag: 'Environment',
                title: 'Clean Water Project',
                desc: 'Installed 30+ water purification units in rural schools and community centres across three states.',
              },
              {
                img: '/image/csr-skill.jpg',
                tag: 'Employee Welfare',
                title: 'Skill Development',
                desc: 'Annual skill upgrade training for 500+ factory workers covering safety, quality, and digital literacy.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="scroll-animate group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.12)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-44 sm:h-48">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className="absolute top-3 left-3 bg-charcoal/70 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <h3
                      className="text-base sm:text-lg font-bold text-charcoal group-hover:text-charcoal-light transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-silver group-hover:text-charcoal group-hover:translate-x-2 transition-all duration-300 flex-shrink-0" />
                  </div>
                  <p
                    className="text-xs sm:text-sm text-silver-darker leading-relaxed line-clamp-2 sm:line-clamp-3"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY METRICS ===== */}
      <section className="py-12 sm:py-16 lg:py-24 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14 scroll-animate">
            <span
              className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Environmental Impact
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Sustainability Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
            {[
              { value: '40%', label: 'Water Reduction',   icon: Droplets },
              { value: '60%', label: 'Renewable Energy',  icon: Zap      },
              { value: '85%', label: 'Waste Recycled',    icon: Leaf     },
              { value: '30%', label: 'Carbon Reduction',  icon: Wind     },
            ].map((metric) => (
              <div
                key={metric.label}
                className="scroll-animate bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p
                  className="text-2xl sm:text-3xl font-bold text-charcoal"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {metric.value}
                </p>
                <p
                  className="text-xs sm:text-sm text-silver-dark mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden scroll-animate shadow-xl">
            <img
              src="/image/csr-banner.jpg"
              alt="CSR Banner"
              className="w-full h-[220px] sm:h-[250px] lg:h-[240px] object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/85" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
                <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 items-center">
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <h3
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Want to Partner with Us on CSR?
                    </h3>
                    <p
                      className="text-xs sm:text-sm lg:text-base text-silver leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      We welcome collaboration with NGOs, government bodies, and like-minded companies to amplify our social impact
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <button
                      onClick={() => navigate('contact')}
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-all duration-300 text-sm sm:text-base w-full lg:w-auto hover:shadow-lg active:scale-95 group"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-cloud-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 scroll-animate">
            <span
              className="text-silver-dark font-semibold text-xs sm:text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Recognition &amp; Compliance
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mt-2 sm:mt-3 mb-3 sm:mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Certified for Responsibility
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              'ISO 14001', 'GRS Certified', 'BSCI Audited',
              'OEKO-TEX®', 'SA8000', 'UN SDG Aligned',
            ].map((cert) => (
              <div
                key={cert}
                className="scroll-animate flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 bg-cloud-lighter rounded-lg sm:rounded-xl border border-cloud-dark hover:border-silver hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cloud rounded-full flex items-center justify-center group-hover:bg-charcoal transition-all duration-300 group-hover:scale-110">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal group-hover:text-white transition-colors duration-300" />
                </div>
                <span
                  className="text-xs sm:text-sm font-semibold text-charcoal text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/image/csr-cta-bg.jpg" alt="CTA Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
          <h2
            className="scroll-animate text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Together We Can Make<br />a Lasting Difference
          </h2>
          <p
            className="scroll-animate text-sm sm:text-base lg:text-lg text-silver max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Join hands with KK Exports in our mission to create a more equitable and sustainable world for future generations
          </p>
          <div className="scroll-animate flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold rounded-lg text-base sm:text-lg hover:bg-cloud-light transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 group"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('sustainability')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg text-base sm:text-lg border border-white/20 transition-all duration-300 hover:border-white/40 active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              View Sustainability Report
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}