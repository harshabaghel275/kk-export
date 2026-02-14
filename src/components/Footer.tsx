import { useNavigation } from '../context/NavigationContext';
import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export function Footer() {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-charcoal-dark text-silver-light">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Stay Ahead in Textile Innovation
              </h3>
              <p className="text-silver">
                Subscribe to our newsletter for industry insights, product updates, and technical resources.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-silver-dark focus:outline-none focus:border-silver focus:ring-1 focus:ring-silver"
              />
              <button className="px-6 py-3 bg-white text-charcoal-dark font-semibold rounded-lg hover:bg-cloud-light transition-colors flex items-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <button onClick={() => navigate('home')} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center border border-white/10">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6L12 3L21 6V18L12 21L3 18V6Z" stroke="white" strokeWidth="1.5" />
                  <path d="M12 3V21" stroke="white" strokeWidth="1.5" />
                  <path d="M3 6L12 9L21 6" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">KK</span>
                <span className="text-[10px] font-medium text-silver uppercase tracking-[0.2em] leading-tight">
                  EXPORT
                </span>
              </div>
            </button>
            <p className="text-silver text-sm leading-relaxed mb-6">
              Engineering textile excellence since 1995. A global leader in technical textiles, industrial fabrics, and innovative material solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/8 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/8 hover:bg-white/15 rounded-lg flex items-center justify-center transition-colors border border-white/10">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {['Technical Textiles', 'Industrial Fabrics', 'Coated Textiles', 'Nonwoven Fabrics', 'Specialty Yarns'].map(
                (item) => (
                  <li key={item}>
                    <button onClick={() => navigate('products')} className="text-sm text-silver hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {['Automotive', 'Aerospace', 'Healthcare', 'Construction', 'Agriculture', 'Defense'].map(
                (item) => (
                  <li key={item}>
                    <button onClick={() => navigate('industries')} className="text-sm text-silver hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', page: 'about' },
                { label: 'Manufacturing', page: 'manufacturing' },
                { label: 'Sustainability', page: 'sustainability' },
                { label: 'Certifications', page: 'certifications' },
                { label: 'Blog & Insights', page: 'blog' },
                { label: 'Careers', page: 'about' },
              ].map((item) => (
                <li key={item.label}>
                  <button onClick={() => navigate(item.page)} className="text-sm text-silver hover:text-white transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-silver mt-0.5 shrink-0" />
                <span className="text-sm text-silver">
                  TexVista Tower, Andheri East, Mumbai 400069, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-silver shrink-0" />
                <span className="text-sm text-silver">+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-silver shrink-0" />
                <span className="text-sm text-silver">info@texvistaglobal.com</span>
              </li>
            </ul>
            <button
              onClick={() => navigate('contact')}
              className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-lg transition-colors border border-white/15"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-silver-dark">
            <p>&copy; 2025 KK EXPORT  Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
