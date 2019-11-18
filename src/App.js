import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import './App.css';
import Header from '../src/Components/header/header.js'
import Home from '../src/Components/Home/Home.js'
import Cart from '../src/Components/Cart/Cart.js'
import Form from '../src/Components/Form/Form.js'
import Order from '../src/Components/Order/Order.js'
import {pizzas} from '../src/data.js'

// https://ru.stackoverflow.com/questions/535285/%D0%9F%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%B2-%D0%B2-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B9-%D0%B2-react-router
// Как пробросить props через конструкцию Router?

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} pizzas={pizzas.results}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/form' component={Form}/>
          <Route path='/order' component={Order}/>
          <Redirect to='/'/>
        </Switch>
      </Router>
  );
}

export default App;
