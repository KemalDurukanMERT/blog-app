import React, { Component } from "react";
import { connect } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { userLogin } from "../redux/actions/authAction";

class PrivateRouter extends Component {
  render() {
    return (
      <div>
        {this.props.currentUser == true ? <Outlet /> : <Navigate to="/login" />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  userLogin: () => dispatch(userLogin()),
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(PrivateRouter);
