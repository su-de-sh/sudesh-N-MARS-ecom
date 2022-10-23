// import toskaLogo from "../assets/images/toskalogo_color.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/download.png";
import searchIcon from "../assets/images/search-icon.png";
import cartIcon from "../assets/images/cart.png";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.users);
  console.log("user", user);

  return (
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
          {user ? (
            <p className="text-link ">{user.firstName}</p>
          ) : (
            <>
              <Link to="/login" className="text-link ">
                Login
              </Link>
              <div className="text-link">/</div>
              <Link to="/signup" className="text-link ">
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
