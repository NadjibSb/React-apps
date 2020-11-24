import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  console.log("ERROR :" + error);
  alert("An error had occured");
});

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};
