import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import api from '../../services/api'
export default class Mass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    const response = await api.get('/size')
    console.log(response.data)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <h1 className="h3 text-center">Massa</h1>
        <p>Escolha o tipo de massa de sua pizza</p>
 
        <div className="form-check card px-md-5 py-3 mb-2">
        <input 
          type="radio"
          name="name"
          value="opt1"
          checked={this.state.value === "opt1"}
          onChange={this.handleChange}
          className="form-check-input"
           />
          <label className="form-check-label control-form">
            Massa Pan
          </label>
        </div>
        <div className="form-check card px-md-5 py-3 mb-2">
        <input 
          type="radio"
          name="name"
          value="opt2"
          checked={this.state.value === "opt2"}
          onChange={this.handleChange}
          className="form-check-input"
           />
          <label className="form-check-label">
            Massa Normal
          </label>
        </div>
        <div className="form-check card px-md-5 py-3 mb-2">
        <input 
          type="radio"
          name="name"
          value="opt3"
          checked={this.state.value === "opt3"}
          onChange={this.handleChange}
          className="form-check-input"
           />
          <label className="form-check-label">
            Massa Cream Creacker
          </label>
        </div>
        <Link to="/" className="btn btn-danger"><FaArrowCircleLeft/> Anterior</Link>
        <Link to="/tamanho" className="btn btn-danger float-right">Próximo <FaArrowCircleRight/></Link>
      </div>
    )
  }
}
