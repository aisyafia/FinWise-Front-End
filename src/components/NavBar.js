import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <h1>Pay-slip-and-slide</h1>
      <Link to={`/login`}>
        <button>Login</button>
      </Link>
    </div>
  );
};

export { NavBar };
