import { useState } from "react";
import axios from "axios";

const InputField = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState(null);

  const apiUrl = "http://localhost:4001";

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdfFile", file);
    try {
      const response = await axios.post(`${apiUrl}/upload-success`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // console.log("response?", response.data);
      const dataSet = response.data
        .split("\n")
        .filter((item) => /^[a-zA-Z]/.test(item));

      console.log("data set", dataSet);
      setText(dataSet);
    } catch (error) {
      console.log("An error has occured", error);
    }
    setFile(null);
  };
  return (
    <div>
      <form onSubmit={upload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload your file</button>
      </form>
    </div>
  );
};

export { InputField };
