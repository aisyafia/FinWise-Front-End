import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <h1>Pay-slip-and-slide</h1>
      <div>
        <Link to={`/`}>
          <button>Home</button>
        </Link>
        <Link to={`/partners`}>
          <button>Our Partners</button>
        </Link>
      </div>
      <Link to={`/login`}>
        <button>Login</button>
      </Link>
    </div>
  );
};

export { NavBar };
