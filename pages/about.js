import Layout from "../components/layout";

const About = () => (
  <Layout>
    <article className="container-fluid">
      <section className="row">
        <div className="col-lg-6 col-sm-12 mt-5 pl-5">
          <img
            src="/erinc-polat.jpeg"
            className="img-fluid rounded p-3"
            alt="Photo of Erinç Polat"
          ></img>
        </div>
        <div className="col-lg-6" id="about-text-container">
          <ul>
            <li>
              TED University
              <ul>
                <li>Main Field: Computer Engineering</li>
                <li>Secondary Field: General Psychology</li>
              </ul>
            </li>
            <li>
              3<sup>rd</sup> grade
            </li>
          </ul>
          <p className="text-left" id="about-text">
            I believe that not wasting time and producing solutions to real
            problems are the keys to the success.
          </p>
        </div>
      </section>
    </article>
    <style jsx>{`
      #about-text-container {
        padding-top: 150px;
      }
      li {
        font-size: 30px;
        color: white;
      }
      #about-text {
        color: white;
      }
      .img-fluid {
        height: 80%;
      }
    `}</style>
  </Layout>
);

export default About;
