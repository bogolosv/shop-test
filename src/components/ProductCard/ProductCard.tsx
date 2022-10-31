import {FC, SyntheticEvent} from "react";
import {ProductType} from "../../store/types/product";
import {FlexGrid} from "../FlexGrid";
import classes from "./style/productCurd.module.scss"
import {getFormattedCurrency} from "../../tools/currencyTools";
import {Link} from "react-router-dom";
import {RouterPath} from "../../App/const";
import {ShoppingBag} from "../Icons/ShoppingBag";
import {PaddingBox} from "../PaddingBox";
import {useActions} from "../../hooks/useActions";

type ProductCardType = {
    item: ProductType;
}

export const ProductCard: FC<ProductCardType> = (
    {
        item,
    }
) => {
    const { incrementProductInBasket } = useActions();
    const addToBasketHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        incrementProductInBasket(item);
    }

    return (
        <Link to={`${RouterPath.PRODUCT}/${item.id}`}>
            <FlexGrid column gap='tiny'>
                <FlexGrid center hrCenter style={{backgroundImage: `url(${item.imgUrl})` }} className={classes.image}>
                    <div onClick={addToBasketHandler}>
                        <PaddingBox tiny className={classes.addButton}>
                            <FlexGrid center hrCenter>
                                <ShoppingBag width="16" height="16" viewBox="0 0 16 16"/>
                            </FlexGrid>
                        </PaddingBox>
                    </div>
                </FlexGrid>
                <span className={classes.title}>{item.title}</span>
                <span>{getFormattedCurrency(item.price)}</span>
            </FlexGrid>
        </Link>
    );
};