import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "./redusers";

export const store = createStore(rootReducer);