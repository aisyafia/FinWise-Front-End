import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpPartner } from "../store/providers/thunks";
import { signUpUser } from "../store/users/thunks";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../store/users/selectors";
import { Box, TextField, Button, Checkbox } from "@mui/material";
import styled from "styled-components";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompName] = useState("");
  const [companyEmail, setCompEmail] = useState("");
  const [companyWebsite, setCompWebsite] = useState("");
  const [companyPhoneNumber, setCompPNumber] = useState("");
  const [companyAddress, setCompAddress] = useState("");
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const submitForm = (e) => {
    e.preventDefault();
    if (checked === true) {
      dispatch(
        signUpPartner(
          name,
          email,
          password,
          checked,
          companyName,
          companyEmail,
          companyWebsite,
          companyPhoneNumber,
          companyAddress
        )
      );
    } else {
      dispatch(signUpUser(name, email, password, checked));
    }
  };

  useEffect(() => {
    if (token !== null) {
      navigate("/partners");
    }
  }, [token, navigate]);

  return (
    <MainContainer>
      <h2>Sign up to access our experts</h2>
      <Box sx={{ m: 1, p: 1, maxWidth: "35%", height: "auto" }}>
        <form onSubmit={submitForm}>
          <TextField
            fullWidth
            variant="filled"
            label="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>I am registering as a company/service provider</label>
          <Checkbox
            label="I am registering as a company/serviceprovider"
            value={checked}
            onChange={handleChange}
          />
          {/* <input type="checkbox" value={checked} onChange={handleChange} /> */}
          {checked === true ? (
            <div>
              <TextField
                fullWidth
                variant="filled"
                placeholder="Company name"
                value={companyName}
                onChange={(e) => setCompName(e.target.value)}
              />
              <TextField
                fullWidth
                variant="filled"
                placeholder="Company email"
                value={companyEmail}
                onChange={(e) => setCompEmail(e.target.value)}
              />
              <TextField
                fullWidth
                variant="filled"
                placeholder="Company website"
                value={companyWebsite}
                onChange={(e) => setCompWebsite(e.target.value)}
              />
              <TextField
                fullWidth
                variant="filled"
                placeholder="Company phone number"
                value={companyPhoneNumber}
                onChange={(e) => setCompPNumber(e.target.value)}
              />
              <TextField
                fullWidth
                variant="filled"
                placeholder="Company location/address"
                value={companyAddress}
                onChange={(e) => setCompAddress(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}
          <br />
          <Button type="submit" variant="contained">
            Sign up
          </Button>
        </form>
      </Box>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export { SignUp };
