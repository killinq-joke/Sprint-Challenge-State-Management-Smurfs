import * as types from "./actionTypes";
import axios from "axios";

const smurfsAPI = "http://localhost:3333/smurfs";

export const fetchCharacters = () => dispatch => {
  dispatch({ type: types.FETCH_SMURFS_START });
  axios
    .get(smurfsAPI)
    .then(res => {
      dispatch({ type: types.SET_FETCHED_SMURFS, payload: res.data });
    })
    .catch(err => {
      debugger;
    });
};

export const nameChange = e => dispatch => {
  const inputValue = e.target.value;
  dispatch({ type: types.NAME_CHANGE, payload: inputValue });
};
export const ageChange = e => dispatch => {
  const inputValue = e.target.value;
  dispatch({ type: types.AGE_CHANGE, payload: inputValue });
};
export const heightChange = e => dispatch => {
  const inputValue = e.target.value;
  dispatch({ type: types.HEIGHT_CHANGE, payload: inputValue });
};

export const postSmurfs = smurfValues => dispatch => {
  dispatch({ type: types.POST_SMURFS_START });
  dispatch({ type: types.MAKE_THINGS_RIGHT })
  axios
    .post(smurfsAPI, smurfValues)
    .then(res => {
      dispatch({ type: types.SET_POSTED_SMURFS, payload: res.data });
    })
    .catch(err => {
      debugger;
    });
};
