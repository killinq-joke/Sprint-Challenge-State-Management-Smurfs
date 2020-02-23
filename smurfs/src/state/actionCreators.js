import * as types from './actionTypes';
import axios from 'axios';

const smurfsAPI = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => dispatch => {
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

export const inputChange = e => dispatch => {
  const inputName = e.target.name;
  const inputValue = e.target.value;
  dispatch({ type: types.INPUT_CHANGE, payload: { inputName, inputValue } });
};

export const inputChangeEdit = val => dispatch => {
  dispatch({ type: types.INPUT_CHANGE_EDIT, payload: val });
};
// export const ageChange = e => dispatch => {
//   const inputValue = e.target.value;
//   dispatch({ type: types.AGE_CHANGE, payload: inputValue });
// };
// export const heightChange = e => dispatch => {
//   const inputValue = e.target.value;
//   dispatch({ type: types.HEIGHT_CHANGE, payload: inputValue });
// };

export const postSmurf = smurfValues => dispatch => {
  dispatch({ type: types.POST_SMURFS_START });
  dispatch({ type: types.MAKE_THINGS_RIGHT });
  axios
    .post(smurfsAPI, smurfValues)
    .then(res => {
      dispatch({ type: types.SET_POSTED_SMURFS, payload: res.data });
    })
    .catch(err => {
      debugger;
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: types.DELETE_SMURF_START });
  axios
    .delete(`${smurfsAPI}/${id}`)
    .then(res => {
      dispatch({ type: types.SET_DELETED_SMURF, payload: res.data });
    })
    .catch(err => {
      debugger;
    });
};

export const editSmurf = (id, newValues) => dispatch => {
  dispatch({ type: types.EDIT_SMURF_START });
  axios
    .put(`${smurfsAPI}/${id}`, newValues)
    .then(res => {
      dispatch({ type: types.SET_EDITED_SMURF, payload: res.data });
      dispatch({ type: types.SET_POSTED_SMURFS });
    })
    .catch(err => {
      debugger;
    });
};
