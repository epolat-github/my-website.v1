import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

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
    <article id="blog-container">
        <div className="row m-5">
          {posts && posts.map(post => createCards(post))}
        </div>
      {/* {posts &&
        posts.map(post => (
          <section key={post.slug + Math.random()} id="post-list">
            <h1>
              <Link href={post.slug}>
                <a>{post.title}</a>
              </Link>
            </h1>
            {post.details && (
              <ReactMarkdown source={post.details.slice(0, 500) + "..."} />
            )}
            <p>Post's date = {post.date}</p>
          </section>
        ))} */}
      {/* page buttons */}
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
