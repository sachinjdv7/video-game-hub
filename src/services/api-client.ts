import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4193c808f4664ee2b5631f8042af83d1",
  },
});
