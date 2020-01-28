const Communication = () => (
  <div className="comm">
    <ul>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/erin%C3%A7-polat-4bb7bb192/"
        >
          <img src="/socialMediaIcons/linkedin-icon.png" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/erincpolat">
          <img src="/socialMediaIcons/instagram-icon.png" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/epolat-github">
          <img src="/socialMediaIcons/github-icon.png" />
        </a>
      </li>
      <li>
        <a target="_blank" href="mailto:erinc.polat@gmail.com">
          <img src="/socialMediaIcons/gmail-icon.png" />
        </a>
      </li>
    </ul>

    <style jsx>{`
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
        margin: 1em 0em;
      }
      .comm a {
        color: white;
        text-decoration: none;
        font-size: 28px;
      }
      .comm a:hover {
        color: red;
      }
    `}</style>
  </div>
);

export default Communication;
