import './style.scss'
import Link from "next/link";
import GABLogo from "../../assets/images/gundam-ab/general/Mobile_Suit_Gundam_Arsenal_Base_logo.png"

export default function Layout({children}: Readonly<{children: React.ReactNode}>){
    return(<div className='gab page-boundaries'>
        <header className='gab-header'>
            <img className='gab-header_logo' src={GABLogo.src} alt='gundam-arsenal-base-logo'/>
            <nav className='gab-header-nav'>
                <ul className="gab-header-nav-links">
                    <li className="gab-header-nav-links_item"><Link href="/">Home</Link></li>
                    <li className="gab-header-nav-links_item"><Link href="/Articles">Articles</Link></li>
                    <li className="gab-header-nav-links_item"><Link href="/Cards">Cards</Link></li>
                    <li className="gab-header-nav-links_item"><Link href="/Calculator">Calculator</Link></li>
                </ul>
            </nav>
        </header>
        <main className="gab-main">
            {children}
        </main>
        <footer className='gab-footer'>
            <p className='gab-footer_disclaimer'>Roko Arcade is a fan-made website. Gundam Arsenal Base and all official assets are owned by Bandai.</p>
        </footer>
    </div>)
}