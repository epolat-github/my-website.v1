import { dbInstance } from "../../src/dbCon";
var dateFormat = require("dateformat");

export default (req, res) => {
  // const allPosts = postList();    //array of post obj

  const postSlug = req.query.postSlug;
  let firestore = dbInstance();
  firestore
    .collection("blogs")
    .doc(postSlug)
    .get()
    .then(doc => {
      console.log(doc);
      let postSlug = doc.id;
      let postInfo = doc.data();

      let blogObj = {
        title: postInfo.blogName,
        slug: postSlug,
        details: postInfo.blogDetail,
        date: dateFormat(postInfo.blogTime, "mmmm dS, yyyy")
      };
      
      res.status(200).json({ post: blogObj });
    })
    .catch(error => console.log("problem getting post", error));
};
