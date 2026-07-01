import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

function OurServices(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* @ts-expect-error - ESLint */}
      <Helmet>
        {/* SEO Standar */}
        <title>Layanan Service HP & Tukar Tambah | Dewatacomm Gianyar</title>
        <meta name="description" content="Layanan profesional Dewatacomm Gianyar: service HP Android & iOS, ganti LCD/baterai, perbaikan IC motherboard mati total, serta jual beli tukar tambah gadget bergaransi." />
        <meta name="keywords" content="Service HP Gianyar, Tukar Tambah HP Bali, Ganti LCD HP Ubud, Perbaikan IC Motherboard, Service iPhone Gianyar" />
        <link rel="canonical" href="https://dewatacomm.com/services" />

        {/* Open Graph / Facebook / WhatsApp Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dewatacomm.com/services" />
        <meta property="og:title" content="Layanan Service HP & Tukar Tambah | Dewatacomm Gianyar" />
        <meta property="og:description" content="Dewatacomm menghadirkan layanan menyeluruh untuk kebutuhan digital Anda. Ditangani secara profesional, transparan, dan bergaransi toko." />
        <meta property="og:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />

        {/* Twitter Card Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dewatacomm.com/services" />
        <meta name="twitter:title" content="Layanan Service HP & Tukar Tambah | Dewatacomm Gianyar" />
        <meta name="twitter:description" content="Dewatacomm menghadirkan layanan menyeluruh untuk kebutuhan digital Anda. Ditangani secara profesional, transparan, dan bergaransi toko." />
        <meta name="twitter:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />
      </Helmet>

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '120px 0 80px 0', boxSizing: 'border-box' }}>
        <div className="container" style={{ margin: '0 auto', padding: '0 24px', maxWidth: '1200px', boxSizing: 'border-box' }}>
          
          {/* PENGANTAR HALAMAN */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ color: 'var(--primary-blue)', fontSize: '36px', fontWeight: '800', margin: '0 0 10px 0' }}>Detail Layanan Kami</h1>
            <p style={{ color: 'var(--cool-gray)', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
              Dewatacomm menghadirkan layanan menyeluruh untuk kebutuhan digital Anda. Ditangani secara profesional, transparan, dan bergaransi toko.
            </p>
          </div>

          {/* SEKSI 1: SPESIALISASI KEMAMPUAN (SEKARANG DI ATAS) */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: 'var(--primary-blue)', fontSize: '26px', fontWeight: '800', margin: '0 0 10px 0' }}>Spesialisasi Kemampuan</h2>
          </div>

          <div className="services-detailed-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '80px', textAlign: 'left' }}>
            
            {/* Blok 1: Gadget & Trade-in */}
            <div style={{ border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '30px', backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ width: '30px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0', textAlign: 'center' }}>Jual Beli & Tukar Tambah</h3>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                Kami melayani penjualan unit smartphone (iOS & Android) serta laptop terbaru dengan jaminan garansi resmi. Anda juga dapat menukarkan perangkat lama Anda dengan taksiran harga yang jujur dan kompetitif di Bali.
              </p>
            </div>

            {/* Blok 2: Hardware Repairs */}
            <div style={{ border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '30px', backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '38px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6l0 49.6 90.8 90.8c33.3-15 73.9-8.9 101.2 18.5L542.2 382.1c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.5-67.9-18.5-101.2l-90.8-90.8-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7zm145 303.5c-6.3 36.9 2.3 75.9 26.2 107.2l-94.9 95c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.5 35.2 35.1zM384.1 0c20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1L388.8 91.3c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l56.7-56.7c7.6-7.5 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 43.2-17.2 82.3-45 111.1l-49.1-49.1c-33.1-33-78.5-45.7-121.1-38.4l-56.8-56.8 0-29.7-.2-5c-.8-12.4-4.4-24.3-10.5-34.9 29.4-35 73.4-57.2 122.7-57.3z"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0', textAlign: 'center' }}>Perbaikan Hardware</h3>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                Mengatasi berbagai kerusakan fisik komponen perangkat seperti: Ganti LCD pecah/bergaris, ganti baterai kembung/drop, perbaikan konektor charger rusak, kamera buram, hingga perbaikan IC/Motherboard mati total.
              </p>
            </div>

            {/* Blok 3: Software & Accessories */}
            <div style={{ border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '30px', backgroundColor: '#ffffff' }}>
              <div style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '35px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M64 224c0-88.4 71.6-160 160-160s160 71.6 160 160l0 37.5c-10-3.5-20.8-5.5-32-5.5l-16 0c-26.5 0-48 21.5-48 48l0 128c0 26.5 21.5 48 48 48l16 0c53 0 96-43 96-96l0-160C448 100.3 347.7 0 224 0S0 100.3 0 224L0 384c0 53 43 96 96 96l16 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-16 0c-11.2 0-22 1.9-32 5.5L64 224z"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0', textAlign: 'center' }}>Software & Aksesoris</h3>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                Layanan instalasi ulang OS (Windows/macOS), pembersihan virus/malware, hingga bypass stuck logo. Tersedia pula aksesoris premium lengkap mulai dari pengisi daya cepat (fast charger), premium case, hingga perangkat audio original.
              </p>
            </div>

          </div>

          {/* SEKSI 2: PILIHAN CARA BELANJA (SEKARANG DI TENGAH-BAWAH) */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: 'var(--primary-blue)', fontSize: '26px', fontWeight: '800', margin: '0 0 10px 0' }}>Pilihan Cara Belanja</h2>
            <p style={{ color: 'var(--cool-gray)', fontSize: '16px', margin: 0 }}>Pilih metode transaksi yang paling mudah dan nyaman bagi Anda</p>
          </div>

          <div className="shopping-channels-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', width: '100%', boxSizing: 'border-box', marginBottom: '80px' }}>
            
            {/* Box Kiri: Belanja Online (Ikon SVG Globe Baru) */}
            <div style={{ border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '40px 30px', textAlign: 'center', backgroundColor: '#fcfcfc' }}>
              <div style={{ color: 'var(--secondary-orange)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '40px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '22px', fontWeight: '700', margin: '0 0 12px 0' }}>Belanja Online</h3>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 30px 0', minHeight: '48px' }}>
                Nikmati kemudahan transaksi resmi, cicilan, dan pengiriman aman ke seluruh Indonesia melalui official marketplace kami.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href="https://shopee.co.id/dewatacomm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block', textAlign: 'center', backgroundColor: 'var(--secondary-orange)', color: '#ffffff',
                    border: '2px solid var(--secondary-orange)', textDecoration: 'none', fontWeight: '700', padding: '12px 28px',
                    borderRadius: '50px', fontSize: '14px', letterSpacing: '0.5px', transition: 'all 0.3s ease-in-out'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--secondary-orange)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--secondary-orange)'; e.currentTarget.style.color = '#ffffff'; }}
                >
                  SHOPEE
                </a>
                <a 
                  href="https://tokopedia.link/dewatacomm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block', textAlign: 'center', backgroundColor: 'transparent', color: 'var(--secondary-orange)',
                    border: '2px solid var(--secondary-orange)', textDecoration: 'none', fontWeight: '700', padding: '12px 28px',
                    borderRadius: '50px', fontSize: '14px', letterSpacing: '0.5px', transition: 'all 0.3s ease-in-out'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--secondary-orange)'; e.currentTarget.style.color = '#ffffff'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--secondary-orange)'; }}
                >
                  TOKOPEDIA
                </a>
              </div>
            </div>

            {/* Box Kanan: Belanja Offline (Ikon SVG Pin Lokasi Baru) */}
            <div style={{ border: '1px solid var(--deep-steel)', borderRadius: '16px', padding: '40px 30px', textAlign: 'center', backgroundColor: '#fcfcfc' }}>
              <div style={{ color: 'var(--primary-blue)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px', marginBottom: '15px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ width: '32px', height: 'auto', fill: 'currentColor' }}>
                  <path d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"/>
                </svg>
              </div>
              <h3 style={{ color: 'var(--primary-blue)', fontSize: '22px', fontWeight: '700', margin: '0 0 12px 0' }}>Belanja Offline</h3>
              <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: '1.6', margin: '0 0 30px 0', minHeight: '48px' }}>
                Kunjungi langsung outlet gerai fisik kami untuk cek kondisi device, klaim garansi service, atau transaksi tukar tambah secara langsung.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a 
                  href="https://maps.app.goo.gl/2zLfZ3EYaESHh9rD6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block', textAlign: 'center', backgroundColor: 'var(--primary-blue)', color: '#ffffff',
                    border: '2px solid var(--primary-blue)', textDecoration: 'none', fontWeight: '700', padding: '12px 36px',
                    borderRadius: '50px', fontSize: '14px', letterSpacing: '0.5px', transition: 'all 0.3s ease-in-out'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--primary-blue)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'var(--primary-blue)'; e.currentTarget.style.color = '#ffffff'; }}
                >
                  BUKA PETUNJUK LOKASI MAPS
                </a>
              </div>
            </div>

          </div>

          {/* SEKSI 3: ALUR KERJA SERVICE TRANSPARAN */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: 'var(--primary-blue)', fontSize: '26px', fontWeight: '800', margin: '0 0 10px 0' }}>Alur Kerja Service Transparan</h2>
            <p style={{ color: 'var(--cool-gray)', fontSize: '16px', margin: 0 }}>Prosedur baku kami untuk memastikan kenyamanan dan keamanan perangkat Anda</p>
          </div>

          <div className="services-steps-layout" style={{ display: 'flex', gap: '24px', marginBottom: '80px', textAlign: 'center' }}>
            {/* Langkah 1 */}
            <div style={{ flex: 1, position: 'relative' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '18px', margin: '0 auto 15px auto' }}>1</div>
              <h4 style={{ color: 'var(--primary-blue)', fontSize: '16px', fontWeight: '700', margin: '0 0 8px 0' }}>Pengecekan Gratis</h4>
              <p style={{ color: 'var(--cool-gray)', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Perangkat diperiksa secara mendetail di depan pelanggan untuk menemukan titik kerusakan awal tanpa biaya.</p>
            </div>

            {/* Langkah 2 */}
            <div style={{ flex: 1 }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--secondary-orange)', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '18px', margin: '0 auto 15px auto' }}>2</div>
              <h4 style={{ color: 'var(--primary-blue)', fontSize: '16px', fontWeight: '700', margin: '0 0 8px 0' }}>Konfirmasi Biaya</h4>
              <p style={{ color: 'var(--cool-gray)', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Estimasi total harga sparepart dan durasi pengerjaan diinformasikan jujur sebelum teknisi mulai bekerja.</p>
            </div>

            {/* Langkah 3 */}
            <div style={{ flex: 1 }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary-blue)', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '18px', margin: '0 auto 15px auto' }}>3</div>
              <h4 style={{ color: 'var(--primary-blue)', fontSize: '16px', fontWeight: '700', margin: '0 0 8px 0' }}>Eksekusi & Garansi</h4>
              <p style={{ color: 'var(--cool-gray)', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>Perangkat diperbaiki menggunakan suku cadang berkualitas dan diserahkan kembali lengkap dengan nota garansi toko.</p>
            </div>
          </div>

          {/* SEKSI 4: TABEL ESTIMASI WAKTU */}
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <h3 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: 0 }}>
              Estimasi Waktu Pengerjaan Umum
            </h3>
          </div>
          
          <div style={{ overflowX: 'auto', width: '100%', border: '1px solid var(--deep-steel)', borderRadius: '12px', marginBottom: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '15px' }}>
              <thead>
                <tr style={{ backgroundColor: '#fcfcfc', borderBottom: '1px solid var(--deep-steel)' }}>
                  <th style={{ padding: '16px', color: 'var(--primary-blue)', fontWeight: '700' }}>Jenis Kerusakan Device</th>
                  <th style={{ padding: '16px', color: 'var(--primary-blue)', fontWeight: '700' }}>Estimasi Waktu</th>
                  <th style={{ padding: '16px', color: 'var(--primary-blue)', fontWeight: '700' }}>Sifat Pengerjaan</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--deep-steel)' }}>
                  <td style={{ padding: '16px', color: 'var(--slate)', fontWeight: '600' }}>Ganti Baterai / LCD Smartphone</td>
                  <td style={{ padding: '16px', color: 'var(--cool-gray)' }}>30 - 60 Menit</td>
                  <td style={{ padding: '16px', color: 'var(--secondary-orange)', fontWeight: '600' }}>Bisa Ditunggu</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--deep-steel)' }}>
                  <td style={{ padding: '16px', color: 'var(--slate)', fontWeight: '600' }}>Instal Ulang OS / Pembersihan Software Laptop</td>
                  <td style={{ padding: '16px', color: 'var(--cool-gray)' }}>1 - 2 Jam</td>
                  <td style={{ padding: '16px', color: 'var(--secondary-orange)', fontWeight: '600' }}>Bisa Ditunggu / Tinggal</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px', color: 'var(--slate)', fontWeight: '600' }}>Perbaikan IC / Motherboard Mati Total</td>
                  <td style={{ padding: '16px', color: 'var(--cool-gray)' }}>2 - 4 Hari Kerja</td>
                  <td style={{ padding: '16px', color: 'var(--primary-blue)', fontWeight: '600' }}>Harus Ditinggal (Pengecekan Intensif)</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* MEDIA QUERY RESPONSIVE */}
      <style>{`
        @media (max-width: 1024px) {
          .services-detailed-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .services-steps-layout { flex-direction: column !important; gap: 40px !important; }
          .shopping-channels-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </>
  )
}

export default OurServices