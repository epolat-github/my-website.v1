import { dbInstance } from "../dbCon";

export function postList() {
  let firestore = dbInstance();
  let array = [];

  firestore
    .collection("blogs")
    .orderBy("blogTime")
    .get()
    .then(snapshot =>
      snapshot.forEach(doc => {
        let blogSlug = doc.id;
        let blogInfo = doc.data();

        let blogObj = {
          title: blogInfo.blogName,
          slug: blogSlug,
          details: blogInfo.blogDetail,
          date: "1 Aralık"
        };
        array.push(blogObj);
      })
    );

  return array;
}
