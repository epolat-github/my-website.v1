import { postList } from "../../src/blog/postList";

export default (req, res) => {
  const posts = postList(); //array of post obj
  let page = parseInt(req.query.page, 10);
  let firstIndex = (5 * (page - 1));
  let lastIndex = ((5 * page) );
  if (lastIndex > posts.length){
    lastIndex = posts.length;
  }
  res.status(200).json({ posts: posts.slice(firstIndex, lastIndex), postCount: posts.length });
};
