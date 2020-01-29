import Layout from "../components/layout";

const About = () => (
  <Layout>
    <article id="about-container">
      <section id="about-image">
        <img src="/sa.png" alt="myPhoto" />
      </section>
      <section id="info-about">
        <h1>Hello, I am Erinç Polat</h1>
        <p>I like to build stuff.</p>
      </section>
    </article>
    <style jsx>{`
      #about-container {
        position: absolute;
        width: 100%;
        height: 90vh;
        overflow-x: hidden;
      }
      #about-image {
        position: relative;
        display: inline-block;
        margin-bottom: 0px;
      }
      #info-about {
        position: relative;
        left: 45%;
        bottom: 30%;
      }

      h1 {
        margin: 0;
        font-weight: bold;
        font-size: 30px;
        color: white;
      }
      p {
        color: white;
        font-size: 25px;
      }
      img {
        position: relative;
        top: 150px;
        left: 150px;
        border-radius: 20%;
        width: 70%;
      }
      @media only screen and (max-width: 600px) {
        #info-about {
          left: 10%;
          bottom: 42%;
        }
        img {
          left: 13%;
        }
      }
    `}</style>
  </Layout>
);

export default About;
