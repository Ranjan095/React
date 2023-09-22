/** @format */

import { Link, NavLink } from "react-router-dom";

export default function Header() {
  let nav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "User", href: "/user" },
  ];

  return (
    <header className="shadow sticky z-50 top-0 border">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 border">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12"
                alt="Logo"
              />
            </Link>
          </div>
          <div>
            <ul className="flex justify-around ">
              {nav.map((ele, i) => (
                <li key={i}>
                  <NavLink
                    to={ele.href}
                    className={({ isActive }) =>
                      ` font-semibold m-2 px-2 rounded-lg ${
                        isActive ? " text-red-500 " : " text-gray-700"
                      } `
                    }
                  >
                    {ele.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
