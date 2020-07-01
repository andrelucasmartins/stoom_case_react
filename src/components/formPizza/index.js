import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <label class="custom-control custom-checkbox">
          <input type="checkbox" name="" id="" value="checkedValue" class="custom-control-input">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description"></span>
        </label>
      </div>
    )
  }
}
