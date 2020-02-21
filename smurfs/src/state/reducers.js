import * as types from "./actionTypes";

const initialStateSmurfs = [];
export function smurfReducer(state = initialStateSmurfs, action) {
  switch (action.type) {
    case types.FETCH_SMURFS_START:
      return state;
    case types.SET_FETCHED_SMURFS:
      const fetchedSmurfs = action.payload;
      return fetchedSmurfs;
    case types.SET_POSTED_SMURFS:
      const smurfs = action.payload;
      return smurfs;
    default:
      return state;
  }
}

const initialStateForm = {
  name: "",
  age: "",
  height: "",
  id: 0
};

export function formReducer(state = initialStateForm, action) {
  switch (action.type) {
    case types.MAKE_THINGS_RIGHT:
        return {
            ...state,
            id: state.id + 1
        }
    case types.SET_POSTED_SMURFS:
      return initialStateForm;
    case types.NAME_CHANGE:
      return {
        ...state,
        name: action.payload
      };
    case types.AGE_CHANGE:
      return {
        ...state,
        age: action.payload
      };
    case types.HEIGHT_CHANGE:
      return {
        ...state,
        height: action.payload
      };
    default:
      return state;
  }
}
