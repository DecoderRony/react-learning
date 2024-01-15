import axios from "axios";

export default axios.create({
  params: {
    key: "ebdf6923fd374388b34237211714c2c2",
  },
  baseURL: "https://api.rawg.io/api",
});
