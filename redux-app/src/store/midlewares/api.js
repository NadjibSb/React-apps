import axios from "axios";
import * as actions from "../api/apiActions";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCall.type) return next(action);
  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });
    dispatch({ type: actions.apiCallSuccess.type, payload: response.data });
    onSuccess && dispatch({ type: onSuccess, payload: response.data });
  } catch (e) {
    dispatch({ type: actions.apiCallError.type, payload: e });
    onError && dispatch({ type: onError, payload: e });
  }
};

export default api;
