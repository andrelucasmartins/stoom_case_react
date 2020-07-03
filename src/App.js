import React from 'react'
import Routes from './routes'

import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="row d-dlex justify-content-center">
          <div className="col-md-6 pt-3">
            <form>
              <Routes />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
