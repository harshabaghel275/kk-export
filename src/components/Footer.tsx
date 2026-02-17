// // import { useNavigation } from '../context/NavigationContext';
// // import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';

// // export function Footer() {
// //   const { navigate } = useNavigation();

// //   return (
// //     <footer className="bg-charcoal-dark text-silver-light overflow-x-hidden">
// //       {/* Newsletter */}
     

// //       {/* Main Footer */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          
// //           {/* Company Info */}
// //           <div className="sm:col-span-2 lg:col-span-1">
// //             <button 
// //               onClick={() => navigate('home')} 
// //               className="flex items-center gap-2 mb-4 sm:mb-5 hover:opacity-80 transition-opacity active:scale-95"
// //             >
// //               <div className="w-9 h-9 sm:w-10 sm:h-10 bg-charcoal rounded-lg flex items-center justify-center border border-white/10">
// //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px]">
// //                   <path d="M3 6L12 3L21 6V18L12 21L3 18V6Z" stroke="white" strokeWidth="1.5" />
// //                   <path d="M12 3V21" stroke="white" strokeWidth="1.5" />
// //                   <path d="M3 6L12 9L21 6" stroke="white" strokeWidth="1.5" />
// //                 </svg>
// //               </div>
// //               <div className="flex flex-col">
// //                 <span className="text-base sm:text-lg font-bold text-white leading-tight">KK</span>
// //                 <span className="text-[9px] sm:text-[10px] font-medium text-silver uppercase tracking-[0.2em] leading-tight">
// //                   EXPORT
// //                 </span>
// //               </div>
// //             </button>

// //             <p className="text-xs sm:text-sm text-silver leading-relaxed mb-5 sm:mb-6 max-w-xs">
// //               Engineering textile excellence since 1995. A global leader in technical textiles, industrial fabrics, and innovative material solutions.
// //             </p>

// //             <div className="flex gap-2.5 sm:gap-3">
// //               <a 
// //                 href="#" 
// //                 className="w-8 h-8 sm:w-9 sm:h-9 bg-white/8 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors border border-white/10 active:scale-95"
// //                 aria-label="LinkedIn"
// //               >
// //                 <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// //               </a>
// //               <a 
// //                 href="#" 
// //                 className="w-8 h-8 sm:w-9 sm:h-9 bg-white/8 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors border border-white/10 active:scale-95"
// //                 aria-label="Twitter"
// //               >
// //                 <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Products */}
// //           {/* <div>
// //             <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
// //               Products
// //             </h4>
// //             <ul className="space-y-2 sm:space-y-2.5">
// //               {['Technical Textiles', 'Industrial Fabrics', 'Coated Textiles', 'Nonwoven Fabrics', 'Specialty Yarns'].map((item) => (
// //                 <li key={item}>
// //                   <button 
// //                     onClick={() => navigate('products')} 
// //                     className="text-xs sm:text-sm text-silver hover:text-white transition-colors text-left active:scale-95"
// //                   >
// //                     {item}
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div> */}

// //           {/* Industries */}
// //           {/* <div>
// //             <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
// //               Industries
// //             </h4>
// //             <ul className="space-y-2 sm:space-y-2.5">
// //               {['Automotive', 'Aerospace', 'Healthcare', 'Construction', 'Agriculture', 'Defense'].map((item) => (
// //                 <li key={item}>
// //                   <button 
// //                     onClick={() => navigate('industries')} 
// //                     className="text-xs sm:text-sm text-silver hover:text-white transition-colors text-left active:scale-95"
// //                   >
// //                     {item}
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div> */}

