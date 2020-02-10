import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { authInstance, checkUser } from "../src/dbCon";

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

const signinModal = () => (
  <div
    className="modal fade"
    id="signinModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="signinModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="signinModalLabel">
            Sign In
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <input type="text" placeholder="email" id="emailSignin" />
          <br />
          <br />

          <input type="password" placeholder="password" id="passSignin" />
          <p id="statusSignin"></p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              document.getElementById("statusSignin").innerHTML =
                "Checking credentials...";
              authInstance()
                .signInWithEmailAndPassword(
                  document.getElementById("emailSignin").value,
                  document.getElementById("passSignin").value
                )
                .then(() => {
                  document.getElementById("passSignin").value = "";
                  document.getElementById("emailSignin").value = "";
                  window.location.reload();
                })
                .catch(error => {
                  document.getElementById("statusSignin").innerHTML =
                    error.code;
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

const registerModal = () => (
  <div
    className="modal fade"
    id="registerModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="registerModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="registerModalLabel">
            Register
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <input type="text" placeholder="email" id="emailRegister" />
          <br />
          <br />

          <input type="password" placeholder="password" id="passRegister" />
          <p id="statusRegister" style={{ marginTop: "3%" }}></p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              authInstance()
                .createUserWithEmailAndPassword(
                  document.getElementById("emailRegister").value,
                  document.getElementById("passRegister").value
                )
                .then(() => {
                  console.log("Registered.");
                  document.getElementById("statusRegister").innerHTML =
                    "Registered.";
                  // authInstance().signOut();
                  window.location.reload();
                })
                .catch(function(error) {
                  console.log(error);
                  document.getElementById("statusRegister").innerHTML =
                    error.message;
                });
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
);

const blogButtons = () => (
  <div className="container-fluid mt-2">
    <div className="row d-flex justify-content-end">
      <div className="col-lg-2 col-md-2 col-6 sign-out">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#registerModal"
        >
          Register
        </button>
      </div>
      <div className="col-lg-2 col-md-2 col-6 sign-out">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#signinModal"
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
          className="btn btn-secondary btn-lg"
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

    {/* Sign-in Modal */}
    {signinModal()}

    {/* Sign-out Modal */}
    {registerModal()}

    {/* Posts */}
    <article id="blog-container">
      <div className="row ml-5 mr-5 mt-5">
        {/* Produce posts */}
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
        background-color: #0083FE; /* Green */
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
        background-color: #2E5E8B;
      }
      .page-button[disabled] {
        background-color: gray;
      }
      a[disabled] {
        background-color: red;
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
