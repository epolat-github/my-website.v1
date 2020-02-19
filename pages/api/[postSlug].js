import { dbInstance } from "../../src/dbCon";
import Cors from "micro-cors";
var dateFormat = require("dateformat");

const cors = Cors();

function handler(req, res) {
  const postSlug = req.query.postSlug;
  let firestore = dbInstance();
  firestore
    .collection("blogs")
    .doc(postSlug)
    .get()
    .then(doc => {
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
}

export default cors(handler);