// //           {/* Company */}
// //           <div>
// //             <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
// //               Company
// //             </h4>
// //             <ul className="space-y-2 sm:space-y-2.5">
// //               {[
// //                 { label: 'About Us', page: 'about' },
// //                 { label: 'Manufacturing', page: 'manufacturing' },
// //                 { label: 'Sustainability', page: 'sustainability' },
// //                 { label: 'Certifications', page: 'certifications' },
// //                 { label: 'Blog & Insights', page: 'blog' },
// //                 { label: 'Careers', page: 'about' },
// //               ].map((item) => (
// //                 <li key={item.label}>
// //                   <button 
// //                     onClick={() => navigate(item.page)} 
// //                     className="text-xs sm:text-sm text-silver hover:text-white transition-colors text-left active:scale-95"
// //                   >
// //                     {item.label}
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact */}
// //           <div className="sm:col-span-2 lg:col-span-1">
// //             <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
// //               Contact
// //             </h4>
// //             <ul className="space-y-2.5 sm:space-y-3">
// //               <li className="flex items-start gap-2 sm:gap-2.5">
// //                 <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-silver mt-0.5 shrink-0" />
// //                 <span className="text-xs sm:text-sm text-silver leading-relaxed">
// //                   313 GOVINDAM COMPLEX,GANDHI NAGAR,BHILWARA,311001 India
// //                 </span>
// //               </li>
// //               <li className="flex items-center gap-2 sm:gap-2.5">
// //                 <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-silver shrink-0" />
// //                 <a 
// //                   href="tel:+15552345678" 
// //                   className="text-xs sm:text-sm text-silver hover:text-white transition-colors"
// //                 >
// //                   +91 9818434231
// //                 </a>
// //               </li>
// //               <li className="flex items-center gap-2 sm:gap-2.5">
// //                 <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-silver shrink-0" />
// //                 <a 
// //                   href="mailto:KKEXPORT95@GMAIL.COM" 
// //                   className="text-xs sm:text-sm text-silver hover:text-white transition-colors break-all"
// //                 >
// //                   KKEXPORT95@GMAIL.COM
// //                 </a>
// //               </li>
// //             </ul>

// //             <button
// //               onClick={() => navigate('contact')}
// //               className="mt-4 sm:mt-5 px-4 py-2 sm:py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors border border-white/15 w-full sm:w-auto active:scale-95"
// //             >
// //               Get in Touch
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Bar */}
// //       <div className="border-t border-white/10">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
// //           <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-silver-dark">
// //             <p className="text-center md:text-left">
// //               &copy; 2025 KK EXPORT Pvt. Ltd. All rights reserved.
// //             </p>
// //             <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
// //               <a href="#" className="hover:text-white transition-colors">
// //                 Privacy Policy
// //               </a>
// //               <a href="#" className="hover:text-white transition-colors">
// //                 Terms of Service
// //               </a>
// //               <a href="#" className="hover:text-white transition-colors">
// //                 Sitemap
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }





// import { useNavigation } from '../context/NavigationContext';
// import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

// export function Footer() {
//   const { navigate } = useNavigation();

//   return (
//     <footer className="bg-charcoal-dark text-silver-light overflow-x-hidden">

//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

//           {/* Company Info */}
//           <div className="sm:col-span-2 lg:col-span-1">
//             <button
//               onClick={() => navigate('home')}
//               className="flex items-center gap-2 mb-5 hover:opacity-80 transition-opacity active:scale-95"
//             >
//               <div className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center border border-white/10">
//                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                   <path d="M3 6L12 3L21 6V18L12 21L3 18V6Z" stroke="white" strokeWidth="1.5" />
//                   <path d="M12 3V21" stroke="white" strokeWidth="1.5" />
//                   <path d="M3 6L12 9L21 6" stroke="white" strokeWidth="1.5" />
//                 </svg>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-lg font-bold text-white leading-tight">KK</span>
//                 <span className="text-[10px] font-medium text-silver uppercase tracking-[0.2em] leading-tight">
//                   EXPORT
//                 </span>
//               </div>
//             </button>

//             <p className="text-sm text-silver leading-relaxed mb-6 max-w-xs">
//               Engineering textile excellence since 1995. A global leader in technical textiles, industrial fabrics, and innovative material solutions.
//             </p>

//             <div className="flex gap-2.5">
//               {[
//                 { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
//                 { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
//                 { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
//                 { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
//               ].map(({ icon, label }) => (
//                 <a
//                   key={label}
//                   href="#"
//                   className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors border border-white/10 active:scale-95"
//                   aria-label={label}
//                 >
//                   {icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">
//               Quick Links
//             </h4>
//             <ul className="space-y-2.5">
//               {[
//                 { label: 'Home', page: 'home' },
//                 { label: 'About Us', page: 'about' },
//                 { label: 'Products', page: 'products' },
//                 { label: 'Manufacturing', page: 'manufacturing' },
//                 { label: 'Sustainability', page: 'sustainability' },
//                 { label: 'Contact Us', page: 'contact' },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <button
//                     onClick={() => navigate(item.page)}
//                     className="text-sm text-silver hover:text-white transition-colors text-left active:scale-95"
//                   >
//                     {item.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">
//               Company
//             </h4>
//             <ul className="space-y-2.5">
//               {[
//                 { label: 'Certifications', page: 'certifications' },
//                 { label: 'Blog & Insights', page: 'blog' },
//                 { label: 'Careers', page: 'about' },
//                 { label: 'Privacy Policy', page: 'home' },
//                 { label: 'Terms of Service', page: 'home' },
//                 { label: 'Our CRS', page: 'home' },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <button
//                     onClick={() => navigate(item.page)}
//                     className="text-sm text-silver hover:text-white transition-colors text-left active:scale-95"
//                   >
//                     {item.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">
//               Contact Us
//             </h4>
//             <ul className="space-y-3.5">
//               <li className="flex items-start gap-2.5">
//                 <MapPin className="w-4 h-4 text-silver mt-0.5 shrink-0" />
//                 <span className="text-sm text-silver leading-relaxed">
//                   313 Govindam Complex, Gandhi Nagar,<br />
//                   Bhilwara – 311001, India
//                 </span>
//               </li>

