import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../redux/actions/authAction";
import { setLanguage } from "../../redux/actions/langAction";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const handleLogout = () => {
      this.props.userLogout();
      console.log(this.props.currentUser);
      console.log(localStorage.getItem("currentUser"));
    };

    const activateDash = () => {
      let dashboard = document.getElementById("dashboard");
      let blogs = document.getElementById("blogs");
      blogs.classList.remove("active");
      dashboard.classList.add("active");
    };

    const activateBlog = () => {
      let dashboard = document.getElementById("dashboard");
      let blogs = document.getElementById("blogs");
      dashboard.classList.remove("active");
      blogs.classList.add("active");
    };

    const handleLang = (e) => {
      this.props.setLanguage(e.id)
    };

    return (
      <div>
        {/*Main Navigation*/}
        <header>
          {/* Sidebar */}
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3">
                <Link
                  to="/"
                  onClick={() => activateDash()}
                  id="dashboard"
                  className="list-group-item list-group-item-action py-2 ripple"
                  aria-current="true"
                >
                  <i className="fas fa-tachometer-alt fa-fw me-3" />
                  <span>Main dashboard</span>
                </Link>
                <Link
                  to="/blogs"
                  onClick={() => activateBlog()}
                  id="blogs"
                  className="list-group-item list-group-item-action py-2 ripple"
                >
                  <i className="fas fa-chart-area fa-fw me-3" />
                  <span>Blogs</span>
                </Link>
              </div>
            </div>
          </nav>
          {/* Sidebar */}
          {/* Navbar */}
          <nav
            id="main-navbar"
            className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
          >
            {/* Container wrapper */}
            <div className="container-fluid d-flex align-items-start">
              {/* Toggle button */}
              <button
                className="navbar-toggler me-3 mt-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              {/* Brand */}
              <a className="navbar-brand" href="#">
                LOGO
              </a>
              {/* Right links */}
              <ul className="navbar-nav ms-auto d-flex flex-row">
                {/* Search form */}
                <li>
                  <form className="d-none d-md-flex input-group w-auto my-auto mt-1">
                    <input
                      autoComplete="off"
                      type="search"
                      className="form-control rounded"
                      placeholder="Search"
                      style={{ minWidth: "225px" }}
                    />
                    <span className="input-group-text border-0">
                      <i className="fas fa-search" />
                    </span>
                  </form>
                </li>
                {/* Icon dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {this.props.selectedLanguage}
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-united-kingdom flag" />
                        {this.props.selectedLanguage}
                        <i className="fa fa-check text-success ms-2" />
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {["English", "Polski", "中文", "日本語", "Deutsch", "Français"].map((lang,index) => {
                      return (
                        <li className="dropdown-item" id={lang} key={index} onClick={(e) => handleLang(e.target)}>
                          {lang}
                        </li>
                      );
                    })}
                  </ul>
                </li>
                {/* Avatar */}
                <li  className={this.props.currentUser == true ? "nav-item dropdown" : "d-none"}>
                  <a
                    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                      className="rounded-circle"
                      height={22}
                      alt="Avatar"
                      loading="lazy"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        My profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Container wrapper */}
          </nav>
          {/* Navbar */}
        </header>
        {/*Main Navigation*/}
        {/*Main layout*/}
        <main style={{ marginTop: "58px" }}>
          <div className="container" />
        </main>
        {/*Main layout*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    selectedLanguage: state.lang.selectedLanguage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogout()),
  setLanguage: (language) => dispatch(setLanguage(language)),
});

const functionFromConnect = connect(mapStateToProps, mapDispatchToProps);

export default functionFromConnect(Navbar);
