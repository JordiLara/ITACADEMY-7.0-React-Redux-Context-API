import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLogIn,
  FiUserPlus,
  FiLogOut,
} from "react-icons/fi";
import { logout } from "../store/authSlice";
import type { RootState } from "../store/store";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const email = useSelector(
    (state: RootState) => state.auth.user?.email
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Marvel Side */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.marvel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
                alt="Marvel"
                className="h-12 mb-2 hover:opacity-80 transition-opacity"
              />
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Marvel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-200"
              >
                <FiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/marvel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-200"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/marvel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-200"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/marvel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-200"
              >
                <FiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-8 mb-2">
              <Link
                to="/"
                className={`text-white hover:text-gray-200 text-sm uppercase tracking-wider py-2 px-1 border-b-2 ${
                  isActive("/") ? "border-yellow-400" : "border-transparent"
                }`}
              >
                Home
              </Link>
              <Link
                to="/superheroes"
                className={`text-white hover:text-gray-200 text-sm uppercase tracking-wider py-2 px-1 border-b-2 ${
                  isActive("/superheroes")
                    ? "border-yellow-400"
                    : "border-transparent"
                }`}
              >
                Superheroes
              </Link>
            </div>
          </div>

          {/* DC Side */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.dc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/800px-DC_Comics_logo.png"
                alt="DC"
                className="h-12 mb-2 hover:opacity-80 transition-opacity"
              />
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/dc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
              >
                <FiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dccomics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
              >
                <FiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/DCComics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
              >
                <FiTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/dc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
              >
                <FiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="border-t border-white/20 py-2">
          <div className="flex justify-end space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="text-white text-sm tracking-wider px-4 py-1 rounded border border-white/30 bg-transparent hover:bg-white/10 transition-colors">
                  { 'Hola,'} { email }{" "}
                </div>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-200 text-sm uppercase tracking-wider px-4 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <FiLogOut className="h-4 w-4" />
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-gray-200 text-sm uppercase tracking-wider px-4 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <FiLogIn className="h-4 w-4" />
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="text-white hover:text-gray-200 text-sm uppercase tracking-wider px-4 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <FiUserPlus className="h-4 w-4" />
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
