import React, { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import '../css/ServicePage.css';
import logoPng from '../assets/logo.png';
import eylul from '../assets/5eylül.png';
import gaveciali from '../assets/gaveciali.png';
import makaratavuk from '../assets/makaratavuk.png';
import ondokuzayvalik from '../assets/ondokuzayvalik.png';
import wooplounge from '../assets/woop.png';
import tostcu from '../assets/SehrinTostcusu.png';

// Örnek KOBİ verisi
const kobiler = [
  {
    name: 'On Dokuz Ayvalık',
    image: ondokuzayvalik,
    menuUrl: 'http://qreatione.com/ondokuz',
  },
  {
    name: 'Gaveci Ali',
    image: gaveciali,
    menuUrl: 'http://qreatione.com/gaveciali',
  },
  {
    name: 'Makara Tavuk',
    image: makaratavuk,
    menuUrl: 'http://qreatione.com/makaratavuk',
  },
  {
    name: 'Woop Lounge',
    image: wooplounge,
    menuUrl: 'http://qreatione.com/wooplounge',
  },
  {
    name: 'Beş Eylül Sosyal Tesisleri',
    image: eylul,
    menuUrl: 'http://qreatione.com/beseylulsosyaltesisleri',
  },
  {
    name: 'Sehrin Tostçusu',
    image: tostcu,
    menuUrl: 'http://qreatione.com/sehrintostcusu',
  },

];

const MAX_VISIBLE = 6;

const ServicesPage = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleKobiler = showAll ? kobiler : kobiler.slice(0, MAX_VISIBLE);

  return (
    <section className="collab-section">
      <div className="container">
        <h1 className="section-title" style={{ color: '#111' }}>
          İş Birliklerimiz
        </h1>
        <div className="collab-grid">
          {visibleKobiler.map((kobi, idx) => (
            <div className="collab-card" key={kobi.name + idx}>
              <img src={kobi.image} alt={kobi.name} className="collab-img" />
              <div className="collab-link" style={{ color: '#111', textDecoration: 'none', cursor: 'default', pointerEvents: 'none' }}>
                {kobi.name}
              </div>
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