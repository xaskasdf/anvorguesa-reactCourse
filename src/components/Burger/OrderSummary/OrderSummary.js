import React,{Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {
    //This could be a functional component.
    componentWillUpdate(){
        console.log('[Order Summary] WillUpdate')
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey => {
                return(
                    <li key={ingKey}>
                        <span style={{textTransform: 'capitalize'}}
                        >{ingKey}</span>:{this.props.ingredients[ingKey]}
                    </li>)
            });

        return(
            <Aux>
                <h3>Lo que ordenaste zi</h3>
                <p>Uma anvorgesa que es uma delisia</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Pague-c: {this.props.price.toFixed(2)}</strong></p>
                <p>Vai a pagar oe?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>no :c</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>si óè</Button>
            </Aux>
            );
    }    
};

export default orderSummary;