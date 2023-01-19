import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpPartner } from "../store/providers/thunks";
import { signUpUser } from "../store/users/thunks";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../store/users/selectors";

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
    <div>
      <h2>Sign up to access our experts</h2>
      <div>
        <form onSubmit={submitForm}>
          <input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email address"
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
          <label>Are you a service provider? If Yes, please tick the box</label>
          <input type="checkbox" value={checked} onChange={handleChange} />
          {checked === true ? (
            <div>
              <input
                placeholder="Company name"
                value={companyName}
                onChange={(e) => setCompName(e.target.value)}
              />
              <input
                placeholder="Company email"
                value={companyEmail}
                onChange={(e) => setCompEmail(e.target.value)}
              />
              <input
                placeholder="Company website"
                value={companyWebsite}
                onChange={(e) => setCompWebsite(e.target.value)}
              />
              <input
                placeholder="Company phone number"
                value={companyPhoneNumber}
                onChange={(e) => setCompPNumber(e.target.value)}
              />
              <input
                placeholder="Company location/address"
                value={companyAddress}
                onChange={(e) => setCompAddress(e.target.value)}
              />
            </div>
          ) : (
            <></>
          )}
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export { SignUp };
