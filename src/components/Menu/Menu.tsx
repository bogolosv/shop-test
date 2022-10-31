import React, {FC} from "react";
import classes from './styles/menu.module.scss';
import classNames from "classnames";
import { links } from './const'
import {MenuItem} from "./MenuItem";

export const Menu: FC = () => {
    const menuContainerClasses = classNames({
        [classes.menuContainer]: true,
    })

    return (
        <>
            <div className={classes.menuEmpty}/>
            <div className={menuContainerClasses}>
                {links.map(({ href, Icon, title}) => (
                    <MenuItem href={href} Icon={Icon} key={title}/>
                ))}
            </div>
        </>
    );
};