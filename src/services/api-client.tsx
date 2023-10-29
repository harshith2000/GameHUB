import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8112172c926e444dafd83b2bd6d69f70",
  },
});
