import Layout from "../components/layout";
import Link from "next/link";

const Index = () => (
  <Layout>
    <article>
      <section id="summaryText">
        {/* <p>Erinç Polat = {"{"}</p>
        <p>
          Full-time: "learner", <br />
          Part-time: "student" <br />
        </p>
        <p>{"}"};</p> */}

        <p>
          Erinç Polat = {"{"}
          <br /> Full-time: "learner",
          <br /> Part-time: "student"
          <br /> {"}"}
        </p>
        {/* <img src="/photo.png" alt="picture" /> */}
      </section>
    </article>
    <style jsx>{`
      #summaryText {
        text-align: center;
        margin: 10%;
        padding: 1%;
      }
      #summaryText p {
        font-family: "Roboto Mono", monospace;
        //letter-spacing: 10px;
        #color: #4d4737;
        color: #a8ada9;
        font-size: 80px;
        font-weight: bold;
        line-height: 1.5em;
      }
      #summaryText img {
        filter: grayscale(20%);
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;
        height: auto;
        max-width: 100%;
      }
      #summaryText img:hover {
        filter: grayscale(40%);
      }
      @media only screen and (max-width: 600px) {
        #summaryText {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          margin: 5%;
        }
        #summaryText p {
          font-size: 40px;
        }
      }
    `}</style>
  </Layout>
);

export default Index;
