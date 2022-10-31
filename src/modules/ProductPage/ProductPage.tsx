import React, {FC} from 'react';
import classes from './style/index.module.scss';
import {FlexGrid} from "../../components/FlexGrid";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import {EmptyMessageBlock} from "../../components/EmptyMessageBlock";
import {Button} from "../../components/Button";
import {Back} from "../../components/Icons/Back";
import {PaddingBox} from "../../components/PaddingBox";
import {getFormattedCurrency} from "../../tools/currencyTools";
import {useActions} from "../../hooks/useActions";

export const ProductPage: FC = () => {
    const { incrementProductInBasket } = useActions();
    const {products} = useTypedSelector(state => state);
    const params = useParams();
    const product = products.find(item => item.id === +(params.id!));

    if(!product){
        return (
            <EmptyMessageBlock>
                The Product doesn't exist!
            </EmptyMessageBlock>
        )
    }

    const addButtonHandler = () => {
        incrementProductInBasket(product);
    }

    return (
        <>
            <FlexGrid hrEnd>
                <div className={classes.image} style={{backgroundImage: `url(${product.imgUrl})` }}>
                    <Button status='light' link className={classes.backButton}>
                        <Back fill='none' viewBox = '0 0 7 15' width='30' height='30'/>
                    </Button>
                </div>
            </FlexGrid>
            <PaddingBox medium>
                <h1 className={classes.title}>{product.title}</h1>
                <h2>{getFormattedCurrency(product.price)}</h2>
                <Button fullSize onClick={addButtonHandler}>
                    Add to basket
                </Button>
            </PaddingBox>
        </>
    );
}