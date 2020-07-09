//Converted to class component to check if component is getting updated or not using componentDidUpdate
//lifeCycle hook and could be functional component also as we are doing debugging to check the update
// lifecycle hook

import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    componentDidUpdate() {
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}: {this.props.ingredients[igKey]}
                    </span>
                </li>
            )
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price} </strong></p>
                <p>Continue to Checkout!</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;