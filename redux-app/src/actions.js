import actionTypes from "./actionTypes";

export default {
  addCard,
  archiveCard,
};

function addCard(description) {
  return {
    type: actionTypes.cardAdded,
    payload: {
      description,
    },
  };
}

function archiveCard(id) {
  return {
    type: actionTypes.cardArchived,
    payload: {
      id,
    },
  };
}
