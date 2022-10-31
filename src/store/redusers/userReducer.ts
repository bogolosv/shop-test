import {UserAction, UserActionTypes, UserType} from "../types/user";


const initialState: UserType = {
    id: 1,
    name: 'Bohdan Volkovynskyi',
    email: 'bogolosv@gmail.com',
    password: '11111111',
    imageUrl: 'https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png',
    orders: [],
}

export const userReducer = (state = initialState, action: UserAction): UserType => {
    switch (action.type){
        case UserActionTypes.EDIT_USER: {
            if(action.payload.oldPassword === state.password) {
                action.payload.setError("form", { type: "success" }, { shouldFocus: true });
                return action.payload.user;
            }
            else {
                if(action.payload.oldPassword === ''){
                    action.payload.setError("form", { type: "success" }, { shouldFocus: true });
                    return {...action.payload.user, password: state.password}
                }
                else {
                    action.payload.setError("oldPassword", { type: "password" }, { shouldFocus: true });
                    return state;
                }
            }
        }
        default:
            return state;
    }
}