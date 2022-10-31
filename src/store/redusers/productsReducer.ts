import {ProductType} from "../types/product";

const initialState: ProductType[] = [
    {
        id: 1,
        title: 'Apple IPhone 8',
        price: 300,
        imgUrl: 'https://itc.ua/wp-content/uploads/2017/10/iPhone-8-1-of-20.jpg'
    },
    {
        id: 2,
        title: 'Apple IPhone 8 Plus',
        price: 500,
        imgUrl: 'https://i.insider.com/5a255ebdf914c351018b79cf?width=700'
    },
    {
        id: 3,
        title: 'Apple IPhone X',
        price: 700,
        imgUrl: 'https://articlespid.com/wp-content/uploads/2022/07/co-nen-nang-cap-iphone-x-len-iphone-13.jpg'
    },
    {
        id: 4,
        title: 'Apple IPhone 14',
        price: 1500,
        imgUrl: 'https://kremen.today/wp-content/uploads/2021/12/iphone-13-pro-max-camera-1024x683.jpeg'
    },
];

export const productsReducer = (state: ProductType[] = initialState) => state;