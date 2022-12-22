import { useState, useEffect } from "react";
import { login } from "../store/users/thunks";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectToken } from "../store/users/selectors";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  // useEffect(() => {

  // }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log("login data", email, password);
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
    // console.log("token", token);
    if (token !== null) {
      navigate("/partners");
    }
  };

  return (
    <div>
      <h3>Sign in to your account</h3>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <p>Don't have an account yet? Click here to sign up! </p>
    </div>
  );
};

export { LoginPage };
