import Layout from "../components/layout";

const About = () => (
  <Layout>
    <article className="container-fluid">
      <section className="row">
        <div className="col-lg-6 col-sm-12">
          <img src="/photo.png" className="img-fluid"></img>
        </div>
        <div className="col-lg-6">
          <p className="text-left" id="about-text">
            I am currently studying Computer Engineering as a main and
            Psychology as a secondary field at TED University. I am in third
            grade.
            
          </p>
        </div>
      </section>
    </article>
    <style jsx>{`
      #about-text {
        color: white;
      }
    `}</style>
  </Layout>
);

export default About;
