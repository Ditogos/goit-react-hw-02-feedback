import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export class Statistic extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul className={css.List}>
        <li className={css.Item}>Good: {good}</li>
        <li className={css.Item}>Neutral: {neutral}</li>
        <li className={css.Item}>Bad: {bad}</li>
        <li className={css.Item}>Total: {total}</li>
        <li className={css.Item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    );
  }
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
