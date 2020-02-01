

const Footer = () => (
  <footer>
    <p>
      ~~ Created by{" "}
      <em>
        <strong>Erinç Polat </strong>
      </em>
      ~~
    </p>
    <style jsx>{`
      footer {
        position: fixed;
        margin-top: 30px;
        margin-bottom: 0;
        height: 6vh;
        background-color: rgba(242, 210, 121, 0.4);
        text-align: center;
      }
      p {
        font-size: 18px;
        margin: auto;
        color: darkgrey;
        padding-top: 1.5%;
      }
    `}</style>
  </footer>
);

export default Footer;
