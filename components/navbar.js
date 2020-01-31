import Link from "next/link";

const Navbar = () => (
  // <nav className="navbar">
  //   <ul>
  //     <li>
  //       <Link href="/">
  //         <a>Home</a>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="/about">
  //         <a>About</a>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="/portfolio">
  //         <a>Portfolio</a>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="/contact">
  //         <a>Contact</a>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="/blog">
  //         <a>Blog</a>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link href="/blog">
  //         <a>Resume</a>
  //       </Link>
  //     </li>
  //   </ul>
  //   <style jsx>{`
  //     .navbar {
  //       align: center;
  //       padding-left: 25%;
  //       padding-right: 15%;
  //       #margin-left: 30%;
  //       #margin-top: 1%;
  //     }

  //     .navbar ul {
  //       list-style: none;
  //       padding: 0px;
  //     }

  //     .navbar li {
  //       display: inline;
  //       padding: 2%;
  //     }

  //     .navbar li:hover {
  //       border-top: solid;
  //       border-color: #067c99;
  //     }

  //     .navbar a {
  //       font-family: "Abril Fatface", cursive;
  //       letter-spacing: 3px;
  //       color: #a8ada9;
  //       text-decoration: none;
  //       text-transform: uppercase;
  //       font-weight: bold;
  //       font-size: 26px;
  //     }

  //     .navbar a:hover {
  //       color: #767a76;
  //       color: rgba(9, 178, 220, 0.4);
  //     }
  //   `}</style>
  // </nav>
  <nav
    id="navbar"
    className="navbar navbar-expand-sm justify-content-center bg-light"
  >
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/portfolio">
          <a className="nav-link">Portfolio</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/contact">
          <a className="nav-link">Contact</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/blog">
          <a className="nav-link">Blog</a>
        </Link>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          rel="noopener"
          target="_blank"
          href="/Erinç-Polat-CV-EN.pdf"
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <Link href="/signin">
          <a className="nav-link">Sign-in</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/register">
          <a className="nav-link">Register</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      #navbar {
        color: black;
      }
      li {
        padding-right: 30px;
      }
      a {
        font-size: 25px;
      }
      a:hover {
        color: #767a76;
        //color: rgba(9, 178, 220, 0.4);
      }
      @media only screen and (max-width: 600px) {
        a {
          font-size: 13px;
          padding-right: 1% !important;
        }
        li {
          padding-right: 2% !important;
          border-right: 1px solid lightgrey;
        }
        .navbar-nav {
          flex-direction: row !important;
        }
      }
    `}</style>
  </nav>
);

export default Navbar;
