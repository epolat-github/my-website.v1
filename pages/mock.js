import addData from "./dbCon";
import Layout from "../components/layout";

const transferData = data => {
  let slug = data.blogSlug;
  let name = data.blogName;
  let detail = data.blogDetail;
  document.querySelector(p).innerHTML(`name: ${name}, detail: ${detail}`);
  addData({blogSlug: slug, blogName: name, blogDetail: detail });
};

const Mock = () => (
  <Layout>
    <h1 style={{ color: "white" }}>Deneme</h1>
    <input type="text" placeholder="Blog Slug" id="inputSlug" />
    <br />
    <br />
    <input type="text" placeholder="Blog Title" id="inputName" />
    <br />
    <br /> <input type="text" placeholder="Blog Detail" id="inputDetail" />
    <br />
    <br />
    <button
      className="submit"
      onClick={e =>
        addData({
          blogSlug: document.getElementById("inputSlug").value,
          blogName: document.getElementById("inputName").value,
          blogDetail: document.getElementById("inputDetail").value
        })
      }
    >
      Submit
    </button>
    <p style={{ color: "red" }}>Blank input!</p>
  </Layout>
);

export default Mock;
