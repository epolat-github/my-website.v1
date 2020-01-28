import {postList} from "../../src/blog/postList";

export default (req, res) => {
    const allPosts = postList();    //array of post obj

    const postId = req.query.postId;

    const foundPost = allPosts.find(post => post.slug === postId);
    res.status(200).json({post: foundPost});
};