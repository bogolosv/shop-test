import React, {FC, SVGProps} from "react";
import classes from "./styles/menu.module.scss";
import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";
import {RouterPath} from "../../App/const";
import {MenuItemIconIndicator} from "./MenuItemIconIndicator";

type MenuItemType = {
    href: string;
    Icon: FC<SVGProps<SVGSVGElement>>
}

export const MenuItem: FC<MenuItemType> = (
    {
        href,
        Icon,
    }
) => {
    const { pathname } = useLocation();
    const iconClasses = classNames({
        [classes.menuItem]: true,
        [classes.menuItem_active]: pathname === href
    })

    return (
        <Link to={href} className={iconClasses}>
            {href === RouterPath.BASKET && (
                <MenuItemIconIndicator/>
            )}
            <Icon/>
        </Link>
    );
};