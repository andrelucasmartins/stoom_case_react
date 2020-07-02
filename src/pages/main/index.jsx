import React, { Component } from 'react'
import swal from '@sweetalert/with-react'
import { FaRegSmileWink } from 'react-icons/fa'

import { Link } from 'react-router-dom'

export default class Main extends Component {

  componentDidMount() {
  }
  
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
    return (
      <div className="pt-2 container">
        <div className="row">
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
