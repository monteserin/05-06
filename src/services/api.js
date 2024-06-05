import axios from "axios";

export const getCoffes = async () => {
  const response = await axios.get("https://api.sampleapis.com/coffee/hot");
  return response.data;
};

export const getCoffeById = async (id) => {
  const response = await axios.get(
    "https://api.sampleapis.com/coffee/hot/" + id
  );
  return response.data;
};
