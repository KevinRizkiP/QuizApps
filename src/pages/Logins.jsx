import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { accessLogin } from "../Store/actions";
const Logins = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    dispatch(accessLogin(true));
  };
  return (
    <>
      <div className="w-full bg-cover h-full bg-gradient-to-bl from-gray-700 via-gray-900 to-black justify-center items-center">
        <section className="max-w-7xl mx-auto justify-center items-center ">
          <div className="min-h-screen flex justify-center items-center">
            <div className="w-full mx-auto justify-center items-center px-6 lg:px-0">
              <div className="max-w-xl mx-auto h-auto rounded-3xl p-10 bg-gray-300 bg-opacity-10 shadow-xl justify-center items-center">
                <form>
                  <h1 className="text-white font-bold text-4xl mb-8">
                    Sign in
                  </h1>
                  <p className="text-gray-400 text-xl mb-8">
                    Maximize your knowledge by taking quiz
                  </p>
                  <div className="py-3">
                    <input
                      className="block bg-transparent appearance-none border rounded-md w-full py-3 px-4 text-white leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                      value={email}
                      onChange={handleEmail}
                      placeholder="Email Address"
                      type="email"
                      required
                    />
                  </div>
                  <div className="py-3">
                    <input
                      className="block bg-transparent appearance-none border rounded-md w-full py-3 px-4 text-white leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                      value={password}
                      onChange={handlePassword}
                      placeholder="Password"
                      type="password"
                      required
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="flex">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded cursor-pointer mt-1 align-top mr-2"
                      />
                      <p className="text-gray-400">Keep me signed in</p>
                    </div>
                    <div>
                      <a className="text-blue-500" href="/#">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="py-3 pt-4">
                    <Link to="/">
                      <button
                        type="submit"
                        className="w-full bg-blue-800 text-white font-bold py-3 px-4 rounded text-2xl hover:bg-blue-700"
                        onClick={handleLogin}
                      >
                        Sign In
                      </button>
                    </Link>
                  </div>
                  <p className="text-center text-gray-400">
                    Not registered yet?{" "}
                    <span>
                      <Link
                        className="font-semibold text-blue-500"
                        to="/register"
                      >
                        Create a new account
                      </Link>
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Logins;
