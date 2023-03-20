import {
  DISPLAY_MARKDOWN,
  MARKDOWN_TEXT,
  RENEW_BLOGS,
  SET_AUTHOR,
  SET_BLOG,
  SET_IMAGE,
  SET_TITLE,
} from "../types/markdownTypes";

const initialState = {
  markdown: "",
  markdownVisible: false,
  title: "",
  author: "",
  image: "",
  blogs: JSON.parse(localStorage.getItem("blogs")) ? JSON.parse(localStorage.getItem("blogs")) : [],
};

const markdownReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MARKDOWN_TEXT:
      const { markdown } = payload;
      let newMarkdownText = {
        ...state,
        markdown: markdown,
      };
      return newMarkdownText;

    case DISPLAY_MARKDOWN:
      let displayMarkdown = {
        ...state,
        markdownVisible: !state.markdownVisible,
      };
      return displayMarkdown;

    case SET_TITLE:
      const { title } = payload;
      let newTitle = {
        ...state,
        title: title,
      };
      return newTitle;
    case SET_AUTHOR:
      const { author } = payload;
      let newAuthor = {
        ...state,
        author: author,
      };
      return newAuthor;
    case SET_IMAGE:
      const { image } = payload;
      let newImage = {
        ...state,
        image: image,
      };
      return newImage;

    case SET_BLOG:
      const { ntitle, nauthor, nimage, ntext, nid } = payload;
      state.blogs.push({
        title: ntitle,
        author: nauthor,
        image: nimage,
        text: ntext,
        id: nid,
      });
      let newState = {
        ...state,
        blogs: state.blogs,
      };
      localStorage.setItem("blogs", JSON.stringify(state.blogs))
      return newState;

    case RENEW_BLOGS:
      let renewedBlogs = {
        ...state,
        blogs: payload.nblogs,
      };
      localStorage.setItem("blogs",JSON.stringify(renewedBlogs.blogs))
      return renewedBlogs;

    default:
      return state;
  }
};

export default markdownReducer;
