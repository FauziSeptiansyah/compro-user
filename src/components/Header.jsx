import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar fixed left-0 top-0 z-50 w-full bg-white bg-opacity-20 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <details className="lg:hidden">
              <summary
                className="btn btn-ghost"
                role="button"
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </summary>
              <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <details>
                    <summary>COMPANY</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/About">ABOUT US</Link>
                      </li>
                      <li>
                        <Link to="/Career">CAREER</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a href="#services">SERVICE</a>
                </li>
                <li>
                  <Link to="/Product">PRODUCT</Link>
                </li>
                <li>
                  <Link to="/Blog">BLOG</Link>
                </li>
                <li>
                  <details>
                    <summary>HELP</summary>
                    <ul className="p-2">
                      <li>
                        <Link to="/Contact">CONTACT US</Link>
                      </li>
                      <li>
                        <Link to="/FAQ">FAQ</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </div>
          <Link to="/" className="cursor-pointer text-xl font-bold">CODING CREATOR</Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <details>
                <summary>COMPANY</summary>
                <ul className="rounded-box bg-base-100 p-2 shadow">
                  <li>
                    <Link to="/About">ABOUT US</Link>
                  </li>
                  <li>
                    <Link to="/Career">CAREER</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#services">SERVICE</a>
            </li>
            <li>
              <Link to="/Product">PRODUCT</Link>
            </li>
            <li>
              <Link to="/Blog">BLOG</Link>
            </li>
            <li>
              <details>
                <summary>HELP</summary>
                <ul className="rounded-box bg-base-100 p-2 shadow">
                  <li>
                    <Link to="/Contact">CONTACT US</Link>
                  </li>
                  <li>
                    <Link to="/FAQ">FAQ</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="flex items-center justify-end">
            <a className="btn btn-ghost items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.95605 13.5625C10.5873 13.5625 13.5186 10.6313 13.5186 7H0.393555C0.393555 10.6313 3.3248 13.5625 6.95605 13.5625Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M6.95605 0.4375C3.3248 0.4375 0.393555 3.36875 0.393555 7H13.5186C13.5186 3.36875 10.5873 0.4375 6.95605 0.4375Z"
                  fill="#ED4C5C"
                />
              </svg>
              IND
            </a>
            <div className="h-4 w-px bg-white"></div>
            <a className="btn btn-ghost">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask
                    id="mask0_344_951"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                      fill="white"
                    />
                  </mask>
                </defs>
                <g mask="url(#mask0_344_951)">
                  <path
                    d="M0 0L0.1875 0.515625L0 1.05469V1.59375L0.75 2.85938L0 4.125V4.875L0.75 6L0 7.125V7.875L0.75 9.14062L0 10.4062V12L0.515625 11.8125L1.05469 12H1.59375L2.85938 11.25L4.125 12H4.875L6 11.25L7.125 12H7.875L9.14062 11.25L10.4062 12H12L11.8125 11.4844L12 10.9453V10.4062L11.25 9.14062L12 7.875V7.125L11.25 6L12 4.875V4.125L11.25 2.85938L12 1.59375V0L11.4844 0.1875L10.9453 0H10.4062L9.14062 0.75L7.875 0H7.125L6 0.75L4.875 0H4.125L2.85938 0.75L1.59375 0H0Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M7.875 0V2.53125L10.4062 0H7.875ZM12 1.59375L9.46875 4.125H12V1.59375ZM0 4.125H2.53125L0 1.59375V4.125ZM1.59375 0L4.125 2.53125V0H1.59375ZM4.125 12V9.46875L1.59375 12H4.125ZM0 10.4062L2.53125 7.875H0V10.4062ZM12 7.875H9.46875L12 10.4062V7.875ZM10.4062 12L7.875 9.46875V12H10.4062Z"
                    fill="#0052B4"
                  />
                  <path
                    d="M0 0V1.05469L3.07031 4.125H4.125L0 0ZM4.875 0V4.875H0V7.125H4.875V12H7.125V7.125H12V4.875H7.125V0H4.875ZM10.9453 0L7.875 3.07031V4.125L12 0H10.9453ZM4.125 7.875L0 12H1.05469L4.125 8.92969V7.875ZM7.875 7.875L12 12V10.9453L8.92969 7.875H7.875Z"
                    fill="#D80027"
                  />
                </g>
              </svg>
              ENG
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
