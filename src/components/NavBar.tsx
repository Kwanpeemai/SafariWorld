import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { fakeAuthProvider } from "../Auth";

const NavBar = () => {
  const [fakeLogin, setFakeLogin] = useState(fakeAuthProvider.isAuthenticated);
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="nav-bar">
        <li>
          <Link to="/home">HOME 🏠</Link>
        </li>
        <li>
          <Link to="/todo">APP 👾</Link>
        </li>
        <li>
          {!fakeLogin ? (
            <button
              id="login-btn"
              type="button"
              onClick={() => {
                setFakeLogin(!fakeLogin);
                fakeAuthProvider.signin("hello");
              }}
            >
              Login
            </button>
          ) : (
            <button
              id="logout-btn"
              type="button"
              onClick={() => {
                setFakeLogin(!fakeLogin);
                fakeAuthProvider.signout();
                navigate("/home");
              }}
            >
              Logout
            </button>
          )}
        </li>
      </ul>

      <Outlet />
    </nav>
  );
};
export default NavBar;
