import {EditUserActionType, UserActionTypes, UserType} from "../types/user";
import {ErrorOption, FieldPath, FieldValues} from "react-hook-form";

export const editUser = (
    user: UserType,
    oldPassword: string,
    setError:(name: FieldPath<FieldValues>, error: ErrorOption, options?: {shouldFocus: boolean}) => void
): EditUserActionType => {
    return {
        type: UserActionTypes.EDIT_USER,
        payload: {
            user,
            oldPassword,
            setError
        },
    }
}