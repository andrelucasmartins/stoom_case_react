import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import api from '../../services/api'
export default class Size extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: "",
      sizeList: []
    }

    this.sizeChange = this.sizeChange.bind(this)
  }

  async componentDidMount() {
    this.sizeList()
  }

  sizeList = async () => {
    const res = await api.get('/size')
    this.setState({ sizeList: res.data })
  }

  sizeChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const { sizeList } = this.state
    return (
      <div>
        <h1 className="h3 text-center">Tamanho</h1>
        <p>Escolha o tipo de massa de sua pizza</p>
        {sizeList.map(list => (
        <div className="form-check card px-md-5 py-3 mb-2" key={list.id}>
          <input 
              type="radio"
              name="size"
              value={list.size}
              checked={this.state.value === list.size}
              onChange={this.sizeChange}
              className="form-check-input"
              />
          {list.size}
        </div>
        ))}
        <Link to="/massa" className="btn btn-danger"><FaArrowCircleLeft/> Anterior</Link>
        <Link to="/recheio" className="btn btn-danger float-right">Próximo <FaArrowCircleRight/></Link>
      </div>
    )
  }
}
