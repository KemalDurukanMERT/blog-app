import {
  DISPLAY_MARKDOWN,
  MARKDOWN_TEXT,
  RENEW_BLOGS,
  SET_AUTHOR,
  SET_BLOG,
  SET_IMAGE,
  SET_TITLE,
} from "../types/markdownTypes";

export function setMarkdown(markdown) {
  return {
    type: MARKDOWN_TEXT,
    payload: {
      markdown: markdown,
    },
  };
}
export function setTitle(title) {
  return {
    type: SET_TITLE,
    payload: {
      title: title,
    },
  };
}
export function setAuthor(author) {
  return {
    type: SET_AUTHOR,
    payload: {
      author: author,
    },
  };
}
export function setImage(image) {
  return {
    type: SET_IMAGE,
    payload: {
      image: image,
    },
  };
}

export function setBlog(blog) {
  return {
    type: SET_BLOG,
    payload: {
      ntitle: blog.title,
      nauthor: blog.author,
      nimage: blog.image,
      ntext: blog.text,
      nid: blog.id,
    },
  };
}

export function renewBlogs(blogs) {
  return {
  type: RENEW_BLOGS,
  payload: {
    nblogs: blogs,
  }
}} 

export function markdownVisible() {
  let inputs = document.getElementsByTagName("input");
  let textarea = document.getElementsByTagName("textarea");
  textarea[0].value = "";
  for (let i = 0; i < inputs.length; ++i) {
    inputs[i].value = "";
  }
  return {
    type: DISPLAY_MARKDOWN,
  };
}
