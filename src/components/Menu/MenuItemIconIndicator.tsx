import React, {FC} from "react";
import classes from "./styles/menu.module.scss";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const MenuItemIconIndicator: FC = () => {
    const basket = useTypedSelector(state => state.basket);
    const orderAmount = basket.reduce((prev, current) => prev + current.count, 0)
    if(orderAmount === 0){
        return null
    }

    return (
        <span className={classes.menuItemIconIndicator}>{orderAmount}</span>
    );
};