//               <li className="flex items-center gap-2.5">
//                 <Phone className="w-4 h-4 text-silver shrink-0" />
//                 <a
//                   href="tel:+919818434231"
//                   className="text-sm text-silver hover:text-white transition-colors"
//                 >
//                   +91 9818434231
//                 </a>
//               </li>

//               <li className="flex items-center gap-2.5">
//                 <Mail className="w-4 h-4 text-silver shrink-0" />
//                 <a
//                   href="mailto:kkexport95@gmail.com"
//                   className="text-sm text-silver hover:text-white transition-colors"
//                 >
//                   kkexport95@gmail.com
//                 </a>
//               </li>
//             </ul>

//             <button
//               onClick={() => navigate('contact')}
//               className="mt-5 px-5 py-2.5 bg-white text-gray-900 hover:bg-gray-200 text-sm font-semibold rounded-full transition-all duration-200 active:scale-95"
//             >
//               Get in Touch
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-silver-dark">
//             <p className="text-center md:text-left">
//               © 2025 KK EXPORT Pvt. Ltd. All rights reserved.
//             </p>
//             <p className="text-silver/50">
//               Made with ❤️ in India
//             </p>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// }








// import { useNavigation } from "../context/NavigationContext";
// import { Linkedin, Twitter, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

// const quickLinks = [
//   { label: "Home", page: "home" },
//   { label: "Products", page: "products" },
//   { label: "Manufacturing", page: "manufacturing" },
//   { label: "Sustainability", page: "sustainability" },
//   { label: "Contact", page: "contact" },
// ];

// export function Footer() {
//   const { navigate } = useNavigation();

//   return (
//     <footer
//       style={{
//         background: "linear-gradient(180deg, #1a1a1a 0%, #111111 100%)",
//         fontFamily: "'Cormorant Garamond', Georgia, serif",
//         color: "#d4c9b8",
//       }}
//     >
//       {/* Top border accent */}
//       <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #c9b99a55, transparent)" }} />

//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 40px 40px" }}>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1.4fr 1px 1fr 1px 1fr",
//             gap: "0 40px",
//             alignItems: "start",
//           }}
//         >
//           {/* Column 1 — Brand */}
//           <div>
//             {/* Logo Image */}
//             <div style={{ marginBottom: "24px" }}>
//               <button
//                 onClick={() => navigate("home")}
//                 style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
//               >
//                 <div
//                   style={{
//                     width: "80px",
//                     height: "80px",
//                     borderRadius: "14px",
//                     background: "#ffffff",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     overflow: "hidden",
//                     boxShadow: "0 0 0 2px #c9b99a44",
//                   }}
//                 >
//                   <img
//                     src="/image/logo1.png"
//                     alt="KK Export Logo"
//                     style={{ height: "60px", width: "60px", objectFit: "contain", display: "block" }}
//                   />
//                 </div>
//               </button>
//             </div>

//             <p
//               style={{
//                 fontSize: "22px",
//                 lineHeight: "1.4",
//                 color: "#e8dfd0",
//                 marginBottom: "12px",
//                 fontWeight: "400",
//                 maxWidth: "360px",
//               }}
//             >
//               Premium Cotton Towels, Bulk T-Shirts &amp; Fabric Manufacturing
//             </p>

//             <p
//               style={{
//                 fontSize: "13px",
//                 letterSpacing: "0.05em",
//                 color: "#7a6e60",
//                 marginBottom: "32px",
//                 fontFamily: "system-ui, sans-serif",
//               }}
//             >
//               Global Export &nbsp;•&nbsp; Custom Orders &nbsp;•&nbsp; Private Label
//             </p>

