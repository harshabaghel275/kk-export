import { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import {
  ArrowRight,
  Leaf,
  Users,
  Heart,
  Award,
  Droplets,
  Zap,
  Wind,
  TreePine,
  GraduationCap,
  HandHeart,
  ChevronRight,
} from 'lucide-react';

export function OurCsrPage() {
  const { navigate } = useNavigation();

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

  // ─── NGO / CSR Partners ──────────────────────────────────────────────────
  const csrPartners = [
    {
      logo: '/image/dogngo.png',
      name: 'Surana Dogngo',
      sub: '',
    },
    // {
    //   logo: '/image/csr-logo-kesarbai.png',
    //   name: 'SMT. KESAR BAI SONI',
    //   sub: 'CHARITABLE TRUST',
    // },
    // {
    //   logo: '/image/csr-logo-sangam-uni.png',
    //   name: 'SANGAM UNIVERSITY',
    //   sub: '',
    // },
    // {
    //   logo: '/image/csr-logo-sangam-school.png',
    //   name: 'SANGAM SCHOOL OF',
    //   sub: 'EXCELLENCE',
    // },
  ];

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
      {/* <section className="relative overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img src="/image/slider1.jpg" alt="CSR Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 " />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full z-10">
          <div className="max-w-3xl">
            <span
              className="hero-label inline-block text-xs sm:text-sm text-silver font-semibold uppercase tracking-[0.22em] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Corporate Social Responsibility
            </span>
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
              <span style={{ fontFamily: "'Poppins', sans-serif" }}>Giving Back to</span>
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
      </section> */}

      {/* ===== IMPACT STATS ===== */}
      
      {/* ===== OUR CSR PARTNERS (screenshot wala section) ===== */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading exactly like screenshot */}
          <div className="text-center mb-10 sm:mb-14 scroll-animate">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              OUR CSR
            </h2>
            {/* Underline accent */}
            <div className="mt-3 mx-auto w-16 h-0.5 bg-charcoal rounded-full" />
          </div>

          {/* Logo Cards Grid — exactly like screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {csrPartners.map((partner, idx) => (
              <div
                key={idx}
                className="scroll-animate group flex flex-col items-center"
              >
                {/* Logo box with border — same as screenshot */}
                <div className="w-full aspect-[4/3] border border-silver-light rounded-sm flex items-center justify-center p-4 sm:p-6 bg-white group-hover:shadow-[0_4px_20px_rgba(43,43,43,0.10)] group-hover:border-silver transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 sm:max-h-28 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Name below box — uppercase spaced letters like screenshot */}
                <div className="mt-3 sm:mt-4 text-center">
                  <p
                    className="text-[11px] sm:text-xs font-semibold text-charcoal uppercase tracking-[0.15em] leading-snug"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {partner.name}
                  </p>
                  {partner.sub && (
                    <p
                      className="text-[11px] sm:text-xs font-semibold text-charcoal uppercase tracking-[0.15em] leading-snug mt-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {partner.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR COMMITMENT ===== */}
      

    </div>
  );
}