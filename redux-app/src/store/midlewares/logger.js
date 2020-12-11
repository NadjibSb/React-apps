const logger = (str) => (store) => (next) => (action) => {
  console.log(str);
  next(action);
};

export default logger;
