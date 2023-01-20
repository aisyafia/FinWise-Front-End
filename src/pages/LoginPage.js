import { useState, useEffect } from "react";
import { login } from "../store/users/thunks";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/users/selectors";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import styled from "styled-components";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/partners");
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    // console.log("login data", email, password);
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
    // console.log("token", token);
    // if (token !== null) {
    // navigate("/partners");
    // }
  };

  return (
    <MainContainer>
      <h3>Sign in to your account</h3>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, maxWidth: "20%" },
        }}
      >
        <form onSubmit={submitForm}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>
      </Box>
      <br />
      <p>
        Don't have an account yet? Click <Link to="/signup">here</Link> to sign
        up!{" "}
      </p>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export { LoginPage };
