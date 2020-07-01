import React, { Component } from 'react'
import {  FaPizzaSlice } from 'react-icons/fa'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-danger d-flex justify-content-center">
        <FaPizzaSlice className="text-warning h1"/>
      </nav>
    )
  }
}
