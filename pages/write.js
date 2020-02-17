import addData from "../src/dbCon";
import { dbInstance, deletePost, authInstance, checkUser } from "../src/dbCon";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";

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
  let postTitle = document.getElementById("inputName").value;
  let promise = deletePost(postTitle);

  promise
    .then(() => {
      console.log("returned true");
      location.reload();
    })
    .catch(() => console.log("returned false"));
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
    <div className="container pt-5">
      <h1 style={{ color: "white" }}>Inspire Someone!</h1>
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
      <button
        type="button"
        className="btn btn-lg btn-secondary mt-3 ml-3"
        onClick={() => handlePostDeleteClick()}
      >
        Delete
      </button>
    </div>

    <div className="container post-list-container">
      <ul id="post-list" className="list-group">
        {/* TODO: post slug || başlıklardan oluşan liste => seçince edit ve delete seçenekleri. */}
        {listPosts(posts)}
      </ul>
    </div>

    <div id="status-container">
      <p id="status"></p>
    </div>
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