//             {/* Social Icons */}
//             <div style={{ display: "flex", gap: "10px" }}>
//               {[
//                 { Icon: Linkedin, href: "#" },
//                 { Icon: Twitter, href: "#" },
//                 { Icon: Instagram, href: "#" },
//                 { Icon: Facebook, href: "#" },
//               ].map(({ Icon, href }, i) => (
//                 <a
//                   key={i}
//                   href={href}
//                   style={{
//                     width: "38px", height: "38px",
//                     border: "1px solid #3a3530",
//                     borderRadius: "8px",
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     color: "#7a6e60", transition: "all 0.2s", textDecoration: "none",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = "#c9b99a";
//                     e.currentTarget.style.color = "#c9b99a";
//                     e.currentTarget.style.background = "#c9b99a18";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor = "#3a3530";
//                     e.currentTarget.style.color = "#7a6e60";
//                     e.currentTarget.style.background = "transparent";
//                   }}
//                 >
//                   <Icon size={16} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Divider 1 */}
//           <div style={{ background: "#2e2a25", alignSelf: "stretch" }} />

//           {/* Column 2 — Quick Links */}
//           <div>
//             <h3
//               style={{
//                 fontSize: "11px", letterSpacing: "0.25em", color: "#8a7d6a",
//                 marginBottom: "28px", fontFamily: "system-ui, sans-serif", fontWeight: "600",
//               }}
//             >
//               QUICK LINKS
//             </h3>
//             <nav style={{ display: "flex", flexDirection: "column" }}>
//               {quickLinks.map((link) => (
//                 <button
//                   key={link.label}
//                   onClick={() => navigate(link.page)}
//                   style={{
//                     background: "none", border: "none", cursor: "pointer",
//                     textAlign: "left", padding: "8px 0", fontSize: "17px",
//                     color: "#c4b8a8", fontFamily: "'Cormorant Garamond', Georgia, serif",
//                     transition: "color 0.2s", borderBottom: "1px solid #1f1d1a",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe2")}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = "#c4b8a8")}
//                 >
//                   {link.label}
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Divider 2 */}
//           <div style={{ background: "#2e2a25", alignSelf: "stretch" }} />

//           {/* Column 3 — Contact */}
//           <div>
//             <h3
//               style={{
//                 fontSize: "11px", letterSpacing: "0.25em", color: "#8a7d6a",
//                 marginBottom: "28px", fontFamily: "system-ui, sans-serif", fontWeight: "600",
//               }}
//             >
//               CONTACT US
//             </h3>

//             <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "32px" }}>
//               {[
//                 { Icon: MapPin, text: "Bhilwara, Rajasthan – India" },
//                 { Icon: Phone, text: "+91 98184 34231" },
//                 { Icon: Mail, text: "kkexport95@gmail.com" },
//               ].map(({ Icon, text }, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
//                   <Icon size={16} style={{ color: "#8a7d6a", marginTop: "2px", flexShrink: 0 }} />
//                   <span style={{ fontSize: "15px", color: "#c4b8a8", fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: "1.4" }}>
//                     {text}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={() => navigate("contact")}
//               style={{
//                 padding: "11px 28px",
//                 border: "1px solid #c9b99a",
//                 borderRadius: "100px",
//                 background: "transparent",
//                 color: "#e8dfd0",
//                 fontSize: "14px",
//                 letterSpacing: "0.05em",
//                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                 cursor: "pointer",
//                 transition: "all 0.25s",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "#c9b99a";
//                 e.currentTarget.style.color = "#1a1a1a";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "transparent";
//                 e.currentTarget.style.color = "#e8dfd0";
//               }}
//             >
//               Get a Quote
//             </button>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div
//           style={{
//             marginTop: "48px", paddingTop: "24px",
//             borderTop: "1px solid #2a2520",
//             display: "flex", justifyContent: "center", alignItems: "center",
//           }}
//         >
//           <p style={{ fontSize: "12px", color: "#5a5248", letterSpacing: "0.05em", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
//             © 2026 KK Export. All Rights Reserved.
//           </p>
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
//       `}</style>
//     </footer>
//   );
// }











import { useNavigation } from "../context/NavigationContext";
import { Linkedin, Twitter, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", page: "home" },
  { label: "Products", page: "products" },
  { label: "Manufacturing", page: "manufacturing" },
  { label: "Sustainability", page: "sustainability" },
  { label: "Contact", page: "contact" },
];

