import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import heroDesktop from '../assets/dewatacomm-location.webp'

function ContactUs(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* @ts-expect-error - ESLint */}
      <Helmet>
        {/* SEO Standar */}
        <title>Hubungi Kami | Dewatacomm Gianyar Bali</title>
        <meta name="description" content="Hubungi Dewatacomm Gianyar untuk konsultasi perbaikan service HP, cek ketersediaan stok smartphone terbaru, aksesoris, atau penaksiran harga tukar tambah." />
        <meta name="keywords" content="Kontak Dewatacomm, Alamat Dewatacomm Gianyar, Nomor Telepon Dewatacomm, WhatsApp Dewatacomm Bali" />
        <link rel="canonical" href="https://dewatacomm.com/contact" />

        {/* Open Graph / Facebook / WhatsApp Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dewatacomm.com/contact" />
        <meta property="og:title" content="Hubungi Kami | Dewatacomm Gianyar Bali" />
        <meta property="og:description" content="Punya pertanyaan mengenai stok gadget terbaru atau ingin melakukan konsultasi kerusakan service? Tim Dewatacomm siap membantu Anda." />
        <meta property="og:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />

        {/* Twitter Card Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dewatacomm.com/contact" />
        <meta name="twitter:title" content="Hubungi Kami | Dewatacomm Gianyar Bali" />
        <meta name="twitter:description" content="Punya pertanyaan mengenai stok gadget terbaru atau ingin melakukan konsultasi kerusakan service? Tim Dewatacomm siap membantu Anda." />
        <meta name="twitter:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />
      </Helmet>

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '120px 0 60px 0', boxSizing: 'border-box' }}>
        <div className="container" style={{ margin: '0 auto', padding: '0 24px', maxWidth: '1200px', boxSizing: 'border-box' }}>
          
          {/* SEKSI UTAMA: MENGADOPSI CONTACT SECTION HOME */}
          <div className="contact-page-wrapper" style={{ display: 'flex', gap: '50px', alignItems: 'center', textAlign: 'left', marginBottom: '60px' }}>
            
            {/* Kolom Kiri: Gambar Representasi */}
            <div className="contact-image-wrapper" style={{ flex: 1, width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--deep-steel)' }}>
              <div 
                className="contact-placeholder-img"
                style={{ width: '100%', height: '100%', backgroundImage: `url(${heroDesktop})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
              />
            </div>

            {/* Kolom Kanan: Informasi Kontak Detail */}
            <div className="contact-info-wrapper" style={{ flex: 1, width: '100%' }}>
              <h1 style={{ color: 'var(--primary-blue)', fontSize: '36px', fontWeight: '800', margin: '0 0 10px 0', lineHeight: '1.2' }}>
                Hubungi Kami
              </h1>
              <p style={{ color: 'var(--cool-gray)', fontSize: '16px', margin: '0 0 35px 0', lineHeight: '1.5' }}>
                Punya pertanyaan mengenai stok gadget terbaru atau ingin melakukan konsultasi kerusakan service? Tim Dewatacomm siap membantu Anda.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Alamat */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--primary-blue)', width: '20px', paddingTop: '4px', display: 'flex', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ width: '18px', height: 'auto', fill: 'currentColor' }}>
                      <path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--primary-blue)', fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0' }}>Lokasi</h4>
                    <a 
                      href="https://maps.app.goo.gl/2zLfZ3EYaESHh9rD6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="page-contact-link"
                      style={{ color: 'var(--cool-gray)', fontSize: '15px', textDecoration: 'none', lineHeight: '1.5', fontWeight: '500', transition: 'color 0.2s ease-in-out' }}
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
                    <h4 style={{ color: 'var(--primary-blue)', fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0' }}>Telepon</h4>
                    <a 
                      href="tel:0361970838" 
                      className="page-contact-link"
                      style={{ color: 'var(--cool-gray)', fontSize: '15px', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease-in-out' }}
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
                    <h4 style={{ color: 'var(--primary-blue)', fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0' }}>WhatsApp</h4>
                    <a 
                      href="http://wa.me/+6281239317686" 
                      className="page-contact-link"
                      style={{ color: 'var(--cool-gray)', fontSize: '15px', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s ease-in-out' }}
                    >
                      +62 812 3931 7686
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* SEKSI BAWAH: GOOGLE MAPS IFRAME RESPONSIVE */}
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 15px 0' }}>
              Peta Petunjuk Lokasi
            </h3>
          </div>
          <div className="maps-responsive-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7581793259924!2d115.2776600747743!3d-8.522842991519648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d7f0c5cab35%3A0xb4aa4e9fc846b910!2sDewatacomm!5e0!3m2!1sid!2sid!4v1781790343090!5m2!1sid!2sid" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Dewatacomm Gianyar"
            />
          </div>

        </div>
      </div>

      {/* CSS RESPONSIVE KHUSUS HALAMAN KONTAK */}
      <style>{`
        .maps-responsive-container {
          position: relative;
          width: 100%;
          height: 450px;
          border-radius: 0px !important;
          overflow: hidden;
          border: 1px solid var(--deep-steel);
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        .maps-responsive-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Kelas hover untuk link kontak di halaman ini: Oranye pekat tanpa underline */
        .page-contact-link:hover {
          color: var(--secondary-orange) !important;
          text-decoration: none !important;
        }

        @media (max-width: 1024px) {
          .contact-page-wrapper { flex-direction: column !important; gap: 40px !important; }
          .contact-image-wrapper { height: 280px !important; }
          .maps-responsive-container { height: 320px !important; }
        }
      `}</style>
    </>
  )
}

export default ContactUs