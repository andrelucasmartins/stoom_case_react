import React, { Component } from 'react'
import swal from '@sweetalert/with-react'
import { FaRegSmileWink } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import api from '../../services/api'

export default class Main extends Component {
  state = {
    recomendacao: {},
    points: [],
    pizzaDay: []
  }
  async componentDidMount() {
    // const { id } = this.props.match.params
    this.points()
    this.today()
  }

  points = async () => {
    const res = await api.get('/points')
    this.setState({ points: res.data })
  }

  today = async () => {
    const d = new Date()
    const today = d.getUTCDay()
    
    const res = await api.get(`pizzas/${today}`)

    this.setState({ pizzaDay: res.data.name })
    
  }


  // loadPizza = async () =>{
  //   const response = await api.get(`/pizzas/`)
  // }
  
  promotionDay = () => {
    const { points, pizzaDay } = this.state
    swal(
      <div>
        <h3>Você ganhou {points} pontos</h3>
        e R$ {points} na compra da pizza {pizzaDay} <FaRegSmileWink className="h3"/><br/>
        Aproveite!
      </div>
    )
  }

  render() {
    const { pizzaDay } = this.state
    return (
      <div className="pt-2 container">
        <div className="row">
          <div className="col-md-12 text-center">
              <h1 className="h3"> Pizza do dia!</h1>
              <button className="btn btn-dark" onClick={this.promotionDay}>{pizzaDay}</button>
          </div>
          <div className="col-md-12 text-center pt-5">
            <Link to="/massa"className="btn btn-success">Começe a mandar sua pizza</Link>
          </div>
        </div>
      </div>
    )
  }
}
