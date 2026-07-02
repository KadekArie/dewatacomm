import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import imageLocation from '../assets/dewatacomm-location.webp'

function AboutUs(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* @ts-expect-error - ESLint */}
      <Helmet>
        {/* SEO Standar */}
        <title>Tentang Kami | Dewatacomm Pusat Gadget & Service Bali</title>
        <meta name="description" content="Kenali Dewatacomm, salah satu pusat penjualan gadget resmi, laptop, aksesoris premium, serta tempat perbaikan device hardware dan software terpercaya bagi masyarakat Bali." />
        <meta name="keywords" content="Profil Dewatacomm, Toko HP Resmi Bali, Service HP Terpercaya Gianyar, Gadget Store Bali, Dewatacomm Gianyar" />
        <link rel="canonical" href="https://dewatacomm.com/about" />

        {/* Open Graph / Facebook / WhatsApp Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dewatacomm.com/about" />
        <meta property="og:title" content="Tentang Kami | Dewatacomm Pusat Gadget & Service Bali" />
        <meta property="og:description" content="Didirikan dengan komitmen menghadirkan solusi teknologi terbaik. Unit original bergaransi resmi didukung tim layanan purna jual yang responsif." />
        <meta property="og:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />

        {/* Twitter Card Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dewatacomm.com/about" />
        <meta name="twitter:title" content="Tentang Kami | Dewatacomm Pusat Gadget & Service Bali" />
        <meta name="twitter:description" content="Didirikan dengan komitmen menghadirkan solusi teknologi terbaik. Unit original bergaransi resmi didukung tim layanan purna jual yang responsif." />
        <meta name="twitter:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />
      </Helmet>

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '120px 0 80px 0', boxSizing: 'border-box' }}>
        <div className="container" style={{ margin: '0 auto', padding: '0 24px', maxWidth: '1200px', boxSizing: 'border-box' }}>
          
          {/* SEKSI 1: PROFIL UTAMA (Layout 2 Kolom) */}
          <div className="about-profile-grid" style={{ display: 'flex', gap: '50px', alignItems: 'center', textAlign: 'left', marginBottom: '80px' }}>
            
            {/* Sisi Kiri: Teks Cerita Profil */}
            <div className="about-text-column" style={{ flex: 1.2, width: '100%' }}>
              <h1 style={{ color: 'var(--primary-blue)', fontSize: '36px', fontWeight: '800', margin: '0 0 20px 0', lineHeight: '1.2' }}>
                Tentang Dewatacomm
              </h1>
              <h3 style={{ color: 'var(--secondary-orange)', fontSize: '20px', fontWeight: '600', margin: '0 0 15px 0' }}>
                Pusat Gadget & Service Terpercaya di Bali
              </h3>
              <p style={{ color: 'var(--slate)', fontSize: '16px', lineHeight: '1.7', margin: '0 0 15px 0' }}>
                Didirikan dengan komitmen untuk menghadirkan solusi teknologi terbaik, <strong>Dewatacomm</strong> telah tumbuh menjadi salah satu pusat penjualan gadget, aksesoris, serta pusat perbaikan terpercaya bagi masyarakat Bali. 
              </p>
              <p style={{ color: 'var(--slate)', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>
                Kami memahami bahwa gadget bukan lagi sekadar alat komunikasi, melainkan instrumen penting penyokong produktivitas harian Anda. Oleh karena itu, kami selalu memastikan setiap unit yang kami jual memiliki jaminan kualitas tertinggi dan didukung oleh layanan purna jual yang responsif.
              </p>
            </div>

            {/* Sisi Kanan: Foto Fisik Toko */}
            <div className="about-image-column" style={{ flex: 0.8, width: '100%', minHeight: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--deep-steel)', display: 'block' }}>
            <div 
              style={{ 
                width: '100%', 
                height: '300px', 
                backgroundImage: `url(${imageLocation})`, 
                backgroundPosition: 'center center', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'cover',
                display: 'block'
              }}
            />
          </div>

          </div>

          {/* SEKSI 2: PENEGASAN NILAI UTAMA (3 Kolom Grid) */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: 'var(--primary-blue)', fontSize: '26px', fontWeight: '800', margin: '0 0 10px 0' }}> Pilar Utama Kami</h2>
            <p style={{ color: 'var(--cool-gray)', fontSize: '16px', margin: 0 }}>Komitmen yang selalu kami jaga untuk setiap pelanggan Dewatacomm</p>
          </div>

          <div className="about-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', width: '100%', boxSizing: 'border-box', marginBottom: '80px' }}>
            
            {/* Pilar 1: 100% Original */}
            <div style={{ border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '35px 24px', textAlign: 'center', backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '38px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5L210.5 179.8 63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8l-147.2-12.3 57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"/>
                </svg>
              </div>
              <h4 style={{ color: 'var(--primary-blue)', fontSize: '18px', fontWeight: '700', margin: '0 0 10px 0' }}>100% Original</h4>
              <p style={{ color: 'var(--cool-gray)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                Kami hanya menyediakan perangkat smartphone dan laptop resmi yang dijamin keasliannya dari distributor utama.
              </p>
            </div>

            {/* Pilar 2: Teknisi Ahli */}
            <div style={{ border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '35px 24px', textAlign: 'center', backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '38px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z"/>
                </svg>
              </div>
              <h4 style={{ color: 'var(--primary-blue)', fontSize: '18px', fontWeight: '700', margin: '0 0 10px 0' }}>Teknisi Ahli</h4>
              <p style={{ color: 'var(--cool-gray)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                Proses pengecekan dan perbaikan device ditangani langsung secara terbuka oleh tim teknisi hardware & software berpengalaman.
              </p>
            </div>

            {/* Pilar 3: Pelayanan Transparan */}
            <div style={{ border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '35px 24px', textAlign: 'center', backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '38px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M268.9 85.2L152.3 214.8c-4.6 5.1-4.4 13 .5 17.9 30.5 30.5 80 30.5 110.5 0l31.8-31.8c4.2-4.2 9.5-6.5 14.9-6.9 6.8-.6 13.8 1.7 19 6.9L505.6 376 576 320 576 32 464 96 440.2 80.1C424.4 69.6 405.9 64 386.9 64l-70.4 0c-1.1 0-2.3 0-3.4 .1-16.9 .9-32.8 8.5-44.2 21.1zM116.6 182.7L223.4 64 183.8 64c-25.5 0-49.9 10.1-67.9 28.1L112 96 0 32 0 320 156.4 450.3c23 19.2 52 29.7 81.9 29.7l15.7 0-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l41 41 9 0c19.1 0 37.8-4.3 54.8-12.3L359 441c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l32 32 17.5-17.5c8.9-8.9 11.5-21.8 7.6-33.1l-137.9-136.8-14.9 14.9c-49.3 49.3-129.1 49.3-178.4 0-23-23-23.9-59.9-2.2-84z"/>
                </svg>
              </div>
              <h4 style={{ color: 'var(--primary-blue)', fontSize: '18px', fontWeight: '700', margin: '0 0 10px 0' }}>Pelayanan Transparan</h4>
              <p style={{ color: 'var(--cool-gray)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                Mulai dari penaksiran harga tukar tambah hingga estimasi biaya service, seluruh informasi disajikan jujur tanpa biaya tersembunyi.
              </p>
            </div>

          </div>

          {/* SEKSI 3: MERCHANDISE BANNER / CALL TO ACTION (LOKASI OFFLINE) */}
          <div style={{ backgroundColor: '#fcfcfc', border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '40px', textAlign: 'center', marginBottom: '30px' }}>
            <h3 style={{ color: 'var(--primary-blue)', fontSize: '22px', fontWeight: '800', margin: '0 0 10px 0' }}>Siap Mengunjungi Toko Kami?</h3>
            <p style={{ color: 'var(--slate)', fontSize: '15px', maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
              Dapatkan pengalaman berbelanja gadget yang nyaman serta konsultasi perbaikan langsung bersama tim kami yang ramah di Gianyar, Bali.
            </p>
            <a 
              href="https://maps.app.goo.gl/2zLfZ3EYaESHh9rD6" 
              style={{ 
                display: 'inline-block', 
                backgroundColor: 'var(--secondary-orange)', 
                color: '#ffffff', 
                border: '2px solid var(--secondary-orange)', 
                textDecoration: 'none', 
                fontWeight: '700', 
                padding: '12px 32px', 
                borderRadius: '50px', 
                fontSize: '15px', 
                letterSpacing: '0.5px', 
                transition: 'all 0.3s ease-in-out' 
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--secondary-orange)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--secondary-orange)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              LIHAT ALAMAT TOKO
            </a>
          </div>

          {/* SEKSI NEW 4: INFO BANNER TOKO ONLINE (MARKETPLACE) */}
          <div style={{ backgroundColor: '#fcfcfc', border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-blue)', fontSize: '22px', fontWeight: '800', margin: '0 0 10px 0' }}>Lebih Nyaman Belanja dari Rumah?</h3>
            <p style={{ color: 'var(--slate)', fontSize: '15px', maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
              Kami juga hadir di berbagai platform e-commerce terbesar untuk memberikan Anda kemudahan bertransaksi secara aman dengan jaminan proteksi penuh.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="https://shopee.co.id/dewatacomm" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-block', backgroundColor: 'var(--secondary-orange)', color: '#ffffff', 
                  border: '2px solid var(--secondary-orange)', textDecoration: 'none', fontWeight: '700', 
                  padding: '12px 32px', borderRadius: '50px', fontSize: '14px', letterSpacing: '0.5px', 
                  transition: 'all 0.3s ease-in-out' 
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--secondary-orange)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--secondary-orange)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                OFFICIAL SHOPEE
              </a>
              <a 
                href="https://tokopedia.link/dewatacomm" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-block', backgroundColor: 'transparent', color: 'var(--secondary-orange)', 
                  border: '2px solid var(--secondary-orange)', textDecoration: 'none', fontWeight: '700', 
                  padding: '12px 32px', borderRadius: '50px', fontSize: '14px', letterSpacing: '0.5px', 
                  transition: 'all 0.3s ease-in-out' 
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--secondary-orange)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--secondary-orange)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                OFFICIAL TOKOPEDIA
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* MEDIA QUERY RESPONSIVE UNTUK MOBILE */}
      <style>{`
        @media (max-width: 1024px) {
          .about-profile-grid { flex-direction: column !important; gap: 40px !important; }
          .about-text-column { text-align: center !important; }
          .about-image-column { height: 260px !important; }
          .about-pillars-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </>
  )
}

export default AboutUs
