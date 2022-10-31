import React, {FC} from 'react';
import classes from './style/index.module.scss';

type ErrorBoxType = {
    children: React.ReactNode;
    isSuccess?: boolean;
}

export const ErrorBox: FC<ErrorBoxType> = (
    {
        children,
        isSuccess
    }
) => {
    return (
        <div className={isSuccess ? classes.success : classes.error}>{children}</div>
    );
}