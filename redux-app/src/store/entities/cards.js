import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "../api/apiActions";

let lastId = 1;

const slice = createSlice({
  name: "Cards",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    cardsRequested: (cards) => {
      cards.loading = true;
    },
    cardsReceived: (cards, action) => {
      cards.list = action.payload;
      cards.loading = false;
    },
    cardsRequesteFailed: (cards) => {
      cards.loading = false;
    },
    addCard: (cards, action) => {
      cards.list.push({
        id: lastId++,
        description: action.payload.description,
        archived: false,
      });
    },
    archiveCard: (cards, action) => {
      cards.list.map((card) =>
        card.id !== action.payload.id ? card : (card.archived = true)
      );
    },
  },
});

export default slice.reducer;
export const {
  addCard,
  archiveCard,
  cardsReceived,
  cardsRequested,
  cardsRequesteFailed,
} = slice.actions;

// ************** Action Creators
const url = "/bugs";
export const loadCards = () => {
  return apiActions.apiCall({
    url,
    onStart: cardsRequested.type,
    onSuccess: cardsReceived.type,
    onError: cardsRequesteFailed.type,
  });
};

// ************* Selectors

export const getArchivedCards = createSelector(
  (state) => state.entities.cards,
  (cards) => cards.filter((c) => c.archived === true)
);
/*
export const getArchivedCards = (state) => {
  return state.entities.cards.filter((c) => c.archived === true);
};*/
//--------

//********** Redux/toolkit
/*
import { createAction, createReducer } from @reduxjs/toolkit

export const addCard = createAction("CARD_ADDED");
export const archiveCard = createAction("CARD_ARCHIVED");

let lastId = 1;

export default createReducer([], {
  [addCard.type]: (state, action) => {
    state.push({
      id: lastId++,
      description: action.payload.description,
      archived: false,
    });
  },
  [archiveCard.type]: (state, action) => {
    state.map((card) =>
      card.id !== action.payload.id ? card : (card.archived = true)
    );
  },
});
*/

// *********** Basic implementation

/*
export const archiveCard = (id) => {
  return {
    type: cardArchived.type,
    payload: {
      id,
    },
  };
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case addCard.type:
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          archived: false,
        },
      ];
    case archiveCard.type:
      return state.map((card) =>
        card.id !== action.payload.id ? card : { ...card, archived: true }
      );
  }
}
*/
