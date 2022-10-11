// import toskaLogo from "../assets/images/toskalogo_color.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/download.png";
import searchIcon from "../assets/images/search-icon.png";
import cartIcon from "../assets/images/cart.png";

const NavBar = () => (
  <div className="wrapper">
    <div className="flex split-pair align-center region-tn nav-bar">
      <div className="flex  align-center gap-2">
        <img src={logo} alt="toska" className="logo" />
        <Link to="/" className="text-link">
          Home
        </Link>
        <Link to="/category" className="text-link">
          Category
        </Link>
        <div className="search-box flex align-center">
          <form action="">
            <input type="text" placeholder="Search" className="input-field" />
          </form>
          <img src={searchIcon} alt="search-icon" className="search-icon" />
        </div>
      </div>

      <div className="flex align-center split-pair gap-1">
        <Link to="/cart">
          <img src={cartIcon} alt="cart-icon" className="cart-icon" />
        </Link>

        <Link to="/login" className="text-link ">
          Login/Signup
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
