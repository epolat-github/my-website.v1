import Header from "./header";
import Head from "next/head";
import Communication from "./communication";

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
    </Head>
    <Header />
    {props.children}
    <div className="communication-container">
      <Communication />
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossOrigin="anonymous"
      ></script>
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
