import React from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function SmurfList({smurfs}) {
  return (
    <div>
      {smurfs.map(smurf => {
        return <SmurfCard smurf={smurf}/>;
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

export default connect(mapStateToProps, actionCreators)(SmurfList);
