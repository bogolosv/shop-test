import {BasketItemType} from "./basket";

export type OrderItemType = {
    id: number,
    userId: number,
    products: BasketItemType[],
    time: Date;
    isDone: boolean;
}

export type AddOrderActionType = {
    type: OrderActionTypes.ADD_ORDER;
    payload: OrderItemType;
}

export type OrderAction = AddOrderActionType;

export enum OrderActionTypes {
    ADD_ORDER = 'ADD_ORDER',
}