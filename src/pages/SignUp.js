import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpPartner } from "../store/providers/thunks";
import { signUpUser } from "../store/users/thunks";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [compName, setCompName] = useState("");
  const [compEmail, setCompEmail] = useState("");
  const [compWebsite, setCompWebsite] = useState("");
  const [compPNumber, setCompPNumber] = useState("");
  const [compAddress, setCompAddress] = useState("");
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    if (checked === true) {
      dispatch(
        signUpPartner(
          name,
          email,
          password,
          checked,
          compName,
          compEmail,
          compWebsite,
          compPNumber,
          compAddress
        )
      );
    } else {
      dispatch(signUpUser(name, email, password, checked));
    }
    // console.log(
    //   "infos",
    //   name,
    //   email,
    //   password,
    //   compName,
    //   compEmail,
    //   compWebsite,
    //   compPNumber,
    //   compAddress
    // );
  };

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
                value={compName}
                onChange={(e) => setCompName(e.target.value)}
              />
              <input
                placeholder="Company email"
                value={compEmail}
                onChange={(e) => setCompEmail(e.target.value)}
              />
              <input
                placeholder="Company website"
                value={compWebsite}
                onChange={(e) => setCompWebsite(e.target.value)}
              />
              <input
                placeholder="Company phone number"
                value={compPNumber}
                onChange={(e) => setCompPNumber(e.target.value)}
              />
              <input
                placeholder="Company location/address"
                value={compAddress}
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
