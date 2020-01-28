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

Post.getInitialProps = async ({ req, query }) => {
  const host = req.headers.host;

  const res = await fetch(`http://${host}/api/${query.postId}`);
  const data = await res.json();

  return { post: data.post };
};

//yeni api end-point oluştur (postId alan)
//burada getinitialprops'la postId'yle post ayrıntısı al.

export default Post;
