import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Blog = ({ posts, postCount, currPage }) => (
  <Layout>
    <article id="blog-container">
      {posts &&
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
        ))}
      <div id="page-button-container">
        <button
          className="page-button"
          disabled={currPage <= 1}
          onClick={() => Router.push(`/blog?page=${currPage - 1}`)}
        >
          {`<<`}
        </button>
        {[...Array(Math.ceil(postCount / 5))].map((curr, index) => (
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
          disabled={currPage >= Math.ceil(postCount / 5)}
          onClick={() => Router.push(`/blog?page=${currPage + 1}`)}
        >
          >>
        </button>
      </div>
    </article>
    <style jsx>{`
      #post-list {
        color: white;
        border: 2px solid white;
        border-radius: 25%;
        text-align: center;
        margin: 1% 10%;
        padding: 1% 0;
      }
      a {
        font-weight: bold;
      }
      h1 {
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
          max-width: 600px;
          margin: 3% auto;
          transform: translateX(18%);
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
