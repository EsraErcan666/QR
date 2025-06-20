import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Smartphone, Globe, Shield, Zap, BarChart3, Users, Settings } from 'lucide-react';
import '../css/ServicesSection.css';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/contact');
  };

  const services = [
    {
      icon: <QrCode />,
      title: "QR Kod Oluşturma",
      description: "Özel tasarımlı QR kodlar ile markanızı öne çıkarın. Renkli, logo entegreli ve özelleştirilebilir QR kodlar.",
      features: ["Özel tasarım", "Logo entegrasyonu", "Renk seçenekleri"]
    },
    {
      icon: <Smartphone />,
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda mükemmel görünüm. Responsive tasarım ile her ekran boyutunda optimize edilmiş deneyim.",
      features: ["Responsive tasarım", "Hızlı yükleme", "Touch-friendly"]
    },
    {
      icon: <Globe />,
      title: "7/24 Erişim",
      description: "Kesintisiz hizmet garantisi. Yüksek performanslı sunucular ile %99.9 uptime oranı.",
      features: ["%99.9 uptime", "CDN desteği", "Otomatik yedekleme"]
    },
    {
      icon: <Shield />,
      title: "Güvenli Hosting",
      description: "SSL sertifikası ve güvenlik protokolleri ile verileriniz her zaman korunur.",
      features: ["SSL sertifikası", "DDoS koruması", "Güvenlik duvarı"]
    },
    {
      icon: <Zap />,
      title: "Hızlı Kurulum",
      description: "5 dakikada QR kodunuzu oluşturun ve yayına alın. Basit ve kullanıcı dostu arayüz.",
      features: ["5 dakika kurulum", "Kolay yönetim", "Anında yayın"]
    },
    {
      icon: <BarChart3 />,
      title: "Analitik Raporlar",
      description: "QR kod performansınızı takip edin. Detaylı analitik raporlar ile müşteri davranışlarını analiz edin.",
      features: ["Gerçek zamanlı veriler", "Detaylı raporlar", "Performans analizi"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <span className="gradient-text">QR Hosting</span> Hizmetlerimiz
          </h2>
          <p className="section-description">
            İşletmenizi dijital dünyaya taşıyacak kapsamlı QR hosting çözümlerimiz
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Floating QR Codes in CTA */}
          <div className="cta-floating-qrs">
            <div className="cta-floating-qr cta-qr-1">
              <QrCode size={40} />
            </div>
            <div className="cta-floating-qr cta-qr-2">
              <QrCode size={30} />
            </div>
            <div className="cta-floating-qr cta-qr-3">
              <QrCode size={35} />
            </div>
            <div className="cta-floating-qr cta-qr-4">
              <QrCode size={35} />
            </div>
            <div className="cta-floating-qr cta-qr-5">
              <QrCode size={45} />
            </div>
            <div className="cta-floating-qr cta-qr-6">
              <QrCode size={30} />
            </div>
            <div className="cta-floating-qr cta-qr-7">
              <QrCode size={40} />
            </div>
          </div>

          <div className="cta-content">
            <h3>Hemen Başlayın</h3>
            <p>Yaratıcı editörlerden, yaratıcı işletmelere değer katan dokunuşlar.</p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartClick}
            >
              Hemen Başlayın
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 