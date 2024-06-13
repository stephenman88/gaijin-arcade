import Image from "next/image";
import GABPic from "../assets/images/game-links/GAB-UT2.png";
import KANPic from "../assets/images/game-links/kancolle.jpg";
import HomeLogo from "../assets/roko-arcade-logo/svg/logo-no-background.svg";

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
            <ul className="home-main-games">
              <li className="home-main-games-item"><img className="home-main-games-item_image" src={GABPic.src} alt="Gundam Arsenal Base"/></li>
              <li className="home-main-games-item"><img className="home-main-games-item_image--inactive" alt="Kantai Collection" src={KANPic.src}/></li>
            </ul>
          </main>
        </div>
    )
};