import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

function PrivacyPolicy(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* SEKSI OPTIMASI SEO PRIVACY POLICY PAGE */}
      {/* @ts-expect-error - Mencegah validasi tipe JSX internal library Helmet sesuai standar ESLint */}
      <Helmet>
        {/* SEO Standar */}
        <title>Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali</title>
        <meta name="description" content="Kebijakan Privasi Dewatacomm. Kami berkomitmen untuk melindungi informasi pribadi dan data log pengunjung website kami dengan transparan dan aman." />
        <meta name="keywords" content="Kebijakan Privasi Dewatacomm, Privacy Policy Dewatacomm, Keamanan Data Dewatacomm" />
        <link rel="canonical" href="https://dewatacomm.com/privacy" />

        {/* Open Graph / Facebook / WhatsApp Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dewatacomm.com/privacy" />
        <meta property="og:title" content="Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali" />
        <meta property="og:description" content="Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Dewatacomm dan bagaimana kami menggunakannya." />
        <meta property="og:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />

        {/* Twitter Card Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dewatacomm.com/privacy" />
        <meta name="twitter:title" content="Kebijakan Privasi | Dewatacomm Pusat Gadget & Service Bali" />
        <meta name="twitter:description" content="Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Dewatacomm dan bagaimana kami menggunakannya." />
        <meta name="twitter:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />
      </Helmet>

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '120px 0 80px 0', boxSizing: 'border-box' }}>
        <div className="container" style={{ margin: '0 auto', padding: '0 24px', maxWidth: '800px', boxSizing: 'border-box', textAlign: 'left' }}>
          
          {/* JUDUL UTAMA */}
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '32px', fontWeight: '800', margin: '0 0 10px 0', lineHeight: '1.3' }}>
            Kebijakan Privasi
          </h1>

          {/* KONTEN UTAMA */}
          <div className="privacy-content" style={{ color: 'var(--slate)', fontSize: '16px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            <p style={{ margin: 0 }}>
              Di <strong>Dewatacomm</strong>, yang dapat diakses dari website kami, salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Dewatacomm dan bagaimana kami menggunakannya.
            </p>

            <p style={{ margin: 0 }}>
              Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami melalui kontak yang tersedia.
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid var(--deep-steel)', margin: '15px 0' }} />

            {/* SEKSI 1 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                1. Informasi yang Kami Kumpulkan
              </h2>
              <p style={{ margin: 0 }}>
                Kami mengumpulkan beberapa jenis informasi untuk berbagai keperluan guna memberikan dan meningkatkan layanan kami kepada Anda:
              </p>
              <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <li><strong>Data Pribadi:</strong> Saat Anda menghubungi kami melalui WhatsApp atau tautan marketplace (Shopee/Tokopedia), kami dapat menerima informasi seperti nama Anda, nomor telepon, and detail perangkat yang ingin Anda beli atau perbaiki.</li>
                <li><strong>Data Log:</strong> Seperti situs web lainnya, Dewatacomm mengikuti prosedur standar penggunaan file log. Informasi yang dikumpulkan termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), tanggal dan stempel waktu, serta halaman rujukan.</li>
              </ul>
            </div>

            {/* SEKSI 2 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                2. Bagaimana Kami Menggunakan Informasi Anda
              </h2>
              <p style={{ margin: 0 }}>
                Kami menggunakan informasi yang kami kumpulkan dengan berbagai cara, termasuk untuk:
              </p>
              <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <li>Menyediakan, mengoperasikan, dan memelihara website kami.</li>
                <li>Meningkatkan, mempersonalisasi, dan mengembangkan website kami agar sesuai dengan kebutuhan pelanggan di Bali.</li>
                <li>Memahami dan menganalisis bagaimana Anda menggunakan website kami.</li>
                <li>Memproses transaksi pembelian gadget/aksesoris atau mempermudah komunikasi layanan penjemputan/klaim garansi service.</li>
                <li>Berkomunikasi dengan Anda secara langsung atau melalui salah satu mitra kami untuk layanan pelanggan.</li>
              </ul>
            </div>

            {/* SEKSI 3 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                3. Kebijakan Privasi Pihak Ketiga
              </h2>
              <p style={{ margin: 0 }}>
                Website Dewatacomm menyediakan tautan menuju platform pihak ketiga seperti Shopee dan Tokopedia. Kebijakan Privasi Dewatacomm tidak berlaku untuk pengiklan atau situs web lain tersebut. Oleh karena itu, kami menyarankan Anda untuk berkonsultasi dengan masing-masing Kebijakan Privasi dari pihak ketiga ini untuk informasi yang lebih rinci.
              </p>
            </div>

            {/* SEKSI 4 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                4. Keamanan Data
              </h2>
              <p style={{ margin: 0 }}>
                Keamanan data Anda adalah hal penting bagi kami, namun ingatlah bahwa tidak ada metode transmisi melalui Internet, atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindungi Data Pribadi Anda, kami tidak dapat menjamin keamanan mutlaknya.
              </p>
            </div>

            {/* SEKSI 5 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                5. Persetujuan
              </h2>
              <p style={{ margin: 0 }}>
                Dengan menggunakan website kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui ketentuan-ketentuannya.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy