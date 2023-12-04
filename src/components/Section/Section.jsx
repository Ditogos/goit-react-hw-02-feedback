import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export class Section extends Component {
  render() {
    return (
      <div className={css.SectionDiv}>
        <p className={css.Title}>{this.props.title}</p>
        {this.props.children}
      </div>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
