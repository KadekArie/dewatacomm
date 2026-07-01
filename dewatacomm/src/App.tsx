import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App(): React.JSX.Element {
  // State utama untuk mengontrol halaman aktif pada website Dewatacomm
  const [currentPage, setCurrentPage] = useState<string>('home')

  return (
    <>
      {/* Navigasi Header Utama */}
      <Header 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        isPlainPage={currentPage !== 'home'} 
      />

      {/* Area Konten Utama Halaman */}
      <main style={{ width: '100%', overflowX: 'hidden' }}>
        {/* KUNCI PERUBAHAN: Menambahkan props onPageChange ke komponen Home */}
        {currentPage === 'home' && <Home onPageChange={setCurrentPage} />}
        
        {currentPage === 'services' && <OurServices />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'contact' && <ContactUs />}
        {currentPage === 'privacy' && <PrivacyPolicy />}
        {currentPage === 'terms' && <TermsConditions />}
      </main>

      {/* Footer Website */}
      <Footer />

      {/* Global Reset CSS mencegah kebocoran horizontal scroll layout */}
      <style>{`
        html, body { 
          margin: 0 !important; 
          padding: 0 !important; 
          width: 100% !important; 
          max-width: 100% !important; 
          overflow-x: hidden !important; 
        }
        #root { 
          width: 100%; 
          max-width: 100%; 
          overflow-x: hidden; 
        }
      `}</style>
    </>
  )
}

export default App