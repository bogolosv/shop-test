import {ProductType} from "./product";

export type BasketItemType = {
    product: ProductType;
    count: number;
}

export type AddProductToBasketActionType = {
    type: BasketActionTypes.INCREMENT_PRODUCT_IN_BASKET;
    payload: ProductType;
}

export type DeleteProductFromBasketActionType = {
    type: BasketActionTypes.DELETE_PRODUCT_FROM_BASKET;
    payload: {
        productId: number
    };
}

export type DecrementProductInBasketActionType = {
    type: BasketActionTypes.DECREMENT_PRODUCT_IN_BASKET;
    payload: {
        productId: number
    };
}

export type EmptyBasketActionType = {
    type: BasketActionTypes.EMPTY_BASKET;
}

export type BasketAction =
    AddProductToBasketActionType
    | DeleteProductFromBasketActionType
    | DecrementProductInBasketActionType
    | EmptyBasketActionType;

export enum BasketActionTypes {
    INCREMENT_PRODUCT_IN_BASKET = 'INCREMENT_PRODUCT_IN_BASKET',
    DECREMENT_PRODUCT_IN_BASKET = 'DECREMENT_PRODUCT_IN_BASKET',
    DELETE_PRODUCT_FROM_BASKET = 'DELETE_PRODUCT_FROM_BASKET',
    EMPTY_BASKET = 'EMPTY_BASKET'
}