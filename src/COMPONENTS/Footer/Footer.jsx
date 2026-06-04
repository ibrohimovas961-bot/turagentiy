import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>TUR AGENTLIGI</h2>
            <p>Dunyoni biz bilan kashf eting va unutilmas sayohatlarga yo'l oling.</p>
          </div>

          <div className="footer-links">
            <h3>Tezkor havolalar</h3>
            <ul>
              <li><a href="#">Biz haqimizda</a></li>
              <li><a href="#">Xizmatlar</a></li>
              <li><a href="#">Yangiliklar</a></li>
              <li><a href="#">Bog'lanish</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Aloqa</h3>
            <p>📍 Toshkent, O'zbekiston</p>
            <p>📞 +998 90 123 45 67</p>
            <p>✉️ info@turagentlik.uz</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TUR AGENTLIGI. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer