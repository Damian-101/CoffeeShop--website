import "../js/slider"
import logoDark from "../images/logo-dark.png"
const Nav = () => {
    return(
        <header>
        <nav className="nav-wraper">
            <div className="custom--container nav">

            <div className="nav__left-sec">
                <img src={logoDark} alt="navlogo" className="nav__left-logo"/>
            </div>

            <div className="nav__right-sec">
                <div className="toggle-btn responsive" id="toggleBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30.75" height="25" viewBox="0 0 30.75 25">
                        <g id="Group_886" data-name="Group 886" transform="translate(-304.25 -30)">
                        <line id="Line_1" data-name="Line 1" x2="30.75" transform="translate(304.25 32.5)" fill="none" stroke="#000" strokeWidth="5"/>
                        <line id="Line_2" data-name="Line 2" x2="30.75" transform="translate(304.25 42.5)" fill="none" stroke="#000" strokeWidth="5"/>
                        <line id="Line_3" data-name="Line 3" x2="30.75" transform="translate(304.25 52.5)" fill="none" stroke="#000" strokeWidth="5"/>
                        </g>
                    </svg>            
                </div>
                <div className="nav__right-sec-nav-wraper">
                    <ul className="nav__right-sec-nav">
                        <img src={logoDark} alt="logo" className="sidebar-logo"/>
                        <li className="nav-item"><a href="/">Home</a></li>
                        <li className="nav-item"><a href="/menu">Menu</a></li>
                        <li className="nav-item"><a href="#footer">Locations</a></li> 
                        <li className="nav-item"><a href="#footer">Contact Us</a></li> 
                    </ul>
                </div>
            </div>
            </div>
        </nav>
        <div className="sidebar--overlay" id="sidebar--overlay"></div>
    </header>
    )
}

export default Nav