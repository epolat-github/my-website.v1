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
          <h1>{post.title}</h1>
          {post.details && <ReactMarkdown source={post.details} />}
          <p>{post.slug}</p>
          <p>{post.date}</p>
          {sharePost(post.slug)}
        </section>
      </article>
      <style jsx>{`
        #post-section {
          color: white;
          text-align: center;
          margin: 10%;
          padding: 1%;
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
