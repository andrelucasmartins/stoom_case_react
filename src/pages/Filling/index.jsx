import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaArrowCircleLeft } from 'react-icons/fa'
import api from '../../services/api'
export default class Filling extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      fillList: []
    }

  }

  componentDidMount() {
    this.fillList()
  }

  fillList = async () => {
    const res = await api.get('/filling')
    this.setState({ fillList: res.data })
  }

  redirectToTarget = () => {
    this.props.history.push(`/`)
  }
  
  render() {
    const { fillList } = this.state
    return (
      <div>
        <h1 className="h3 text-center">Recheio</h1>
        <p>Escolha o recheio da pizza</p>
        {fillList.map(list => (
        <div className="form-check card px-md-5 py-3 mb-2" key={list.id}>
          <input 
              type="checkbox"
              name="size"
              value={list.name}
              onChange={this.fillChange}
              className="form-check-input"
              />
          {list.name}
        </div>
        ))}
        <Link to="/tamanho" className="btn btn-danger text-center"><FaArrowCircleLeft/> Anterior</Link>
        <input type="submit" value="Finalizar pedido" onClick={this.redirectToTarget} className="btn btn-success float-right"/>
      </div>
    )
  }
}
