import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import { siteContent } from '../constants/content';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center border-r border-editorial-border bg-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-serif italic text-editorial-secondary text-lg md:text-xl mb-4 block">
              {siteContent.home.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-editorial-primary mb-8 leading-[1.1] tracking-tight text-balance">
              {siteContent.home.hero.headline}
            </h1>
            <p className="text-base md:text-lg text-editorial-muted max-w-sm mb-12 leading-relaxed font-serif italic">
              {siteContent.home.hero.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/kontak" className="editorial-btn-primary w-full md:w-auto text-center">
                {siteContent.home.hero.ctaPrimary}
              </Link>
              <Link to="/layanan/audit-optimasi-omzet" className="editorial-btn-secondary w-full md:w-auto text-center">
                {siteContent.home.hero.ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Services Highlights as Boxes with Shadows */}
        <div className="bg-[#EBF2F0] lg:bg-editorial-bg p-8 md:p-14 lg:p-16 flex flex-col justify-center gap-8">
          <div className="grid gap-6">
            {siteContent.layanan.items.map((service, index) => (
              <Link 
                to={`/layanan/${service.slug}`} 
                key={service.id}
              >
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="editorial-shadow-card flex flex-col group hover:bg-white transition-all cursor-pointer h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-serif text-sm text-editorial-secondary font-bold">{service.id}</span>
                    <div className="w-8 h-8 rounded-full bg-editorial-secondary/10 flex items-center justify-center text-editorial-secondary group-hover:bg-editorial-secondary group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-poppins font-bold mb-3 text-editorial-primary group-hover:text-editorial-secondary transition-colors italic">
                    {service.title}
                  </h3>
                  <p className="text-sm text-editorial-muted leading-relaxed font-serif italic">
                    "{service.description}"
                  </p>
                </motion.div>
              </Link>
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
