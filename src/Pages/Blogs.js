import React, { Component } from "react";
import { connect } from "react-redux";
import AddBlog from "../components/addBlog/AddBlog";
import Blogsx from "../components/BlogArea/Blogs";
import { markdownVisible, setMarkdown } from "../redux/actions/markdownAction";
import "./Blogs.css";

class Blogs extends Component {
  render() {
    return (
      <div className="blogs">
        <div className="main-container p-3 d-flex flex-column justify-content-center align-items-center">
          <div
            className="btn btn-danger w-25"
            onClick={() => {
              this.props.setmarkdownVisible();
              this.props.setMarkdown("");
            }}
          >
            {this.props.markdownVisible ? "Close" : "Add Blog"}
          </div>
          <div
            className={this.props.markdownVisible ? "w-100 d-flex" : "d-none"}
          >
            <AddBlog />
          </div>
          <div
            className={
              !this.props.markdownVisible
                ? "container w-100 border border-success mt-3"
                : "d-none"
            }
          >
            <Blogsx />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    markdownVisible: state.markdownrdc.markdownVisible,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setmarkdownVisible: () => dispatch(markdownVisible()),
  setMarkdown: (markdown) => dispatch(setMarkdown(markdown)),
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Blogs);
