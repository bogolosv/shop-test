import {FC} from "react";
import {BasketItemType} from "../../store/types/basket";
import {FlexGrid, FlexGridColumn} from "../FlexGrid";
import classes from './style/basketCard.module.scss';
import {PaddingBox} from "../PaddingBox";
import {Close} from "../Icons/Close";
import {useActions} from "../../hooks/useActions";
import {getFormattedCurrency} from "../../tools/currencyTools";
import {Button} from "../Button";
import {decrementProductInBasket} from "../../store/action-creators/basket";

type BasketCardType = {
    item: BasketItemType;
}

export const BasketCard: FC<BasketCardType> = (
    {
        item
    }
) => {
    const { deleteProductFromBasket, incrementProductInBasket, decrementProductInBasket } = useActions();
    const closeButtonHandler = () => {
        deleteProductFromBasket(item.product.id)
    }
    const incrementHandler = () => {
        incrementProductInBasket(item.product)
    }
    const decrementHandler = () => {
        decrementProductInBasket(item.product.id)
    }
    return (
        <PaddingBox small className={classes.container}>
            <FlexGrid gap='small'>
                <div className={classes.image} style={{backgroundImage: `url(${item.product.imgUrl})` }}/>
                <FlexGridColumn grow>
                    <FlexGrid column spaceBetween style={{height: '100%'}}>
                        <FlexGrid spaceBetween>
                            <span>
                                <div className={classes.title}>{item.product.title}</div>
                                <div>{getFormattedCurrency(item.product.price)}</div>
                            </span>
                            <Close onClick={closeButtonHandler} style={{cursor: 'pointer'}}/>
                        </FlexGrid>
                        <FlexGrid center>
                            <Button status='light' onClick={incrementHandler}>
                                +
                            </Button>
                            <div className={classes.count}>{item.count}</div>
                            <Button status='light' onClick={decrementHandler}>
                                -
                            </Button>
                        </FlexGrid>
                    </FlexGrid>
                </FlexGridColumn>
            </FlexGrid>
        </PaddingBox>
    );
};