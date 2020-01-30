import { authInstance } from "../src/dbCon";
import Layout from "../components/layout";

const signin = () => (
  <Layout>
    <h1 style={{ color: "white" }}>SIGN IN</h1>
    <input type="text" placeholder="email" id="email" />
    <br />
    <br />
    <input type="text" placeholder="password" id="pass" />
    <br />
    <button
      className="submit"
      onClick={() =>
        authInstance()
          .signInWithEmailAndPassword(
            document.getElementById("email").value,
            document.getElementById("pass").value
          )
          .then(() => console.log("Login Successful!"))
          .catch(function(error) {
            // Handle Errors here.
            console.log("Error code: ", error.code);
            console.log("Error Message: ", error.message);
            // ...
          })
      }
    >
      Login
    </button>
    <button className="submit" onClick={() => authInstance().signOut()}>
      Log Out
    </button>
    <p style={{ color: "red" }}></p>
  </Layout>
);

export default signin;
