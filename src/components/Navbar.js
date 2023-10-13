import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isDarkMode: false,
      mode: "light",
    };
  }

  toggleDarkMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor='black'
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor='white'
    }
  };
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              DailyDigest📰
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/politics">
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
              </ul>
              <div className={`form-check form-switch text-${this.state.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={this.toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label"   >Enable {this.state.mode==='light'?'Dark':'Light'} Mode</label>
    </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
