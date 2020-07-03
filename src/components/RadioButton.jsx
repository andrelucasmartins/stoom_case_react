import React from 'react';

// import { Container } from './styles';

function RadioButton(props) {
  return (
    <div className="form-check card px-md-5 py-3 mb-2">
        <input 
          type="radio"
          name="name"
          value="opt1"
          checked={this.state.value === props.value}
          onChange={this.handleChange}
          className="form-check-input"
           />
          <label className="form-check-label control-form">
            Massa Pan
          </label>
        </div>
  )
}

export default RadioButton;