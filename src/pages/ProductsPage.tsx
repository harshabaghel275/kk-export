// // // import { useState } from 'react';
// // // import { useNavigation } from '../context/NavigationContext';
// // // import { IMG } from '../constants/images';
// // // import {
// // //   ArrowRight,
// // //   Search,
// // //   Filter,
// // //   ChevronRight,
// // //   Download,
// // //   CheckCircle2,
// // // } from 'lucide-react';

// // // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// // //   return (
// // //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// // //       <div className="absolute inset-0 bg-weave opacity-40" />
// // //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// // //     </div>
// // //   );
// // // }

// // // const categories = [
// // //   { id: 'all', name: 'All Products' },
// // //   { id: 'technical', name: 'Technical Textiles' },
// // //   { id: 'industrial', name: 'Industrial Fabrics' },
// // //   { id: 'coated', name: 'Coated Textiles' },
// // //   { id: 'nonwoven', name: 'Nonwoven Fabrics' },
// // //   { id: 'yarns', name: 'Specialty Yarns' },
// // //   { id: 'smart', name: 'Smart Textiles' },
// // // ];

// // // const products = [
// // //   { id: 1, category: 'technical', name: 'Aramid Fiber Fabric', desc: 'High-strength aramid weave for extreme temperature and abrasion resistance applications.', img: IMG.fabricTexture1, specs: ['Temp: -40°C to 400°C', 'Weight: 200-450 GSM', 'Width: 100-320 cm'] },
// // //   { id: 2, category: 'technical', name: 'Carbon Fiber Cloth', desc: 'Lightweight carbon fiber textile for aerospace and high-performance automotive composites.', img: IMG.fabricTexture2, specs: ['Tensile: 3500 MPa', 'Weight: 160-600 GSM', 'Weave: Plain/Twill'] },
// // //   { id: 3, category: 'industrial', name: 'Filter Press Cloth', desc: 'Precision-woven filtration media for industrial liquid-solid separation processes.', img: IMG.wovenClose1, specs: ['Porosity: 5-200 μm', 'Weight: 300-800 GSM', 'Chemical Resistant'] },
// // //   { id: 4, category: 'industrial', name: 'Conveyor Belt Fabric', desc: 'Heavy-duty woven base fabric for manufacturing and material handling conveyor systems.', img: IMG.production1, specs: ['Strength: 100-500 N/cm', 'Weight: 400-1200 GSM', 'EP/NN Grade'] },
// // //   { id: 5, category: 'coated', name: 'PVC Coated Polyester', desc: 'Weather-resistant PVC coated fabric for architectural tensile structures and covers.', img: IMG.fabricTexture3, specs: ['Coating: 500-1500 g/m²', 'UV Resistant', 'Flame Retardant'] },
// // //   { id: 6, category: 'coated', name: 'PTFE Membrane Fabric', desc: 'Premium PTFE-coated fiberglass for permanent architectural and industrial membrane structures.', img: IMG.wovenClose2, specs: ['Life: 30+ years', 'Self-cleaning', 'Translucent'] },
// // //   { id: 7, category: 'nonwoven', name: 'Spunbond Polypropylene', desc: 'Versatile nonwoven fabric for medical, hygiene, and agricultural cover applications.', img: IMG.fabricTexture4, specs: ['Weight: 10-150 GSM', 'Hydrophilic/Phobic', 'Medical Grade'] },
// // //   { id: 8, category: 'nonwoven', name: 'Needle Punch Geotextile', desc: 'High-strength nonwoven geotextile for soil stabilization and drainage applications.', img: IMG.wovenClose3, specs: ['Weight: 100-800 GSM', 'CBR Burst: 2-12 kN', 'UV Stabilized'] },
// // //   { id: 9, category: 'yarns', name: 'High Tenacity Polyester', desc: 'Industrial-grade polyester yarn for tire cord, conveyor belt, and technical weaving.', img: IMG.thread1, specs: ['Tenacity: 7-9 g/d', 'Denier: 250-3000D', 'Low Shrinkage'] },
// // //   { id: 10, category: 'yarns', name: 'Recycled PET Yarn', desc: 'Sustainable yarn made from post-consumer recycled PET bottles for eco-conscious textiles.', img: IMG.thread2, specs: ['100% rPET', 'GRS Certified', 'Color: Custom'] },
// // //   { id: 11, category: 'smart', name: 'Conductive Fiber Fabric', desc: 'Electrically conductive textile for wearable electronics, EMI shielding, and sensing applications.', img: IMG.fabricTexture1, specs: ['Resistance: <1Ω/sq', 'Washable', 'Stretchable'] },
// // //   { id: 12, category: 'smart', name: 'Thermochromic Fabric', desc: 'Color-changing textile that responds to temperature variations for safety and fashion applications.', img: IMG.fabricRolls1, specs: ['Activation: 15-45°C', 'Reversible', 'Durable'] },
// // // ];

// // // export function ProductsPage() {
// // //   const { navigate } = useNavigation();
// // //   const [activeCategory, setActiveCategory] = useState('all');
// // //   const [searchQuery, setSearchQuery] = useState('');

// // //   const filtered = products.filter((p) => {
// // //     const matchCategory = activeCategory === 'all' || p.category === activeCategory;
// // //     const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //       p.desc.toLowerCase().includes(searchQuery.toLowerCase());
// // //     return matchCategory && matchSearch;
// // //   });

// // //   return (
// // //     <div>
// // //       {/* Page Hero */}
// // //       <section className="relative overflow-hidden">
// // //         <div className="absolute inset-0">
// // //           <img src={IMG.swatches1} alt="Fabric swatches" className="w-full h-full object-cover" />
// // //           <div className="absolute inset-0 bg-charcoal-dark/85" />
// // //         </div>
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
// // //           <div className="max-w-3xl">
// // //             <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Our Products</span>
// // //             <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
// // //               Comprehensive Textile Product Portfolio
// // //             </h1>
// // //             <p className="text-silver text-lg leading-relaxed">
// // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our extensive range of 2,500+ product variants across six specialized categories, engineered for performance-critical applications.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Filters & Products */}
// // //       <section className="py-12 lg:py-16 bg-cloud-lighter">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// // //           {/* Search & Filter */}
// // //           <div className="bg-white rounded-xl p-4 border border-cloud-dark mb-8 flex flex-col md:flex-row gap-4">
// // //             <div className="flex-1 relative">
// // //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-silver" />
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search products by name or application..."
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 className="w-full pl-10 pr-4 py-2.5 bg-cloud-lighter border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal placeholder:text-silver"
// // //               />
// // //             </div>
// // //             <div className="flex items-center gap-2 text-silver-dark">
// // //               <Filter className="w-4 h-4" />
// // //               <span className="text-sm font-medium">Filter:</span>
// // //             </div>
// // //           </div>

