import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { userLogin } from "../redux/actions/authAction";

class Login extends Component {
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.userLogin();
      console.log(this.props.currentUser);
      console.log(sessionStorage.getItem("currentUser"));
      alert("Thanks, You can go to the Blogs now!");
    };
    return (
      <div className="login d-flex justify-content-center mt-3">
        <form className="mw-50 mt-3 border border-danger p-5 rounded">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
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

export default functionFromConnect(Login);
