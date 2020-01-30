import { authInstance, checkUser } from "../src/dbCon";
import Layout from "../components/layout";
import Router from "next/router";

const signin = () => (
  <Layout>
    <h1 style={{ color: "white" }}>SIGN IN</h1>
    <input type="text" placeholder="email" id="email" />
    <br />
    <br />
    <input type="password" placeholder="password" id="pass" />
    <br />
    <button
      className="submit"
      onClick={() => {
        if (checkUser()) {
          document.getElementById("status").innerHTML = "Already Logged In";
        } else {
          authInstance()
            .signInWithEmailAndPassword(
              document.getElementById("email").value,
              document.getElementById("pass").value
            )
            .then(() => {
              document.getElementById("status").innerHTML = "Logged in!";
              document.getElementById("pass").value = "";
              document.getElementById("email").value = "";
              Router.replace(`/write`);
            })
            .catch(function(error) {
              // Handle Errors here.
              console.log("Error code: ", error.code);
              console.log("Error Message: ", error.message);
              // ...
            });
        }
      }}
    >
      Login
    </button>
    <button
      className="submit"
      onClick={() => {
        if (!checkUser()) {
          document.getElementById("status").innerHTML = "Already Logged Out";
        } else {
          authInstance().signOut();
          document.getElementById("status").innerHTML = "Logged Out";
        }
        // if (checkUser()) {
        //   document.getElementById("status").innerHTML = "Problem logging out";
        // } else {
        //   document.getElementById("status").innerHTML = "Logged Out";
        // }
      }}
    >
      Log Out
    </button>
    <p id="status" style={{ color: "red" }}></p>
  </Layout>
);

export default signin;
