// Actions types
const cardAdded = "CARD_ADDED";
const cardArchived = "CARD_ARCHIVED";

// Actions

export const addCard = (description) => {
  return {
    type: cardAdded,
    payload: {
      description,
    },
  };
};

export const archiveCard = (id) => {
  return {
    type: cardArchived,
    payload: {
      id,
    },
  };
};

let lastId = 1;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.cardAdded:
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          archived: false,
        },
      ];
    case actionTypes.cardArchived:
      return state.map((card) =>
        card.id !== action.payload.id ? card : { ...card, archived: true }
      );
  }
}
