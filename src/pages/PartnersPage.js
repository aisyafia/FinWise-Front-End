import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPartners } from "../store/users/thunks";
import { selectToken } from "../store/users/selectors";
const PartnersPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      dispatch(fetchAllPartners);
    }
  }, [dispatch]);

  return (
    <div>
      <h3>Find your experts:</h3>
    </div>
  );
};

export { PartnersPage };
