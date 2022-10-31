import {BasketAction, BasketActionTypes, BasketItemType} from "../types/basket";

const initialState: BasketItemType[] = [];

export const basketReducer = (state: BasketItemType[] = initialState, action: BasketAction): BasketItemType[] => {
    switch (action.type){
        case BasketActionTypes.INCREMENT_PRODUCT_IN_BASKET: {
            const editedProductIndex = state.findIndex(item => item.product.id === action.payload.id);
            const newState = state.slice();
            if(editedProductIndex === -1){
                newState.push({product: action.payload, count: 1})
                return newState;
            }
            else {
                newState[editedProductIndex].count += 1;
                return newState;
            }
        }
        case BasketActionTypes.DELETE_PRODUCT_FROM_BASKET: {
            return state.reduce((prev, current) => {
                if (current.product.id !== action.payload.productId) {
                    prev.push(current);
                }
                return prev
            }, <BasketItemType[]>[]);
        }
        case BasketActionTypes.DECREMENT_PRODUCT_IN_BASKET: {
            const editedProductIndex = state.findIndex(item => item.product.id === action.payload.productId);
            const newState = state.slice();
            if(newState[editedProductIndex].count === 1){
                return newState.reduce((prev, current) => {
                    if (current.product.id !== action.payload.productId) {
                        prev.push(current);
                    }
                    return prev
                }, <BasketItemType[]>[]);
            }
            else {
                newState[editedProductIndex].count -= 1;
            }
            return newState;
        }
        case BasketActionTypes.EMPTY_BASKET:{
            return [];
        }
        default: {
            return state;
        }
    }
};