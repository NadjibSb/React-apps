import actionTypes from "./actionTypes";

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
