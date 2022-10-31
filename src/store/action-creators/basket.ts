import {ProductType} from "../types/product";
import {
    AddProductToBasketActionType,
    BasketActionTypes,
    DecrementProductInBasketActionType,
    DeleteProductFromBasketActionType, EmptyBasketActionType
} from "../types/basket";

export const incrementProductInBasket = (product: ProductType): AddProductToBasketActionType => {
    return {
        type: BasketActionTypes.INCREMENT_PRODUCT_IN_BASKET,
        payload: product,
    }
}

export const deleteProductFromBasket = (productId: number): DeleteProductFromBasketActionType => {
    return {
        type: BasketActionTypes.DELETE_PRODUCT_FROM_BASKET,
        payload: {
            productId
        },
    }
}

export const decrementProductInBasket = (productId: number): DecrementProductInBasketActionType => {
    return {
        type: BasketActionTypes.DECREMENT_PRODUCT_IN_BASKET,
        payload: {
            productId
        },
    }
}

export const emptyBasket = (): EmptyBasketActionType => {
    return {
        type: BasketActionTypes.EMPTY_BASKET,
    }
}