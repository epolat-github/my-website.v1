import Navbar from "./navbar";

const Header = () => (
  <div className="header-main">
    {/* <img src="/logo.png" alt="Logo" /> */}
    <Navbar />

    <style jsx>{`
      .header-main {
        position: sticky!important;
        top: 0;
        #background-color: rgb(10, 25, 47);
        #background-color: #e3d8b8;
      }
      
    `}</style>
  </div>
);

export default Header;
