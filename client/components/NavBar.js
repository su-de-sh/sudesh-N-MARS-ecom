// import toskaLogo from "../assets/images/toskalogo_color.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/download.png";
import searchIcon from "../assets/images/search-icon.png";
import cartIcon from "../assets/images/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { setUserObject } from "../reducers/userReducer";

const NavBar = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLogout = () => {
    window.localStorage.removeItem("loggedinUser");
    dispatch(setUserObject(null));
  };
  return (
    <div className="wrapper">
      <div className="flex split-pair align-center region-tn nav-bar">
        <Link to="/">
          <img src={logo} alt="toska" className="logo" />
        </Link>
        <Link to="/" className="text-link">
          Home
        </Link>
        <Link to="/category" className="text-link">
          Category
        </Link>

        <div className="flex split-pair align-center">
          <form action="">
            <input type="text" placeholder="Search" className="search-box" />
          </form>
          <img
            src={searchIcon}
            alt="search-icon"
            className="search-icon margin-sm"
          />
        </div>

        <div className="flex split-pair align-center">
          <Link to="/cart">
            <img src={cartIcon} alt="cart-icon" className="cart-icon" />
          </Link>
          {user ? (
            <>
              <p className="text-link ">{user.firstName.toUpperCase()}</p>
              <button className="no-button" onClick={handleLogout}>
                [logout]
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-link margin-sm">
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
