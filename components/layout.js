import Head from "next/head";
import Communication from "./communication";
import Navbar from "./navbar";

const Layout = props => (
  <div className="layout-container">
    <Head>
      <title>Erinç Polat</title>
      <link rel="icon" href="/favicon.png" />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    <Navbar />
    {props.children}
    <div className="communication-container">
      <Communication />
    </div>
    <style jsx>{`
    
      .layout-container {
        #background-color: #d6c698;
        #background-color: cyan;
        #background-color: rgb(10, 25, 47);
        margin: 0px;
        padding: 0px;
      }
      @media only screen and (max-width: 600px) {
      .communication-container {
        visibility: hidden;
      }
    `}</style>
  </div>
);

export default Layout;
