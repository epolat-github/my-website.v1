import { authInstance, checkUser } from "../src/dbCon";
import Layout from "../components/layout";
import Link from "next/link";
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
        document.getElementById("status").innerHTML = "Checking credentials...";
        authInstance()
          .signInWithEmailAndPassword(
            document.getElementById("email").value,
            document.getElementById("pass").value
          )
          .then(() => {
            document.getElementById("pass").value = "";
            document.getElementById("email").value = "";
            Router.push(`/`);
          })
          .catch(error => {
            document.getElementById("status").innerHTML = error.code;
            console.log("Error code: ", error.code);
            console.log("Error Message: ", error.message);
          });
      }}
    >
      Login
    </button>
    <button onClick={() => Router.push("/register")}>Register</button>
    <p id="status" style={{ color: "red" }}></p>
  </Layout>
);

export default signin;
