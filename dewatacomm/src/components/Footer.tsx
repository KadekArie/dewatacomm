import React from 'react'

function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        backgroundColor: '#ffffff', 
        // Mengunci hanya ada 1 border atas, dan menghapus border bawaan CSS global
        borderTop: '1px solid var(--deep-steel) !important', 
        borderBottom: 'none !important',
        borderLeft: 'none !important',
        borderRight: 'none !important',
        padding: '20px 0 !important', 
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div className="container" style={{ margin: '0 auto', padding: '0 24px' }}>
        {/* Jika separator kedua ada di dalam copyright-wrapper, kita hapus kodenya di sini */}
        <div className="copyright-wrapper" style={{ textAlign: 'center', border: 'none', padding: 0, margin: 0 }}>
          <p 
            className="copyright" 
            style={{ 
              margin: 0, 
              padding: 0,
              color: 'var(--cool-gray)', 
              fontSize: 'var(--fs-small)',
              fontWeight: '500'
            }}
          >
            &copy; {currentYear} Dewatacomm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer