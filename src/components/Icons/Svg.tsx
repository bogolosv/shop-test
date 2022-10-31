import React, { FC, SVGProps } from 'react';

export const Svg: FC<SVGProps<SVGSVGElement>> = (
    {
        height = 24,
        width = 24,
        viewBox = '0 0 24 24',
        fill = 'currentColor',
        children,
        ...props
    },
) => {

    return (
        <svg
            viewBox={viewBox}
            height={height}
            width={width}
            fill={fill}
            {...props}
        >
            {children}
        </svg>
    );
};
