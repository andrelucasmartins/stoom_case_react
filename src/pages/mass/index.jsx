import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import api from '../../services/api'
export default class Mass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      massList: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    this.massList()
  }

  massList = async () => {
    const res = await api.get('/mass')
    this.setState({ massList: res.data })
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const { massList } = this.state
    return (
      <div>
        <h1 className="h3 text-center">Massa</h1>
        <p>Escolha o tipo de massa de sua pizza</p>
        {massList.map(list => (
        <div className="form-check card px-md-5 p-3 mb-2" key={list.id}>
          <label className="form-check-label" htmlFor={list.id}>
          <input 
              type="radio"
              name="mass"
              value={list.name}
              checked={this.state.value === list.name}
              onChange={this.handleChange}
              className="form-check-input"
              id={list.id}
              />
          
            {list.name}
          </label>
        </div>
        ))}
        <Link to="/" className="btn btn-danger"><FaArrowCircleLeft/> Anterior</Link>
        <Link to="/tamanho" className="btn btn-danger float-right">Próximo <FaArrowCircleRight/></Link>
      </div>
    )
  }
}
