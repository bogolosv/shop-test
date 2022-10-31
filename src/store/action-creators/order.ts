import {BasketItemType} from "../types/basket";
import {AddOrderActionType, OrderActionTypes} from "../types/order";


export const addOrder = (basket: BasketItemType[], userId: number): AddOrderActionType => {
    const time = new Date();
    return {
        type: OrderActionTypes.ADD_ORDER,
        payload: {
            id: +time,
            time,
            userId,
            isDone: false,
            products: basket,
        },
    }
}