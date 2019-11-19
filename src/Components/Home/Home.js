import React from 'react';
import {pizzas} from './../../data.js'
import './Home.css'

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsInCart: 0,
            customersCart: [],
        }

        this.increase = this.increase.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    increase(e) {
        this.setState({
            itemsInCart: this.state.itemsInCart + 1
        });
    }

    clearCart(e) {
        this.setState({
            itemsInCart: 0
        });
    }

    addProductToCart(el) {
        this.setState( {
            customersCart: Array.push(el),
        })
    }

    render() {

        let self = this;

        const manyPizzas = pizzas.results;
        const ourProducts = manyPizzas.map((products) =>
            <li className='itemForSale'
            ref={function (el) {
                self.__li = el;
            }}>
                <div>{products.product}</div>
                <div><img src={products.image} alt={products.product}></img></div>
                <div>{products.description}</div>
                <div>${products.price}</div>
                <button onClick={this.increase}>В корзину</button>
            </li>)

        return (
            <main>
                <h1>Hello world</h1>
                <h2>This is a pizza home page</h2>
                <h1>Pizzas</h1>
                <div>
                    <div>Items in your cart {this.state.itemsInCart} <button onClick={this.clearCart}>Очистить</button></div>
                <ul className='showcase'>
                    {ourProducts}
                </ul>
                </div>

            </main>
        )
    }
}