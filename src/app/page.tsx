import Image from "next/image";
import GABPic from "../assets/images/game-links/GAB-UT2.png";
import KANPic from "../assets/images/game-links/kancolle.jpg";
import HomeLogo from "../assets/roko-arcade-logo/svg/logo-no-background-white.svg";
import Link from "next/link";


export default function Home(){
    return (
        <div className="home">
          <header className="home-header page-boundaries">
            <nav className="home-header-nav">
              <img src={HomeLogo.src} alt="Site Banner" className="home-header-nav_banner"/>
              <ul className="home-header-nav-links">
                <li className="home-header-nav-links_item"><Link href="/">Home</Link></li>
                <li className="home-header-nav-links_item"><Link href="/news">News</Link></li>
                <li className="home-header-nav-links_item"><Link href="/articles">Articles</Link></li>
              </ul>
            </nav>
          </header>
          <main className="home-main page-boundaries">
            <div className="home-main-games">
              <Link href="/gundam-arsenal-base"><img className="home-main-games_item" src={GABPic.src} alt="Gundam Arsenal Base"/></Link>
              <img className="home-main-games_item--inactive" alt="Kantai Collection" src={KANPic.src}/>
            </div>
          </main>
          <footer className="home-footer page-boundaries">
            <p className="home-footer_disclaimer">This is a fan-site made by Stephen Man.</p>
          </footer>
        </div>
    )
};