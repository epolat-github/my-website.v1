import { authInstance } from "../src/dbCon";
import Layout from "../components/layout";

const register = () => (
  <Layout>
    <h1 style={{ color: "white" }}>REGISTER</h1>
    <input type="text" placeholder="email" id="email" />
    <br />
    <br />
    <input type="password" placeholder="password" id="pass" />
    <br />
    <button
      className="submit"
      onClick={() => {
        authInstance()
          .createUserWithEmailAndPassword(
            document.getElementById("email").value,
            document.getElementById("pass").value
          )
          .then(() => {
            console.log("Registered.");
            authInstance().signOut();
          })
          .catch(function(error) {
            // Handle Errors here.
            console.log("Error code: ", error.code);
            console.log("Error Message: ", error.message);

            // ...
          });
      }}
    >
      Register
    </button>
    <p style={{ color: "red" }}></p>
  </Layout>
);

export default register;
