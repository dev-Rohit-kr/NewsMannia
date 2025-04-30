import React, { Component } from 'react';
import spinner from '../spinner2.gif';  // Assuming the spinner.gif file is in the src folder

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center '>
        <img src={spinner} alt="Loading..." />
      </div>
    );
  }
}

export default Spinner;
