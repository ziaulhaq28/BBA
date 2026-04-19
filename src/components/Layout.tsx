import { ReactNode, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Menu, X, Phone, MessageSquare, Globe, Info, Building2, LogOut, User as UserIcon, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteContent } from '../constants/content';
import { useFirebase } from '../lib/firebase';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, profile, isAdmin, login, logout } = useFirebase();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tentang BBA', href: '/tentang' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Ekosistem BBA', href: '/ekosistem' },
    { name: 'Artikel', href: '/artikel' },
    { name: 'Kontak', href: '/kontak' },
    ...(isAdmin ? [{ name: 'Admin Dashboard', href: '/admin' }] : []),
  ];

  return (
    <div className="min-h-screen bg-editorial-bg flex flex-col font-sans">
      {/* Header / Navbar */}
      <nav className="editorial-nav">
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
            <span className="font-poppins font-bold text-sm lg:text-base tracking-tight text-editorial-primary uppercase leading-tight whitespace-nowrap">
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
                  : 'text-editorial-text opacity-70 hover:opacity-100 hover:text-editorial-primary'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button className="text-editorial-primary hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
            
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-editorial-primary flex items-center gap-1 uppercase tracking-widest">
                    {profile?.displayName || user.displayName}
                    {isAdmin && <ShieldCheck className="w-3 h-3 text-editorial-secondary" />}
                  </span>
                  <button onClick={logout} className="text-[9px] font-bold text-red-500 hover:underline uppercase tracking-widest flex items-center gap-1">
                    <LogOut className="w-2 h-2" /> Logout
                  </button>
                </div>
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full border border-editorial-border" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-editorial-bg flex items-center justify-center border border-editorial-border">
                    <UserIcon className="w-4 h-4 text-editorial-muted" />
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={login}
                className="font-poppins font-bold text-[12px] text-editorial-secondary hover:underline flex items-center gap-2"
              >
                <UserIcon className="w-4 h-4" /> LOGIN
              </button>
            )}
          </div>

          <button 
            className="lg:hidden p-2 text-editorial-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
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
                  {user && (
                    <div className="flex items-center gap-3 mb-2">
                      <img src={user.photoURL || ''} alt="Profile" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                      <div>
                        <p className="font-bold text-editorial-primary text-sm uppercase">{user.displayName}</p>
                        {isAdmin && <p className="text-[10px] font-bold text-editorial-secondary uppercase">Administrator</p>}
                      </div>
                    </div>
                  )}

                  <a 
                    href={siteContent.kontak.consultationLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full text-center editorial-btn-primary py-3"
                  >
                    Konsultasi Gratis
                  </a>
                  
                  <div className="flex justify-center">
                    {user ? (
                      <button onClick={logout} className="text-xs font-bold text-red-500 uppercase tracking-widest font-poppins">Logout</button>
                    ) : (
                      <button onClick={login} className="text-xs font-bold text-editorial-secondary uppercase tracking-widest font-poppins">Login with Google</button>
                    )}
                  </div>
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
