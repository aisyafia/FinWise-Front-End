import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import definitions from "../definitions.json";
import { useDispatch } from "react-redux";
import { foundWords, downloadedFile } from "../store/files/slice";

const InputField = () => {
  const [file, setFile] = useState(null);

  const apiUrl = "http://localhost:4001";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const upload = async (e) => {
    e.preventDefault();
    // dispatch(downloadedFile(file));
    const formData = new FormData();
    formData.append("pdfFile", file);
    try {
      const response = await axios.post(`${apiUrl}/upload-success`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // console.log("response?", response.data);
      const wordsFound = [];
      const dataSet = response.data;
      // console.log("data set", dataSet);
      // console.log(definitions);
      for (let i = 0; i < definitions.length; i++) {
        const regex = new RegExp(definitions[i].term);
        // console.log("re", regex);
        if (regex.test(dataSet)) {
          wordsFound.push(definitions[i]);
        }
      }
      // console.log(wordsFound, "this is the words");
      dispatch(foundWords(wordsFound));

      // .filter((item) => /^[a-zA-Z]/.test(item));
    } catch (error) {
      console.log("An error has occured", error);
    }
    setFile(null);
    navigate("/file-translate");
  };

  return (
    <div>
      <form onSubmit={upload}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button type="submit">Upload your file</button>
      </form>
    </div>
  );
};

export { InputField };
