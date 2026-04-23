import { motion } from 'motion/react';
import { siteContent } from '../constants/content';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';

export const Artikel = () => {
  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl text-center lg:text-left">
              <span className="font-serif italic text-editorial-secondary text-xl mb-4 block">Archive & Insights</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-editorial-primary tracking-tight">Wawasan & Analisis.</h1>
           </div>
           <p className="text-editorial-muted text-sm font-bold uppercase tracking-[0.2em] max-w-xs text-center lg:text-right">
             PEMIKIRAN TERPILIH TENTANG MANAJEMEN RETAIL FARMASI MODERN.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 border-t border-editorial-border pt-16">
          {siteContent.artikel.highlights.map((article, i) => (
             <Link to={`/artikel/${article.slug}`} key={i} className="group flex flex-col gap-8">
                <div className="aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500">
                   <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-editorial-muted">
                      <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {article.date}</span>
                      <span className="flex items-center gap-2"><Tag className="w-3 h-3" /> Strategi Bisnis</span>
                   </div>
                   <h2 className="text-3xl font-serif font-bold text-editorial-primary leading-tight group-hover:text-editorial-secondary transition-colors">
                     {article.title}
                   </h2>
                   <p className="text-editorial-muted leading-relaxed line-clamp-3 italic font-serif">
                     "{article.excerpt}"
                   </p>
                   <div className="pt-4 flex items-center gap-3 font-poppins font-bold text-xs uppercase tracking-widest text-editorial-primary group-hover:gap-6 transition-all underline underline-offset-8">
                      Baca Analisis Lengkap <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ArtikelDetail = () => {
    const { slug } = useParams();
    const article = siteContent.artikel.highlights.find(a => a.slug === slug) || siteContent.artikel.highlights[0];

    return (
        <div className="bg-white py-24 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link to="/artikel" className="inline-flex items-center gap-3 text-editorial-secondary font-bold uppercase tracking-widest text-xs mb-12 hover:-translate-x-2 transition-transform">
                    <ArrowRight className="w-4 h-4 rotate-180" /> Kembali ke Artikel
                </Link>

                <div className="mb-16">
                    <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-editorial-muted mb-6">
                        <span>{article.date}</span>
                        <span>BY TIM BBA KONSTRUKTIF</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-poppins font-bold text-editorial-primary leading-[1.2] mb-10 tracking-tight">
                        {article.title}
                    </h1>
                    <div className="aspect-[16/9] bg-slate-100 rounded-[40px] overflow-hidden shadow-2xl mb-16">
                        <img src={article.img} alt={article.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    
                    <div className="prose prose-lg prose-slate max-w-none text-editorial-text font-serif leading-relaxed space-y-8">
                        {article.content.split('\n\n').map((para, i) => {
                            if (para.trim().startsWith('# ')) return <h1 key={i} className="text-3xl font-poppins font-bold mt-12 mb-6 text-editorial-primary">{para.replace('# ', '')}</h1>;
                            if (para.trim().startsWith('## ')) return <h2 key={i} className="text-xl font-poppins font-bold mt-10 mb-5 text-editorial-primary border-l-4 border-editorial-secondary pl-6">{para.replace('## ', '')}</h2>;
                            return <p key={i} className="mb-6 opacity-90 text-lg leading-relaxed">{para}</p>;
                        })}
                    </div>
                </div>
                
                <div className="border-t border-editorial-border pt-16 text-center">
                    <Link to="/kontak" className="editorial-btn-primary inline-block">
                        Konsultasi Strategi Bersama BBA
                    </Link>
                </div>
            </div>
        </div>
    );
}

export const Tentang = () => {
    return (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-editorial-bg py-24 min-h-screen"
        >
          <div className="container mx-auto px-4 lg:px-20 text-center lg:text-left">
             <div className="max-w-4xl mx-auto mb-24">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="font-serif italic text-editorial-secondary text-xl mb-4 block"
                >
                  Visi & Misi
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-5xl md:text-7xl font-poppins font-bold text-editorial-primary mb-10 tracking-tight leading-tight"
                >
                    Mencetak Owner <br />
                    Apotek Berintegritas.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-xl text-editorial-muted leading-relaxed italic font-serif"
                >
                   "Kami percaya bahwa apotek yang sukses adalah yang mampu menyeimbangkan visi kesehatan sosial dengan kemandirian bisnis yang kuat. Di BBA, kami membekali Anda bukan hanya dengan angka, tapi dengan keberanian untuk melakukan hal yang benar."
                </motion.p>
             </div>

             <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="aspect-square bg-white p-4 rounded-[60px] shadow-2xl relative"
                >
                   <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800" alt="Landscape" className="w-full h-full object-cover rounded-[50px]" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-8 text-left"
                >
                   <h2 className="text-3xl font-poppins font-bold text-editorial-primary">MENGAPA KAMI ADA?</h2>
                   <p className="text-editorial-muted leading-relaxed text-lg italic font-serif">
                      BBA hadir sebagai komitmen untuk membenahi industri farmasi dari dalam. Kami ingin setiap langkah yang Anda ambil adalah langkah yang terukur.
                   </p>
                   <p className="text-editorial-muted leading-relaxed text-lg">
                      {siteContent.home.tentangKami.content}
                   </p>
                   <div className="grid grid-cols-2 gap-6 pt-6">
                      <div className="bg-white p-6 rounded-2xl border border-editorial-border">
                         <h4 className="font-poppins font-bold text-editorial-primary mb-2">INTEGRITAS</h4>
                         <p className="text-xs text-editorial-muted leading-relaxed">Menomorsatukan kualitas pelayanan dan kejujuran bisnis.</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-editorial-border">
                         <h4 className="font-poppins font-bold text-editorial-primary mb-2">INOVASI</h4>
                         <p className="text-xs text-editorial-muted leading-relaxed">Membawa teknologi IT ke apotek konvensional.</p>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>
        </motion.div>
    );
}
