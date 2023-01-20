import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDescription } from "../store/files/selectors";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styled from "styled-components";

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
    <MainContainer>
      <h2>Inside your pay slip:</h2>
      <FirstContainer>
        <div>
          <Document file={props.getter} onLoadSuccess={onDocLoadOK}>
            <Page height={600} pageNumber={pageNumber} />
          </Document>
        </div>
        <br />
        <Step>
          {explaination &&
            explaination.map((e) => {
              return (
                <div key={e.id}>
                  <p>{e.description}</p>
                </div>
              );
            })}
        </Step>
      </FirstContainer>
      <br />
      <div>
        <p>
          Are you satisfied with the information above? Do you have further
          questions regarding your personal income, tax and/or finance?
        </p>
        <p>
          Check out <Link to="/partners">Our Partner Experts</Link> if you are
          interested!
        </p>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
`;
const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 80%;
  margin: 2rem;
`;
const Step = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  padding: 1rem;
`;

export { ReadingPage };
