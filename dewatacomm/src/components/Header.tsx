import React, { useState, useEffect } from 'react'
import logo from '../assets/dewatacomm-logo.webp'

interface HeaderProps {
  isPlainPage?: boolean;
  currentPage?: string;                 // Properti baru untuk mendeteksi halaman aktif
  onPageChange: (page: string) => void; // Properti baru untuk fungsi pindah halaman
}

function Header({ isPlainPage = false, currentPage = 'home', onPageChange }: HeaderProps): React.JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  // Status apakah latar belakang header harus berwarna putih solid
  const shouldBeWhite = isScrolled || isMenuOpen || isPlainPage;

  // Fungsi helper untuk menangani perpindahan halaman sekaligus menutup menu mobile
  const navigateTo = (pageName: string) => {
    onPageChange(pageName)
    setIsMenuOpen(false)
  }

  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 9999,
        backgroundColor: shouldBeWhite ? '#ffffff' : 'transparent', 
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        borderBottom: shouldBeWhite ? '1px solid var(--deep-steel)' : 'none', 
        boxShadow: isScrolled && !isMenuOpen ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
        transition: 'background-color 0.3s ease-in-out, border 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: isScrolled ? '10px 20px' : '15px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        
        {/* 1. LOGO AREA (Klik membawa kembali ke Home) */}
        <div className="header-logo-wrapper" style={{ display: 'flex', alignItems: 'center', zIndex: 10002 }}>
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); navigateTo('home'); }} 
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src={logo} alt="Logo" style={{ width: '45px', height: 'auto', objectFit: 'contain' }} />
          </a>
        </div>

        {/* 2. DESKTOP NAV */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <nav className="nav" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {/* Link Layanan */}
            <div className="menu-item">
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); navigateTo('services'); }}
                style={{ 
                  color: currentPage === 'services' ? 'var(--secondary-orange)' : 'var(--primary-blue)', 
                  fontWeight: currentPage === 'services' ? '700' : '600',
                  textDecoration: 'none'
                }}
              >
                Layanan
              </a>
            </div>
            
            {/* Link Tentang Kami */}
            <div className="menu-item">
              <a 
                href="#about" 
                onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
                style={{ 
                  color: currentPage === 'about' ? 'var(--secondary-orange)' : 'var(--primary-blue)', 
                  fontWeight: currentPage === 'about' ? '700' : '600',
                  textDecoration: 'none'
                }}
              >
                Tentang Kami
              </a>
            </div>
          </nav>

          {/* Tombol Hubungi Kami Desktop */}
          <button 
            className="btn btn-small" 
            onClick={() => navigateTo('contact')}
            style={{ 
              borderColor: currentPage === 'contact' ? 'var(--secondary-orange)' : 'var(--primary-blue)', 
              color: currentPage === 'contact' ? 'var(--secondary-orange)' : 'var(--primary-blue)', 
              background: 'transparent',
              padding: '8px 20px',
              borderRadius: '50px',
              borderStyle: 'solid',
              borderWidth: '2px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            Hubungi Kami
          </button>
        </div>

        {/* 3. BURGER BUTTON */}
        <div 
          className="burger-wrapper" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ cursor: 'pointer', width: '28px', height: '20px', position: 'relative', display: 'none', zIndex: 10002 }}
        >
          <span style={{ position: 'absolute', width: '100%', height: '3px', backgroundColor: 'var(--primary-blue)', top: isMenuOpen ? '9px' : '0', transform: isMenuOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s' }} />
          <span style={{ position: 'absolute', width: '100%', height: '3px', backgroundColor: 'var(--primary-blue)', top: '9px', opacity: isMenuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <span style={{ position: 'absolute', width: '100%', height: '3px', backgroundColor: 'var(--primary-blue)', top: isMenuOpen ? '9px' : '18px', transform: isMenuOpen ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s' }} />
        </div>
      </div>

      {/* 4. MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div onClick={() => setIsMenuOpen(false)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 9999 }} />
      )}

      {/* 5. MOBILE NAV LACI */}
      <div style={{ 
        position: 'fixed', top: 0, right: isMenuOpen ? 0 : '-100%', width: '80%', maxWidth: '300px', height: '100vh', backgroundColor: '#ffffff', zIndex: 10000, padding: '80px 40px', transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)', boxShadow: isMenuOpen ? '-5px 0 15px rgba(0,0,0,0.1)' : 'none', boxSizing: 'border-box'
      }}>
        <nav className="nav" style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
          {/* Layanan Mobile */}
          <div className="menu-item">
            <a 
              href="#services" 
              onClick={(e) => { e.preventDefault(); navigateTo('services'); }}
              style={{ fontSize: '20px', fontWeight: currentPage === 'services' ? '700' : '600', color: currentPage === 'services' ? 'var(--secondary-orange)' : 'var(--primary-blue)', textDecoration: 'none' }}
            >
              Layanan
            </a>
          </div>

          {/* Tentang Kami Mobile */}
          <div className="menu-item">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
              style={{ fontSize: '20px', fontWeight: currentPage === 'about' ? '700' : '600', color: currentPage === 'about' ? 'var(--secondary-orange)' : 'var(--primary-blue)', textDecoration: 'none' }}
            >
              Tentang Kami
            </a>
          </div>

          {/* Hubungi Kami Mobile */}
          <div className="menu-item">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
              style={{ fontSize: '20px', fontWeight: currentPage === 'contact' ? '700' : '600', color: currentPage === 'contact' ? 'var(--secondary-orange)' : 'var(--primary-blue)', textDecoration: 'none' }}
            >
              Hubungi Kami
            </a>
          </div>
        </nav>
      </div>

      {/* RESPONSIVE CSS HELPER */}
      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .burger-wrapper { display: block !important; }
          .header-logo-wrapper { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

export default Header