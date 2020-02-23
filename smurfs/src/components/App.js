import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import SmurfsList from './SmurfsList';
import './App.css';

function App({
  smurfs,
  formValues,
  fetchSmurfs,
  postSmurf,

  inputChange
  // ageChange,
  // heightChange
}) {
  // smurfs = []
  // newSmurfValues = {
  //   name: '',
  //   age: '',
  //   height: '',
  //   id: smurfs.length
  // }
  console.log(smurfs);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    fetchSmurfs();
  }, []);

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <form>
        <label>name</label>
        <input
          name='name'
          value={formValues.name}
          onChange={inputChange}
        ></input>
        <label>age</label>
        <input
          name='age'
          type='number'
          value={formValues.age}
          onChange={inputChange}
        ></input>
        <label>height</label>
        <input
          name='height'
          type='number'
          value={formValues.height}
          onChange={inputChange}
        ></input>
        <button type='button' onClick={e => postSmurf(formValues)}>
          ADD
        </button>
      </form>
      <SmurfsList edit={edit} setEdit={setEdit} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    formValues: state.formValues
  };
}

export default connect(mapStateToProps, actionCreators)(App);
