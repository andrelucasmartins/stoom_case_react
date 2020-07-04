import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import api from '../../services/api'
export default class Size extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: "",
      typeList: []
    }

    this.typeChange = this.typeChange.bind(this)
  }

  async componentDidMount() {
    this.typeList()
  }

  typeList = async () => {
    const res = await api.get('/size')
    this.setState({ typeList: res.data })
  }

  typeChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const { typeList } = this.state
    return (
      <div>
        <h1 className="h3 text-center">Tamanho</h1>
        <p>Escolha o tamanho da pizza</p>
        {typeList.map(list => (
        <div className="form-check card px-md-5 py-3 mb-2" key={list.id}>
          <input 
              type="radio"
              name="size"
              value={list.type}
              onChange={this.typeChange}
              className="form-check-input"
              />
          {list.type} fatias
        </div>
        ))}
        <Link to="/massa" className="btn btn-danger"><FaArrowCircleLeft/> Anterior</Link>
        <Link to="/recheio" className="btn btn-danger float-right">Próximo <FaArrowCircleRight/></Link>
      </div>
    )
  }
}
