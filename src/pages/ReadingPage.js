import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDescription } from "../store/files/selectors";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const ReadingPage = (props) => {
  const explaination = useSelector(selectDescription);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocLoadOK = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  // console.log("pdf?", props.getter);

  return (
    <div>
      <h2>Inside your pay slip:</h2>
      <Document file={props.getter} onLoadSuccess={onDocLoadOK}>
        <Page height={600} pageNumber={pageNumber} />
      </Document>
      <div>
        {explaination &&
          explaination.map((e) => {
            return (
              <div key={e.id}>
                <p>{e.description}</p>
              </div>
            );
          })}
      </div>
      <br />
      <div>
        <h5>
          Are you satisfied with the information above? Do you have further
          questions regarding your personal income, tax and/or finance?
        </h5>
        <br />
        <h5>
          Check out <Link to="/partners">Our Partner Experts</Link> if you are
          interested!
        </h5>
      </div>
    </div>
  );
};

export { ReadingPage };
