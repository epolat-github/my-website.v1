import addData from "../src/dbCon";
import { saveAs } from 'file-saver';
import {
  dbInstance,
  deletePost,
  backup,
  authInstance,
  checkUser
} from "../src/dbCon";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";

const transferData = data => {
  if (!confirm("Are you sure?")) {
    return;
  }
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
      alert("Saved!");
      location.reload();
    })
    .catch(error => {
      alert(error.message);
      document.getElementById("status").innerHTML = `${error.message}`;
    });
};

const handlePostListClick = post => {
  // change the look
  let activeListItems = document.querySelector(".active");
  activeListItems ? activeListItems.classList.toggle("active") : null;
  document.getElementById(post.slug).classList.toggle("active");

  // show post
  document.getElementById("inputName").value = post.title;
  document.getElementById("inputDetail").value = post.details;
};

const handlePostDeleteClick = () => {
  if (!confirm("Are you sure? ")) {
    return;
  }
  let postTitle = document.getElementById("inputName").value;
  let result = deletePost(postTitle);

  result
    .then(() => {
      alert("Deleted!");
      location.reload();
    })
    .catch(() => alert("Could not deleted."));
};

const listPosts = posts => {
  return posts.map(post => {
    return (
      <button
        key={post.slug}
        id={post.slug}
        onClick={() => handlePostListClick(post)}
        className="list-group-item list-group-item-action"
      >
        {post.title}
      </button>
    );
  });
};

const Write = ({ posts }) => (
  <Layout>
    <article className="jumpotron">
      <div className="container pt-5">
        <h1>Inspire Someone!</h1>
        <div className="form-group pt-3">
          <input type="text" placeholder="Blog Title" id="inputName" />
        </div>
        <div className="form-group pt-3">
          <textarea
            id="inputDetail"
            className="form-control"
            rows="20"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-lg btn-primary mt-3"
          onClick={() => {
            transferData({
              blogSlug: document
                .getElementById("inputName")
                .value.replace(/\s+/g, "-")
                .replace(/ı/g, "i")
                .toLowerCase(),
              blogName: document.getElementById("inputName").value,
              blogDetail: document.getElementById("inputDetail").value
            });
          }}
        >
          Post
        </button>
        <button
          type="button"
          className="btn btn-lg btn-secondary mt-3 ml-3"
          onClick={() => handlePostDeleteClick()}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-lg btn-secondary mt-3 ml-3"
          onClick={() => {
            backup()
              .then((content) => saveAs(content, "deneme.zip"))
              .catch(error => console.log("error", error));
          }}
        >
          Backup
        </button>
      </div>
      <div className="container post-list-container mt-4 mb-5">
        <h1>Post List</h1>
        <ul id="post-list" className="list-group mt-3">
          {listPosts(posts)}
        </ul>
      </div>

      <div id="status-container">
        <p id="status"></p>
      </div>
      <style jsx>{`
        h1 {
          color: #d1a172;
          text-align: center;
          font-weight: 800;
          text-transform: uppercase;
        }
      `}</style>
    </article>
  </Layout>
);

Write.getInitialProps = async () => {
  const res = await fetch(`${process.env.baseUrl}api/posts`);
  const data = await res.json();
  return {
    posts: data.posts
  };
};

export default Write;
