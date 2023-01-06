import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPartners } from "../store/providers/thunks";
import { selectToken } from "../store/users/selectors";
import { selectPartner } from "../store/providers/selectors";

const PartnersPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const partners = useSelector(selectPartner);

  useEffect(() => {
    if (token !== null) {
      dispatch(fetchAllPartners);
    }
  }, [token, dispatch]);

  // if (!partners) {
  //   return [];
  // }

  return (
    <div>
      <h3>Find your experts:</h3>
      {!token ? (
        <p>
          Please <Link to="/login">login</Link> to see our partners
        </p>
      ) : (
        partners &&
        partners.map((p) => {
          return (
            <div>
              <Link to={`/partners/${p.id}`}>
                <h4>{p.companyName}</h4>
              </Link>
              <p>{p.companyLocation}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export { PartnersPage };
