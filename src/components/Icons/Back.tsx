import React, { FC, SVGProps } from 'react';
import {Svg} from "./Svg";

export const Back: FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <Svg {...props}>
            <path d="M7.25 1.5L0.75 8L7.25 14.5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};