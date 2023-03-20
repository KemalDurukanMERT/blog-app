import React, { Component } from "react";
import { connect } from "react-redux";
import { setMarkdown } from "../../redux/actions/markdownAction";
import MarkedInput from "./MarkdownContainer/MarkedInput";
import Result from "./MarkdownContainer/Result";

class AddBlog extends Component {
  render() {
    return (
      <div className="addBlog p-3 w-100 d-flex flex-column justify-content-center align-items-center">
        <div className="markdown-area d-flex justify-content-space w-100 gap-3 mb-3">
          <div className="write-markdown">
            <MarkedInput />
          </div>
          <div className="markdown-display">
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    markdown: state.markdownrdc.markdown,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setMarkdown: () => dispatch(setMarkdown()),
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(AddBlog);
