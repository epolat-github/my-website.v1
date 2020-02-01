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
    <h1 style={{ color: "white" }}>Inspire Someone!</h1>
    {/* <button
      id="checkUserButton"
      onClick={() =>
        checkUser() ? console.log("signed in") : console.log("not signed in")
      }
    >
      Check User
    </button> */}
    <input type="text" placeholder="Blog Title" id="inputName" />
    <br />
    <br />
    <textarea type="text" placeholder="Blog Detail" id="inputDetail"></textarea>
    <br />
    <br />
    <button
      className="submit"
      onClick={() => {
        transferData({
          blogSlug: (document.getElementById("inputName").value).replace(/\s+/g, '-').toLowerCase(),
          blogName: document.getElementById("inputName").value,
          blogDetail: document.getElementById("inputDetail").value
        });
      }}
    >
      Submit
    </button>
    <div id="status-container">
      <p id="status"></p>
    </div>
    <style jsx>{`
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
    `}</style>
  </Layout>
);

//with checkUser()
// const Write = () => {
//   if (checkUser()) {
//     return (
//       <Layout>
//         <h1 style={{ color: "white" }}>Inspire Someone!</h1>
//         <button
//           onClick={() =>
//             checkUser()
//               ? console.log("signed in")
//               : console.log("not signed in")
//           }
//         >
//           Check User
//         </button>
//         <input type="text" placeholder="Blog Slug" id="inputSlug" />
//         <br />
//         <br />
//         <input type="text" placeholder="Blog Title" id="inputName" />
//         <br />
//         <br />
//         <textarea
//           type="text"
//           placeholder="Blog Detail"
//           id="inputDetail"
//         ></textarea>
//         <br />
//         <br />
//         <button
//           className="submit"
//           onClick={() =>
//             transferData({
//               blogSlug: document.getElementById("inputSlug").value,
//               blogName: document.getElementById("inputName").value,
//               blogDetail: document.getElementById("inputDetail").value
//             })
//           }
//         >
//           Submit
//         </button>
//         <p style={{ color: "red" }}></p>
//         <style jsx>{`
//           h2 {
//             position: relative;
//             color: white;
//             width: 700px;
//             left: 30%;
//           }
//           h1 {
//             position: relative;
//             width: 1vh;
//             top: 200px;
//             margin: 0;
//             left: 40%;
//           }
//           input,
//           button,
//           textarea,
//           p {
//             position: relative;
//             left: 40%;
//             top: 300px;
//           }
//           p {
//             width: 1vh;
//           }
//           textarea {
//             height: 150px;
//           }
//           @media only screen and (max-width: 600px) {
//             h2 {
//               position: static;
//               padding-left: 4%;

//               width: 100vw;
//             }
//             h1 {
//               position: relative;
//               left: 10%;
//             }
//             input,
//             button,
//             textarea {
//               position: relative;
//               top: 130px;
//               left: 80px;
//             }
//           }
//         `}</style>
//       </Layout>
//     );
//   } else {
//     return (
//       <Layout>
//         <p style={{color: "white"}}>Not allowed!</p>
//       </Layout>
//     );
//   }
// };

export default Write;
