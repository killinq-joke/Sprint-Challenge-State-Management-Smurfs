import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function SmurfCard({ smurf, formValues, editSmurf, deleteSmurf }) {
  return (
    <div key={smurf.id}>
      <h3>{smurf.name}</h3>
      <p>age: {smurf.age}</p>
      <p>height: {smurf.height}cm</p>
      <button type="button" onClick={e => editSmurf(smurf.id, formValues)}>
        EDIT
      </button>
      <button type="button" onClick={e => deleteSmurf(smurf.id)}>
        DELETE
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    formValues: state.formValues
  };
}

export default connect(mapStateToProps, actionCreators)(SmurfCard);
