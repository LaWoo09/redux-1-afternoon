import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {CHANGE_FIRSTNAME, CHANGE_LASTNAME } from "../../store"
import './Author.css';

class Author extends Component {
  constructor(props) {
    super(props);
    const storeState = store.getState();
    
    this.state = {
      authorsFirst: storeState.authorsFirst,
      authorsLast: storeState.authorsLast
    };
  }

  handleAuthorFirstChange(nameVal) {
    this.setState({
      authorsFirst: nameVal
    });
  }

  handleAuthorLastChange(nameVal) {
    this.setState({
      authorsLast: nameVal
    });
  }
  saveChanges() {
    // Send data to Redux state
    const { authorsFirst, authorsLast } = this.state
    store.dispatch({
      type: CHANGE_FIRSTNAME,
      payload: authorsFirst
    })
    store.dispatch({
      type: CHANGE_LASTNAME,
      payload: authorsLast
    })
  }
  render() {
    return (
      <div className="Author forms">
        <div className="input_container">
          <h2>Author First Name:</h2>
          <input
            value={this.state.authorsFirst}
            onChange={e => this.handleAuthorFirstChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Author Last Name:</h2>
          <input
            value={this.state.authorsLast}
            onChange={e => this.handleAuthorLastChange(e.target.value)}
          />
        </div>
        <Link to="/add/name">
          <button onClick={() => this.saveChanges()} className="left_button">
            Previous
          </button>
        </Link>
        <Link to="/add/ingredients">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Author;
