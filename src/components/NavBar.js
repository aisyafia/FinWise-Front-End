import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/users/selectors";
import { logOut } from "../store/users/slice";
import styled from "styled-components";

const NavBar = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  return (
    <Container>
      <FirstContainer>
        <Intro>
          <Link to="/">
            <Title>FinWise</Title>
          </Link>
        </Intro>
        <MenuLink to="/">Home</MenuLink>

        <MenuLink to="/partners">Our Partners</MenuLink>

        {token ? (
          <MenuLink onClick={() => dispatch(logOut())}>Log out</MenuLink>
        ) : (
          <MenuLink to="/login">Login</MenuLink>
        )}
      </FirstContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0.2rem;
  padding: 0.3rem;
  background: #fffbfe;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: auto;
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
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
  padding-left: 4rem;
`;
const Title = styled.h1`
  font-size: 3rem;
  color: #414361;
  align-self: flex-start;
  text-decoration: none;
`;

export { NavBar };
