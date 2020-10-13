import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logout from '../img/log-out.svg';
import login from '../img/log-in.svg';
import signup from '../img/signup.svg';
import home from '../img/home.svg';
import logo from '../img/logo.svg';

class Navigation extends Component {
  renderLinks() {
    if (this.props.authenticated.token) {
      return (
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <Link className="navbar-brand" to="/"><img src={logo} className="nav-logo" alt="Your Project" title="Your Project" /></Link>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <Link className="nav-link" to="/home"><img src={home} className="nav-icon" alt="Home" title="Home" /></Link>
          </li>
          <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <Link className="nav-link" to="/signout"><img src={logout} className="nav-icon" title="Sign Out" alt="Sign Out" /></Link>
          </li>
        </ul>
      );
    }
    return (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link className="navbar-brand" to="/"><img src={logo} alt="Your Project" className="nav-logo" /></Link>
        </li>
        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link className="nav-link" to="/signin"><img src={login} className="nav-icon" alt="Sign In" title="Sign In" /></Link>
        </li>
        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
          <Link className="nav-link" to="/signup"><img src={signup} className="nav-icon" alt="Sign Up" title="Sign Up" /></Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {this.renderLinks()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Navigation);
