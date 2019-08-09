import React from 'react';

import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Leshuggah', type: 'salad'},
    {label: 'Tosino', type: 'bacon'},
    {label: 'Keso', type: 'cheese'},
    {label: 'K-rne', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Detalles y presio: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >Pide ahora oe</button>
        
    </div>
);

export default buildControls;