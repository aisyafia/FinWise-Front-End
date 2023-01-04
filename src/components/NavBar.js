import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/users/selectors";
import { logOut } from "../store/users/slice";
import styled from "styled-components";

const NavBar = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Title>Pay-slip-and-slide</Title>

        <MenuLink to="/">Home</MenuLink>

        <MenuLink to="/partners">Our Partners</MenuLink>

        {token ? (
          <MenuLink onClick={() => dispatch(logOut())}>Log out</MenuLink>
        ) : (
          <MenuLink to="/login">Login</MenuLink>
        )}
      </Container>
    </div>
  );
};

const Container = styled.div`
  margin: 0.2rem;
  padding: 0.3rem;
  background: #fffbfe;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MenuLink = styled(NavLink)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #517664;
  transition: all 0.3s ease-in;
  font-size: 1.25rem;
  &:hover {
    color: #414361;
  }
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  row-gap: 50px;
  border: 0.125rem double black;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #414361;
  align-self: flex-start;
`;

export { NavBar };
