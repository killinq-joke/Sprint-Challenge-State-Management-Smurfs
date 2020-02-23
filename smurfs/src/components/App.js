import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import SmurfsList from "./SmurfsList";
import "./App.css";

function App({
  smurfs,
  formValues,
  fetchSmurfs,
  postSmurf,
 
  nameChange,
  ageChange,
  heightChange
}) {
  // smurfs = []
  // newSmurfValues = {
  //   name: '',
  //   age: '',
  //   height: '',
  //   id: smurfs.length
  // }
  console.log(smurfs);

  useEffect(() => {
    fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <form>
        <label>name</label>
        <input value={formValues.name} onChange={nameChange}></input>
        <label>age</label>
        <input
          type="number"
          value={formValues.age}
          onChange={ageChange}
        ></input>
        <label>height</label>
        <input
          type="number"
          value={formValues.height}
          onChange={heightChange}
        ></input>
        <button type="button" onClick={e => postSmurf(formValues)}>
          ADD
        </button>
      </form>
      <SmurfsList />
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
