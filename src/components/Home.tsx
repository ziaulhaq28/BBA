import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, CheckCircle2, Star, Quote, Signal, Users, ShieldCheck, PlayCircle } from 'lucide-react';
import { siteContent } from '../constants/content';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex flex-col bg-[#F8FAFB]">
      {/* Hero Section - Redesigned: Centered, Focused, Softer Shape */}
      <section id="home" className="pt-20 pb-20 px-4 md:px-10 lg:px-20 relative overflow-hidden">
        {/* Background Subtle Shadow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-50 -z-10" />
        
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-[60px] p-12 md:p-24 text-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden"
          >
            {/* Soft decorative blur */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-editorial-secondary/5 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-editorial-primary/5 rounded-full blur-[80px]" />

            <div className="relative z-10 space-y-10">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 rounded-full bg-editorial-bg text-editorial-secondary font-bold text-xs uppercase tracking-widest"
              >
                {siteContent.home.hero.eyebrow}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-7xl font-poppins font-bold text-editorial-primary leading-[1.1] tracking-tight"
              >
                {siteContent.home.hero.headline.split(' ').map((word, i) => (
                  <span key={i} className={word === 'Profit' || word === 'Potensi' ? 'text-editorial-secondary' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-2xl text-editorial-muted max-w-3xl mx-auto leading-relaxed font-serif italic"
              >
                "{siteContent.home.hero.description}"
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-6 pt-6"
              >
                <Link to="/kontak" className="editorial-btn-primary px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform text-lg">
                  {siteContent.home.hero.ctaPrimary}
                </Link>
                <Link to="/layanan" className="editorial-btn-secondary px-12 py-5 rounded-full border-2 bg-transparent text-editorial-primary border-editorial-primary hover:bg-editorial-primary hover:text-white transition-all text-lg flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" /> Lihat Semua Layanan
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Row - Featured 3 */}
      <section className="pb-24 px-4 md:px-10 lg:px-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-editorial-primary mb-4 tracking-tight italic">LAYANAN UTAMA KAMI</h2>
            <p className="text-editorial-muted font-bold uppercase tracking-widest text-xs">Pondasi Kokoh untuk Bisnis Apotek Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteContent.layanan.items.map((service, index) => (
              <Link 
                to={`/layanan/${service.slug}`} 
                key={service.id}
                className="h-full"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[40px] border border-editorial-border hover:border-editorial-secondary hover:shadow-2xl transition-all group h-full relative overflow-hidden flex flex-col shadow-sm"
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="font-serif text-4xl text-editorial-secondary/20 font-black mb-8 block group-hover:text-editorial-secondary transition-colors">
                      {service.id}
                    </span>
                    <h3 className="text-2xl font-poppins font-bold mb-6 text-editorial-primary group-hover:text-editorial-secondary transition-colors italic tracking-tight uppercase leading-none">
                      {service.title}
                    </h3>
                    <p className="text-editorial-muted leading-relaxed font-serif italic mb-10 flex-1 text-lg">
                      "{service.description}"
                    </p>
                    <div className="flex items-center text-editorial-secondary font-bold text-[10px] uppercase tracking-[0.3em] group-hover:translate-x-2 transition-transform">
                      Lihat Program <ArrowRight className="w-5 h-5 ml-3" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services - Grid Style based on user image */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-white">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-editorial-primary mb-4 tracking-tight uppercase italic">Program & Produk BBA Lainnya</h2>
            <p className="text-editorial-muted font-bold uppercase tracking-widest text-xs">Pilihan edukasi terlengkap untuk setiap kebutuhan</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {siteContent.layanan.additionalItems?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex flex-col group hover:shadow-[0_15px_45px_rgba(0,0,0,0.1)] transition-all"
              >
                {/* Image Top */}
                <div className="aspect-video w-full overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-poppins font-bold text-slate-800 mb-8 min-h-[56px] leading-snug">
                    {item.title}
                  </h3>

                  {/* Metadata Row */}
                  <div className="flex items-center justify-between mt-auto pb-8 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                       <Signal className="w-4 h-4 text-editorial-secondary" />
                       <span className="text-[11px] font-bold text-slate-500 uppercase">{item.stats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Users className="w-4 h-4 text-editorial-secondary" />
                       <span className="text-[11px] font-bold text-slate-500 uppercase">Trusted</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <ShieldCheck className="w-4 h-4 text-editorial-secondary" />
                       <span className="text-[11px] font-bold text-slate-500 uppercase">Verified</span>
                    </div>
                  </div>

                  {/* Golden Button */}
                  <a 
                    href={siteContent.kontak.consultationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full py-4 bg-editorial-secondary text-white rounded-xl font-poppins font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-editorial-secondary/20"
                  >
                    <Quote className="w-4 h-4 fill-current rotate-180" /> KONSULTASI GRATIS
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apa Itu BBA Section */}
      <section className="py-24 bg-white border-t border-editorial-border">
        <div className="container mx-auto px-4 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-editorial-primary mb-8 tracking-tight italic">
              {siteContent.home.apaItuBBA.title}
            </h2>
            <div className="w-20 h-1 bg-editorial-secondary mx-auto mb-10" />
            <p className="text-lg md:text-xl text-editorial-muted leading-relaxed italic font-serif opacity-80">
              "{siteContent.home.apaItuBBA.content}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="py-24 bg-editorial-bg border-t border-editorial-border relative overflow-hidden">
         {/* Decorative Element */}
         <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 bg-editorial-secondary/10 rounded-full blur-3xl pointer-events-none" />
         <div className="absolute bottom-0 -left-20 w-64 h-64 bg-editorial-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-editorial-primary mb-10 tracking-tight flex items-center gap-4">
                <span className="w-12 h-[2px] bg-editorial-secondary hidden md:block"></span>
                {siteContent.home.tentangKami.title}
              </h2>
              <div className="prose prose-slate max-w-none text-editorial-muted text-lg leading-relaxed">
                <p className="mb-6">{siteContent.home.tentangKami.content}</p>
                <p>Kami hadir bukan hanya sebagai konsultan, tapi sebagai partner strategis yang memastikan setiap apotek yang kami dampingi memiliki standar operasional yang unggul, SDM yang berdedikasi, dan skema bisnis yang menguntungkan secara berkelanjutan.</p>
              </div>
              <div className="mt-12 flex gap-8 items-center border-t border-editorial-border pt-10">
                <div>
                   <p className="text-3xl font-poppins font-bold text-editorial-primary">500+</p>
                   <p className="text-xs uppercase tracking-widest font-bold text-editorial-secondary">Owner Didampingi</p>
                </div>
                <div className="w-[1px] h-10 bg-editorial-border" />
                <div>
                   <p className="text-3xl font-poppins font-bold text-editorial-primary">25+</p>
                   <p className="text-xs uppercase tracking-widest font-bold text-editorial-secondary">Provinsi Terjangkau</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800" 
                  alt="Pemandangan Bisnis" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-editorial-primary text-white p-6 rounded-2xl shadow-xl hidden md:block border-2 border-white">
                 <p className="font-poppins font-bold text-2xl">Membangun Apotek</p>
                 <p className="text-editorial-secondary italic font-serif">Sehat & Berkelanjutan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-editorial-border overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-editorial-primary mb-4">MEREKA YANG TELAH SUKSES</h2>
            <p className="text-editorial-muted font-medium uppercase tracking-widest text-xs">Testimoni Alumni & Klien BBA</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteContent.home.testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-editorial-bg p-10 rounded-3xl relative"
              >
                <Quote className="absolute top-6 left-6 w-10 h-10 text-editorial-secondary/10" />
                <div className="flex gap-1 text-yellow-500 mb-6">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-editorial-text italic mb-8 relative z-10 font-serif leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 border-t border-editorial-border pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-editorial-primary text-sm font-poppins">{testimonial.name}</p>
                    <p className="text-editorial-muted text-xs font-semibold uppercase">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-editorial-primary text-white text-center">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-8 text-balance">Siap Membangun Apotek <span className="text-editorial-secondary italic">Masa Depan</span> Anda?</h2>
           <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg">Jangan biarkan keraguan menghambat langkah Anda. BBA hadir untuk memberikan kepastian langkah bagi bisnis apotek Anda.</p>
           <a 
             href={siteContent.kontak.consultationLink} 
             target="_blank" 
             rel="noopener noreferrer" 
             className="bg-editorial-secondary text-white px-12 py-5 rounded-full font-poppins font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-lg shadow-black/20"
           >
             Mulai Konsultasi Gratis Sekarang <ArrowRight className="w-6 h-6" />
           </a>
         </div>
      </section>
    </div>
  );
};
