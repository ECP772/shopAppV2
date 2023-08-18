import { Link } from "react-router-dom";
import { useState } from "react";
import { app } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

const Login = () => {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let navigate = useNavigate();
  let login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`Welcome ${user.email}`);
        navigate("/products");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="outter-box">
      <div className="inner-box">
        <h1>Login to your account</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            login
          </button>
        </form>
        <footer>
          <Link to="/signup">Create account?</Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
