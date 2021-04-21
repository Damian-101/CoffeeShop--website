import logo from "../images/logo.png";
import "../js/slider"
import "../css/slider.css"
import "../scss/_nav.scss"
import "../scss/_menuPage__hero.scss"
const MenuPage = () => {
    return(
        <>
        {/* nav  */}
        <header>
            <nav className="nav">
                <div className="nav__wraper">
                    <div className="nav__logo-wraper">
                        <img src ="" className="nav__logo" alt="logo"/>
                    </div>
                    <div className="nav__side-bar">
                            <a href="#">Home</a>
                            <a href="#">Menu</a>
                            <a href="#">Locations</a>
                            <a href="#">Contact Us</a>
                            <div className="slider__bottom">@2021,All Rights Reserved</div>
                    </div>
                    <div className="nav-toggler-disable nav__sidebar-toggler">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <div className="nav__sidebar-screen-blur"></div>
                    </div>
                </div>
            </nav>
        </header>
        {/* hero  */}
        <section>
            <div className="hero">
                {/* <img src={heroBgImg}/> */}
            {/* <svg width="100%" height="100%" id="a">
                <defs>
                    <mask height="100%" width="100%" id="hero-bg-mask">
                        <rect width="1" height="1" rx="0.5" stroke="none"/>
                        <rect x="0.5" y="0.5" fill="none"/>
                    </mask>
                </defs>
            </svg> */}
                <div className="hero__content">
                    <h1 className="hero__heading">Our Menu</h1>
                    <p className="hero__para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                </div>
            </div>
        </section>
    </>
    )
}

export default MenuPage