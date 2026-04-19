import { motion } from 'motion/react';
import { siteContent } from '../constants/content';
import { Layers, Target, Users, BookOpen, ShieldAlert, ArrowRight, CheckCircle2, Globe } from 'lucide-react';

export const Ekosistem = () => {
  const data = siteContent.ekosistem;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-editorial-primary text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Layers className="w-full h-full scale-150 rotate-12" />
        </div>
        <div className="container mx-auto px-4 lg:px-20 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif italic text-editorial-secondary text-xl mb-6 block"
            >
              {data.hero.eyebrow}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-8"
            >
              {data.hero.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed italic font-serif"
            >
              "{data.hero.description}"
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Ecosystem Section */}
      <section className="py-24 bg-white border-b border-editorial-border">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-editorial-primary mb-8 tracking-tight">
                {data.why.title}
              </h2>
              <p className="text-lg text-editorial-muted leading-relaxed font-serif italic border-l-4 border-editorial-secondary pl-8">
                {data.why.content}
              </p>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                 <div className="aspect-square bg-editorial-bg rounded-3xl p-8 flex flex-col justify-end border border-editorial-border hover:bg-editorial-secondary/10 transition-colors">
                    <Target className="w-10 h-10 text-editorial-secondary mb-4" />
                    <p className="font-bold text-xs uppercase tracking-widest text-editorial-primary">Bertahap</p>
                 </div>
                 <div className="aspect-square bg-editorial-primary rounded-3xl p-8 flex flex-col justify-end text-white">
                    <Layers className="w-10 h-10 text-editorial-secondary mb-4" />
                    <p className="font-bold text-xs uppercase tracking-widest ">Berulang</p>
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="aspect-square bg-editorial-secondary rounded-3xl p-8 flex flex-col justify-end text-white">
                    <Globe className="w-10 h-10 text-white mb-4" />
                    <p className="font-bold text-xs uppercase tracking-widest ">Terhubung</p>
                 </div>
                 <div className="aspect-square bg-editorial-bg rounded-3xl p-8 flex flex-col justify-end border border-editorial-border">
                    <BookOpen className="w-10 h-10 text-editorial-primary mb-4" />
                    <p className="font-bold text-xs uppercase tracking-widest text-editorial-primary">Praktik Nyata</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layers Section */}
      <section className="py-24 bg-editorial-bg">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-editorial-primary mb-4 italic">DI DALAM EKOSISTEM BBA</h2>
            <p className="text-editorial-muted uppercase tracking-[0.3em] font-bold text-xs">Architecting Your Pharmacy Success</p>
          </div>

          <div className="space-y-32">
            {data.layers.map((layer, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:items-center`}
              >
                <div className="flex-1">
                   <div className="aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group">
                      <img src={layer.image} alt={layer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                   </div>
                </div>
                <div className="flex-1 space-y-8">
                   <div>
                      <span className="text-editorial-secondary font-black text-6xl opacity-20 font-serif block mb-2 tracking-tighter italic">0{index + 1}</span>
                      <h4 className="text-editorial-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3">{layer.subtitle}</h4>
                      <h3 className="text-4xl font-poppins font-bold text-editorial-primary tracking-tight leading-none mb-6 italic">{layer.title}</h3>
                      <p className="text-editorial-muted leading-relaxed text-lg font-serif italic">"{layer.description}"</p>
                   </div>
                   
                   <div className="bg-white p-8 rounded-3xl border border-editorial-border shadow-sm">
                      <p className="font-poppins font-bold text-[10px] uppercase tracking-widest text-editorial-primary mb-4">Program & Layanan Terkait:</p>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {layer.examples.map((ex, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-semibold text-editorial-muted">
                            <CheckCircle2 className="w-4 h-4 text-editorial-secondary" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Disclaimer Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-editorial-primary p-12 lg:p-20 rounded-[60px] text-white text-center relative overflow-hidden shadow-2xl"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-editorial-accent rounded-full flex items-center justify-center mb-10 shadow-lg shadow-black/20">
                <ShieldAlert className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-10 tracking-tighter leading-tight italic">
                {data.disclaimer.title}
              </h2>
              
              <p className="text-xl md:text-2xl text-white/70 italic font-serif leading-relaxed mb-12 max-w-3xl mx-auto">
                "{data.disclaimer.content}"
              </p>
              
              <div className="flex flex-col items-center gap-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-editorial-secondary">Are you ready to commit?</p>
                <a 
                  href={siteContent.kontak.consultationLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-editorial-primary px-12 py-5 rounded-full font-poppins font-bold text-lg hover:bg-editorial-secondary hover:text-white transition-all inline-flex items-center gap-3"
                >
                  Ya, Saya Siap Berproses <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 border-t border-editorial-border bg-editorial-bg text-center">
        <div className="container mx-auto px-4">
           <Layers className="w-16 h-16 text-editorial-secondary mx-auto mb-10 opacity-30" />
           <h2 className="text-3xl md:text-4xl font-poppins font-bold text-editorial-primary mb-8 tracking-tight">KAMI MENUNGGU ANDA DI DALAM EKOSISTEM.</h2>
           <p className="text-editorial-muted mb-12 max-w-xl mx-auto italic font-serif">Mulai perjalanan terstruktur Anda hari ini bersama ratusan owner apotek visioner lainnya.</p>
           <a href="#consult" className="editorial-btn-primary">Hubungi Konsultan Kami</a>
        </div>
      </section>
    </div>
  );
};
