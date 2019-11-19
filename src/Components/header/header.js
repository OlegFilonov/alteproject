import React from 'react';
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>React Pizza App</h1>
            <nav>
                <NavLink to='/' exact>Home</NavLink>
                <NavLink to='/cart' exact>Корзина</NavLink>
                <NavLink to='/form' exact>Форма связи</NavLink>
                <NavLink to='/order' exact>Ваш заказ</NavLink>
            </nav>
        </header>
    )
}