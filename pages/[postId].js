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
      <article>
        <section id="post-section">
          <h1>{post && post.title}</h1>
          <p>{post && post.date}</p>
          {post && post.details && <ReactMarkdown source={post.details} />}
        </section>
        <section id="share-section">{post && sharePost(post.slug)}</section>
      </article>
      <style jsx>{`
        #post-section {
          color: white;
          font-size: 20px;
          text-align: center;
          margin: 10%;
          margin-top: 3%;
          margin-bottom: 2%;
          padding: 1%;
        }
        h1 {
          display: inline-block;
          width: auto;
          text-transform: capitalize;
          font-size: 60px;
          font-weight: bold;
          color: white;
          background-color: grey;
        }
        p {
          text-decoration: underline;
          font-weight: 550;
          text-align: right;
          margin-right: 2%;
        }
        #share-section {
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
  const res = await fetch(`${process.env.baseUrl}api/${query.postId}`);
  const data = await res.json();

  return { post: data.post };
};

export default Post;
