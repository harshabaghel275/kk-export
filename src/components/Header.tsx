import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Who We ARE', page: 'about' },
  { label: 'WHAT WE DO', page: 'industries' },
  {
    label: 'Products',
    page: 'products',
    children: [
      { label: 'Technical Textiles', page: 'products' },
      { label: 'Industrial Fabrics', page: 'products' },
      { label: 'Coated Textiles', page: 'products' },
      { label: 'Nonwoven Fabrics', page: 'products' },
      { label: 'Specialty Yarns', page: 'products' },
    ],
  },
  
  {
    label: 'Capabilities',
    page: 'manufacturing',
    children: [
      { label: 'Manufacturing', page: 'manufacturing' },
      { label: 'Sustainability', page: 'sustainability' },
      { label: 'Certifications', page: 'certifications' },
    ],
  },
  // { label: 'Insights', page: 'blog' },
  { label: 'Contact', page: 'contact' },
];

export function Header() {
  const { currentPage, navigate } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
  
      {/* <div className="bg-charcoal-dark text-silver text-xs py-2.5 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" /> +1 (555) 234-5678
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> info@KKexport.com
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> Bhilwara, India 
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white font-medium tracking-wide">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div> */}

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(43,43,43,0.08)]'
            : 'bg-white border-b border-cloud-dark'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button onClick={() => navigate('home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center group-hover:bg-charcoal-light transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6L12 3L21 6V18L12 21L3 18V6Z" stroke="white" strokeWidth="1.5" />
                  <path d="M12 3V21" stroke="white" strokeWidth="1.5" />
                  <path d="M3 6L12 9L21 6" stroke="white" strokeWidth="1.5" />
                  <path d="M3 12L12 15L21 12" stroke="white" strokeWidth="0.8" strokeOpacity="0.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-charcoal leading-tight tracking-tight">
                 KK
                </span>
                <span className="text-[10px] font-semibold text-silver-dark uppercase tracking-[0.2em] leading-tight">
                 EXPORT
                </span>
              </div>
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
                    onClick={() => {
                      navigate(item.page);
                      setOpenDropdown(null);
                    }}
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === item.page
                        ? 'text-charcoal bg-cloud-light'
                        : 'text-silver-darker hover:text-charcoal hover:bg-cloud-lighter'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(43,43,43,0.12)] border border-cloud-dark py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => {
                              navigate(child.page);
                              setOpenDropdown(null);
                            }}
                            className="w-full text-left px-4 py-2.5 text-sm text-silver-darker hover:text-charcoal hover:bg-cloud-lighter transition-colors"
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

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('contact')}
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-charcoal text-white text-sm font-semibold rounded-lg hover:bg-charcoal-light transition-colors"
              >
                Request FREE
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-charcoal hover:bg-cloud-lighter rounded-lg"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-cloud-dark animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (!item.children) {
                        navigate(item.page);
                        setMobileOpen(false);
                      } else {
                        setOpenDropdown(openDropdown === item.label ? null : item.label);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg ${
                      currentPage === item.page
                        ? 'text-charcoal bg-cloud-light'
                        : 'text-silver-darker hover:bg-cloud-lighter'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {item.children && openDropdown === item.label && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => {
                            navigate(child.page);
                            setMobileOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="w-full text-left px-4 py-2.5 text-sm text-silver-dark hover:text-charcoal rounded-lg hover:bg-cloud-lighter"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 px-4">
                <button
                  onClick={() => {
                    navigate('contact');
                    setMobileOpen(false);
                  }}
                  className="w-full py-3 bg-charcoal text-white font-semibold rounded-lg hover:bg-charcoal-light transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
