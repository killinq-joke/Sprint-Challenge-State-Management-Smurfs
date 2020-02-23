import React from 'react';
import SmurfCard from './SmurfCard';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

function SmurfList({ smurfs, edit, setEdit }) {
  return (
    <div>
      {smurfs.map(smurf => {
        return <SmurfCard smurf={smurf} edit={edit} setEdit={setEdit} />;
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
