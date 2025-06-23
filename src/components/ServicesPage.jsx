import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import '../css/ServicePage.css';
import logoPng from '../assets/logo.png';
import logoJpeg from '../assets/logo2.jpeg';

// Örnek KOBİ verisi
const kobiler = [
  {
    name: 'Kafe Mavi',
    image: logoPng,
    menuUrl: 'https://kafemavi-qr.com',
  },
  {
    name: 'Kafe Mavi',
    image: logoPng,
    menuUrl: 'https://kafemavi-qr.com',
  },
  {
    name: 'Beyaz Fırın',
    image: logoJpeg,
    menuUrl: 'https://beyazfirin-qr.com',
  },
  {
    name: 'Yeşil Restoran',
    image: logoPng,
    menuUrl: 'https://yesilrestoran-qr.com',
  },
  {
    name: 'Tatlı Dükkanı',
    image: logoJpeg,
    menuUrl: 'https://tatlidukkani-qr.com',
  },
  {
    name: 'Kırmızı Büfe',
    image: logoPng,
    menuUrl: 'https://kirmizibufe-qr.com',
  },
  {
    name: 'Mor Pastane',
    image: logoJpeg,
    menuUrl: 'https://morpastane-qr.com',
  },
];

const MAX_VISIBLE = 6;

const ServicesPage = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleKobiler = showAll ? kobiler : kobiler.slice(0, MAX_VISIBLE);

  return (
    <section className="collab-section">
      <div className="container">
        <h1 className="section-title">
          İş Birliklerimiz
        </h1>
        <div className="collab-grid">
          {visibleKobiler.map((kobi, idx) => (
            <div className="collab-card" key={kobi.name + idx}>
              <img src={kobi.image} alt={kobi.name} className="collab-img" />
              <a href={kobi.menuUrl} target="_blank" rel="noopener noreferrer" className="collab-link">
                {kobi.name}
              </a>
            </div>
          ))}
        </div>
        {kobiler.length > MAX_VISIBLE && (
          <button className="collab-showmore-btn" onClick={() => setShowAll(v => !v)}>
            {showAll ? 'Daha Az Göster' : 'Daha Fazla Göster'}
            {showAll ? <ArrowUp size={20} style={{ marginLeft: 8 }} /> : <ArrowDown size={20} style={{ marginLeft: 8 }} />}
          </button>
        )}
      </div>
    </section>
  );
};

export default ServicesPage; 