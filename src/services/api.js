import axios from "axios";

const api = async () => {
  const URL_LOCATION = "https://run.mocky.io/v3/a5ce4cda-447f-45c8-8f34-8c0a40c117fa"
  
  const { data } = await axios.get(URL_LOCATION)
  return data
};

export default api
