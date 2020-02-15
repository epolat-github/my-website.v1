import Layout from "../components/layout";
import Communication from "../components/communication";

const Index = () => (
  <Layout>
    <article className="jumbotron bg-transparent">
      <section className="container" id="summaryText">
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
      .text-right {
        margin-right: 28%;
      }
      #summaryText {
        margin-top: 4%;
      }
      #summaryText p {
        font-family: "Roboto Mono", monospace;
        //letter-spacing: 10px;
        #color: #4d4737;
        #color: #66fcf1;
        color: white;
        font-size: 85px;
        font-weight: bold;
        line-height: 1.6em;
      }
      .inline {
        #color: #ba0d00;
        color: #d1a172;
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
    `}</style>
  </Layout>
);

export default Index;
