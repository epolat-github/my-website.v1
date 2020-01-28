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
      section {
        position:relative;
        display:inline-block;
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
    `}</style>
  </Layout>
);

export default About;
