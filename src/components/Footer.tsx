import { useNavigation } from '../context/NavigationContext';
import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export function Footer() {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-charcoal-dark text-silver-light overflow-x-hidden">
      {/* Newsletter */}
     

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button 
              onClick={() => navigate('home')} 
              className="flex items-center gap-2 mb-4 sm:mb-5 hover:opacity-80 transition-opacity active:scale-95"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-charcoal rounded-lg flex items-center justify-center border border-white/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px]">
                  <path d="M3 6L12 3L21 6V18L12 21L3 18V6Z" stroke="white" strokeWidth="1.5" />
                  <path d="M12 3V21" stroke="white" strokeWidth="1.5" />
                  <path d="M3 6L12 9L21 6" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white leading-tight">KK</span>
                <span className="text-[9px] sm:text-[10px] font-medium text-silver uppercase tracking-[0.2em] leading-tight">
                  EXPORT
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-silver leading-relaxed mb-5 sm:mb-6 max-w-xs">
              Engineering textile excellence since 1995. A global leader in technical textiles, industrial fabrics, and innovative material solutions.
            </p>

            <div className="flex gap-2.5 sm:gap-3">
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 bg-white/8 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors border border-white/10 active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-9 sm:h-9 bg-white/8 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors border border-white/10 active:scale-95"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
              Products
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {['Technical Textiles', 'Industrial Fabrics', 'Coated Textiles', 'Nonwoven Fabrics', 'Specialty Yarns'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => navigate('products')} 
                    className="text-xs sm:text-sm text-silver hover:text-white transition-colors text-left active:scale-95"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          {/* <div>
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
              Industries
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {['Automotive', 'Aerospace', 'Healthcare', 'Construction', 'Agriculture', 'Defense'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => navigate('industries')} 
                    className="text-xs sm:text-sm text-silver hover:text-white transition-colors text-left active:scale-95"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company */}
          <div>
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { label: 'About Us', page: 'about' },
                { label: 'Manufacturing', page: 'manufacturing' },
                { label: 'Sustainability', page: 'sustainability' },
                { label: 'Certifications', page: 'certifications' },
                { label: 'Blog & Insights', page: 'blog' },
                { label: 'Careers', page: 'about' },
              ].map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => navigate(item.page)} 
                    className="text-xs sm:text-sm text-silver hover:text-white transition-colors text-left active:scale-95"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold text-xs sm:text-sm uppercase tracking-wider text-white mb-3 sm:mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-2.5">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-silver mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-silver leading-relaxed">
                  313 GOVINDAM COMPLEX,GANDHI NAGAR,BHILWARA,311001 India
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-2.5">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-silver shrink-0" />
                <a 
                  href="tel:+15552345678" 
                  className="text-xs sm:text-sm text-silver hover:text-white transition-colors"
                >
                  +91 9818434231
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-2.5">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-silver shrink-0" />
                <a 
                  href="mailto:KKEXPORT95@GMAIL.COM" 
                  className="text-xs sm:text-sm text-silver hover:text-white transition-colors break-all"
                >
                  KKEXPORT95@GMAIL.COM
                </a>
              </li>
            </ul>

            <button
              onClick={() => navigate('contact')}
              className="mt-4 sm:mt-5 px-4 py-2 sm:py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors border border-white/15 w-full sm:w-auto active:scale-95"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-silver-dark">
            <p className="text-center md:text-left">
              &copy; 2025 KK EXPORT Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}