import React, {FC} from "react";
import classes from './styles/button.module.scss'
import classNames from "classnames";
import {Link} from "react-router-dom";
import {RouterPath} from "../../App/const";

type ButtonType = {
    children: React.ReactNode;
    onClick?: () => void;
    isLoading?: boolean;
    status?: 'light' | 'default';
    link?: boolean;
    to?: string;
    fullSize?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonType> = (
    {
        children,
        onClick,
        isLoading,
        status = 'default',
        link,
        to,
        fullSize,
        className,
        type
    }
) => {
    const buttonClasses = classNames(className, {
        [classes.button]: true,
        [classes.button_default]: status === 'default',
        [classes.button_light]: status === 'light',
        [classes.button_loading]: isLoading,
        [classes.fullSize]: fullSize,
    })

    const buttonHandler = () => {
        if(!isLoading && onClick){
            onClick();
        }
    }

    if(link){
        return (
            <Link to={to ?? RouterPath.SHOP} className={buttonClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={buttonClasses} onClick={buttonHandler}>
            {children}
        </button>
    );
};