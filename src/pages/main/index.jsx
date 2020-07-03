import React, { Component } from 'react'
import swal from '@sweetalert/with-react'
import { FaRegSmileWink } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import api from '../../services/api'

export default class Main extends Component {
  state = {
    recomendacao: {}
  }
  async componentDidMount() {
    // const { id } = this.props.match.params
    const response = await api.get(`/pizza`)
    console.log(response.data.mass)
    // this.setState({ recomendacao: response.data })
  }

  // loadPizza = async () =>{
  //   const response = await api.get(`/pizzas/`)
  // }
  
  promotionDay = () => {
    swal(
      <div>
        <h3>Você ganhou um desconto </h3>
        de R$ 10 na pizza Corne Bacon <FaRegSmileWink className="h3"/><br/>
        Aproveite!
      </div>
    )
  }

  render() {
    // const { recomendacao } = this.state
    // const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];
    return (
      <div className="pt-2 container">
        <div className="row">
        {/* <ul>
          {recomendacao.map(animal => (
            <li>{animal}</li>
          ))}
        </ul> */}
          <div className="col-md-12 text-center">
              <h1 className="h3"> Pizza do dia!</h1>
              <button className="btn btn-dark" onClick={this.promotionDay}>Corn Bacon</button>
          </div>
          <div className="col-md-12 text-center pt-5">
            <Link to="/massa"className="btn btn-success">Começe a mandar sua pizza</Link>
          </div>
        </div>
      </div>
    )
  }
}
