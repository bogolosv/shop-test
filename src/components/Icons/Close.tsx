import React, { FC, SVGProps } from 'react';
import {Svg} from "./Svg";

export const Close: FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <Svg {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.74359 8.91214L12.2766 6.37915C12.577 6.07875 13.064 6.07875 13.3644 6.37915C13.6648 6.67955 13.6648 7.1666 13.3644 7.46701L10.8314 10L13.3645 12.533C13.6649 12.8334 13.6649 13.3205 13.3645 13.6209C13.0641 13.9213 12.577 13.9213 12.2766 13.6209L9.74359 11.0879L7.21059 13.6209C6.91019 13.9213 6.42314 13.9213 6.12274 13.6209C5.82233 13.3204 5.82233 12.8334 6.12274 12.533L8.65573 10L6.12276 7.46703C5.82236 7.16663 5.82236 6.67958 6.12276 6.37917C6.42317 6.07877 6.91022 6.07877 7.21062 6.37917L9.74359 8.91214ZM1.53846 10C1.53846 14.6732 5.32682 18.4615 10 18.4615C14.6732 18.4615 18.4615 14.6732 18.4615 10C18.4615 5.32682 14.6732 1.53846 10 1.53846C5.32682 1.53846 1.53846 5.32682 1.53846 10Z" fill="#242424"/>
        </Svg>
    );
};