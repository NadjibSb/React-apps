import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import * as apiActions from "../api/apiActions";

let lastId = 1;

const slice = createSlice({
  name: "Cards",
  initialState: {
    list: [],
    loading: false,
    lastFetch: Date.now(),
  },
  reducers: {
    cardsRequested: (cards) => {
      cards.loading = true;
    },
    cardsReceived: (cards, action) => {
      cards.list = action.payload;
      cards.loading = false;
      cards.lastFetch = Date.now();
    },
    cardsRequesteFailed: (cards) => {
      cards.loading = false;
    },
    cardAdded: (cards, action) => {
      cards.list.push(action.payload);
    },
    cardArchived: (cards, action) => {
      cards.list.map((card) =>
        card.id === action.payload.id ? action.payload : card
      );
    },
  },
});

export default slice.reducer;
const {
  cardAdded,
  cardArchived,
  cardsReceived,
  cardsRequested,
  cardsRequesteFailed,
} = slice.actions;

// ************** Action Creators
const url = "/bugs";
export const loadCards = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.cards.lastFetch;
  if (lastFetch - Date.now() > 10 * 60 * 1000) return;
  dispatch(
    apiActions.apiCall({
      url,
      onStart: cardsRequested.type,
      onSuccess: cardsReceived.type,
      onError: cardsRequesteFailed.type,
    })
  );
};

export const addCard = (card) =>
  apiActions.apiCall({
    url,
    method: "post",
    data: card,
    onSuccess: cardAdded.type,
  });

export const archiveCard = (id) =>
  apiActions.apiCall({
    url: url + "/" + id,
    method: "patch",
    data: { resolved: true },
    onSuccess: cardArchived.type,
  });
// ************* Selectors

export const getArchivedCards = createSelector(
  (state) => state.entities.cards,
  (cards) => cards.filter((c) => c.resolved === true)
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
