// import logo from "../images/logo.png";
import "../js/slider"
// import "../css/slider.css"
import "../scss/_nav.scss"
import "../scss/_menuPage__hero.scss"
const MenuPage = () => {
    return(
        <section>
            <div className="menu">
                {/* left side  */}
                <div className="menu__left">
                    <div className="menu__heading">
                        <h2>Our Menu</h2>
                    </div>
                    <div className="menu__item-categories">
                        {/* categori 1 */}
                        <div className="menu_categories">
                            <h3 className="menu_categorie">Coffee</h3>
                            <ul className="menu_sub-categories">
                                <li>Cold Coffees</li>
                                <li>Hot Coffees</li>
                                <li>Lattes</li>
                            </ul>
                        </div>
                        {/* categori 2 */}
                        <div className="menu_categories">
                            <h3 className="menu_categorie">Food</h3>
                            <ul className="menu_sub-categories">
                                <li>Sandwiches</li>
                                <li>Pastries</li>
                                <li>Dessert</li>
                            </ul>
                        </div>
                        {/* categori 3 */}
                        <div className="menu_categories">
                            <h3 className="menu_categorie">Bevarages</h3>
                        </div>
                        {/* categori 4 */}
                        <div className="menu_categories">
                            <h3 className="menu_categorie">Coffee Beans</h3>
                        </div>                        
                    </div>
                </div>
                {/* right side  */}
                <div className="menu__right">
                </div>
            </div>
        </section>
    )
}

export default MenuPage