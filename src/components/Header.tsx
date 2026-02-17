
// import { useState, useEffect, useRef } from "react";
// import { useNavigation } from "../context/NavigationContext";
// import { Menu, X, ChevronDown } from "lucide-react";

// const navItems = [
//   { label: "Home", page: "home" },
//   { label: "Who We Are", page: "about" },
//   { label: "WHAT We Do", page: "industries" },
//   {
//     label: "Products",
//     page: "products",
//     children: [
//       { label: "Menswear Division", page: "products" },
//       { label: "Bulk Promotional T-Shirts", page: "products" },
//       { label: "Home Textile Division", page: "products" },
//       { label: "Fabric Division", page: "products" },
//       { label: "Denim Division", page: "products" },
//       { label: "Custom Manufacturing", page: "products" },
//     ],
//   },
//   {
//     label: "Capabilities",
//     page: "manufacturing",
//     children: [
//       { label: "Manufacturing", page: "manufacturing" },
//       { label: "Sustainability", page: "sustainability" },
//     ],
//   },
//   { label: "Certifications", page: "certifications" },
//   { label: "Our CSR", page: "ourcsr" },
//   { label: "Contact", page: "contact" },
// ];

// export function Header() {
//   const { currentPage, navigate } = useNavigation();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleDropdownEnter = (label: string) => {
//     if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
//     setOpenDropdown(label);
//   };

//   const handleDropdownLeave = () => {
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setOpenDropdown(null);
//     }, 150);
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-lg"
//           : "bg-white border-b"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-16 lg:h-20">

//           {/* Logo */}
//           <button onClick={() => navigate("home")}>
//             <img
//               src="/image/logo1.png"
//               alt="KK Export Logo"
//               className="h-10 lg:h-12 w-auto"
//             />
//           </button>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-0.5">
//             {navItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() =>
//                   item.children && handleDropdownEnter(item.label)
//                 }
//                 onMouseLeave={() =>
//                   item.children && handleDropdownLeave()
//                 }
//               >
//                 <button
//                   onClick={() => {
//                     navigate(item.page);
//                     setOpenDropdown(null);
//                   }}
//                   className={`flex items-center gap-0.5 px-3 py-2 text-xs font-medium rounded-lg transition ${
//                     currentPage === item.page
//                       ? "text-black bg-gray-100"
//                       : "text-gray-600 hover:text-black hover:bg-gray-50"
//                   }`}
//                   style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
//                 >
//                   {item.label}
//                   {item.children && (
//                     <ChevronDown className="w-3 h-3" />
//                   )}
//                 </button>

//                 {item.children && openDropdown === item.label && (
//                   <div className="absolute top-full left-0 pt-2">
//                     <div className="bg-white rounded-xl shadow-lg border py-2 min-w-[200px]">
//                       {item.children.map((child) => (
//                         <button
//                           key={child.label}
//                           onClick={() => {
//                             navigate(child.page);
//                             setOpenDropdown(null);
//                           }}
//                           className="w-full text-left px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50"
//                           style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
//                         >
//                           {child.label}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Right side: CTA + Mobile Toggle */}
//           <div className="flex items-center gap-3">
//             {/* Request Free Sample — Desktop only */}
//             <button
//               onClick={() => navigate("contact")}
//               className="hidden lg:inline-flex items-center gap-2 px-4 py-2 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-200 whitespace-nowrap"
//               style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
//             >
//               Request Free Sample
//             </button>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="lg:hidden p-2"
//             >
//               {mobileOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t">
//           <div className="px-4 py-4 space-y-2">
//             {navItems.map((item) => (
//               <button
//                 key={item.label}
//                 onClick={() => {
//                   navigate(item.page);
//                   setMobileOpen(false);
//                 }}
//                 className="block w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-100 rounded-lg"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 {item.label}
//               </button>
//             ))}
//             {/* Request Free Sample — Mobile */}
//             <button
//               onClick={() => {
//                 navigate("contact");
//                 setMobileOpen(false);
//               }}
//               className="block w-full text-left px-4 py-2 text-xs font-semibold bg-black text-white rounded-lg"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Request Free Sample
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }










// import { useState, useEffect, useRef } from "react";
// import { useNavigation } from "../context/NavigationContext";
// import { Menu, X, ChevronDown } from "lucide-react";

// const navItems = [
//   { label: "Home", page: "home" },
//   { label: "Who We Are", page: "about" },
//   { label: "WHAT We Do", page: "industries" },
//   {
//     label: "Products",
//     page: "products",
//     children: [
//       { label: "Menswear Division", page: "products" },
//       { label: "Bulk Promotional T-Shirts", page: "products" },
//       { label: "Home Textile Division", page: "products" },
//       { label: "Fabric Division", page: "products" },
//       { label: "Denim Division", page: "products" },
//       { label: "Custom Manufacturing", page: "products" },
//     ],
//   },
//   {
//     label: "Capabilities",
//     page: "manufacturing",
//     children: [
//       { label: "Manufacturing", page: "manufacturing" },
//       { label: "Sustainability", page: "sustainability" },
//     ],
//   },
//   { label: "Certifications", page: "certifications" },
//   { label: "Our CSR", page: "ourcsr" },
//   { label: "Contact", page: "contact" },
// ];

// export function Header() {
//   const { currentPage, navigate } = useNavigation();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleDropdownEnter = (label: string) => {
//     if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
//     setOpenDropdown(label);
//   };

