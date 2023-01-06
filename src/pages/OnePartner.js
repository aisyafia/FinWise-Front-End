import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPartnerById } from "../store/providers/thunks";
import { selectPartnerById } from "../store/providers/selectors";

const OnePartner = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const partner = useSelector(selectPartnerById(id));
  const [message, setMessage] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setMessage("");
  };

  useEffect(() => {
    dispatch(fetchPartnerById(id));
  }, [id, dispatch]);

  if (!partner) {
    return null;
  }

  return (
    <div>
      <h2>More about this expert:</h2>
      <h3>{partner.companyName}</h3>
      <p>
        Website:{" "}
        <a href={`${partner.companyWebsite}`} target="_blank">
          {partner.companyWebsite}
        </a>
      </p>
      <p>Phone number: +{partner.companyPhoneNumber}</p>
      <p>Address: {partner.companyLocation}</p>
      <p>Send a message:</p>
      <textarea
        // value={message}
        onChage={(event) => setMessage(event.target.value)}
        rows={5}
        cols={55}
      />
      <br />
      <button onClick={handleClick}>Send inquiry</button>
    </div>
  );
};

export { OnePartner };
