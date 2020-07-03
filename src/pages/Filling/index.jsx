import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaArrowCircleLeft } from 'react-icons/fa'

export default class Filling extends Component {
  redirectToTarget = () => {
    this.props.history.push(`/`)
  }

  render() {
    return (
      <div>
        <h1 className="h3 text-center">Recheio</h1>
        <p>Escolha o tipo de massa de sua pizza</p>
        <div className="form-check card px-md-5 py-3 mb-2">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
          <label className="form-check-label control-form" for="exampleRadios1">
            Massa Pan
          </label>
        </div>
        <div className="form-check card px-md-5 py-3 mb-2">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
          <label className="form-check-label" for="exampleRadios2">
            Massa Normal
          </label>
        </div>
        <div className="form-check card px-md-5 py-3 mb-2">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
          <label className="form-check-label" for="exampleRadios3">
            Massa Cream Creacker
          </label>
        </div>
        <Link to="/tamanho" className="btn btn-danger text-center"><FaArrowCircleLeft/> Anterior</Link>
        <input type="submit" value="Finalizar pedido" onClick={this.redirectToTarget} className="btn btn-success float-right"/>
      </div>
    )
  }
}
