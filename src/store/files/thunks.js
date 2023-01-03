import axios from "axios";

const apiUrl = "http://localhost:4001";

export const uploadPdf = (formData) => async (req, res) => {
  try {
    const response = await axios.post(
      `${apiUrl}/upload-success`,
      { formData },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log("response?", response.text);
  } catch (error) {
    console.log("An error has occured", error.response.data);
  }
};
