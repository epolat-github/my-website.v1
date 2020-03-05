const Communication = () => (
  <div className="comm">
    <ul>
      <li>
        <a
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/erin%C3%A7-polat-4bb7bb192/"
        >
          <img
            src="/socialMediaIcons/linkedin.png"
            alt="Erinç Polat LinkedIn"
            className="icons"
          />
        </a>
      </li>
      <li>
        <a
          rel="noopener"
          target="_blank"
          href="https://www.instagram.com/erincpolat"
        >
          <img
            src="/socialMediaIcons/instagram.png"
            alt="Erinç Polat Instagram"
            className="icons"
          />
        </a>
      </li>
      <li>
        <a rel="noopener" target="_blank" href="mailto:erinc.polat@gmail.com">
          <img
            src="/socialMediaIcons/mail.png"
            alt="Erinç Polat Mail"
            className="icons"
          />
        </a>
      </li>
      <li>
        <a
          rel="noopener"
          target="_blank"
          href="https://github.com/epolat-github"
        >
          <img src="/socialMediaIcons/github.png" alt="Erinç Polat GitHub" />
        </a>
      </li>
    </ul>

    <style jsx>{`
      .icons {
        filter: brightness(0.85);
      }
      .comm {
        width: 160px; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 30%; /* Stay at the top */
        left: 0;
        overflow-x: hidden; /* Disable horizontal scroll */
      }
      .comm ul {
        padding: 1em;
        text-align: left;
        list-style: none;
      }
      .comm li {
        margin: 2em 0em;
      }
      .comm a {
        color: white;
        text-decoration: none;
        font-size: 28px;
      }
      .comm li:hover img {
        animation: bounce 0.6s;
      }

      @keyframes bounce {
      0%, 20%, 60%, 100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      }
 40% {
   -webkit-transform: translateY(-20px);
   transform: translateY(-20px);
 }
 80% {
   -webkit-transform: translateY(-10px);
   transform: translateY(-10px);
 }

    `}</style>
  </div>
);

export default Communication;
