import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { authInstance } from "../src/dbCon";

export const changeUserState = user => {
  if (user) {
    document
      .querySelectorAll(".sign-out")
      .forEach(item => item.classList.add("d-none"));
    document
      .querySelectorAll(".sign-in")
      .forEach(item => item.classList.remove("d-none"));
  }
  //if logged out
  else {
    document
      .querySelectorAll(".sign-out")
      .forEach(item => item.classList.remove("d-none"));
    document
      .querySelectorAll(".sign-in")
      .forEach(item => item.classList.add("d-none"));
  }
};

const modal = () => (
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Sign In
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <input type="text" placeholder="email" id="email" />
          <br />
          <br />

          <input type="password" placeholder="password" id="pass" />
          <p id="status"></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              document.getElementById("status").innerHTML =
                "Checking credentials...";
              authInstance()
                .signInWithEmailAndPassword(
                  document.getElementById("email").value,
                  document.getElementById("pass").value
                )
                .then(() => {
                  document.getElementById("pass").value = "";
                  document.getElementById("email").value = "";
                  window.location.reload();
                })
                .catch(error => {
                  document.getElementById("status").innerHTML = error.code;
                  console.log("Error code: ", error.code);
                  console.log("Error Message: ", error.message);
                });
            }}
          >
            Sign-in
          </button>
        </div>
      </div>
    </div>
  </div>
);

const blogButtons = () => (
  <div className="container-fluid mt-4">
    <div className="row d-flex justify-content-end">
      <div className="col-lg-2 col-md-2 col-6 sign-out">
        <Link href="register">
          <button type="button" className="btn btn-primary btn-lg">
            Register
          </button>
        </Link>
      </div>
      <div className="col-lg-2 col-md-2 col-6 sign-out">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Sign-in
        </button>
      </div>
      <div className="col-lg-2 col-md-2 col-6 sign-in">
        <Link href="/write">
          <button type="button" className="btn btn-primary btn-lg">
            Write
          </button>
        </Link>
      </div>
      <div className="col-lg-2 col-md-2 col-6 sign-in">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => {
            authInstance()
              .signOut()
              .then(() => window.location.reload())
              .catch(() => console.log("Sign-out problem."));
          }}
        >
          Sign-out
        </button>
      </div>
    </div>
  </div>
);

const createCards = post => {
  return (
    <div key={post.slug + Math.random()} className="col-md-6 col-lg-4 mb-5">
      <div className="card h-100 border-dark rounded text-white bg-dark mb-3">
        <div className="card-body">
          <div className="card-block">
            <h3 className="card-title text-capitalize">
              <Link href={post.slug}>
                <a>{post.title}</a>
              </Link>
            </h3>
            {post.details && (
              <ReactMarkdown source={post.details.slice(0, 500) + "..."} />
            )}
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">{post.date}</small>
        </div>
      </div>
    </div>
  );
};

const Blog = ({ posts, postCount, currPage }) => (
  <Layout>
    
    {/* Blog special Buttons */}
    {blogButtons()}
    
    {/* Modal */}
    {modal()}

    {/* Posts */}
    <article id="blog-container">
      <div className="row m-5">
        {posts && posts.map(post => createCards(post))}
      </div>

      {/* Pagination */}
      <div id="page-button-container">
        <button
          className="page-button"
          disabled={currPage <= 1}
          onClick={() => Router.push(`/blog?page=${currPage - 1}`)}
        >
          {`<<`}
        </button>
        {[...Array(Math.ceil(postCount / 6))].map((curr, index) => (
          <button
            key={"button" + index}
            onClick={() => Router.push(`/blog?page=${index + 1}`)}
            className="page-button"
          >
            {index + 1}
          </button>
        ))}
        <button
          className="page-button"
          disabled={currPage >= Math.ceil(postCount / 6)}
          onClick={() => Router.push(`/blog?page=${currPage + 1}`)}
        >
          >>
        </button>
      </div>
    </article>
    <style jsx>{`
      #post-list {
        color: white;
        border-bottom: 2px solid white;
        border-radius: 25%;
        text-align: center;
        margin: 1% 10%;
        padding: 1% 0;
      }
      a {
        font-weight: bold;
      }
      .card-title {
        text-transform: capitalize;
      }
      #page-button-container {
        /*display: inline;
        position: relative;
        left: 40%; */
        max-width: 600px;
        margin: 0 auto;
        transform: translateX(25%);
      }
      .page-button {
        background-color: #4caf50; /* Green */
        border: 1px solid white;
        border-radius: 20%;
        color: white;
        padding: 10px 16px;
        margin: 0 3px;
        //text-align: center;
        text-decoration: none;
        //display: inline-block;
        font-size: 25px;
        //cursor: pointer;
        //float: left;
      }
      .page-button:hover {
        background-color: #3e8e41;
      }
      .page-button[disabled] {
        background-color: gray;
      }
      @media only screen and (max-width: 600px) {
        #page-button-container {
          width: 100%;
          /* margin: 3% 50%; */
          display: inline-block;
          margin-left: 50%;
          transform: translateX(-40%);
        }
      }
    `}</style>
  </Layout>
);
Blog.getInitialProps = async ({ query: { page = 1 } }) => {
  const res = await fetch(`${process.env.baseUrl}api/posts?page=${page}`);
  const data = await res.json();
  return {
    posts: data.posts,
    postCount: parseInt(data.postCount, 10),
    currPage: parseInt(page, 10)
  }; //returns an array
};

export default Blog;
