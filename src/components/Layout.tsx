import { ReactNode, useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Menu, X, Phone, MessageSquare, Globe, Info, Building2, LogOut, User as UserIcon, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from '../constants/content';
import { useFirebase } from '../lib/firebase';

interface LayoutProps {
  children: ReactNode;
}

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const allItems = [
    ...siteContent.layanan.items.map(i => ({ ...i, type: 'Layanan', link: `/layanan/${i.slug}` })),
    ...siteContent.layanan.additionalItems.map(i => ({ ...i, type: 'Produk/Kelas', link: '/layanan' })),
    ...siteContent.artikel.highlights.map(i => ({ ...i, type: 'Artikel', link: '/artikel' })),
  ];

  const results = query 
    ? allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        (item as any).description?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-editorial-primary/40 backdrop-blur-sm" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl relative z-10 overflow-hidden"
          >
            <div className="p-6 border-b border-editorial-border flex items-center gap-4">
              <Search className="w-6 h-6 text-editorial-secondary" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Cari layanan, buku, atau artikel..." 
                className="flex-1 bg-transparent border-none outline-none text-lg font-serif italic text-editorial-primary placeholder:text-editorial-muted"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={onClose} className="p-2 hover:bg-editorial-bg rounded-full transition-colors">
                <X className="w-5 h-5 text-editorial-muted" />
              </button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-4">
              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.slice(0, 8).map((res, i) => (
                    <Link 
                      key={i} 
                      to={res.link} 
                      onClick={onClose}
                      className="flex items-center justify-between p-4 bg-editorial-bg hover:bg-editorial-secondary hover:text-white rounded-2xl transition-all group"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1 block">{res.type}</span>
                        <h4 className="font-poppins font-bold text-sm tracking-tight italic uppercase">{res.title}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              ) : query ? (
                <div className="py-12 text-center text-editorial-muted">
                  <p className="font-serif italic text-lg">"Tidak ada hasil untuk kata kunci tersebut"</p>
                </div>
              ) : (
                <div className="py-12 text-center text-editorial-muted opacity-50">
                   <p className="font-serif italic text-lg whitespace-pre-line">Ketikkan kata kunci untuk mencari{'\n'}layanan atau produk BBA</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, profile, isAdmin, login, logout } = useFirebase();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tentang BBA', href: '/tentang' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Ekosistem BBA', href: '/ekosistem' },
    { name: 'Artikel', href: '/artikel' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <div className="min-h-screen bg-editorial-bg flex flex-col font-sans">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Header / Navbar */}
      <nav className={`editorial-nav fixed top-0 left-0 right-0 z-[90] transition-all duration-500 border-b ${
        isScrolled 
          ? 'py-3 bg-white/70 backdrop-blur-xl border-editorial-border shadow-sm' 
          : 'py-6 bg-transparent border-transparent'
      }`}>
        <div className="container mx-auto px-4 lg:px-10 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-[32px] h-[32px] overflow-hidden rounded-lg bg-editorial-secondary flex items-center justify-center shrink-0">
              <img 
                src={siteContent.branding.logoUrl} 
                alt={siteContent.branding.logoAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = siteContent.branding.logoUrl;
                }}
              />
            </div>
            <span className={`font-poppins font-bold text-sm lg:text-base tracking-tight uppercase leading-tight whitespace-nowrap transition-colors duration-500 ${
              isScrolled ? 'text-editorial-primary' : 'text-editorial-primary'
            }`}>
              {siteContent.branding.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-4 xl:gap-8 flex-nowrap">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.href}
                className={({ isActive }) => `text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.05em] transition-all relative py-1 whitespace-nowrap ${
                  isActive 
                  ? 'text-editorial-primary border-b-2 border-editorial-secondary' 
                  : `opacity-70 hover:opacity-100 hover:text-editorial-primary ${isScrolled ? 'text-editorial-text' : 'text-editorial-text'}`
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-editorial-primary hover:opacity-70 transition-opacity p-2 hover:bg-black/5 rounded-full"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <a 
              href={siteContent.kontak.consultationLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`editorial-btn-primary py-2 px-6 text-[11px] transition-all duration-500 ${
                isScrolled ? 'shadow-md' : 'shadow-none'
              }`}
            >
              Konsultasi
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-editorial-primary p-2"
            >
              <Search className="w-6 h-6" />
            </button>
            <button 
              className="p-2 text-editorial-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-[80px] left-0 right-0 bg-white border-b border-editorial-border z-50 shadow-xl overflow-hidden"
            >
              <div className="p-6 space-y-6 bg-white">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.name} 
                    to={link.href}
                    className="block text-sm font-bold uppercase tracking-wider text-editorial-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                
                <div className="pt-4 border-t border-editorial-border flex flex-col gap-4">
                  <a 
                    href={siteContent.kontak.consultationLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full text-center editorial-btn-primary py-3"
                  >
                    Konsultasi Gratis
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-editorial-primary pt-20 pb-10 text-white/60">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="grid lg:grid-cols-4 gap-20 mb-20 text-center lg:text-left">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                <img 
                  src={siteContent.branding.logoUrl} 
                  alt={siteContent.branding.logoAlt}
                  className="w-[48px] h-[48px] object-cover rounded-lg bg-editorial-secondary p-1"
                  referrerPolicy="no-referrer"
                />
                <span className="font-poppins font-bold text-2xl tracking-tighter text-white uppercase italic">
                  {siteContent.branding.name}
                </span>
              </div>
              <p className="max-w-md mx-auto lg:mx-0 text-white/40 mb-10 text-sm leading-relaxed">
                Platform Sekolah Owner Bisnis Apotek terbaik di Indonesia. Memberikan layanan pendampingan, audit bisnis, dan edukasi bagi pengusaha farmasi modern yang ingin bisnisnya sehat dan berkelanjutan.
              </p>
              <div className="flex justify-center lg:justify-start gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                <a href="#" className="hover:text-editorial-secondary transition-colors">WhatsApp</a>
                <a href="#" className="hover:text-editorial-secondary transition-colors">Instagram</a>
                <a href="#" className="hover:text-editorial-secondary transition-colors">LinkedIn</a>
              </div>
            </div>

            <div>
              <h4 className="font-poppins font-bold text-white mb-8 uppercase tracking-[0.2em] text-[11px]">Directory</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link to="/" className="hover:text-white transition-colors">Front Page</Link></li>
                <li><Link to="/tentang" className="hover:text-white transition-colors">About the Studio</Link></li>
                <li><Link to="/layanan" className="hover:text-white transition-colors">Services Index</Link></li>
                <li><Link to="/artikel" className="hover:text-white transition-colors">Insights Archive</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-poppins font-bold text-white mb-8 uppercase tracking-[0.2em] text-[11px]">Office</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex justify-center lg:justify-start gap-2">
                  <span>P:</span> <span>{siteContent.kontak.phone}</span>
                </li>
                <li className="flex justify-center lg:justify-start gap-2">
                  <span>E:</span> <span>{siteContent.kontak.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.25em] text-center">
            <p>© 2026 {siteContent.branding.name} STUDIO. INDONESIA.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white">Privacy Journal</a>
              <a href="#" className="hover:text-white">Terms of Entry</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
