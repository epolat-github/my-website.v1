import { dbInstance } from "../../src/dbCon";
var dateFormat = require("dateformat");

export default (req, res) => {
  // const allPosts = postList();    //array of post obj

  const postId = req.query.postId;
  let firestore = dbInstance();
  let posts = [];
  firestore
    .collection("blogs")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let blogSlug = doc.id;
        let blogInfo = doc.data();

        let blogObj = {
          title: blogInfo.blogName,
          slug: blogSlug,
          details: blogInfo.blogDetail,
          date: dateFormat(blogInfo.blogTime, "mmmm dS, yyyy, h:MM:ss TT")
        };
        posts.push(blogObj);
      });
      const foundPost = posts.find(post => post.slug === postId);
      res.status(200).json({ post: foundPost });
    });
};
