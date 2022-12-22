import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPartners } from "../store/users/thunks";
const PartnersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPartners());
  }, []);
  return (
    <div>
      <h3>Find your experts:</h3>
    </div>
  );
};

export { PartnersPage };
