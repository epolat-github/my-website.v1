import { dbInstance } from "../../src/dbCon";
var dateFormat = require("dateformat");

export default (req, res) => {
  // const allPosts = postList();    //array of post obj

  const postId = req.query.postSlug;
  let firestore = dbInstance();
  let posts = [];
  firestore
    .collection("blogs")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let postSlug = doc.id;
        let postInfo = doc.data();

        let blogObj = {
          title: postInfo.blogName,
          slug: postSlug,
          details: postInfo.blogDetail,
          date: dateFormat(postInfo.blogTime, "mmmm dS, yyyy")
        };
        posts.push(blogObj);
      });
      const foundPost = posts.find(post => post.slug === postId);
      res.status(200).json({ post: foundPost });
    });
};
