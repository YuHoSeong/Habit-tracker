import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <i className="header__logo fab fa-black-tie"></i>
        <span className="header__title">Habit Tracker</span>
        <span className="header__count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Header;
