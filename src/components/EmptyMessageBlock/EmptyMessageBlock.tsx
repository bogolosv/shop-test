import React, {FC} from 'react';
import classes from './style/index.module.scss';
import {FlexGrid} from "../FlexGrid";

type EmptyMessageBlockType = {
    children: React.ReactNode;
}

export const EmptyMessageBlock: FC<EmptyMessageBlockType> = (
    {
        children
    }
) => {
    return (
        <FlexGrid column center hrCenter className={classes.container}>
            {children}
        </FlexGrid>
    );
}