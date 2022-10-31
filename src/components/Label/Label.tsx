import React, {FC} from 'react';
import classes from './style/index.module.scss';

type LabelType = {
    children: React.ReactNode;
}

export const Label: FC<LabelType> = (
    {
        children
    }
) => {
    return (
        <span className={classes.label}>{children}</span>
    );
}