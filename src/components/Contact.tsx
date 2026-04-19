import { motion } from 'motion/react';
import { siteContent } from '../constants/content';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

export const Kontak = () => {
  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-24">
           <div>
              <span className="font-serif italic text-editorial-secondary text-xl mb-4 block">Get in Touch</span>
              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-editorial-primary mb-10 tracking-tight leading-tight">Mulai Bersama BBA.</h1>
              <p className="text-lg text-editorial-muted leading-relaxed mb-12 max-w-md">
                Hubungi tim konsultan kami untuk mendiskusikan rencana bisnis atau permasalahan apotek Anda. Kami siap memberikan feedback awal secara cuma-cuma.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-editorial-bg rounded-2xl flex items-center justify-center text-editorial-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-editorial-secondary mb-1">Kantor Pusat</h4>
                      <p className="text-editorial-text font-serif italic text-lg">{siteContent.kontak.address}</p>
                   </div>
                </div>

                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-editorial-bg rounded-2xl flex items-center justify-center text-editorial-primary shrink-0">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-editorial-secondary mb-1">Hotline Dampingan</h4>
                      <p className="text-editorial-text font-serif italic text-lg">{siteContent.kontak.phone}</p>
                   </div>
                </div>

                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-editorial-bg rounded-2xl flex items-center justify-center text-editorial-primary shrink-0">
                      <Mail className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-poppins font-bold text-xs uppercase tracking-widest text-editorial-secondary mb-1">Email Korespondensi</h4>
                      <p className="text-editorial-text font-serif italic text-lg">{siteContent.kontak.email}</p>
                   </div>
                </div>
              </div>
           </div>

           <div className="bg-editorial-bg p-12 rounded-[50px] shadow-sm border border-editorial-border">
              <h3 className="text-2xl font-poppins font-bold text-editorial-primary mb-8 tracking-tight">KIRIM PESAN LANGSUNG</h3>
              <form className="space-y-6">
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-editorial-muted mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full bg-white border border-editorial-border px-6 py-4 rounded-xl outline-none focus:border-editorial-secondary transition-colors" placeholder="Masukkan nama Anda..." />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-editorial-muted mb-2">Nomor WhatsApp</label>
                    <input type="tel" className="w-full bg-white border border-editorial-border px-6 py-4 rounded-xl outline-none focus:border-editorial-secondary transition-colors" placeholder="+62 812..." />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-editorial-muted mb-2">Topik Konsultasi</label>
                    <select className="w-full bg-white border border-editorial-border px-6 py-4 rounded-xl outline-none focus:border-editorial-secondary transition-colors appearance-none">
                       <option>Buka Apotek Baru</option>
                       <option>Optimasi Omzet (Apotek Sudah Jalan)</option>
                       <option>Sistemasi SDM & IT</option>
                       <option>Lainnya</option>
                    </select>
                 </div>
                 <button className="editorial-btn-primary w-full py-5 rounded-2xl shadow-xl shadow-editorial-primary/10 flex items-center justify-center gap-4">
                    Kirim Sekarang <MessageCircle className="w-5 h-5" />
                 </button>
              </form>
              <div className="mt-8 pt-8 border-t border-editorial-border text-center">
                 <p className="text-xs text-editorial-muted italic font-serif">Tim kami akan menghubungi Anda kembali dalam 1x24 jam kerja.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
