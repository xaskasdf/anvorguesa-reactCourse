import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
        return(
            <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}
                >{ingKey}</span>:{props.ingredients[ingKey]}
            </li>)
    });

    return(
    <Aux>
        <h3>Lo que ordenaste zi</h3>
        <p>Uma anvorgesa que es uma delisia</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Vai a pagar oe?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>no :c</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>si óè</Button>
    </Aux>
    );
};

export default orderSummary;