// // //           {/* Category Tabs */}
// // //           <div className="flex flex-wrap gap-2 mb-10">
// // //             {categories.map((cat) => (
// // //               <button
// // //                 key={cat.id}
// // //                 onClick={() => setActiveCategory(cat.id)}
// // //                 className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
// // //                   activeCategory === cat.id
// // //                     ? 'bg-charcoal text-white'
// // //                     : 'bg-white text-silver-darker hover:bg-cloud border border-cloud-dark'
// // //                 }`}
// // //               >
// // //                 {cat.name}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {/* Product Grid */}
// // //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {filtered.map((product) => (
// // //               <div
// // //                 key={product.id}
// // //                 className="group bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1"
// // //               >
// // //                 <TexImg src={product.img} alt={product.name} className="w-full h-44" />
// // //                 <div className="p-6">
// // //                   <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-charcoal-light transition-colors">
// // //                     {product.name}
// // //                   </h3>
// // //                   <p className="text-sm text-silver-darker leading-relaxed mb-4">{product.desc}</p>
// // //                   <div className="space-y-1.5 mb-5">
// // //                     {product.specs.map((spec) => (
// // //                       <div key={spec} className="flex items-center gap-2">
// // //                         <CheckCircle2 className="w-3.5 h-3.5 text-charcoal shrink-0" />
// // //                         <span className="text-xs text-silver-darker">{spec}</span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                   <div className="flex items-center justify-between pt-4 border-t border-cloud-dark">
// // //                     <button className="text-sm font-semibold text-charcoal flex items-center gap-1 hover:gap-2 transition-all">
// // //                       View Details <ChevronRight className="w-4 h-4" />
// // //                     </button>
// // //                     <button className="text-sm text-silver-dark hover:text-charcoal flex items-center gap-1 transition-colors">
// // //                       <Download className="w-4 h-4" /> TDS
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {filtered.length === 0 && (
// // //             <div className="text-center py-16">
// // //               <Search className="w-12 h-12 text-silver mx-auto mb-4" />
// // //               <h3 className="text-lg font-semibold text-charcoal">No products found</h3>
// // //               <p className="text-silver-dark mt-1">Try adjusting your search or filter criteria.</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* Custom Solutions CTA */}
// // //       <section className="relative overflow-hidden">
// // //         <div className="absolute inset-0">
// // //           <img src={IMG.production2} alt="Textile production" className="w-full h-full object-cover" />
// // //           <div className="absolute inset-0 bg-charcoal/90" />
// // //         </div>
// // //         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
// // //           <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You Need?</h2>
// // //           <p className="text-silver mb-8 max-w-2xl mx-auto">
// // //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our R&D team specializes in developing custom textile solutions tailored to your unique specifications.
// // //           </p>
// // //           <div className="flex flex-wrap gap-4 justify-center">
// // //             <button
// // //               onClick={() => navigate('contact')}
// // //               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors"
// // //             >
// // //               Request Custom Solution <ArrowRight className="w-5 h-5" />
// // //             </button>
// // //             <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
// // //               <Download className="w-5 h-5" /> Download Full Catalog
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }





// // import { useState } from 'react';
// // import { useNavigation } from '../context/NavigationContext';
// // import { IMG } from '../constants/images';
// // import {
// //   ArrowRight,
// //   Search,
// //   Filter,
// //   ChevronRight,
// //   Download,
// //   CheckCircle2,
// // } from 'lucide-react';

// // function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
// //   return (
// //     <div className={`relative overflow-hidden bg-cloud ${className}`}>
// //       <div className="absolute inset-0 bg-weave opacity-40" />
// //       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
// //     </div>
// //   );
// // }

// // const categories = [
// //   { id: 'all', name: 'ALL PRODUCTS' },
// //   { id: 'MENSWEAR DIVISION', name: 'MENSWEAR DIVISION' },
// //   { id: 'BULKPROMOTIONAL', name: 'BULK PROMOTIONAL T-SHIRTS' },
// //   { id: 'HOMETEXTILE', name: 'HOME TEXTILE DIVISION' },
// //   { id: 'FABRICDIVISION', name: 'FABRIC DIVISION' },
// //   { id: 'DENIMDIVISION', name: 'DENIM DIVISION' },
// //   { id: 'CUSTOMMANUFACTURING', name: 'CUSTOM MANUFACTURING' },
// // ];

// // const products = [
// //   {
// //     id: 1, category: 'MENSWEAR DIVISION', name: 'Round Neck T-Shirts', desc: 'High-quality cotton and blended round neck T-shirts manufactured in multiple GSM options for retail, corporate, and export markets.', img: IMG.fabricTexture1, specs: [
// //       'Fabric: 100% Cotton / Cotton Blend',
// //       'GSM: 160–240 GSM',
// //       'Sizes: S to XXL (Custom Sizes Available)',
// //       'Fit: Regular / Slim Fit',
// //       'Customization: Printing & Embroidery Available'
// //     ]
// //   },
// //   { id: 2, category: 'MENSWEAR DIVISION', name: 'Polo / Collar T-Shirts', desc: 'Premium polo T-shirts in cotton, poly-cotton, and performance fabrics, ideal for corporate branding and promotional supply.', img: IMG.fabricTexture2, specs: [
// //   'Fabric: Cotton / Poly-Cotton / Pique',
// //   'GSM: 180–260 GSM',
// //   'Sizes: S to XXL',
// //   'Collar: Ribbed / Flat Knit',
// //   'Branding: Logo Embroidery / Screen Print'
// // ]
// //  },
// //   { id: 3, category: 'MENSWEAR DIVISION', name: 'Formal & Casual Shirts', desc: 'Well-constructed shirts with precision stitching and finishing, suitable for domestic and international bulk buyers.', img: IMG.fabricTexture2, specs: [
// //   'Fabric: 100% Cotton / Poly-Cotton / Linen',
// //   'GSM: 120–200 GSM',
// //   'Sizes: S to XXL (Custom Sizes Available)',
// //   'Fit: Regular / Slim / Tailored Fit',
// //   'Features: Premium Stitching & Color Fastness'
// // ]
// //  },
// //   { id: 4, category: 'MENSWEAR DIVISION', name: ' Corporate & Institutional Uniforms', desc: 'Customized uniform manufacturing with logo branding, embroidery, and private labeling options.', img: IMG.fabricTexture2, specs: [
// //   'Fabric: Cotton / Poly-Cotton / Blended Fabric',
// //   'GSM: 180–300 GSM',
// //   'Sizes: XS to XXXL (Custom Sizes Available)',
// //   'Customization: Logo Printing & Embroidery',
// //   'Features: Durable Stitching & Color Fastness'
// // ]
// // },
// //   { id: 5, category: 'BULKPROMOTIONAL', name: 'White Cotton T-Shirts', desc: '100% cotton promotional T-shirts designed for large distribution and campaign use.', img: IMG.wovenClose1, specs: [
// //   'Fabric: 100% Combed Cotton',
// //   'GSM: 160–220 GSM',
// //   'Sizes: S to XXL (Custom Sizes Available)',
// //   'Color: Optical White / Bio-Washed Finish',
// //   'Usage: Printing, Promotions & Campaign Distribution'
// // ]},
// //   { id: 6, category: 'BULKPROMOTIONAL', name: 'Black Bulk T-Shirts', desc: 'Budget-friendly black T-shirts suitable for printing and branding applications.', img: IMG.production1, specs: [
// //   'Fabric: Cotton / Cotton Blend',
// //   'GSM: 160–240 GSM',
// //   'Sizes: S to XXL',
// //   'Color: Reactive Dyed Black (Color Fast)',
// //   'Suitable For: Screen Printing & Branding'
// // ] },
// //    { id: 7, category: 'BULKPROMOTIONAL', name: ' Navy Blue Promotional T-Shirts', desc: 'High-demand navy blue T-shirts produced for corporate and export markets..', img: IMG.production1, specs: [
// //   'Fabric: 100% Cotton / Poly-Cotton',
// //   'GSM: 180–240 GSM',
// //   'Sizes: S to XXL (Bulk Production Available)',
// //   'Color: Navy Blue (Export Quality Dye)',
// //   'Application: Corporate Gifting & Promotional Events'
// // ]
// //  },
// //   { id: 8, category: 'HOMETEXTILE', name: 'Bath Towels', desc: 'Highly absorbent cotton terry bath towels available in various GSM ranges and custom sizes..', img: IMG.fabricTexture3, specs: [
// //   'Fabric: 100% Cotton Terry',
// //   'GSM: 400–700 GSM',
// //   'Sizes: 70x140 cm / Custom Sizes Available',
// //   'Features: High Absorbency & Soft Finish',
// //   'Suitable For: Hotels, Resorts & Export Markets'
// // ] },
// //   { id: 9, category: 'HOMETEXTILE', name: 'Hand Towels', desc: 'Durable and soft hand towels designed for hotels and commercial buyers..', img: IMG.wovenClose2, specs: [
// //   'Fabric: 100% Cotton / Cotton Blend',
// //   'GSM: 350–600 GSM',
// //   'Sizes: 30x30 cm / 40x60 cm',
// //   'Features: Durable, Quick Absorb & Color Fast',
// //   'Application: Hospitality & Commercial Use'
// // ]
// // },
// //   { id: 10, category: 'FABRICDIVISION', name: 'Suiting Fabrics', desc: 'Premium suiting fabrics in multiple blends, finishes, and textures suitable for formal wear production.', img: IMG.fabricTexture4, specs: [
// //   'Composition: Wool / Polyester / Blended',
// //   'GSM: 180–350 GSM',
// //   'Width: 58–60 Inches',
// //   'Finish: Soft Finish / Wrinkle Resistant',
// //   'Application: Formal & Business Wear'
// // ]
// //  },
// //   { id: 11, category: 'FABRICDIVISION', name: 'Shirting Fabrics', desc: 'Soft, breathable, and durable shirting fabrics available in cotton and blended compositions.', img: IMG.wovenClose3, specs: [
// //   'Composition: 100% Cotton / Poly-Cotton',
// //   'GSM: 100–180 GSM',
// //   'Width: 44–58 Inches',
// //   'Features: Breathable & Color Fast',
// //   'Suitable For: Casual & Formal Shirts'
// // ]
// //  },
// //   { id: 12, category: 'DENIMDIVISION', name: 'Denim Fabric Sourcing', desc: 'All types of denim fabrics available in various weights, shades, and finishes..', img: IMG.thread1, specs: [
// //   'Composition: 100% Cotton / Stretch Denim',
// //   'GSM: 250–400 GSM (8–14 Oz)',
// //   'Width: 58–60 Inches',
// //   'Finish: Rinse Wash / Stone Wash / Raw',
// //   'Shrinkage: Controlled & Pre-Shrunk'
// // ]
// //  },
// //   { id: 13, category: 'DENIMDIVISION', name: 'Denim Jeans Manufacturing', desc: 'Complete jeans production including:.', img: IMG.thread2, specs: [
// //   'Fabric: Rigid / Stretch Denim',
// //   'Sizes: 28–40 (Custom Sizes Available)',
// //   'Fit: Slim / Regular / Relaxed',
// //   'Wash Types: Stone / Enzyme / Acid Wash',
// //   'Branding: Private Label & Custom Tags'
// // ]
// // },
// //   { id: 14, category: 'CUSTOMMANUFACTURING', name: 'Custom Garment Development', desc: 'Design-based production with sampling approval and technical execution..', img: IMG.fabricTexture1, specs: [
// //   'Service: Design to Final Production',
// //   'Sampling: Proto & Fit Sample Approval',
// //   'Customization: Fabric, Fit & Branding',
// //   'MOQ: Flexible Based on Requirement',
// //   'Compliance: Export Quality Standards'
// // ]
// //  },
// //   { id: 15, category: 'CUSTOMMANUFACTURING', name: ' Full Production Management', desc: 'Fabric sourcing, stitching, finishing, quality inspection, and export documentation support.', img: IMG.fabricRolls1, specs: [
// //   'Process: Fabric Sourcing to Shipment',
// //   'Quality Control: Multi-Level Inspection',
// //   'Compliance: Ethical & Social Standards',
// //   'Documentation: Export & Shipping Support',
// //   'Delivery: On-Time Bulk Execution'
// // ]
// //  },
// // ];

// // export function ProductsPage() {
// //   const { navigate } = useNavigation();
// //   const [activeCategory, setActiveCategory] = useState('all');
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const filtered = products.filter((p) => {
// //     const matchCategory = activeCategory === 'all' || p.category === activeCategory;
// //     const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //       p.desc.toLowerCase().includes(searchQuery.toLowerCase());
// //     return matchCategory && matchSearch;
// //   });

// //   return (
// //     <div className="font-['Inter',sans-serif]">
// //       {/* Page Hero */}
// //       <section className="relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img src={IMG.swatches1} alt="Fabric swatches" className="w-full h-full object-cover" />
// //           <div className="absolute inset-0 bg-charcoal-dark/85" />
// //         </div>
// //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
// //           <div className="max-w-3xl">
// //             <span className="text-silver-light font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Products</span>
// //             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
// //               Global Textile & Apparel Manufacturing Solutions
// //             </h1>
// //             <p className="text-silver text-base sm:text-lg leading-relaxed">
// //               We are a professionally managed textile manufacturing and export company specializing in large-scale menswear production, bulk promotional garments, premium terry towels, suiting & shirting fabrics, denim manufacturing, and fully customized textile solutions
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Filters & Products */}
// //       <section className="py-8 sm:py-12 lg:py-16 bg-cloud-lighter">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6">
// //           {/* Search & Filter */}
// //           <div className="bg-white rounded-xl p-3 sm:p-4 border border-cloud-dark mb-6 sm:mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
// //             <div className="flex-1 relative">
// //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-silver" />
// //               <input
// //                 type="text"
// //                 placeholder="Search products..."
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-cloud-lighter border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal placeholder:text-silver"
// //               />
// //             </div>
// //             <div className="flex items-center gap-2 text-silver-dark">
// //               <Filter className="w-4 h-4" />
// //               <span className="text-xs sm:text-sm font-medium">Filter by Category</span>
// //             </div>
// //           </div>

// //           {/* Category Tabs - Horizontal Scroll on Mobile */}
// //           <div className="mb-8 sm:mb-10">
// //             <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
// //               {categories.map((cat) => (
// //                 <button
// //                   key={cat.id}
// //                   onClick={() => setActiveCategory(cat.id)}
// //                   className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap flex-shrink-0 ${activeCategory === cat.id
// //                       ? 'bg-charcoal text-white shadow-md'
// //                       : 'bg-white text-silver-darker hover:bg-cloud border border-cloud-dark'
// //                     }`}
// //                 >
// //                   {cat.name}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Product Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
// //             {filtered.map((product) => (
// //               <div
// //                 key={product.id}
// //                 className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1"
// //               >
// //                 <TexImg src={product.img} alt={product.name} className="w-full h-40 sm:h-44" />
// //                 <div className="p-4 sm:p-6">
// //                   <h3 className="text-base sm:text-lg font-bold text-charcoal mb-2 group-hover:text-charcoal-light transition-colors">
// //                     {product.name}
// //                   </h3>
// //                   <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4">
// //                     {product.desc}
// //                   </p>
// //                   <div className="space-y-1.5 mb-4 sm:mb-5">
// //                     {product.specs.map((spec) => (
// //                       <div key={spec} className="flex items-center gap-2">
// //                         <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-charcoal shrink-0" />
// //                         <span className="text-xs text-silver-darker">{spec}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-cloud-dark">
// //                     <button className="text-xs sm:text-sm font-semibold text-charcoal flex items-center gap-1 hover:gap-2 transition-all">
// //                       View Details <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// //                     </button>
// //                     <button className="text-xs sm:text-sm text-silver-dark hover:text-charcoal flex items-center gap-1 transition-colors">
// //                       <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> TDS
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {filtered.length === 0 && (
// //             <div className="text-center py-12 sm:py-16">
// //               <Search className="w-10 h-10 sm:w-12 sm:h-12 text-silver mx-auto mb-3 sm:mb-4" />
// //               <h3 className="text-base sm:text-lg font-semibold text-charcoal">No products found</h3>
// //               <p className="text-sm text-silver-dark mt-1">Try adjusting your search or filter criteria.</p>
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* Custom Solutions CTA */}
// //       <section className="relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img src={IMG.production2} alt="Textile production" className="w-full h-full object-cover" />
// //           <div className="absolute inset-0 bg-charcoal/90" />
// //         </div>
// //         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
// //           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Can't Find What You Need?</h2>
// //           <p className="text-sm sm:text-base text-silver mb-6 sm:mb-8 max-w-2xl mx-auto">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our R&D team specializes in developing custom textile solutions tailored to your unique specifications.
// //           </p>
// //           <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
// //             <button
// //               onClick={() => navigate('contact')}
// //               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold text-sm sm:text-base rounded-lg hover:bg-cloud-light transition-colors"
// //             >
// //               Request Custom Solution <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
// //             </button>
// //             <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-semibold text-sm sm:text-base rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
// //               <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download Full Catalog
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Custom styles for hiding scrollbar */}
// //       <style>{`
// //         .hide-scrollbar {
// //           -ms-overflow-style: none;
// //           scrollbar-width: none;
// //         }
// //         .hide-scrollbar::-webkit-scrollbar {
// //           display: none;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }






// import { useState } from 'react';
// import { useNavigation } from '../context/NavigationContext';
// import { IMG } from '../constants/images';
// import {
//   ArrowRight,
//   Search,
//   Filter,
//   ChevronRight,
//   Download,
//   CheckCircle2,
// } from 'lucide-react';

// function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
//   return (
//     <div className={`relative overflow-hidden bg-cloud ${className}`}>
//       <div className="absolute inset-0 bg-weave opacity-40" />
//       <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
//     </div>
//   );
// }

// // ✅ FIX: category id must EXACTLY match product.category values
// const categories = [
//   { id: 'all',                  name: 'ALL PRODUCTS' },
//   { id: 'MENSWEAR DIVISION',    name: 'MENSWEAR DIVISION' },
//   { id: 'BULKPROMOTIONAL',      name: 'BULK PROMOTIONAL T-SHIRTS' },
//   { id: 'HOMETEXTILE',          name: 'HOME TEXTILE DIVISION' },
//   { id: 'FABRICDIVISION',       name: 'FABRIC DIVISION' },
//   { id: 'DENIMDIVISION',        name: 'DENIM DIVISION' },
//   { id: 'CUSTOMMANUFACTURING',  name: 'CUSTOM MANUFACTURING' },
// ];

// const products = [
//   {
//     id: 1,
//     category: 'MENSWEAR DIVISION',
//     name: 'Round Neck T-Shirts',
//     desc: 'High-quality cotton and blended round neck T-shirts manufactured in multiple GSM options for retail, corporate, and export markets.',
//     img: '/image/FULLMENSWEAR.jpg',
//     specs: [
//       'Fabric: 100% Cotton / Cotton Blend',
//       'GSM: 160–240 GSM',
//       'Sizes: S to XXL (Custom Sizes Available)',
//       'Fit: Regular / Slim Fit',
//       'Customization: Printing & Embroidery Available',
//     ],
//   },
//   {
//     id: 2,
//     category: 'MENSWEAR DIVISION',
//     name: 'Polo / Collar T-Shirts',
//     desc: 'Premium polo T-shirts in cotton, poly-cotton, and performance fabrics, ideal for corporate branding and promotional supply.',
//     img: '/image/MENSWEAR2.jpg',
//     specs: [
//       'Fabric: Cotton / Poly-Cotton / Pique',
//       'GSM: 180–260 GSM',
//       'Sizes: S to XXL',
//       'Collar: Ribbed / Flat Knit',
//       'Branding: Logo Embroidery / Screen Print',
//     ],
//   },
//   {
//     id: 3,
//     category: 'MENSWEAR DIVISION',
//     name: 'Formal & Casual Shirts',
//     desc: 'Well-constructed shirts with precision stitching and finishing, suitable for domestic and international bulk buyers.',
//     img: '/image/MENSWEAR3.jpg',
//     specs: [
//       'Fabric: 100% Cotton / Poly-Cotton / Linen',
//       'GSM: 120–200 GSM',
//       'Sizes: S to XXL (Custom Sizes Available)',
//       'Fit: Regular / Slim / Tailored Fit',
//       'Features: Premium Stitching & Color Fastness',
//     ],
//   },
//   {
//     id: 4,
//     category: 'MENSWEAR DIVISION',
//     name: 'Corporate & Institutional Uniforms',
//     desc: 'Customized uniform manufacturing with logo branding, embroidery, and private labeling options.',
//     img: '/image/MENSWEAR4.jpg',
//     specs: [
//       'Fabric: Cotton / Poly-Cotton / Blended Fabric',
//       'GSM: 180–300 GSM',
//       'Sizes: XS to XXXL (Custom Sizes Available)',
//       'Customization: Logo Printing & Embroidery',
//       'Features: Durable Stitching & Color Fastness',
//     ],
//   },
//   {
//     id: 5,
//     category: 'BULKPROMOTIONAL',
//     name: 'White Cotton T-Shirts',
//     desc: '100% cotton promotional T-shirts designed for large distribution and campaign use.',
//     img: '/image/FULLBULKT-SHIRT3.jpg',
//     specs: [
//       'Fabric: 100% Combed Cotton',
//       'GSM: 160–220 GSM',
//       'Sizes: S to XXL (Custom Sizes Available)',
//       'Color: Optical White / Bio-Washed Finish',
//       'Usage: Printing, Promotions & Campaign Distribution',
//     ],
//   },
//   {
//     id: 6,
//     category: 'BULKPROMOTIONAL',
//     name: 'Black Bulk T-Shirts',
//     desc: 'Budget-friendly black T-shirts suitable for printing and branding applications.',
//     img: '/image/FULLBULKT-SHIRT2.jpg',
//     specs: [
//       'Fabric: Cotton / Cotton Blend',
//       'GSM: 160–240 GSM',
//       'Sizes: S to XXL',
//       'Color: Reactive Dyed Black (Color Fast)',
//       'Suitable For: Screen Printing & Branding',
//     ],
//   },
//   {
//     id: 7,
//     category: 'BULKPROMOTIONAL',
//     name: 'Navy Blue Promotional T-Shirts',
//     desc: 'High-demand navy blue T-shirts produced for corporate and export markets.',
//     img: '/image/FULLBULKT-SHIRT1.jpg',
//     specs: [
//       'Fabric: 100% Cotton / Poly-Cotton',
//       'GSM: 180–240 GSM',
//       'Sizes: S to XXL (Bulk Production Available)',
//       'Color: Navy Blue (Export Quality Dye)',
//       'Application: Corporate Gifting & Promotional Events',
//     ],
//   },
//   {
//     id: 8,
//     category: 'HOMETEXTILE',
//     name: 'Bath Towels',
//     desc: 'Highly absorbent cotton terry bath towels available in various GSM ranges and custom sizes.',
//     img: '/image/TOWEL1.jpg',
//     specs: [
//       'Fabric: 100% Cotton Terry',
//       'GSM: 400–700 GSM',
//       'Sizes: 70x140 cm / Custom Sizes Available',
//       'Features: High Absorbency & Soft Finish',
//       'Suitable For: Hotels, Resorts & Export Markets',
//     ],
//   },
//   {
//     id: 9,
//     category: 'HOMETEXTILE',
//     name: 'Hand Towels',
//     desc: 'Durable and soft hand towels designed for hotels and commercial buyers.',
//     img: '/image/TOWEL2.jpg',
//     specs: [
//       'Fabric: 100% Cotton / Cotton Blend',
//       'GSM: 350–600 GSM',
//       'Sizes: 30x30 cm / 40x60 cm',
//       'Features: Durable, Quick Absorb & Color Fast',
//       'Application: Hospitality & Commercial Use',
//     ],
//   },
//   {
//     id: 10,
//     category: 'FABRICDIVISION',
//     name: 'Suiting Fabrics',
//     desc: 'Premium suiting fabrics in multiple blends, finishes, and textures suitable for formal wear production.',
//     img: '/image/SUITING1.jpg',
//     specs: [
//       'Composition: Wool / Polyester / Blended',
//       'GSM: 180–350 GSM',
//       'Width: 58–60 Inches',
//       'Finish: Soft Finish / Wrinkle Resistant',
//       'Application: Formal & Business Wear',
//     ],
//   },
//   {
//     id: 11,
//     category: 'FABRICDIVISION',
//     name: 'Shirting Fabrics',
//     desc: 'Soft, breathable, and durable shirting fabrics available in cotton and blended compositions.',
//     img: '/image/SUITING2.jpg',
//     specs: [
//       'Composition: 100% Cotton / Poly-Cotton',
//       'GSM: 100–180 GSM',
//       'Width: 44–58 Inches',
//       'Features: Breathable & Color Fast',
//       'Suitable For: Casual & Formal Shirts',
//     ],
//   },
//   {
//     id: 12,
//     category: 'DENIMDIVISION',
//     name: 'Denim Fabric Sourcing',
//     desc: 'All types of denim fabrics available in various weights, shades, and finishes.',
//     img: '/image/DENIM1.jpg',
//     specs: [
//       'Composition: 100% Cotton / Stretch Denim',
//       'GSM: 250–400 GSM (8–14 Oz)',
//       'Width: 58–60 Inches',
//       'Finish: Rinse Wash / Stone Wash / Raw',
//       'Shrinkage: Controlled & Pre-Shrunk',
//     ],
//   },
//   {
//     id: 13,
//     category: 'DENIMDIVISION',
//     name: 'Denim Jeans Manufacturing',
//     desc: 'Complete jeans production including custom fits, washes, and private label branding.',
//     img: '/image/DENIM2.jpg',
//     specs: [
//       'Fabric: Rigid / Stretch Denim',
//       'Sizes: 28–40 (Custom Sizes Available)',
//       'Fit: Slim / Regular / Relaxed',
//       'Wash Types: Stone / Enzyme / Acid Wash',
//       'Branding: Private Label & Custom Tags',
//     ],
//   },
//   {
//     id: 14,
//     category: 'CUSTOMMANUFACTURING',
//     name: 'Custom Garment Development',
//     desc: 'Design-based production with sampling approval and technical execution.',
//     img: '/image/CUSTOM1.jpg',
//     specs: [
//       'Service: Design to Final Production',
//       'Sampling: Proto & Fit Sample Approval',
//       'Customization: Fabric, Fit & Branding',
//       'MOQ: Flexible Based on Requirement',
//       'Compliance: Export Quality Standards',
//     ],
//   },
//   {
//     id: 15,
//     category: 'CUSTOMMANUFACTURING',
//     name: 'Full Production Management',
//     desc: 'Fabric sourcing, stitching, finishing, quality inspection, and export documentation support.',
//     img: '/image/CUSTOM2.jpg',
//     specs: [
//       'Process: Fabric Sourcing to Shipment',
//       'Quality Control: Multi-Level Inspection',
//       'Compliance: Ethical & Social Standards',
//       'Documentation: Export & Shipping Support',
//       'Delivery: On-Time Bulk Execution',
//     ],
//   },
// ];

// export function ProductsPage() {
//   const { navigate } = useNavigation();
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   // ✅ FIXED FILTER LOGIC — category id now exactly matches product.category
//   const filtered = products.filter((p) => {
//     const matchCategory = activeCategory === 'all' || p.category === activeCategory;
//     const matchSearch =
//       p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       p.desc.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   return (
//     <div className="font-['Inter',sans-serif]">
//       {/* Page Hero */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={IMG.swatches1} alt="Fabric swatches" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-charcoal-dark/85" />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
//           <div className="max-w-3xl">
//             <span className="text-silver-light font-semibold text-xs sm:text-sm uppercase tracking-wider">
//               Our Products
//             </span>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
//               Global Textile & Apparel Manufacturing Solutions
//             </h1>
//             <p className="text-silver text-base sm:text-lg leading-relaxed">
//               We are a professionally managed textile manufacturing and export company specializing in
//               large-scale menswear production, bulk promotional garments, premium terry towels, suiting
//               & shirting fabrics, denim manufacturing, and fully customized textile solutions
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Filters & Products */}
//       <section className="py-8 sm:py-12 lg:py-16 bg-cloud-lighter">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           {/* Search & Filter */}
//           <div className="bg-white rounded-xl p-3 sm:p-4 border border-cloud-dark mb-6 sm:mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-silver" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-cloud-lighter border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal placeholder:text-silver"
//               />
//             </div>
//             <div className="flex items-center gap-2 text-silver-dark">
//               <Filter className="w-4 h-4" />
//               <span className="text-xs sm:text-sm font-medium">Filter by Category</span>
//             </div>
//           </div>

//           {/* Category Tabs */}
//           <div className="mb-8 sm:mb-10">
//             <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
//               {categories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => setActiveCategory(cat.id)}   // ✅ sets id like 'MENSWEAR DIVISION'
//                   className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap flex-shrink-0 ${
//                     activeCategory === cat.id
//                       ? 'bg-charcoal text-white shadow-md'
//                       : 'bg-white text-silver-darker hover:bg-cloud border border-cloud-dark'
//                   }`}
//                 >
//                   {cat.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             {filtered.map((product) => (
//               <div
//                 key={product.id}
//                 className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1"
//               >
//                 <TexImg src={product.img} alt={product.name} className="w-full h-40 sm:h-44" />
//                 <div className="p-4 sm:p-6">
//                   <h3 className="text-base sm:text-lg font-bold text-charcoal mb-2 group-hover:text-charcoal-light transition-colors">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4">
//                     {product.desc}
//                   </p>
//                   <div className="space-y-1.5 mb-4 sm:mb-5">
//                     {product.specs.map((spec) => (
//                       <div key={spec} className="flex items-center gap-2">
//                         <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-charcoal shrink-0" />
//                         <span className="text-xs text-silver-darker">{spec}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-cloud-dark">
//                     <button className="text-xs sm:text-sm font-semibold text-charcoal flex items-center gap-1 hover:gap-2 transition-all">
//                       View Details <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                     </button>
//                     <button className="text-xs sm:text-sm text-silver-dark hover:text-charcoal flex items-center gap-1 transition-colors">
//                       <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> TDS
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filtered.length === 0 && (
//             <div className="text-center py-12 sm:py-16">
//               <Search className="w-10 h-10 sm:w-12 sm:h-12 text-silver mx-auto mb-3 sm:mb-4" />
//               <h3 className="text-base sm:text-lg font-semibold text-charcoal">No products found</h3>
//               <p className="text-sm text-silver-dark mt-1">Try adjusting your search or filter criteria.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Custom Solutions CTA */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img src={IMG.production2} alt="Textile production" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-charcoal/90" />
//         </div>
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Can't Find What You Need?</h2>
//           <p className="text-sm sm:text-base text-silver mb-6 sm:mb-8 max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our R&D team specializes in
//             developing custom textile solutions tailored to your unique specifications.
//           </p>
//           <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
//             <button
//               onClick={() => navigate('contact')}
//               className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold text-sm sm:text-base rounded-lg hover:bg-cloud-light transition-colors"
//             >
//               Request Custom Solution <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
//             </button>
//             <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-semibold text-sm sm:text-base rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
//               <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download Full Catalog
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Custom styles for hiding scrollbar */}
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










import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  Search,
  Filter,
  ChevronRight,
  Download,
  CheckCircle2,
} from 'lucide-react';

