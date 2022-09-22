import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { accessLogin } from "../Store/actions";
const NavBar = () => {
  const accessLoginState = useSelector((state) => state.accessLogin);
  const dispatch = useDispatch();
  const handleAccess = () => dispatch(accessLogin(false));
  return (
    <div className="w-screen border-b-2 bg-white">
      <div className="flex lg:py-2 lg:px-0 py-4 px-5 justify-between max-w-7xl lg:mx-auto items-center my-2">
        <div className="flex items-center lg:gap-5 gap-2 ">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
          >
            Home
          </Link>
          {accessLoginState === false ? (
            <Link
              to="/logins"
              className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
            >
              Quiz
            </Link>
          ) : (
            <Link
              to="/quiz"
              className="block active:text-blue-500 lg:text-lg text-gray-400 hover:border-b-2 hover:border-blue-500 hover:text-blue-500"
            >
              Quiz
            </Link>
          )}
        </div>
        {/* btn or user */}
        {accessLoginState === false && (
          <div className="flex">
            <div className="flex lg:gap-5 gap-2">
              <Link
                className="bg-blue-500 lg:px-5 rounded-lg my-auto py-3 text-sm lg:text-base text-white font-semibold"
                to="/register"
              >
                Sign Up
              </Link>
              <Link
                className="lg:py-3 lg:px-5 py-1 px-2 text-sm lg:text-base text-blue-500 font-semibold"
                to="/logins"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
        {accessLoginState === true && (
          <div className="flex">
            <div className="flex gap-3 items-center">
              <img className="w-8" src="/icon/icon_user.png" alt="/" />
              <p>user@gmail.com</p>
              <Link
                className="bg-red-500 lg:px-5 rounded-lg my-auto py-1 text-sm lg:text-base text-white"
                to="/"
                onClick={handleAccess}
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
