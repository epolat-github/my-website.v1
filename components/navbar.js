import Link from "next/link";

import { checkUser, currentUser, authInstance } from "../src/dbCon";
import Router from "next/router";

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-expand-md sticky-top navbar-dark bg-transparent">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <Link href="/">
          <a className="navbar-brand">
            <img src="/logo2.png" alt="logo" />
          </a>
        </Link>
        <ul className="navbar-nav ml-auto">
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          {/* <li className="nav-item">
          <Link href="/portfolio">
            <a className="nav-link">Portfolio</a>
          </Link>
        </li> */}
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li
            className="nav-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <a
              className="nav-link"
              rel="noopener"
              target="_blank"
              href="/Erinç-Polat-CV-EN.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .active {
          text-color:red;
        }
        a {
          font-size: 30px;
          margin-right: 20px;
        }
        a:hover {
          color: #de9e73 !important;
        }
      `}</style>
    </nav>
  </div>
);

export default Navbar;
