import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setBlog } from "../../redux/actions/markdownAction";

class Blogs extends Component {
  render() {
    return (
      <div className="">
        <div className="h1">Blogs</div>
        <div className="blog-area mt-3 d-flex flex-wrap">
          {!this.props.markdownVisible && this.props.blogs.map((blog,index) => {
            return (
              <div className="blog border border-secondary rounded shadow p-3" key={index}>
                <div className="blog-title h4">{blog.title}</div>
                <div className="blog-image"><img src={blog.image ? blog.image : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"} alt="" width={"200px"} /></div>
                <div className="blog-author"><i>{blog.author}</i></div>
                <Link to={`${blog.id}`} className="btn-right btn btn-warning mt-3">Read More</Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    blogs: state.markdownrdc.blogs,
    markdownVisible: state.markdownrdc.markdownVisible
  };
};

const mapDispatchToProps = (dispatch) => ({
  setBlog: (blog) => dispatch(setBlog(blog)),
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Blogs);
