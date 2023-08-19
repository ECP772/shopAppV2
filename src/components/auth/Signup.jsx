import { Link } from "react-router-dom";
import { useState } from "react";
import { app } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./styles.css";
const auth = getAuth(app);

const Signup = () => {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  const navigate = useNavigate();
  let signup = async () => {
    let user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    navigate("/");
  };
  return (
    <div className="outter-box">
      <div className="inner-box">
        <h1>Create your account</h1>
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
              signup();
            }}
          >
            Sign Up
          </button>
        </form>
        <footer>
          <Link to="/">Already a user?</Link>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
