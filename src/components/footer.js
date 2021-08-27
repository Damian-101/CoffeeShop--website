import logo from "../images/logo.png"
import "../scss/_footer.scss"
import logo1 from "../images/facebook-logo.png"
import logo2 from "../images/instagram-logo.png"
import logo3 from "../images/twitter-logo.png"

const Footer = () => {
    return(
        <section>
        <div className="footer" id="footer">
        <div className="section-spacer footer__content">
            <div className="footer_left">
            <div className="footer__logo">
                <img src={logo} alt="logo" />
            </div>
            </div>

            <div className="footer__middle footer__group">
            <div className="footer__openHours ">
                <div className="footer__openHours-heading">Open Hours</div>
                <div className="footer__openHours-timeTable">
                <table>
                    <tr className="footer__openHours-timeTable-row">
                    <td>Mon - Fri</td>
                    <td>4.00am - 9pm</td>
                    </tr>
                    <tr className="footer__openHours-timeTable-row">
                    <td>Sat - Sun</td>
                    <td>7.00am - 5pm</td>
                    </tr>
                </table>
                </div>
            </div>
            <div className="footer__openHours-contact-wraper">
                <ul className="footer__openHours-contact">
                <li>012 3333 444</li>
                <li>934 4434 343</li>
                <li>coffeehousehelp@gmail.com</li>
                </ul>
            </div>
            </div>

            <div className="footer__right-wraper footer__group">
            <ul className="footer__right">
                <li>
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#">Locations</a>
                </li>
                <li>
                <a href="#">Contact Us</a>
                </li>
                <li>
                <a href="#">Menu</a>
                </li>
            </ul>
            <div className="footer__social-media-logos">
                <a href="#">
                <img src={logo1} className="socialmedia-icon"/>
                </a>
                <a href="#">
                <img src={logo2} className="socialmedia-icon"/>
                </a>
                <a href="#">
                <img src={logo3} className="socialmedia-icon" />
                </a>
            </div>
            </div>
            <div className="footer__copyright footer__group">
            2021,All Rights Reserved
            </div>
        </div>
        </div>
    </section>
    )
};

export default Footer