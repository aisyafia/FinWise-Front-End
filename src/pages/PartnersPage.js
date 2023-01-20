import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPartners } from "../store/providers/thunks";
import { selectToken } from "../store/users/selectors";
import { selectPartner } from "../store/providers/selectors";
import styled from "styled-components";

const PartnersPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const partners = useSelector(selectPartner);

  useEffect(() => {
    if (token !== null) {
      dispatch(fetchAllPartners);
    }
  }, [token, dispatch]);

  return (
    <MainContainer>
      <h3>Find your experts:</h3>
      <FirstContainer>
        {!token ? (
          <p>
            Please <Link to="/login">login</Link> to see our partners
          </p>
        ) : (
          partners &&
          partners.map((p) => {
            return (
              <PartnerCard>
                <Link to={`/partners/${p.id}`}>
                  <h4>{p.companyName}</h4>
                </Link>
                <p>{p.companyLocation}</p>
              </PartnerCard>
            );
          })
        )}
      </FirstContainer>
    </MainContainer>
  );
};

const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 70%;
  margin: 2rem;
  padding: 1rem;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
`;
const PartnerCard = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  max-width: 80%;
  border: 0.125rem double #414361;
  border-radius: 6px;
  text-align: center;
`;
export { PartnersPage };
