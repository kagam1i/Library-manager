import { Link, NavLink } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, signOut } from "../redux/authSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const navClass = ({ isActive }) =>
    `relative px-2 py-1 transition ${
      isActive
        ? "text-bm-text"
        : "text-bm-text/80 hover:text-bm-text"
    }`;

  return (
    <header className="sticky top-0 z-20 glass">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="justify-self-start">
            <Link
              to="/"
              className="font-heading text-xl sm:text-2xl md:text-3xl tracking-wide text-bm-text"
            >
              LibraManage
            </Link>
          </div>

          {/* Center */}
          <nav className="justify-self-center hidden md:flex items-center gap-6 text-sm md:text-base">
            {/* Library и Add book показываем ТОЛЬКО если пользователь авторизован */}
            {user && (
              <>
                <NavLink to="/library" className={navClass}>
                  Library
                </NavLink>
                <NavLink to="/addBook" className={navClass}>
                  Add book
                </NavLink>
              </>
            )}
          </nav>

          {/* Right */}
          <nav className="justify-self-end hidden md:flex items-center gap-3">
            {!user && (
              <>
                <NavLink to="/signIn" className="btn-ghost">
                  Sign in
                </NavLink>
                <NavLink to="/signUp" className="btn-outline-accent">
                  Sign up
                </NavLink>
              </>
            )}

            {user && (
              <button onClick={handleSignOut} className="btn-ghost">
                Logout
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