// ── Slider config ────────────────────────────────────────────
const sliderImages = [
  { src: '/image/slider1.jpg',    label: '' },
  { src: '/image/slider2.jpg', label: '' },
  { src: '/image/slider3.jpg',          label: '' },
 
];

const fallbackBgs = [
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #2d4a6e 100%)',
  'linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 50%, #3a3a3a 100%)',
  'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #2d3561 100%)',
  'linear-gradient(135deg, #1a0a00 0%, #3d1c00 50%, #5a2d00 100%)',
  'linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 50%, #2d5a2d 100%)',
];

// ── Helpers ──────────────────────────────────────────────────
function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cloud ${className}`}>
      <div className="absolute inset-0 bg-weave opacity-40" />
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

// ── Category & Product data ──────────────────────────────────
const categories = [
  { id: 'all',                  name: 'ALL PRODUCTS' },
  { id: 'MENSWEAR DIVISION',    name: 'MENSWEAR DIVISION' },
  { id: 'BULKPROMOTIONAL',      name: 'BULK PROMOTIONAL T-SHIRTS' },
  { id: 'HOMETEXTILE',          name: 'HOME TEXTILE DIVISION' },
  { id: 'FABRICDIVISION',       name: 'FABRIC DIVISION' },
  { id: 'DENIMDIVISION',        name: 'DENIM DIVISION' },
  { id: 'CUSTOMMANUFACTURING',  name: 'CUSTOM MANUFACTURING' },
];

const products = [
  {
    id: 1,
    category: 'MENSWEAR DIVISION',
    name: 'Round Neck T-Shirts',
    desc: 'High-quality cotton and blended round neck T-shirts manufactured in multiple GSM options for retail, corporate, and export markets.',
    img: '/image/FULLMENSWEAR.jpg',
    specs: [
      'Fabric: 100% Cotton / Cotton Blend',
      'GSM: 160–240 GSM',
      'Sizes: S to XXL (Custom Sizes Available)',
      'Fit: Regular / Slim Fit',
      'Customization: Printing & Embroidery Available',
    ],
  },
  {
    id: 2,
    category: 'MENSWEAR DIVISION',
    name: 'Polo / Collar T-Shirts',
    desc: 'Premium polo T-shirts in cotton, poly-cotton, and performance fabrics, ideal for corporate branding and promotional supply.',
    img: '/image/MENSWEAR2.jpg',
    specs: [
      'Fabric: Cotton / Poly-Cotton / Pique',
      'GSM: 180–260 GSM',
      'Sizes: S to XXL',
      'Collar: Ribbed / Flat Knit',
      'Branding: Logo Embroidery / Screen Print',
    ],
  },
  {
    id: 3,
    category: 'MENSWEAR DIVISION',
    name: 'Formal & Casual Shirts',
    desc: 'Well-constructed shirts with precision stitching and finishing, suitable for domestic and international bulk buyers.',
    img: '/image/MENSWEAR3.jpg',
    specs: [
      'Fabric: 100% Cotton / Poly-Cotton / Linen',
      'GSM: 120–200 GSM',
      'Sizes: S to XXL (Custom Sizes Available)',
      'Fit: Regular / Slim / Tailored Fit',
      'Features: Premium Stitching & Color Fastness',
    ],
  },
  {
    id: 4,
    category: 'MENSWEAR DIVISION',
    name: 'Corporate & Institutional Uniforms',
    desc: 'Customized uniform manufacturing with logo branding, embroidery, and private labeling options.',
    img: '/image/MENSWEAR4.jpg',
    specs: [
      'Fabric: Cotton / Poly-Cotton / Blended Fabric',
      'GSM: 180–300 GSM',
      'Sizes: XS to XXXL (Custom Sizes Available)',
      'Customization: Logo Printing & Embroidery',
      'Features: Durable Stitching & Color Fastness',
    ],
  },
  {
    id: 5,
    category: 'BULKPROMOTIONAL',
    name: 'White Cotton T-Shirts',
    desc: '100% cotton promotional T-shirts designed for large distribution and campaign use.',
    img: '/image/FULLBULKT-SHIRT3.jpg',
    specs: [
      'Fabric: 100% Combed Cotton',
      'GSM: 160–220 GSM',
      'Sizes: S to XXL (Custom Sizes Available)',
      'Color: Optical White / Bio-Washed Finish',
      'Usage: Printing, Promotions & Campaign Distribution',
    ],
  },
  {
    id: 6,
    category: 'BULKPROMOTIONAL',
    name: 'Black Bulk T-Shirts',
    desc: 'Budget-friendly black T-shirts suitable for printing and branding applications.',
    img: '/image/FULLBULKT-SHIRT2.jpg',
    specs: [
      'Fabric: Cotton / Cotton Blend',
      'GSM: 160–240 GSM',
      'Sizes: S to XXL',
      'Color: Reactive Dyed Black (Color Fast)',
      'Suitable For: Screen Printing & Branding',
    ],
  },
  {
    id: 7,
    category: 'BULKPROMOTIONAL',
    name: 'Navy Blue Promotional T-Shirts',
    desc: 'High-demand navy blue T-shirts produced for corporate and export markets.',
    img: '/image/FULLBULKT-SHIRT1.jpg',
    specs: [
      'Fabric: 100% Cotton / Poly-Cotton',
      'GSM: 180–240 GSM',
      'Sizes: S to XXL (Bulk Production Available)',
      'Color: Navy Blue (Export Quality Dye)',
      'Application: Corporate Gifting & Promotional Events',
    ],
  },
  {
    id: 8,
    category: 'HOMETEXTILE',
    name: 'Bath Towels',
    desc: 'Highly absorbent cotton terry bath towels available in various GSM ranges and custom sizes.',
    img: '/image/TOWEL1.jpg',
    specs: [
      'Fabric: 100% Cotton Terry',
      'GSM: 400–700 GSM',
      'Sizes: 70x140 cm / Custom Sizes Available',
      'Features: High Absorbency & Soft Finish',
      'Suitable For: Hotels, Resorts & Export Markets',
    ],
  },
  {
    id: 9,
    category: 'HOMETEXTILE',
    name: 'Hand Towels',
    desc: 'Durable and soft hand towels designed for hotels and commercial buyers.',
    img: '/image/TOWEL2.jpg',
    specs: [
      'Fabric: 100% Cotton / Cotton Blend',
      'GSM: 350–600 GSM',
      'Sizes: 30x30 cm / 40x60 cm',
      'Features: Durable, Quick Absorb & Color Fast',
      'Application: Hospitality & Commercial Use',
    ],
  },
  {
    id: 10,
    category: 'FABRICDIVISION',
    name: 'Suiting Fabrics',
    desc: 'Premium suiting fabrics in multiple blends, finishes, and textures suitable for formal wear production.',
    img: '/image/SUITING1.jpg',
    specs: [
      'Composition: Wool / Polyester / Blended',
      'GSM: 180–350 GSM',
      'Width: 58–60 Inches',
      'Finish: Soft Finish / Wrinkle Resistant',
      'Application: Formal & Business Wear',
    ],
  },
  {
    id: 11,
    category: 'FABRICDIVISION',
    name: 'Shirting Fabrics',
    desc: 'Soft, breathable, and durable shirting fabrics available in cotton and blended compositions.',
    img: '/image/SUITING2.jpg',
    specs: [
      'Composition: 100% Cotton / Poly-Cotton',
      'GSM: 100–180 GSM',
      'Width: 44–58 Inches',
      'Features: Breathable & Color Fast',
      'Suitable For: Casual & Formal Shirts',
    ],
  },
  {
    id: 12,
    category: 'DENIMDIVISION',
    name: 'Denim Fabric Sourcing',
    desc: 'All types of denim fabrics available in various weights, shades, and finishes.',
    img: '/image/DENIM1.jpg',
    specs: [
      'Composition: 100% Cotton / Stretch Denim',
      'GSM: 250–400 GSM (8–14 Oz)',
      'Width: 58–60 Inches',
      'Finish: Rinse Wash / Stone Wash / Raw',
      'Shrinkage: Controlled & Pre-Shrunk',
    ],
  },
  {
    id: 13,
    category: 'DENIMDIVISION',
    name: 'Denim Jeans Manufacturing',
    desc: 'Complete jeans production including custom fits, washes, and private label branding.',
    img: '/image/DENIM2.jpg',
    specs: [
      'Fabric: Rigid / Stretch Denim',
      'Sizes: 28–40 (Custom Sizes Available)',
      'Fit: Slim / Regular / Relaxed',
      'Wash Types: Stone / Enzyme / Acid Wash',
      'Branding: Private Label & Custom Tags',
    ],
  },
  {
    id: 14,
    category: 'CUSTOMMANUFACTURING',
    name: 'Custom Garment Development',
    desc: 'Design-based production with sampling approval and technical execution.',
    img: '/image/CUSTOM1.jpg',
    specs: [
      'Service: Design to Final Production',
      'Sampling: Proto & Fit Sample Approval',
      'Customization: Fabric, Fit & Branding',
      'MOQ: Flexible Based on Requirement',
      'Compliance: Export Quality Standards',
    ],
  },
  {
    id: 15,
    category: 'CUSTOMMANUFACTURING',
    name: 'Full Production Management',
    desc: 'Fabric sourcing, stitching, finishing, quality inspection, and export documentation support.',
    img: '/image/CUSTOM2.jpg',
    specs: [
      'Process: Fabric Sourcing to Shipment',
      'Quality Control: Multi-Level Inspection',
      'Compliance: Ethical & Social Standards',
      'Documentation: Export & Shipping Support',
      'Delivery: On-Time Bulk Execution',
    ],
  },
];

// ── Main Page ────────────────────────────────────────────────
export function ProductsPage() {
  const { navigate } = useNavigation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Slider state
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % sliderImages.length);
        setTransitioning(false);
      }, 600);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getSliderBg = (index: number) => {
    const item = sliderImages[index];
    if (item.src) {
      return {
        backgroundImage: `url(${item.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    }
    return { background: fallbackBgs[index % fallbackBgs.length] };
  };

  // Filter logic
  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="font-['Inter',sans-serif]">

      {/* ── Page Hero with Auto Slider ── */}
      <section className="relative overflow-hidden" style={{ height: '500px' }}>
        <div className="absolute inset-0">

          {/* Auto-sliding background */}
          <div
            className="absolute inset-0 w-full h-full transition-opacity duration-700"
            style={{
              ...getSliderBg(current),
              opacity: transitioning ? 0 : 1,
              animation: !transitioning
                ? 'kenBurns 8s ease-in-out infinite alternate'
                : 'none',
            }}
          />

          {/* Dark overlay — same as original */}
       
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Our Products
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
              Global Textile & Apparel Manufacturing Solutions
            </h1>
            <p className="text-silver text-base sm:text-lg leading-relaxed">
              We are a professionally managed textile manufacturing and export company specializing in
              large-scale menswear production, bulk promotional garments, premium terry towels, suiting
              & shirting fabrics, denim manufacturing, and fully customized textile solutions
            </p>
          </div>

          {/* Slide dots */}
          {/* <div className="flex items-center gap-1.5 mt-8 sm:mt-10">
            {sliderImages.map((_, i) => (
              // <button
              //   key={i}
              //   onClick={() => setCurrent(i)}
              //   aria-label={`Slide ${i + 1}`}
              //   className={`rounded-full transition-all duration-500 focus:outline-none ${
              //     i === current
              //       ? 'w-6 h-2 bg-white'
              //       : 'w-2 h-2 bg-white/35 hover:bg-white/60'
              //   }`}
              // />
            ))}
          </div> */}

          {/* Active label badge */}
          <div
            key={current}
            className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
            style={{ animation: 'fadeSlideUp 0.5s ease forwards' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 inline-block" />
            <span className="text-white/80 text-xs tracking-wide font-medium">
              {sliderImages[current].label}
            </span>
          </div>
        </div>
      </section>

      {/* ── Filters & Products ── */}
      <section className="py-8 sm:py-12 lg:py-16 bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Search & Filter */}
          {/* <div className="bg-white rounded-xl p-3 sm:p-4 border border-cloud-dark mb-6 sm:mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-silver" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-cloud-lighter border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal placeholder:text-silver"
              />
            </div>
            <div className="flex items-center gap-2 text-silver-dark">
              <Filter className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">Filter by Category</span>
            </div>
          </div> */}

          {/* Category Tabs */}
          <div className="mb-8 sm:mb-10">
            <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-charcoal text-white shadow-md'
                      : 'bg-white text-silver-darker hover:bg-cloud border border-cloud-dark'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <TexImg src={product.img} alt={product.name} className="w-full h-40 sm:h-44" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-charcoal mb-2 group-hover:text-charcoal-light transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-silver-darker leading-relaxed mb-3 sm:mb-4">
                    {product.desc}
                  </p>
                  <div className="space-y-1.5 mb-4 sm:mb-5">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-charcoal shrink-0" />
                        <span className="text-xs text-silver-darker">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-cloud-dark">
                   <button
  onClick={() => navigate('contact')}
  className="text-xs sm:text-sm font-semibold text-charcoal flex items-center gap-1 hover:gap-2 transition-all"
>
  Contact us <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
</button>
                    {/* <button className="text-xs sm:text-sm text-silver-dark hover:text-charcoal flex items-center gap-1 transition-colors">
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> TDS
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <Search className="w-10 h-10 sm:w-12 sm:h-12 text-silver mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-charcoal">No products found</h3>
              <p className="text-sm text-silver-dark mt-1">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Custom Solutions CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.production2} alt="Textile production" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Can't Find What You Need?</h2>
          <p className="text-sm sm:text-base text-silver mb-6 sm:mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our R&D team specializes in
            developing custom textile solutions tailored to your unique specifications.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-charcoal font-bold text-sm sm:text-base rounded-lg hover:bg-cloud-light transition-colors"
            >
              Request Custom Solution <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-semibold text-sm sm:text-base rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download Full Catalog
            </button>
          </div>
        </div>
      </section>

      {/* ── Global keyframes + scrollbar hide ── */}
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1)    translateX(0%)  translateY(0%); }
          100% { transform: scale(1.07) translateX(-1%) translateY(-1%); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}