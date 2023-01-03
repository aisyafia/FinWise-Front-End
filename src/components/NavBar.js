import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/users/selectors";
import { logOut } from "../store/users/slice";
const NavBar = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
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
        {token ? (
          <button onClick={() => dispatch(logOut())}>Log out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export { NavBar };
