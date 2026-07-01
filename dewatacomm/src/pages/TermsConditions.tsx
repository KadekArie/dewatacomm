import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

function TermsConditions(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* SEKSI OPTIMASI SEO TERMS & CONDITIONS PAGE */}
      {/* @ts-expect-error - Mencegah validasi tipe JSX internal library Helmet sesuai standar ESLint */}
      <Helmet>
        {/* SEO Standar */}
        <title>Syarat dan Ketentuan | Dewatacomm Pusat Gadget & Service Bali</title>
        <meta name="description" content="Syarat dan Ketentuan Dewatacomm mengatur regulasi transaksi jual beli gadget, aksesoris, ketentuan garansi, serta alur layanan perbaikan service HP di Bali." />
        <meta name="keywords" content="Syarat Ketentuan Dewatacomm, Garansi Service Dewatacomm, Aturan Transaksi HP Bali" />
        <link rel="canonical" href="https://dewatacomm.com/terms" />

        {/* Open Graph / Facebook / WhatsApp Preview */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dewatacomm.com/terms" />
        <meta property="og:title" content="Syarat dan Ketentuan | Dewatacomm Pusat Gadget & Service Bali" />
        <meta property="og:description" content="Syarat dan ketentuan ini mengatur penggunaan website Dewatacomm dan layanan transaksi jual beli serta perbaikan gadget yang kami sediakan." />
        <meta property="og:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />

        {/* Twitter Card Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dewatacomm.com/terms" />
        <meta name="twitter:title" content="Syarat dan Ketentuan | Dewatacomm Pusat Gadget & Service Bali" />
        <meta name="twitter:description" content="Syarat dan ketentuan ini mengatur penggunaan website Dewatacomm dan layanan transaksi jual beli serta perbaikan gadget yang kami sediakan." />
        <meta name="twitter:image" content="https://dewatacomm.com/assets/dewatacomm-location.webp" />
      </Helmet>

      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '120px 0 80px 0', boxSizing: 'border-box' }}>
        <div className="container" style={{ margin: '0 auto', padding: '0 24px', maxWidth: '800px', boxSizing: 'border-box', textAlign: 'left' }}>
          
          {/* JUDUL UTAMA */}
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '32px', fontWeight: '800', margin: '0 0 10px 0', lineHeight: '1.3' }}>
            Syarat dan Ketentuan
          </h1>

          {/* KONTEN UTAMA */}
          <div className="terms-content" style={{ color: 'var(--slate)', fontSize: '16px', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            <p style={{ margin: 0 }}>
              Selamat datang di <strong>Dewatacomm</strong>. Syarat dan ketentuan ini mengatur penggunaan website Dewatacomm dan layanan transaksi jual beli serta perbaikan gadget yang kami sediakan. Dengan accessing website ini, kami menganggap Anda telah menerima dan menyetujui seluruh syarat dan ketentuan yang tertulis di bawah ini.
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid var(--deep-steel)', margin: '15px 0' }} />

            {/* SEKSI 1 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                1. Ketentuan Jual Beli Gadget & Aksesoris
              </h2>
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Semua produk gadget (smartphone, laptop) yang kami tawarkan dijamin 100% Original dan dilengkapi garansi resmi (kecuali dinyatakan lain secara tertulis pada nota pembelian).</li>
                <li>Transaksi pembayaran yang sah dapat dilakukan melalui platform pihak ketiga kami (Shopee & Tokopedia) atau pembayaran langsung di toko fisik sesuai kesepakatan harga tertera.</li>
                <li>Untuk layanan Tukar Tambah (*Trade-In*), harga taksiran akhir unit ditentukan sepenuhnya oleh hasil pengecekan fisik dan fungsi oleh tim internal Dewatacomm di toko.</li>
              </ul>
            </div>

            {/* SEKSI 2 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                2. Ketentuan Layanan Perbaikan (Service Gadget)
              </h2>
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Pengecekan awal kerusakan perangkat bersifat transparan. Estimasi biaya dan durasi pengerjaan akan diinformasikan kepada pelanggan sebelum tindakan perbaikan dieksekusi.</li>
                <li>Dewatacomm tidak bertanggung jawab atas kehilangan data yang ada di dalam perangkat selama proses perbaikan. Pelanggan sangat disarankan melakukan pencadangan data (*backup*) mandiri sebelum menyerahkan perangkat.</li>
                <li>Setiap komponen suku cadang yang diganti melalui layanan kami berhak mendapatkan jaminan masa garansi toko tertentu yang terhitung sejak tanggal nota pengambilan unit.</li>
              </ul>
            </div>

            {/* SEKSI 3 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                3. Batasan Tanggung Jawab Platform Web
              </h2>
              <p style={{ margin: 0 }}>
                Website ini disediakan "sebagaimana adanya". Dewatacomm berusaha memastikan ketersediaan stok, harga, dan deskripsi produk yang akurat. Namun, jika terdapat kekeliruan data akibat keterlambatan pembaruan sistem, kami berhak melakukan pembatalan atau penyesuaian transaksi komunikasi sebelum pengiriman/serah terima barang dilakukan.
              </p>
            </div>

            {/* SEKSI 4 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                4. Tautan Luar (Link Marketplace Pihak Ketiga)
              </h2>
              <p style={{ margin: 0 }}>
                Website kami mengarahkan tombol belanja eksternal ke platform Shopee dan Tokopedia. Segala bentuk aturan penyelesaian sengketa transaksi, pengembalian dana, dan pengiriman barang pada platform tersebut tunduk sepenuhnya pada regulasi perlindungan konsumen milik platform marketplace masing-masing.
              </p>
            </div>

            {/* SEKSI 5 */}
            <div>
              <h2 style={{ color: 'var(--primary-blue)', fontSize: '20px', fontWeight: '700', margin: '0 0 12px 0' }}>
                5. Perubahan Syarat dan Ketentuan
              </h2>
              <p style={{ margin: 0 }}>
                Dewatacomm berhak mengubah atau memperbarui dokumen Syarat dan Ketentuan ini sewaktu-waktu tanpa pemberitahuan tertulis sebelumnya demi menyesuaikan regulasi internal bisnis maupun hukum perdagangan yang berlaku di Indonesia.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default TermsConditions