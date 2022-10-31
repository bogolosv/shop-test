import {OrderAction, OrderActionTypes, OrderItemType} from "../types/order";

const initialState: OrderItemType[] = [];

export const orderReducer = (state: OrderItemType[] = initialState, action: OrderAction) => {
    switch (action.type) {
        case OrderActionTypes.ADD_ORDER: {
            const newOrder = state.slice();
            newOrder.push(action.payload);
            return newOrder;
        }
        default: {
            return state;
        }
    }
};