import React from 'react';

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let trasnformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((_,i)=>{
            return <BurgerIngredient key={ingKey+i} type={ingKey} />
        });
    })
    .reduce((arr,el) => {
        return arr.concat(el)
    },[]);
    if(trasnformedIngredients.length === 0){
        trasnformedIngredients = <p>Pone ingrediente oe</p>
    }
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {trasnformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;