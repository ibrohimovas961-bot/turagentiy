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
    </>
  )
}
export default Header