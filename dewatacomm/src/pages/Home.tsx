import React from 'react'
import { Helmet } from 'react-helmet-async'

import heroDesktop from '../assets/dewatacomm-homehero-desktop.webp'
import heroMobile from '../assets/dewatacomm-homehero-mobile.webp'
import imageLocation from '../assets/dewatacomm-location.webp'

interface HomeProps {
  onPageChange: (page: string) => void;
}

function Home({ onPageChange }: HomeProps): React.JSX.Element {
  return (
    <>
    {/* @ts-expect-error - ESLint */}
    <Helmet>
        {/* SEO Standar */}
        <title>Dewatacomm | Pusat Gadget Bali & Service HP Terpercaya</title>
        <meta name="description" content="Dewatacomm Pusat Gadget Bali menyediakan smartphone, laptop original bergaransi resmi, dan aksesoris terlengkap. Layanan service HP hardware & software transparan di Gianyar, Bali." />
        <meta name="keywords" content="Dewatacomm, Pusat Gadget Bali, Service HP Bali, Jual Beli HP Gianyar, Tukar Tambah Perangkat, Ganti LCD HP Bali, Service iPhone Bali" />
        <link rel="canonical" href="https://dewatacomm.com/" />

        {/* Open Graph / Facebook / WhatsApp / Telegram Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dewatacomm.com/" />
        <meta property="og:title" content="Dewatacomm | Pusat Gadget Bali & Service HP Terpercaya" />
        <meta property="og:description" content="Pusat penjualan smartphone, laptop original, dan tempat perbaikan device terbaik, jujur, dan bergaransi toko di Bali." />
        <meta property="og:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />

        {/* Twitter Card Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dewatacomm.com/" />
        <meta name="twitter:title" content="Dewatacomm | Pusat Gadget Bali & Service HP Terpercaya" />
        <meta name="twitter:description" content="Pusat penjualan smartphone, laptop original, dan tempat perbaikan device terbaik, jujur, dan bergaransi toko di Bali." />
        <meta name="twitter:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section 
        id="home" 
        style={{ 
          padding: 0, margin: 0, width: '100vw', maxWidth: '100%', height: '100vh', overflow: 'hidden', position: 'relative', backgroundColor: '#000000'
        }}
      >
        <div 
          className="hero-background"
          style={{ width: '100%', height: '100%', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', transition: 'background-image 0.3s ease-in-out' }}
        />
      </section>

      {/* 2. SHOPPING SECTION */}
      <section 
        id="shop-now" 
        style={{ 
          backgroundColor: '#ffffff', 
          padding: '60px 0 40px 0', 
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div 
          className="container shop-container" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            margin: '0 auto', 
            padding: '0 24px',
            maxWidth: '1200px',
            boxSizing: 'border-box'
          }}
        >
          {/* KUNCI PERBAIKAN BARIS 50: Mengubah texttitle menjadi textAlign */}
          <div className="shop-text" style={{ textAlign: 'left' }}>
            <h2 style={{ margin: 0, fontSize: '36px', fontWeight: '800', color: 'var(--primary-blue)', lineHeight: '1.2' }}>
              Dewatacomm
            </h2>
            <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: '600', color: 'var(--slate)', lineHeight: '1.2' }}>
              Pusat Gadget Bali
            </p>
          </div>

          <div className="shop-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '200px' }}>
            <a 
              href="https://shopee.co.id/dewatacomm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-shop-shopee"
              style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: 'var(--secondary-orange)',
                color: '#ffffff',
                border: '2px solid var(--secondary-orange)',
                textDecoration: 'none',
                fontWeight: '700',
                padding: '12px 26px',
                borderRadius: '50px',
                boxShadow: '0 4px 12px rgba(255, 104, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
                fontSize: '15px',
                letterSpacing: '1px'
              }}
            >
              SHOPEE
            </a>

            <a 
              href="https://tokopedia.link/dewatacomm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-shop-tokped"
              style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: 'transparent',
                color: 'var(--secondary-orange)',
                border: '2px solid var(--secondary-orange)',
                textDecoration: 'none',
                fontWeight: '700',
                padding: '12px 26px',
                borderRadius: '50px',
                transition: 'all 0.3s ease-in-out',
                fontSize: '15px',
                letterSpacing: '1px'
              }}
            >
              TOKOPEDIA
            </a>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" style={{ backgroundColor: '#ffffff', padding: '40px 0 60px 0', width: '100%', boxSizing: 'border-box' }}>
        <div className="container" style={{ margin: '0 auto', padding: '0 24px', maxWidth: '1200px', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="heading-2" style={{ color: 'var(--slate)', fontWeight: '800', margin: '0 0 10px 0' }}>Layanan Kami</h2>
            <p className="text-gray" style={{ margin: 0 }}>Solusi digital lengkap dan terpercaya untuk segala kebutuhan gadget Anda di Bali</p>
          </div>

          <div className="custom-services-grid">
            {/* Card 1: Jual Beli Gadget */}
            <div className="service-card-clean">
              <div className="card-icon-placeholder" style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ width: '30px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-44z"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '15px 0 10px 0' }}>
                Jual Beli Gadget
              </h3>
              <p style={{ color: 'var(--cool-gray)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                Menyediakan smartphone dan laptop terbaru, original, serta bergaransi resmi dengan pilihan tukar tambah terbaik.
              </p>
            </div>

            {/* Card 2: Jual Beli Aksesoris */}
            <div className="service-card-clean">
              <div className="card-icon-placeholder" style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '35px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M64 224c0-88.4 71.6-160 160-160s160 71.6 160 160l0 37.5c-10-3.5-20.8-5.5-32-5.5l-16 0c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48l16 0c53 0 96-43 96-96l0-160C448 100.3 347.7 0 224 0S0 100.3 0 224L0 384c0 53 43 96 96 96l16 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-16 0c-11.2 0-22 1.9-32 5.5L64 224z"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '15px 0 10px 0' }}>
                Jual Beli Aksesoris
              </h3>
              <p style={{ color: 'var(--cool-gray)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                Pusat aksesoris gadget terlengkap mulai dari charger, premium case, audio, hingga device pendukung kerja harian Anda.
              </p>
            </div>

            {/* Card 3: Service Gadget */}
            <div className="service-card-clean">
              <div className="card-icon-placeholder" style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '38px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '15px 0 10px 0' }}>
                Service Gadget
              </h3>
              <p style={{ color: 'var(--cool-gray)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                Perbaikan kerusakan hardware maupun software ditangani langsung oleh teknisi berpengalaman secara cepat and aman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" style={{ backgroundColor: '#ffffff', padding: '60px 0 80px 0', width: '100%', boxSizing: 'border-box' }}>
        <div className="container contact-container" style={{ display: 'flex', gap: '50px', alignItems: 'center', margin: '0 auto', padding: '0 24px', maxWidth: '1200px', boxSizing: 'border-box' }}>
          
          <div className="contact-image-wrapper" style={{ flex: 1, width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--deep-steel)' }}>
            <div 
              className="contact-placeholder-img"
              style={{ width: '100%', height: '100%', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            />
          </div>

          <div className="contact-info-wrapper" style={{ flex: 1, width: '100%', textAlign: 'left' }}>
            <h2 style={{ color: 'var(--slate)', fontSize: '32px', fontWeight: '800', margin: '0 0 30px 0' }}>Kontak Kami</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              
              {/* Lokasi dengan Tautan Maps */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary-blue)', width: '20px', paddingTop: '4px', display: 'flex', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ width: '18px', height: 'auto', fill: 'currentColor' }}>
                    <path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--slate)', fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0' }}>Lokasi</h4>
                  <a 
                    href="https://maps.app.goo.gl/2zLfZ3EYaESHh9rD6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cta-contact-link"
                    style={{ 
                      color: 'var(--cool-gray)', 
                      fontSize: '15px', 
                      textDecoration: 'none', 
                      lineHeight: '1.5',
                      fontWeight: '500',
                      transition: 'color 0.2s ease-in-out'
                    }}
                  >
                    Jl. Raya Goa Gajah, Peliatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80582
                  </a>
                </div>
              </div>

              {/* Telepon */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary-blue)', width: '20px', paddingTop: '4px', display: 'flex', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '18px', height: 'auto', fill: 'currentColor' }}>
                    <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--slate)', fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0' }}>Telepon</h4>
                  <a 
                    href="tel:0361970838" 
                    className="cta-contact-link"
                    style={{ 
                      color: 'var(--cool-gray)', 
                      fontSize: '15px', 
                      textDecoration: 'none',
                      fontWeight: '500',
                      transition: 'color 0.2s ease-in-out'
                    }}
                  >
                    (0361) 970838
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary-blue)', width: '20px', paddingTop: '4px', display: 'flex', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '18px', height: 'auto', fill: 'currentColor' }}>
                    <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--slate)', fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0' }}>WhatsApp</h4>
                  <a 
                    href="http://wa.me/+6281239317686" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cta-contact-link"
                    style={{ 
                      color: 'var(--cool-gray)', 
                      fontSize: '15px', 
                      textDecoration: 'none',
                      fontWeight: '500',
                      transition: 'color 0.2s ease-in-out'
                    }}
                  >
                    +62 812 3931 7686
                  </a>
                </div>
              </div>

            </div>

            <div style={{ borderTop: '1px solid var(--deep-steel)', paddingTop: '25px' }}>
              <h4 style={{ color: 'var(--slate)', fontSize: '16px', fontWeight: '700', margin: '0 0 15px 0' }}>Lainnya</h4>
              <div style={{ display: 'flex', gap: '24px' }}>
                <a 
                  href="#privacy" 
                  onClick={(e) => { e.preventDefault(); onPageChange('privacy'); }}
                  className="legal-link" 
                  style={{ color: 'var(--cool-gray)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  Kebijakan Privasi
                </a>
                <a 
                  href="#terms" 
                  onClick={(e) => { e.preventDefault(); onPageChange('terms'); }}
                  className="legal-link" 
                  style={{ color: 'var(--cool-gray)', fontSize: '14px', fontWeight: '600', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  Syarat dan Ketentuan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INLINE CSS RESPONSIVE */}
      <style>{`
        .hero-background { background-image: url(${heroDesktop}); }
        .contact-placeholder-img { background-image: url(${imageLocation}); }
        .btn-shop-shopee:hover { background-color: transparent !important; color: var(--secondary-orange) !important; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 104, 0, 0.1) !important; }
        .btn-shop-tokped:hover { background-color: var(--secondary-orange) !important; color: #ffffff !important; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 104, 0, 0.2) !important; }
        .legal-link:hover { color: var(--secondary-orange) !important; cursor: pointer; }
        
        .cta-contact-link:hover { color: var(--secondary-orange) !important; text-decoration: none !important; }
        
        .custom-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; width: 100%; }
        .service-card-clean { background-color: #ffffff; border: 1px solid var(--deep-steel); border-radius: 16px; padding: 30px 24px; text-align: center; box-sizing: border-box; }
        .card-icon-placeholder { fill: var(--secondary-orange); }

        @media (max-width: 1024px) {
          .hero-background { background-image: url(${heroMobile}); background-position: center center; }
          .contact-placeholder-img { background-image: url(${imageLocation}); }
          .shop-container { flex-direction: column !important; text-align: center !important; gap: 35px !important; }
          .shop-text { text-align: center !important; }
          .shop-buttons { width: 100% !important; max-width: 320px !important; }
          .custom-services-grid { grid-template-columns: 1fr; gap: 20px; }
          .contact-container { flex-direction: column !important; gap: 40px !important; }
          .contact-image-wrapper { height: 280px !important; }
        }
      `}</style>
    </>
  )
}

export default Home