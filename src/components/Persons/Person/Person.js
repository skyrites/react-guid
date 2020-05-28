import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name}. I am years {this.props.age} old!
        </p>
        <p key='i2'>{this.props.children}</p>
        <input
          key='i3'
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
