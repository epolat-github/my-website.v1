import Head from "next/head";
import Communication from "./communication";
import Navbar from "./navbar";
import NoSSR from "react-no-ssr";
import Footer from "./footer";

const Layout = props => (
  <div className="layout-container">
    <Head>
      <title>Erinç Polat</title>
    </Head>
    {props.children}
    <style jsx>{`
      .layout-container {
        #background-color: #d6c698;
        #background-color: cyan;
        #background-color: rgb(10, 25, 47);
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
      }
    `}</style>
  </div>
);

export default Layout;
