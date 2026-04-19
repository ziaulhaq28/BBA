import { motion } from 'motion/react';
import { siteContent } from '../constants/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Layanan = () => {
  return (
    <div className="bg-editorial-bg py-24">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="max-w-4xl mb-20 text-center lg:text-left">
           <span className="font-serif italic text-editorial-secondary text-xl mb-4 block">Expert Solutions</span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-editorial-primary mb-8 tracking-tight italic">
             {siteContent.layanan.title}
           </h1>
           <p className="text-lg text-editorial-muted leading-relaxed">
             Kami menyediakan layanan pendampingan menyeluruh yang dirancang untuk menjawab tantangan spesifik di setiap tahapan bisnis apotek Anda.
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {siteContent.layanan.items.map((service, index) => (
             <motion.div 
               key={service.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               viewport={{ once: true }}
               className="bg-white p-12 rounded-3xl shadow-sm border border-editorial-border flex flex-col group hover:shadow-xl transition-all h-full"
             >
               <span className="text-6xl font-serif font-black text-editorial-secondary/20 mb-8 group-hover:text-editorial-secondary/40 transition-colors uppercase">{service.id}</span>
               <h3 className="text-2xl font-poppins font-bold text-editorial-primary mb-6 leading-tight italic">{service.title}</h3>
               <p className="text-editorial-muted leading-relaxed mb-10 flex-1">{service.description}</p>
               <button className="editorial-btn-primary self-start text-[10px] py-3 px-6">Detail Layanan</button>
             </motion.div>
          ))}
        </div>
        
        <div className="mt-24 p-12 bg-editorial-primary rounded-[40px] text-white overflow-hidden relative">
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-editorial-secondary/20 rounded-full blur-3xl" />
           <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                 <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">MENGAPA MEMILIH BBA?</h2>
                 <p className="text-white/60 mb-10 leading-relaxed">Metodologi kami bukan sekadar teori manajemen. Kami memberikan tools praktis yang siap diaplikasikan di lapangan.</p>
                 <div className="grid sm:grid-cols-2 gap-6">
                    {["Konsultan Berpengalaman", "SOP Siap Pakai", "Network PBF Luas", "Support IT Terintegrasi"].map((feat) => (
                      <div key={feat} className="flex items-center gap-3">
                        <CheckCircle2 className="text-editorial-secondary w-5 h-5 flex-shrink-0" />
                        <span className="font-bold text-xs uppercase tracking-widest">{feat}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                 <img src="https://picsum.photos/seed/services-main/800/600" alt="Services" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
