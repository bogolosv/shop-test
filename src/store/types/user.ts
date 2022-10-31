import {ErrorOption, FieldPath, FieldValues} from "react-hook-form";

export type UserType = {
    id: number;
    imageUrl: string;
    name: string;
    email: string;
    password: string;
    orders?: OrderType[];
}

export type OrderType = {
    id: number;
    items: ShopItemType[];
    user: UserType;
}

export type ShopItemType = {
    id: number;
    itemName: string;
    count: number;
}

export type EditUserActionType = {
    type: UserActionTypes.EDIT_USER;
    payload: {
        user: UserType;
        oldPassword: string;
        setError: (name: FieldPath<FieldValues>, error: ErrorOption, options?: {shouldFocus: boolean}) => void;
    };
}

export type UserAction = EditUserActionType;

export enum UserActionTypes {
    EDIT_USER = 'EDIT_USER',
}