import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        let manyPizzas = this.props.pizzas
    }

    render() {
        return (
            <main>
                <h1>Hello world</h1>
                <h2>This is a pizza home page</h2>
                <h1>Pizzas</h1>
                <div>

                </div>

            </main>
        )
    }
}