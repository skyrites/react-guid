import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        I'm a {props.name}. I am years {props.age} old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
