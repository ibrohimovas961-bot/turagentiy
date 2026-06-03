import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <>
     <header>
        <div className="continer">
            <div className="header-continer">
                <div className="navbar">
                    <h1>TUR AGENTLIGI</h1>
                    <ul>
                        <li><a href="#">Biz haqimizida</a></li>
                        <li><a href="#">Otzivlarimiz</a></li>
                        <li><a href="#">Malumot qoldiring</a></li>
                        <li><a href="#">Yangiliklar</a></li>
                    </ul>
                    <button>Malumotlar bazasi</button>
                </div>
            </div>
        </div>
     </header>
          <section className="hero-section">
              <div className="container">
                  <div className="hero-content">
                      <h2>Dunyoni Biz Bilan Kashf Eting</h2>
                      <p>Eng unutilmas sayohatlar, hamyonbop narxlar va yuqori darajadagi xizmat faqat siz uchun. Hozirdan joyingizni band qiling!</p>
                      <div className="hero-buttons">
                          <button className="btn-primary">Sayohatlarni ko'rish</button>
                          <button className="btn-secondary">Bog'lanish</button>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}
export default Header