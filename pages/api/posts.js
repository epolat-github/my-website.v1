import { dbInstance } from "../../src/dbCon";

export default (req, res) => {
  // const posts = postList(); //array of post obj
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
          date: "1 Aralık"
        };
        posts.push(blogObj);
      });
      let page = parseInt(req.query.page, 10);
      let firstIndex = 5 * (page - 1);
      let lastIndex = 5 * page;
      if (lastIndex > posts.length) {
        lastIndex = posts.length;
      }
      res.status(200).json({
        posts: posts.slice(firstIndex, lastIndex),
        postCount: posts.length
      });
    });
  // console.log(posts);
};
