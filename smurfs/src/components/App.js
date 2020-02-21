import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import "./App.css";

function App({ smurfs, formValues, fetchCharacters, postSmurfs, nameChange, ageChange, heightChange }) {
  // smurfs = []
  // newSmurfValues = {
  //   name: '',
  //   age: '',
  //   height: '',
  //   id: smurfs.length
  // }
  console.log(smurfs);

  useEffect(() => {
    fetchCharacters();
  }, []);


  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <form>
        <label>name</label>
        <input value={formValues.name} onChange={nameChange}></input>
        <label>age</label>
        <input value={formValues.age} onChange={ageChange}></input>
        <label>height</label>
        <input value={formValues.height} onChange={heightChange}></input>
        <button type="button" onClick={e => postSmurfs(formValues)}>ADD</button>
      </form>
      {smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <h3>{smurf.name}</h3>
            <p>age: {smurf.age}</p>
            <p>height: {smurf.height}</p>
          </div>
        );
      })}
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
