import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";

const Post = ({ post }) => {
  return (
    <Layout>
      <article>
        <section id="post-section">
          <h1>{post.title}</h1>
          {post.details && <ReactMarkdown source={post.details} />}
          <p>{post.slug}</p>
          <p>{post.date}</p>
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

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(`${process.env.baseUrl}api/${query.postId}`);
  const data = await res.json();

  return { post: data.post };
};

export default Post;
