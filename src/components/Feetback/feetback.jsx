import React, { Component } from 'react';
import css from './feetback.module.css';

export class Feedback extends Component {
  render() {
    return (
      <div className={css.buttons}>
        {this.props.options.map(option => (
          <li key={option}>
            <button
              type="button"
              name={option}
              className={css.button}
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
