import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { connect } from 'react-redux';
import { setMarkdown } from '../../../redux/actions/markdownAction';

class Result extends Component {
  render() {
    return (
      <div>
        <h3>Converted Text</h3>
        <hr />
        <div className="result-area w-100 h-100">
            <ReactMarkdown children={this.props.markdown}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      markdown: state.markdownrdc.markdown,
      markdownVisible: state.markdownrdc.markdownVisible
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    setMarkdown: () => dispatch(setMarkdown()),
  });
  
  const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);
  
  export default functionFromConnect(Result);