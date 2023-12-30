import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

// Images
import Logo from "../images/logo.png";
import Dot from "../images/dot.png";
import Settings from "../images/settings.svg";
import Place from "../images/shop.svg";

export default function Header() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div>
      <nav className="top-nav">
        <img src={Logo} alt="" className="nav-img" />
        <div className="nav-icons-container">
          {/* <Link to="/recipes" className="nav-icon">
            <div className="d-flex w-100">
              <img src={Recipes} alt="" className="nav-icon-img" />
            </div>
            <div className="l-h-0">
              <small>About Us</small>
            </div>
          </Link> */}
          <Link to="/shop" className="nav-icon">
            <div className="d-flex w-100">
              <img src={Place} alt="" className="nav-icon-img" />
            </div>
            <div className="l-h-0">
              <small>Shop</small>
            </div>
          </Link>
          <Link to="/settings" className="nav-icon">
            <div className="d-flex w-100">
              <img src={Settings} alt="" className="nav-icon-img" />
            </div>
            <div className="l-h-0">
              <small>Settings</small>
            </div>
          </Link>

          {user && (
            <Link to="/recipes" className="nav-icon">
              <div className="d-flex w-100 position-relative">
                <img
                  src={user.photoURL}
                  alt={user.email}
                  className="nav-icon-img rounded"
                />
                <img src={Dot} alt="" className="dot" width="10" height="10" />
              </div>
              <div className="l-h-0">
                <small>hi {user.email}</small>
              </div>
            </Link>
          )}

          <button
            className="btn btn-danger rounded-pill px-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
