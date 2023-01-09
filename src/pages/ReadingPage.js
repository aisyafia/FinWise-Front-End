import { useSelector } from "react-redux";
import { selectDescription, selectFile } from "../store/files/selectors";
import { Document, Page } from "react-pdf";

const ReadingPage = () => {
  const explaination = useSelector(selectDescription);
  const pdfFile = useSelector(selectFile);

  return (
    <div>
      <h2>Inside your pay slip:</h2>
      <Document file={pdfFile}>
        Your uploaded file
        <Page pageNumber={1} />
      </Document>
      {explaination &&
        explaination.map((e) => {
          return (
            <div>
              <p>{e.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export { ReadingPage };
