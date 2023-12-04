import React, { Component } from 'react';
import css from './feetback.module.css';

export class Feedback extends Component {
  render() {
    return (
      <div className={css.Buttons}>
        {this.props.options.map(option => (
          <li key={option}>
            <button
              type="button"
              name={option}
              className={css.Button}
              onClick={this.props.onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </div>
    );
  }
}
