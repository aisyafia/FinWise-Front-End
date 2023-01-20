import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import definitions from "../definitions.json";
import { useDispatch } from "react-redux";
import { foundWords } from "../store/files/slice";
import { Button, Box } from "@mui/material";

const InputField = (props) => {
  const apiUrl = "http://localhost:4001";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    props.setter(e.target.files[0]);
  };

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pdfFile", props.getter);
    try {
      const response = await axios.post(`${apiUrl}/upload-success`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // console.log("response?", response.data);
      const wordsFound = [];
      const dataSet = response.data;
      for (let i = 0; i < definitions.length; i++) {
        const regex = new RegExp(definitions[i].term);
        if (regex.test(dataSet)) {
          wordsFound.push(definitions[i]);
        }
      }
      // console.log(wordsFound, "this is the words");
      dispatch(foundWords(wordsFound));
    } catch (error) {
      console.log("An error has occured", error);
    }
    navigate("/file-translate");
  };

  return (
    <div>
      <Box sx={{ m: 1 }}>
        <form onSubmit={upload}>
          <Box sx={{ display: "flex", alignItems: "flex-end", margin: "1rem" }}>
            <input
              required
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </Box>
          <Button type="submit" variant="contained" size="small">
            Upload your file
          </Button>
        </form>
      </Box>
    </div>
  );
};

export { InputField };
