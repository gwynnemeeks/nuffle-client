import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Nuffle } from './components/Nuffle'

import "./styles/index.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nuffle />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
