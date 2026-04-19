import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Layanan, ServiceDetail } from './components/Services';
import { Tentang, Artikel, ArtikelDetail } from './components/Pages';
import { Kontak } from './components/Contact';
import { Ekosistem } from './components/Ekosistem';
import { AdminDashboard } from './components/Admin';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/layanan/:slug" element={<ServiceDetail />} />
          <Route path="/ekosistem" element={<Ekosistem />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/:slug" element={<ArtikelDetail />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

