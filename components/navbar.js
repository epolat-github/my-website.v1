import Link from "next/link";

import { checkUser, currentUser, authInstance } from "../src/dbCon";
import Router from "next/router";

// authInstance().onAuthStateChanged(user => {
//   if (user) {
//     document
//       .querySelectorAll(".signed-out")
//       .forEach(item => (item.style.display = "none"));
//     document
//       .querySelectorAll(".signed-in")
//       .forEach(item => (item.style.display = "block"));
//   } else {
//     document
//       .querySelectorAll(".signed-out")
//       .forEach(item => (item.style.display = "block"));
//     document
//       .querySelectorAll(".signed-in")
//       .forEach(item => (item.style.display = "none"));
//   }
// });

const Navbar = () => (
  <div>
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-light"
      style={{ backgroundColor: "white" }}
    >
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
          {/* <li
            className="nav-item signed-out"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link href="/signin">
              <a className="nav-link">Sign-in</a>
            </Link>
          </li> */}
          {/* <li className="nav-item signed-out">
            <Link href="/register">
              <a className="nav-link">Register</a>
            </Link>
          </li> */}
          {/* <li
            className="nav-item signed-in"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link href="/write">
              <a className="nav-link">Write</a>
            </Link>
          </li> */}
          {/* <li
            className="nav-item signed-in"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
          >
            <Link href="/">
              <a
                className="nav-link"
                onClick={() => {
                  authInstance()
                    .signOut()
                    .then(() => Router.push("/"))
                    .catch(() => console.log("Sign-out problem."));
                }}
              >
                Log-Out
              </a>
            </Link>
          </li> */}
        </ul>
      </div>
      <style jsx>{`
        a {
          font-size: 25px;
          margin-right: 20px;
        }
      `}</style>
    </nav>
  </div>
);

export default Navbar;
