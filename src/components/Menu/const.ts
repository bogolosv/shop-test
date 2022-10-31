import {Home} from "../Icons/Home";
import {Person} from "../Icons/Person";
import {Basket} from "../Icons/Basket";
import {RouterPath} from "../../App/const";

export const links = [
    {
        title: 'Home',
        href: RouterPath.SHOP,
        Icon: Home,
    },
    {
        title: 'Basket',
        href: RouterPath.BASKET,
        Icon: Basket,
    },
    {
        title: 'Account',
        href: RouterPath.PROFILE,
        Icon: Person,
    },
]