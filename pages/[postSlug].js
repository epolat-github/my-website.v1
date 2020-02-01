import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  RedditIcon
} from "react-share";

const sharePost = postSlug => {
  const url = process.env.baseUrl + postSlug;
  return (
    <div id="share-section">
      <FacebookShareButton url={url}>
        <FacebookIcon round />
      </FacebookShareButton>

      <WhatsappShareButton url={url}>
        <WhatsappIcon round />
      </WhatsappShareButton>

      <TwitterShareButton url={url}>
        <TwitterIcon round />
      </TwitterShareButton>

      <RedditShareButton url={url}>
        <RedditIcon round />
      </RedditShareButton>
      <style jsx>{`
        #share-section {
        }
      `}</style>
    </div>
  );
};

const Post = ({ post }) => {
  return (
    <Layout>
      <article id="post-container">
        <section id="post-general">
          <h1 id="blog-title">{post && post.title}</h1>
          <p>{post && post.date}</p>
        </section>
        <section id="post-content">
          {post && post.details && <ReactMarkdown source={post.details} />}
        </section>
        <section id="share-section">
          <p>Feel like sharing..?</p>
          {post && sharePost(post.slug)}
        </section>
      </article>
      <style jsx>{`
        #post-container {
          overflow-x: hidden;
        }
        #post-general {
          border-bottom: 2px solid;
          margin-left: 50%;
          margin-top: 2%;
          transform: translateX(-50%);
          display: inline-block;
          text-transform: capitalize;
          text-align: center;
          color: white;
        }
        #post-content {
          padding: 0 6%;
          margin-top: 3%;
          font-size: 20px;
          color: white;
        }
        #post-general h1 {
          font-weight: 600;
          font-size: 60px;
          color: #8587d4;
        }
         {
          /* #blog-title {
          display: inline-block;
          text-align: center;
        } */
        }
        p {
        }
        #share-section {
          margin-top: 3%;
          text-align: center;
          font-size: 19px;
          color: darkgrey;
          display: inline-block;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async ({ query, req }) => {
  const res = await fetch(`${process.env.baseUrl}api/${query.postSlug}`);
  const data = await res.json();

  return { post: data.post };
};

export default Post;
