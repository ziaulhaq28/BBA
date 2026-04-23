/**
 * FILE: src/components/Admin.tsx
 * TUJUAN: Halaman Dashboard untuk Admin.
 * OUTPUT: Menampilkan daftar formulir masuk (inquiries) dari database Firebase Firestore.
 * 
 * ALUR KERJA:
 * 1. File ini bergantung pada 'src/lib/firebase.tsx' untuk mendapatkan status login admin.
 * 2. Mengambil data dari koleksi 'inquiries' di database.
 * 3. Jika user bukan admin, akses akan ditolak.
 * 
 * CARA KERJA CODE:
 * - useEffect: Menjalankan fungsi fetchInquiries saat halaman dibuka.
 * - toggleStatus: Mengubah status pesan (Baru vs Selesai) langsung ke database.
 */
import { useEffect, useState } from 'react';
import { useFirebase } from '../lib/firebase';
import { collection, query, orderBy, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion } from 'motion/react';
import { Mail, Phone, Calendar, CheckCircle, Clock } from 'lucide-react';

export const AdminDashboard = () => {
  // Mengambil data user dan status admin dari custom hook useFirebase
  const { user, isAdmin, loading: authLoading } = useFirebase();
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil data dari Firestore
  useEffect(() => {
    const fetchInquiries = async () => {
      if (!isAdmin) return; // Keamanan: Hanya jalankan jika admin
      try {
        // query: Mengatur cara pengambilan data (diurutkan berdasarkan waktu terbaru)
        const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setInquiries(data); // Simpan data ke dalam state/variabel 'inquiries'
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, [isAdmin]);

  // Fungsi untuk mengubah status pesan
  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'new' ? 'processed' : 'new';
    try {
      // Update data di server (Firestore)
      await updateDoc(doc(db, 'inquiries', id), { status: newStatus });
      // Update tampilan di layar tanpa refresh (Optimistic UI)
      setInquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (authLoading) return <div className="py-24 text-center">Loading authentication...</div>;
  if (!user) return <div className="py-24 text-center font-bold text-red-500">Silakan login untuk mengakses halaman ini.</div>;
  if (!isAdmin) return <div className="py-24 text-center font-bold text-red-500 uppercase tracking-widest">Akses Ditolak. Halaman ini hanya untuk Administrator.</div>;

  return (
    <div className="bg-editorial-bg min-h-screen py-24">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="mb-12">
            <h1 className="text-4xl font-poppins font-bold text-editorial-primary italic uppercase underline underline-offset-8">Admin Dashboard</h1>
            <p className="text-editorial-muted font-serif italic mt-4">Daftar calon klien yang mengirimkan formulir konsultasi.</p>
        </div>

        {loading ? (
          <div className="text-center py-20">Memuat data...</div>
        ) : inquiries.length === 0 ? (
          <div className="bg-white p-20 rounded-[40px] text-center border border-editorial-border font-serif italic text-editorial-muted">
            Belum ada pesan yang masuk.
          </div>
        ) : (
          <div className="grid gap-6">
            {inquiries.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white p-8 rounded-3xl border ${item.status === 'new' ? 'border-editorial-secondary shadow-lg' : 'border-editorial-border opacity-70'} flex flex-col md:flex-row justify-between items-start md:items-center gap-6`}
              >
                <div className="space-y-2">
                   <div className="flex items-center gap-3">
                      <h3 className="font-poppins font-bold text-xl text-editorial-primary uppercase">{item.name}</h3>
                      {item.status === 'new' ? (
                        <span className="bg-editorial-secondary/10 text-editorial-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                           <Clock className="w-3 h-3" /> Baru
                        </span>
                      ) : (
                        <span className="bg-editorial-muted/10 text-editorial-muted px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                           <CheckCircle className="w-3 h-3" /> Diproses
                        </span>
                      )}
                   </div>
                   <div className="flex flex-wrap gap-4 text-[12px] text-editorial-muted font-bold tracking-tight">
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {item.whatsapp}</span>
                      <span className="flex items-center gap-1 uppercase tracking-widest"><Calendar className="w-3 h-3" /> {item.createdAt?.toDate().toLocaleDateString('id-ID')}</span>
                   </div>
                   <div className="bg-editorial-bg p-4 rounded-xl border border-editorial-border mt-4">
                      <p className="text-[10px] font-bold text-editorial-secondary uppercase mb-1">Topik:</p>
                      <p className="text-editorial-primary font-poppins font-bold text-sm tracking-tight">{item.topic}</p>
                   </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <a 
                      href={`https://wa.me/${item.whatsapp.replace(/\D/g,'')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none editorial-btn-primary py-3 px-6 text-[10px] text-center"
                    >
                        Hubungi via WA
                    </a>
                    <button 
                      onClick={() => toggleStatus(item.id, item.status)}
                      className="flex-1 md:flex-none editorial-btn-secondary py-3 px-6 text-[10px]"
                    >
                        {item.status === 'new' ? 'Tandai Selesai' : 'Buka Kembali'}
                    </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
