import Layout from "../components/layout";

const About = () => (
  <Layout>
    <article className="container-fluid">
      <section className="row">
        <div className="col-lg-6 col-sm-12">
          <img src="/photo.png" className="img-fluid"></img>
        </div>
        <div className="col-lg-6 bg-dark"></div>
      </section>
    </article>
  </Layout>
);

export default About;
