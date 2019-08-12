import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Conshructor de anvorguesa</NavigationItem>
    <NavigationItem link="/">la cuenta oe</NavigationItem>
    </ul>
);

export default navigationItems;