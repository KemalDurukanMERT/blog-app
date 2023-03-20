import React, { Component } from "react";
import { connect } from "react-redux";
import { markdownVisible, setAuthor, setBlog, setImage, setMarkdown, setTitle } from "../../../redux/actions/markdownAction";

class MarkedInput extends Component {
  render() {
    const onInputChange = (e) => {
      const newValue = e.target.value;
      this.props.setMarkdown(newValue);
    };

    const onTitleChange = (e) => {
      const newTitle = e.target.value;
      this.props.setTitle(newTitle);
    };
    const onAuthorChange = (e) => {
      const newAuthor = e.target.value;
      this.props.setAuthor(newAuthor);
    };
    const onImageChange = (e) => {
      const newImage = e.target.value;
      this.props.setImage(newImage);
    };

    const saveBlog = (e) => {
      e.preventDefault();
      const newBlog = {title: this.props.title, author:this.props.author, image: this.props.image, text:this.props.markdown, id: new Date().getMilliseconds() };
      console.log(newBlog)
      this.props.setBlog(newBlog);
      this.props.markdownVisible()
    };

    return (
      <div className="">
        <h3 className="text-center">Markdown Text</h3>
        <form>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" id="title" onChange={(e) => onTitleChange(e)} required />
            <br />
            <label htmlFor="author">Author</label>
            <br />
            <input type="text" id="author" onChange={(e) => onAuthorChange(e)} required />
            <br />
            <label htmlFor="image">Image (url)</label>
            <br />
            <input type="text" id="image" onChange={(e) => onImageChange(e)}/>
            <br />
            <label htmlFor="blog-text">Blog</label>
            <textarea
              id="blog-text"
              className="w-100"
              onChange={(e) => onInputChange(e)}
            ></textarea>
          </div>
          <div className="button-save d-flex column-gap-3 ">
            <div className="btn btn-secondary">Discard</div>
            <button type="submit" className="btn btn-success" onClick={(e)=> saveBlog(e)}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    markdown: state.markdownrdc.markdown,
    title: state.markdownrdc.title,
    author: state.markdownrdc.author,
    image: state.markdownrdc.image,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setMarkdown: (markdown) => dispatch(setMarkdown(markdown)),
  setTitle: (title) => dispatch(setTitle(title)),
  setAuthor: (author) => dispatch(setAuthor(author)),
  setImage: (image) => dispatch(setImage(image)),
  setBlog: (blog) => dispatch(setBlog(blog)),
  markdownVisible: () => dispatch(markdownVisible()),
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(MarkedInput);