export function Footer() {
  const { navigate } = useNavigation();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #111111 100%)",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        color: "#d4c9b8",
      }}
    >
      {/* Top border accent */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #c9b99a55, transparent)" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 32px" }}>

        {/* ── Main Grid ── */}
        <div className="footer-grid">

          {/* Column 1 — Brand */}
          <div className="footer-brand">
            <div style={{ marginBottom: "20px" }}>
              <button
                onClick={() => navigate("home")}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                <div
                  style={{
                    width: "72px", height: "72px",
                    borderRadius: "14px",
                    background: "#ffffff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    overflow: "hidden",
                    boxShadow: "0 0 0 2px #c9b99a44",
                  }}
                >
                  <img
                    src="/image/logo1.png"
                    alt="KK Export Logo"
                    style={{ height: "54px", width: "54px", objectFit: "contain", display: "block" }}
                  />
                </div>
              </button>
            </div>

            <p style={{ fontSize: "18px", lineHeight: "1.5", color: "#e8dfd0", marginBottom: "10px", fontWeight: "400", maxWidth: "320px" }}>
              Premium Cotton Towels, Bulk T-Shirts &amp; Fabric Manufacturing
            </p>

            <p style={{ fontSize: "12px", letterSpacing: "0.05em", color: "#7a6e60", marginBottom: "24px", fontFamily: "system-ui, sans-serif" }}>
              Global Export &nbsp;•&nbsp; Custom Orders &nbsp;•&nbsp; Private Label
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: "36px", height: "36px",
                    border: "1px solid #3a3530",
                    borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#7a6e60", transition: "all 0.2s", textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#c9b99a";
                    e.currentTarget.style.color = "#c9b99a";
                    e.currentTarget.style.background = "#c9b99a18";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#3a3530";
                    e.currentTarget.style.color = "#7a6e60";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer-col">
            <h3 style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#8a7d6a", marginBottom: "20px", fontFamily: "system-ui, sans-serif", fontWeight: "600" }}>
              QUICK LINKS
            </h3>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigate(link.page)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    textAlign: "left", padding: "7px 0", fontSize: "16px",
                    color: "#c4b8a8", fontFamily: "'Cormorant Garamond', Georgia, serif",
                    transition: "color 0.2s", borderBottom: "1px solid #1f1d1a",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#c4b8a8")}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3 — Contact */}
          <div className="footer-col">
            <h3 style={{ fontSize: "10px", letterSpacing: "0.25em", color: "#8a7d6a", marginBottom: "20px", fontFamily: "system-ui, sans-serif", fontWeight: "600" }}>
              CONTACT US
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
              {[
                { Icon: MapPin, text: "Bhilwara, Rajasthan – India" },
                { Icon: Phone, text: "+91 98184 34231" },
                { Icon: Mail, text: "kkexport95@gmail.com" },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <Icon size={14} style={{ color: "#8a7d6a", marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "14px", color: "#c4b8a8", fontFamily: "system-ui, sans-serif", lineHeight: "1.5" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("contact")}
              style={{
                padding: "10px 24px",
                border: "1px solid #c9b99a",
                borderRadius: "100px",
                background: "transparent",
                color: "#e8dfd0",
                fontSize: "13px",
                letterSpacing: "0.05em",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                cursor: "pointer",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#c9b99a";
                e.currentTarget.style.color = "#1a1a1a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#e8dfd0";
              }}
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "40px", paddingTop: "20px",
            borderTop: "1px solid #2a2520",
            display: "flex", justifyContent: "center", alignItems: "center",
          }}
        >
          <p style={{ fontSize: "11px", color: "#5a5248", letterSpacing: "0.05em", fontFamily: "system-ui, sans-serif", textAlign: "center" }}>
            © 2026 KK Export. All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap');

        /* Desktop: 3 equal columns */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 0 48px;
          align-items: start;
        }

        /* Tablet 768px: brand full width on top, links + contact side by side */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px 32px;
          }
          .footer-brand {
            grid-column: 1 / -1;
            padding-bottom: 28px;
            border-bottom: 1px solid #2a2520;
          }
        }

        /* Mobile 480px: single column stack */
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-brand {
            grid-column: 1;
            padding-bottom: 24px;
            border-bottom: 1px solid #2a2520;
          }
          .footer-col {
            padding-top: 4px;
          }
        }
      `}</style>
    </footer>
  );
}