//   const handleDropdownLeave = () => {
//     dropdownTimeoutRef.current = setTimeout(() => {
//       setOpenDropdown(null);
//     }, 150);
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-lg"
//           : "bg-white border-b"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-center justify-between h-16 lg:h-20">

//           {/* Logo */}
//           <button onClick={() => navigate("home")}>
//             <img
//               src="/image/logo1.png"
//               alt="KK Export Logo"
//               className="h-10 lg:h-12 w-auto"
//             />
//           </button>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-0.5">
//             {navItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
//                 onMouseLeave={() => item.children && handleDropdownLeave()}
//               >
//                 {/* Top-level nav button — black bg, white text */}
//                 <button
//                   onClick={() => {
//                     navigate(item.page);
//                     setOpenDropdown(null);
//                   }}
//                   className="flex items-center gap-0.5 px-3 py-2 rounded-lg transition-all duration-200 bg-black text-white hover:bg-gray-800 active:scale-95"
//                   style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600 }}
//                 >
//                   {item.label}
//                   {item.children && <ChevronDown className="w-3 h-3" />}
//                 </button>

//                 {/* Dropdown — stays same white style */}
//                 {item.children && openDropdown === item.label && (
//                   <div className="absolute top-full left-0 pt-2 z-50">
//                     <div className="bg-white rounded-xl shadow-lg border py-2 min-w-[200px]">
//                       {item.children.map((child) => (
//                         <button
//                           key={child.label}
//                           onClick={() => {
//                             navigate(child.page);
//                             setOpenDropdown(null);
//                           }}
//                           className="w-full text-left px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50"
//                           style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
//                         >
//                           {child.label}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Right side: CTA + Mobile Toggle */}
//           <div className="flex items-center gap-3">
//             {/* Request Free Sample — Desktop only */}
//             <button
//               onClick={() => navigate("contact")}
//               className="hidden lg:inline-flex items-center gap-2 px-4 py-2 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-200 whitespace-nowrap border border-gray-600"
//               style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
//             >
//               Request Free Sample
//             </button>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="lg:hidden p-2"
//             >
//               {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="lg:hidden bg-white border-t">
//           <div className="px-4 py-4 space-y-2">
//             {navItems.map((item) => (
//               <button
//                 key={item.label}
//                 onClick={() => {
//                   navigate(item.page);
//                   setMobileOpen(false);
//                 }}
//                 className="block w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-100 rounded-lg"
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//               >
//                 {item.label}
//               </button>
//             ))}
//             {/* Request Free Sample — Mobile */}
//             <button
//               onClick={() => {
//                 navigate("contact");
//                 setMobileOpen(false);
//               }}
//               className="block w-full text-left px-4 py-2 text-xs font-semibold bg-black text-white rounded-lg"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Request Free Sample
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }












import { useState, useEffect, useRef } from "react";
import { useNavigation } from "../context/NavigationContext";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", page: "home" },
  { label: "Who We Are", page: "about" },
  { label: "WHAT We Do", page: "industries" },
  {
    label: "Products",
    page: "products",
    children: [
      { label: "Menswear Division", page: "products" },
      { label: "Bulk Promotional T-Shirts", page: "products" },
      { label: "Home Textile Division", page: "products" },
      { label: "Fabric Division", page: "products" },
      { label: "Denim Division", page: "products" },
      { label: "Custom Manufacturing", page: "products" },
    ],
  },
  {
    label: "Capabilities",
    page: "manufacturing",
    children: [
      { label: "Manufacturing", page: "manufacturing" },
      { label: "Sustainability", page: "sustainability" },
    ],
  },
  { label: "Certifications", page: "certifications" },
  { label: "Our CSR", page: "ourcsr" },
  { label: "Contact", page: "contact" },
];

export function Header() {
  const { currentPage, navigate } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) setOpenMobileDropdown(null);
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white border-b"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button onClick={() => navigate("home")}>
            <img src="/image/logo1.png" alt="KK Export Logo" className="h-10 lg:h-12 w-auto" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.children && handleDropdownLeave()}
              >
                <button
                  onClick={() => { navigate(item.page); setOpenDropdown(null); }}
                  className="flex items-center gap-0.5 px-3 py-2 rounded-lg transition-all duration-200 bg-black text-white hover:bg-gray-800 active:scale-95"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600 }}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </button>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-lg border py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => { navigate(child.page); setOpenDropdown(null); }}
                          className="w-full text-left px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("contact")}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 font-semibold bg-black text-white rounded-lg hover:bg-gray-800 active:scale-95 transition-all duration-200 whitespace-nowrap border border-gray-600"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
            >
              Request Free Sample
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className="w-4 h-4 text-gray-400 transition-transform duration-200"
                        style={{
                          transform: openMobileDropdown === item.label
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {/* Accordion Children — smooth slide */}
                    <div
                      style={{
                        maxHeight: openMobileDropdown === item.label ? '500px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease',
                      }}
                    >
                      <div className="ml-4 pl-3 border-l-2 border-gray-100 mt-1 mb-2 space-y-0.5">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => {
                              navigate(child.page);
                              setMobileOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                            className="block w-full text-left px-3 py-2 text-xs text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Simple nav link */
                  <button
                    onClick={() => { navigate(item.page); setMobileOpen(false); }}
                    className="block w-full text-left px-4 py-2.5 text-xs font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-2 pb-1 border-t border-gray-100">
              <button
                onClick={() => { navigate("contact"); setMobileOpen(false); }}
                className="w-full px-4 py-2.5 text-xs font-semibold bg-black text-white rounded-lg active:scale-95 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Request Free Sample
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}