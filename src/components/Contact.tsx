import { motion } from 'motion/react';
import { siteContent } from '../constants/content';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { submitInquiry } from '../lib/firebase';

export const Kontak = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    topic: 'Buka Apotek Baru',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitInquiry(formData);
      setStatus('success');
      setFormData({ name: '', whatsapp: '', email: '', topic: 'Buka Apotek Baru' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-24">
           <div>
              <span className="font-serif italic text-editorial-secondary text-xl mb-4 block">Get in Touch</span>
              <h1 className="text-4xl md:text-6xl font-poppins font-bold text-editorial-primary mb-10 tracking-tight leading-tight italic uppercase">Mulai Bersama BBA.</h1>
              <p className="text-lg text-editorial-muted leading-relaxed mb-12 max-w-md font-serif italic">
                Hubungi tim konsultan kami untuk mendiskusikan rencana bisnis atau permasalahan apotek Anda. Kami siap memberikan feedback awal secara cuma-cuma.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-editorial-bg rounded-2xl flex items-center justify-center text-editorial-primary shrink-0 transition-colors hover:bg-editorial-primary hover:text-white">
                      <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-poppins font-bold text-[10px] uppercase tracking-widest text-editorial-secondary mb-1">Kantor Pusat</h4>
                      <p className="text-editorial-text font-serif italic text-lg">{siteContent.kontak.address}</p>
                   </div>
                </div>

                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-editorial-bg rounded-2xl flex items-center justify-center text-editorial-primary shrink-0 transition-colors hover:bg-editorial-primary hover:text-white">
                      <Phone className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-poppins font-bold text-[10px] uppercase tracking-widest text-editorial-secondary mb-1">Hotline Dampingan</h4>
                      <p className="text-editorial-text font-serif italic text-lg">{siteContent.kontak.phone}</p>
                   </div>
                </div>

                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 bg-editorial-bg rounded-2xl flex items-center justify-center text-editorial-primary shrink-0 transition-colors hover:bg-editorial-primary hover:text-white">
                      <Mail className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-poppins font-bold text-[10px] uppercase tracking-widest text-editorial-secondary mb-1">Email Korespondensi</h4>
                      <p className="text-editorial-text font-serif italic text-lg">{siteContent.kontak.email}</p>
                   </div>
                </div>
              </div>
           </div>

           <div className="bg-editorial-bg p-12 rounded-[50px] shadow-sm border border-editorial-border relative">
              {status === 'success' ? (
                <div className="absolute inset-0 bg-editorial-bg z-20 flex flex-col items-center justify-center p-12 rounded-[50px] text-center">
                    <CheckCircle className="w-20 h-20 text-editorial-secondary mb-8" />
                    <h3 className="text-3xl font-poppins font-bold text-editorial-primary mb-4 italic uppercase">PESAN TERKIRIM!</h3>
                    <p className="text-editorial-muted font-serif italic mb-8">Data Anda telah kami terima. Tim konsultan BBA akan menghubungi Anda melalui WhatsApp dalam waktu maksimal 1x24 jam.</p>
                    <button onClick={() => setStatus('idle')} className="editorial-btn-secondary text-[10px]">Kirim Pesan Lain</button>
                </div>
              ) : null}

              <h3 className="text-2xl font-poppins font-bold text-editorial-primary mb-8 tracking-tight italic uppercase underline underline-offset-8">KIRIM PESAN LANGSUNG</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-editorial-muted mb-2">Nama Lengkap</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white border border-editorial-border px-6 py-4 rounded-xl outline-none focus:border-editorial-secondary transition-colors font-poppins text-sm" 
                      placeholder="Masukkan nama Anda..." 
                    />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-editorial-muted mb-2">Nomor WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full bg-white border border-editorial-border px-6 py-4 rounded-xl outline-none focus:border-editorial-secondary transition-colors font-poppins text-sm" 
                      placeholder="+62 812..." 
                    />
                 </div>
                 <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-editorial-muted mb-2">Topik Konsultasi</label>
                    <select 
                      value={formData.topic}
                      onChange={(e) => setFormData({...formData, topic: e.target.value})}
                      className="w-full bg-white border border-editorial-border px-6 py-4 rounded-xl outline-none focus:border-editorial-secondary transition-colors appearance-none font-poppins text-sm cursor-pointer"
                    >
                       <option>Buka Apotek Baru</option>
                       <option>Optimasi Omzet (Apotek Sudah Jalan)</option>
                       <option>Sistemasi SDM & IT</option>
                       <option>Lainnya</option>
                    </select>
                 </div>
                 <button 
                   disabled={status === 'loading'}
                   className="editorial-btn-primary w-full py-5 rounded-2xl shadow-xl shadow-editorial-primary/10 flex items-center justify-center gap-4 group"
                 >
                    {status === 'loading' ? 'MENGIRIM...' : 'Kirim Sekarang'} 
                    <MessageCircle className="w-5 h-5 group-hover:scale-125 transition-transform" />
                 </button>
                 {status === 'error' && (
                   <p className="text-center text-red-500 text-[10px] font-bold uppercase tracking-widest mt-4">Terjadi kesalahan. Silakan coba lagi.</p>
                 )}
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
