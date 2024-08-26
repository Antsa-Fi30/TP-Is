const axios = require("axios");

const testGetRequest = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/persons");
    console.log(response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
};

const testPostRequest = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/persons",
      {
        FirstName: "Jay",
        LastName: "Hardy",
        birthDate: "1980-01-01",
        startDate: "2020-01-01",
        endDate: "2025-01-01",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
  }
};

// testGetRequest();
testPostRequest();
