import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    let name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          ref={this.inputRef}
          type="text"
          className="habit__input"
          placeholder="Habit"
        />
        <button className="habit__button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
