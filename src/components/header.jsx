import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    console.log('header');
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
