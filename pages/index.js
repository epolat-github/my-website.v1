import Head from "next/head";
import Layout from "../components/layout";
import Communication from "../components/communication";

const Index = () => (
  <Layout>
    <article className="jumbotron bg-transparent">
      <section id="summaryText">
          <p className="text-left text-wrap align-middle">
            Erinç Polat = {"{"}
            <br /> Full-time: "<span className="inline">learner</span>",
            <br /> Part-time: "<span className="inline">student</span>"
          </p>
          <p className="text-right">}</p>
      </section>
      <div className="communication-container">
        <Communication />
      </div>
    </article>
    <style jsx>{`
      section {
        margin: 10vh auto;
      }
      p {
        text-align: center!important;
        color: white;
        font-family: "Roboto Mono", monospace;
        font-size: 4vw;
        font-weight: bold;
        line-height: 1.6em;
      }
      .inline {
        color: #d1a172;
      }
      .text-right {
        padding-right: 17vw;
      }
       {
        /* .text-right {
        margin-right: 28%;
      }
      #summaryText {
        display: table;
        margin: 0 auto;
        margin-top: 4%;
      }
      #summaryText p {
        font-family: "Roboto Mono", monospace;
        //letter-spacing: 10px;
        #color: #4d4737;
        #color: #66fcf1;
        color: white;
        font-size: 4vw;
        font-weight: bold;
        line-height: 1.6em;
      }
      .inline {
        #color: #ba0d00;
        color: #d1a172;
      } */
      }

      @media only screen and (max-width: 600px) {
        #summaryText p {
          font-size: 47px;
          line-height: 1.8em;
          text-align: center !important;
        }
        .text-right {
          margin-left: 45%;
        }
        .text-left {
          margin-bottom: 0px;
        }
        .communication-container {
          visibility: hidden;
        }
      }
      @media only screen and (min-width: 1200px) and (max-width: 1400px) {
        #summaryText p {
          font-family: "Roboto Mono", monospace;
          color: white;
          font-size: 3.8vw;
          font-weight: bold;
          line-height: 1.6em;
        }
        article {
          margin-bottom: 0;
          padding: 2rem 2rem !important;
        }
      }
    `}</style>
  </Layout>
);

export default Index;
