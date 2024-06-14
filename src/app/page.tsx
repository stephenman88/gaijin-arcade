import Image from "next/image";
import GABPic from "../assets/images/game-links/GAB-UT2.png";
import KANPic from "../assets/images/game-links/kancolle.jpg";
import HomeLogo from "../assets/roko-arcade-logo/svg/logo-no-background-white.svg";

export default function Home(){
    return (
        <div className="home page-boundaries">
          <header className="home-header">
            <nav className="home-header-nav">
              <img src={HomeLogo.src} alt="Site Banner" className="home-header-nav_banner"/>
              <ul className="home-header-nav-links">
                <li className="home-header-nav-links_item">Home</li>
                <li className="home-header-nav-links_item">News</li>
                <li className="home-header-nav-links_item">Articles</li>
                <li className="home-header-nav-links_item">About</li>
              </ul>
            </nav>
          </header>
          <main className="home-main">
            <div className="home-main-games">
              <img className="home-main-games_item" src={GABPic.src} alt="Gundam Arsenal Base"/>
              <img className="home-main-games_item--inactive" alt="Kantai Collection" src={KANPic.src}/>
            </div>
          </main>
          <footer className="home-footer">
            <p className="home-footer_disclaimer">This is a fan-site made by Stephen Man.</p>
          </footer>
        </div>
    )
};