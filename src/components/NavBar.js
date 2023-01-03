import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <h1>Pay-slip-and-slide</h1>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/partners">Our Partners</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export { NavBar };
