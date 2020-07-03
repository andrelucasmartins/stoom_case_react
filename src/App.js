import React, { Component } from 'react'
import Routes from './routes'

import Header from './components/Header'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="row d-dlex justify-content-center">
            <div className="col-md-6 pt-3">
              <form onSubmit={this.handleSubmit}>
                <Routes />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }  
}

