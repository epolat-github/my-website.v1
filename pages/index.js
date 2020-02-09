import Layout from "../components/layout";
import Communication from "../components/communication";

const Index = () => (
  <Layout>
    <article className="jumbotron bg-transparent">
      <section className="container" id="summaryText">
        {/* <p>Erinç Polat = {"{"}</p>
        <p>
          Full-time: "learner", <br />
          Part-time: "student" <br />
        </p>
        <p>{"}"};</p> */}

        <p className="text-center text-wrap align-middle">
          Erinç Polat = {"{"}
          <br /> Full-time: "<span className="inline">learner</span>",
          <br /> Part-time: "<span className="inline">student</span>"
          <br /> {"}"}
        </p>
        {/* <img src="/photo.png" alt="picture" /> */}
      </section>
      <div className="communication-container">
        <Communication />
      </div>
    </article>
    <style jsx>{`
      #summaryText {
        margin-top: 4%;
      }
      #summaryText p {
        font-family: "Roboto Mono", monospace;
        //letter-spacing: 10px;
        #color: #4d4737;
        color: #a8ada9;
        font-size: 85px;
        font-weight: bold;
        line-height: 1.60em;
      }
      .inline {
        color: #ba0d00;
      }
      
      @media only screen and (max-width: 600px) {
        {/* #summaryText {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          margin: 5%;
        } */}
        #summaryText p {
          font-size: 45px;
          line-height: 1.8em;
        } 
        .communication-container {
          visibility: hidden;
        }
      }
    `}</style>
  </Layout>
);

export default Index;
