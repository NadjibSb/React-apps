import axios from "axios";
import * as actions from "../api/apiActions";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCall.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  onStart && dispatch({ type: onStart });
  next(action);

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9002/api",
      url,
      method,
      data,
    });
    dispatch({ type: actions.apiCallSuccess.type, payload: response.data });
    onSuccess && dispatch({ type: onSuccess, payload: response.data });
    //
  } catch (e) {
    dispatch({ type: actions.apiCallError.type, payload: e.message });
    onError && dispatch({ type: onError, payload: e.message });
  }
};

export default api;
