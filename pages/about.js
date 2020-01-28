import Layout from "../components/layout";

const About = () => (
  <Layout>
    <article id="portfolio-container">
      <section id="about-image">
        <img src="/sa.png" alt="myPhoto" />
      </section>
      <section id="info-about">
        <h1>Hello, I am Erinç Polat</h1>
        <p>I like to build stuff.</p>
      </section>
    </article>
    <style jsx>{`
      #about-image {
        position:absolute;
        display:inline-block;
        margin-bottom: 30px;
      }
      #info-about {
        display: inline;
        position: relative;
        left: 45%;
        top: 45%;
      }

      h1 {
        margin:0;
        font-weight: bold;
        font-size: 30px;
        color: white;
      }
      img {
        position: relative;
        top: 150px;
        left:150px;
        border-radius: 20%;
        width: 70%;
      }
      @media only screen and (max-width: 600px) {
        #info-about {
          left: 10%;
        }
        img {
          left: 10%;
        }
      }
    `}</style>
  </Layout>
);

export default About;
