/**
 * FILE: src/components/Services.tsx
 * TUJUAN: Halaman daftar semua layanan dan produk BBA.
 * 
 * PENJELASAN:
 * - Menampilkan 3 Layanan Utama di bagian atas.
 * - Menampilkan 20+ Program & Produk BBA Lainnya (Bootcamp, Buku, Kelas, dll) di bagian bawah.
 * - Data diambil otomatis dari 'src/constants/content.ts'.
 */
import { motion } from 'motion/react';
import { siteContent } from '../constants/content';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Quote, ShieldCheck, Signal, Users } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

export const Layanan = () => {
  return (
    <div className="bg-editorial-bg py-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="max-w-4xl pt-10 mb-20 text-center lg:text-left">
           <span className="font-serif italic text-editorial-secondary text-xl mb-4 block">Expert Solutions</span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-editorial-primary mb-8 tracking-tight italic uppercase">
              {siteContent.layanan.title}
           </h1>
           <p className="text-lg text-editorial-muted leading-relaxed font-serif">
             Kami menyediakan layanan pendampingan menyeluruh yang dirancang untuk menjawab tantangan spesifik di setiap tahapan bisnis apotek Anda.
           </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
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
               <h3 className="text-2xl font-poppins font-bold text-editorial-primary mb-6 leading-tight italic uppercase">{service.title}</h3>
               <p className="text-editorial-muted leading-relaxed mb-10 flex-1 font-serif italic">"{service.description}"</p>
               <Link 
                 to={`/layanan/${service.slug}`} 
                 className="editorial-btn-primary self-start text-[10px] py-3 px-6 flex items-center gap-2"
               >
                 Lihat Detail <ChevronRight className="w-3 h-3" />
               </Link>
             </motion.div>
          ))}
        </div>

        {/* Additional Services - Now on the Services page */}
        <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-editorial-primary mb-4 tracking-tight uppercase italic text-center">Program & Produk BBA Lainnya</h2>
            <p className="text-editorial-muted font-bold uppercase tracking-widest text-xs text-center">Pilihan edukasi terlengkap untuk setiap kebutuhan</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {siteContent.layanan.additionalItems?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-editorial-border flex flex-col group hover:shadow-2xl transition-all"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-editorial-primary/10 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg lg:text-xl font-poppins font-bold text-editorial-primary mb-8 min-h-[56px] leading-snug italic uppercase">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between mt-auto pb-8 border-b border-editorial-border">
                  <div className="flex items-center gap-2">
                     <Signal className="w-4 h-4 text-editorial-secondary" />
                     <span className="text-[10px] font-bold text-editorial-muted uppercase">{item.stats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Users className="w-4 h-4 text-editorial-secondary" />
                     <span className="text-[10px] font-bold text-editorial-muted uppercase">Trusted</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4 text-editorial-secondary" />
                     <span className="text-[10px] font-bold text-editorial-muted uppercase">Verified</span>
                  </div>
                </div>

                <a 
                  href={siteContent.kontak.consultationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-4 bg-editorial-primary text-white rounded-2xl font-poppins font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-editorial-secondary transition-all shadow-lg active:scale-95"
                >
                  <Quote className="w-3 h-3 fill-current rotate-180" /> KONSULTASI GRATIS
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 p-12 bg-editorial-primary rounded-[40px] text-white overflow-hidden relative">
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-editorial-secondary/20 rounded-full blur-3xl" />
           <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                 <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 italic">MENGAPA MEMILIH BBA?</h2>
                 <p className="text-white/60 mb-10 leading-relaxed font-serif italic text-lg">Metodologi kami bukan sekadar teori manajemen. Kami memberikan tools praktis yang siap diaplikasikan di lapangan.</p>
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
                 <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800" alt="Services" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceDetail = () => {
    const { slug } = useParams();
    const service = siteContent.layanan.items.find(s => s.slug === slug);
  
    if (!service) return <div className="py-40 text-center font-bold">Layanan tidak ditemukan.</div>;
  
    return (
      <div className="bg-white py-24 min-h-screen">
        <div className="container mx-auto px-4 lg:px-20">
          <Link to="/layanan" className="inline-flex items-center gap-2 text-editorial-secondary font-bold uppercase tracking-widest text-[10px] mb-12 hover:-translate-x-2 transition-transform">
            <ArrowRight className="w-4 h-4 rotate-180" /> Kembali ke Layanan
          </Link>
  
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="font-serif italic text-editorial-secondary text-2xl mb-4 block">Detail Program</span>
              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-editorial-primary mb-10 tracking-tight leading-[1.1] uppercase italic">
                {service.title}
              </h1>
              <p className="text-xl text-editorial-muted leading-relaxed mb-12 font-serif italic border-l-4 border-editorial-secondary pl-8">
                {service.fullDescription}
              </p>
  
              <div className="space-y-6">
                <h4 className="font-poppins font-bold text-[10px] uppercase tracking-[0.3em] text-editorial-primary mb-6">TAHAPAN PENGERJAAN:</h4>
                <div className="grid gap-4">
                  {service.steps?.map((step, i) => (
                    <div key={i} className="flex items-center gap-4 bg-editorial-bg p-5 rounded-2xl border border-editorial-border">
                      <div className="w-8 h-8 rounded-full bg-editorial-primary text-white flex items-center justify-center font-black text-xs">
                        {i + 1}
                      </div>
                      <span className="font-poppins font-bold text-xs uppercase tracking-widest text-editorial-primary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
  
              <div className="mt-12 flex gap-4">
                <a href={siteContent.kontak.consultationLink} target="_blank" rel="noopener noreferrer" className="editorial-btn-primary">
                  Daftar Konsultasi <ArrowRight className="w-4 h-4 ml-2 inline" />
                </a>
              </div>
            </motion.div>
  
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square bg-editorial-bg rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-8 border-white"
              >
                <img src={service.visualization} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              {/* Decorative Blur */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-editorial-secondary/20 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-editorial-primary/10 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </div>
    );
  };
