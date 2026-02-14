import { useNavigation } from '../context/NavigationContext';
import { IMG } from '../constants/images';
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  User,
  BookOpen,
  TrendingUp,
  Lightbulb,
  FileText,
  ChevronRight,
} from 'lucide-react';

function TexImg({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cloud ${className}`}>
      <div className="absolute inset-0 bg-weave opacity-40" />
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

const featuredPost = {
  title: 'The Future of Smart Textiles: How IoT is Revolutionizing the Fabric Industry',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Discover how embedded sensors and conductive fibers are creating a new generation of intelligent fabrics.',
  date: 'Jan 15, 2025',
  readTime: '8 min read',
  author: 'Dr. David Collins',
  category: 'Innovation',
  img: IMG.fabricTexture1,
};

const posts = [
  { title: 'Understanding Technical Textile Standards: A Guide for Procurement Teams', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Navigating ISO, OEKO-TEX compliance.', date: 'Jan 8, 2025', readTime: '6 min', category: 'Compliance', img: IMG.wovenClose1, icon: FileText },
  { title: 'Sustainable Manufacturing: How TexVista Achieves 40% Water Reduction', excerpt: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our zero discharge approach.', date: 'Dec 28, 2024', readTime: '5 min', category: 'Sustainability', img: IMG.eco1, icon: TrendingUp },
  { title: '5 Key Trends Shaping the Global Nonwoven Fabric Market in 2025', excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.', date: 'Dec 15, 2024', readTime: '7 min', category: 'Market Insights', img: IMG.fabricRolls1, icon: TrendingUp },
  { title: 'Aramid vs. Carbon Fiber: Choosing the Right Technical Textile', excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.', date: 'Dec 5, 2024', readTime: '9 min', category: 'Product Guide', img: IMG.fabricTexture2, icon: BookOpen },
  { title: 'Industry 4.0 in Textile Manufacturing: Our Digital Transformation', excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.', date: 'Nov 22, 2024', readTime: '6 min', category: 'Innovation', img: IMG.production1, icon: Lightbulb },
  { title: 'The Complete Guide to Geotextile Selection for Civil Engineering', excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', date: 'Nov 10, 2024', readTime: '10 min', category: 'Technical', img: IMG.wovenClose2, icon: FileText },
];

const blogCategories = ['All', 'Innovation', 'Sustainability', 'Technical', 'Market Insights', 'Product Guide', 'Compliance'];

export function BlogPage() {
  const { navigate } = useNavigation();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.fabricTexture4} alt="Fabric texture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Blog & Insights</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Industry Knowledge & Technical Insights
            </h1>
            <p className="text-silver text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stay informed with the latest textile industry trends, technical guides, and sustainability insights.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-cloud-dark sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {blogCategories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  i === 0 ? 'bg-charcoal text-white' : 'text-silver-darker hover:bg-cloud-lighter'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch bg-cloud-lighter rounded-2xl overflow-hidden border border-cloud-dark">
            <TexImg src={featuredPost.img} alt="Featured article" className="w-full h-[280px] lg:h-full" />
            <div className="p-6 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-charcoal bg-cloud px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-silver-dark">Featured</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-silver-darker leading-relaxed mb-6 line-clamp-3">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-silver-dark mb-6">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {featuredPost.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
              </div>
              <button className="inline-flex items-center gap-2 text-charcoal font-semibold hover:gap-3 transition-all border-b-2 border-charcoal pb-0.5 self-start">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl font-bold text-charcoal mb-8">Latest Articles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-2xl overflow-hidden border border-cloud-dark hover:border-silver hover:shadow-[0_8px_30px_rgba(43,43,43,0.08)] transition-all"
              >
                <TexImg src={post.img} alt={post.category} className="w-full h-44" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-charcoal bg-cloud-light px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="text-xs text-silver-dark">{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-charcoal mb-2 group-hover:text-charcoal-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-silver-darker line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-cloud-dark">
                    <span className="text-xs text-silver-dark flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <button className="text-sm font-semibold text-charcoal flex items-center gap-1 hover:gap-2 transition-all">
                      Read <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-cloud-dark text-charcoal font-semibold rounded-lg hover:bg-cloud-lighter transition-colors">
              Load More Articles <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.fabricRolls1} alt="Fabric rolls" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-silver mb-8">
            Lorem ipsum dolor sit amet. Get monthly industry insights, product updates, and technical resources delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-silver-dark focus:outline-none focus:border-silver"
            />
            <button
              onClick={() => navigate('contact')}
              className="px-6 py-3 bg-white text-charcoal font-bold rounded-lg hover:bg-cloud-light transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
