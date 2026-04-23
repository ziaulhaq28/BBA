/**
 * FILE: src/components/Home.tsx
 * TUJUAN: Halaman Beranda (Muka) Website BBA.
 * 
 * BAGIAN UTAMA:
 * 1. Hero Slider: Slider gambar di bagian atas dengan efek blur pada teks.
 * 2. Layanan Utama: Tiga produk inti (Pendirian, Audit, Sistemasi).
 * 3. Testimonial: Pendapat klien yang sudah sukses.
 */
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, CheckCircle2, Star, Quote, Signal, Users, ShieldCheck, PlayCircle, ArrowLeft } from 'lucide-react';
import { siteContent } from '../constants/content';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteContent.home.hero.slides || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col bg-[#F8FAFB]">
      {/* Hero Section - Slider Implementation */}
      <section id="home" className="relative h-[600px] lg:h-[800px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {/* Background Image with HD Quality and subtle zoom effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] scale-105"
              style={{ 
                backgroundImage: `url(${slides[currentSlide]?.image})`,
                backgroundColor: '#1a1a1a'
              }}
            />
            {/* Semi-transparent Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content Overlay */}
            <div className="container mx-auto px-4 lg:px-20 h-full flex flex-col justify-center relative z-10">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="bg-black/20 backdrop-blur-md p-8 md:p-14 lg:p-16 rounded-[2.5rem] border border-white/10"
                >
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-block px-5 py-2 rounded-full bg-editorial-secondary text-white font-bold text-xs uppercase tracking-widest mb-8"
                  >
                    {currentSlide === 0 ? "CSR COMMITMENT" : currentSlide === 1 ? "INTEGRATED ECOSYSTEM" : "THE PLATFORM"}
                  </motion.span>
                  
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-3xl md:text-5xl lg:text-7xl font-poppins font-bold text-white leading-[1.1] tracking-tight mb-8"
                  >
                    {slides[currentSlide]?.title}
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-base md:text-xl lg:text-2xl text-white/90 leading-relaxed font-serif italic mb-12"
                  >
                    "{slides[currentSlide]?.description}"
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="flex flex-wrap items-center gap-6"
                  >
                    <Link to="/kontak" className="editorial-btn-primary bg-editorial-secondary px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform text-lg text-white border-none">
                      {siteContent.home.hero.ctaPrimary}
                    </Link>
                    <Link to="/layanan" className="bg-white/10 backdrop-blur-md px-12 py-5 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-editorial-primary transition-all text-lg flex items-center gap-2 font-bold uppercase tracking-wider">
                      <PlayCircle className="w-5 h-5" /> Layanan BBA
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Bottom Left like reference */}
        <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-20 z-20 flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-editorial-secondary text-white flex items-center justify-center hover:bg-white hover:text-editorial-secondary transition-all shadow-xl active:scale-95"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-editorial-secondary text-white flex items-center justify-center hover:bg-white hover:text-editorial-secondary transition-all shadow-xl active:scale-95"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-20 z-20 flex gap-3">
          {slides.map((_, i) => (
            <div 
              key={i}
              className={`h-2 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-10 bg-editorial-secondary' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Main Services Row - Featured 3 */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-white">
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
          <div className="mt-16 text-center">
            <Link 
              to="/layanan" 
              className="inline-flex items-center gap-3 font-poppins font-bold text-xs uppercase tracking-[0.3em] text-editorial-secondary hover:translate-x-2 transition-transform group"
            >
              Lihat Seluruh Layanan & Produk Kami <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
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
