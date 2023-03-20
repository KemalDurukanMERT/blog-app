import React, { Component } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { renewBlogs, setBlog } from '../../redux/actions/markdownAction';

class BlogDetail extends Component {
  render() {
    const handleDelete = () => {
      let renew = this.props.blogs.filter((blog) => blog.id != window.location.pathname.slice(7))
      this.props.renewBlogs(renew)
    }

    let blog = this.props.blogs.filter((blog)=> blog.id == window.location.pathname.slice(7))[0]
    return (
      <div className="blog-detail-container p-3">
        <h1 className='bg-warning text-center p-2 rounded'>{blog.title}</h1>
        <div className="blog-detaile-text mt-5"><ReactMarkdown children={blog.text}/></div>
        {blog.image ? <div className='blog-detail-image'><img src={blog.image} alt="" width={"400px"} /></div> : ""}
        <div className="blog-detail-author mt-5">Author: <i>{blog.author}</i></div>
        <div className="btn-right d-flex gap-3">
          <Link to="/blogs" className="btn btn-danger" onClick={()=> handleDelete()}>Delete</Link>
          <div className="btn btn-primary">Edit</div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    blogs: state.markdownrdc.blogs,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setBlog: (blog) => dispatch(setBlog(blog)),
  renewBlogs: (blogs) => dispatch(renewBlogs(blogs)),
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(BlogDetail);