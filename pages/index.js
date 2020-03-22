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
      article {
        overflow: hidden;
        height: 70vh;
      }
      section {
        margin: 10vh auto;
      }
      p {
        text-align: center !important;
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
        padding-left: 35vw;
      }

      @media only screen and (max-width: 600px) {
        article {
          height: 85vh;
        }
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
