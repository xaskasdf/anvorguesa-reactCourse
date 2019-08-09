import React from 'react';

import classes from './BuildControl.module.css';

const buildCotrol = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}
            >Meno</button>
        <button
            className={classes.More}
            onClick={props.added}
            >Ma</button>
    </div>
);

export default buildCotrol;