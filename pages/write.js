import addData from "../src/dbCon";
import { dbInstance, authInstance, checkUser } from "../src/dbCon";
import Layout from "../components/layout";
import { useReducer } from "react";

const transferData = data => {
  const firestore = dbInstance();

  let slug = data.blogSlug;
  let name = data.blogName;
  let detail = data.blogDetail;

  if (slug == "" || name == "" || detail == "") {
    document.getElementById("status").innerHTML =
      "Fill the required areas please.";
    return;
  }

  const post = { blogName: name, blogDetail: detail, blogTime: Date.now() };

  const docRef = firestore.collection("blogs").doc(data.blogSlug);

  docRef
    .set(post)
    .then(() => {
      console.log("Saved");
      document.querySelector("p").innerHTML =
        <strong>`slug: ${slug},`</strong> + `name: ${name} created.`;
    })
    .catch(error => {
      console.log("Got an error:" + error);
      document.getElementById("status").innerHTML = `${error.message}`;
    });
};

const Write = () => (
  <Layout>
    <div className="container pt-5">
      <h1 style={{ color: "white" }}>Inspire Someone!</h1>
      <div className="form-group pt-3">
        <input type="text" placeholder="Blog Title" id="inputName" />
      </div>
      <div className="form-group pt-3">
        <textarea id="inputDetail" className="form-control" rows="20"></textarea>
      </div>
      <button
        type="button"
        className="btn btn-lg btn-secondary mt-3"
        onClick={() => {
          transferData({
            blogSlug: document
              .getElementById("inputName")
              .value.replace(/\s+/g, "-")
              .toLowerCase(),
            blogName: document.getElementById("inputName").value,
            blogDetail: document.getElementById("inputDetail").value
          });
        }}
      >
        Post
      </button>
    </div>

    <div id="status-container">
      <p id="status"></p>
    </div>
    {/*<style jsx>{`
      #status-container {
        color: red;
        display: inline-block;
      }
      h2 {
        position: relative;
        color: white;
        width: 700px;
        left: 30%;
      }
      h1 {
        position: relative;
        width: 1vh;
        top: 200px;
        margin: 0;
        left: 40%;
      }
      input,
      button,
      textarea,
      p {
        position: relative;
        left: 40%;
        top: 300px;
      }
      textarea {
        height: 150px;
      }
      #checkUserButton {
        position: relative;
        top: 586px;
        left: 50%;
      }
      @media only screen and (max-width: 600px) {
        h2 {
          position: static;
          padding-left: 4%;

          width: 100vw;
        }
        h1 {
          position: relative;
          left: 10%;
        }
        input,
        button,
        textarea {
          position: relative;
          top: 130px;
          left: 80px;
        }
      }
    `}</style> */}
  </Layout>
);

export default Write;
