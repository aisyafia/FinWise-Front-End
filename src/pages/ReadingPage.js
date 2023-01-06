import { useSelector } from "react-redux";
import { selectDescription, selectFile } from "../store/files/selectors";
const ReadingPage = () => {
  const explaination = useSelector(selectDescription);
  const pdfFile = useSelector(selectFile);

  return (
    <div>
      <h2>Inside your pay slip:</h2>

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
