import { dbInstance } from "../dbCon";

const samplePosts = [
  {
    title: "DENEME",
    slug: "deneme",
    details: require("./posts/deneme.md").default,
    date: "5 Aralık 2019"
  },
  {
    title: "Örnek yazı",
    slug: "ornek-yazi",
    // details: require("./posts/ornek-yazi.md").default,
    details:
      "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
    date: "3 Aralık 2019"
  },
  {
    title: "Merhaba dünya!",
    slug: "merhaba",
    //details: require("./posts/deneme.md").default,
    details:
      "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
    date: "1 Aralık 2019"
  },
  {
    title: "Merhaba dünya!",
    slug: "merhaba",
    //details: require("./posts/deneme.md").default,
    details:
      "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
    date: "1 Aralık 2019"
  },
  {
    title: "Merhaba dünya!",
    slug: "merhaba",
    //details: require("./posts/deneme.md").default,
    details:
      "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
    date: "1 Aralık 2019"
  },
  {
    title: "Merhaba dünya!",
    slug: "merhaba",
    //details: require("./posts/deneme.md").default,
    details:
      "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
    date: "1 Aralık 2019"
  },
  {
    title: "Merhaba dünya!",
    slug: "merhaba",
    //details: require("./posts/deneme.md").default,
    details:
      "Irure ex velit et Lorem Lorem amet. Elit velit non dolore elit consequat reprehenderit eiusmod sint sit. Ipsum magna pariatur incididunt nisi incididunt labore commodo pariatur et amet ut laborum aute. Magna proident non laboris ea ut magna. Id officia ullamco dolore eiusmod nulla eiusmod ad. Aute amet culpa irure do.Voluptate sunt id ut aliqua et nostrud Lorem aliquip laborum. Officia ut voluptate incididunt ea do elit elit pariatur dolor cillum Lorem quis consequat. Ipsum enim do incididunt cillum quis ea ea. Dolore laborum consequat est mollit irure tempor nisi ad ea eiusmod ea. Dolor aute qui officia aliquip aliqua qui ex ullamco magna sint. Fugiat occaecat deserunt est nostrud do magna laborum non eu.",
    date: "1 Aralık 2019"
  }
];

export async function postList() {
  let firestore = dbInstance();
  let array = [];
  firestore
    .collection("blogs")
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

  // console.log(array);
  return array;
}
