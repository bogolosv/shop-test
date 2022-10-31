import {FC, useMemo} from "react";
import {FlexGrid} from "../../components/FlexGrid";
import {Back} from "../../components/Icons/Back";
import {Button} from "../../components/Button";
import {PaddingBox} from "../../components/PaddingBox";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {BasketCard} from "../../components/BasketCard/BasketCard";
import {getFormattedCurrency} from "../../tools/currencyTools";
import classes from './style/index.module.scss';
import {EmptyMessageBlock} from "../../components/EmptyMessageBlock";
import {useActions} from "../../hooks/useActions";

export const Basket: FC = () => {
    const { basket, user } = useTypedSelector(state => state);
    const { addOrder, emptyBasket } = useActions();

    const total = useMemo(() => basket.reduce((prev, current) => {
        return prev + (current.count * current.product.price);
    }, 0),[basket]);

    const makeOrderHandler = () => {
        addOrder(basket, user.id);
        emptyBasket();
    };

    return (
        <PaddingBox small>
            <FlexGrid column spaceBetween gap='small'>
                <FlexGrid spaceBetween center>
                    <Button status='light' link>
                        <Back fill='none' viewBox = '0 0 7 15' width='30' height='30'/>
                    </Button>
                    <h1>Basket</h1>
                    <div style={{width: '60px'}}/>
                </FlexGrid>
                <FlexGrid column>
                    {basket.length > 0 && (
                        <>
                            {basket.map(item => {
                                return (
                                    <BasketCard item={item} key={item.product.id} />
                                )
                            })}
                            <PaddingBox small>
                                <FlexGrid column gap='small'>
                                    <FlexGrid spaceBetween>
                                        <h2 className={classes.total}>Total:</h2>
                                        <h2>{getFormattedCurrency(total)}</h2>
                                    </FlexGrid>
                                    <Button fullSize onClick={makeOrderHandler}>
                                        Order
                                    </Button>
                                </FlexGrid>
                            </PaddingBox>
                        </>
                    )}
                    {basket.length === 0 && (
                        <EmptyMessageBlock>
                            The basket is empty!
                        </EmptyMessageBlock>
                    )}
                </FlexGrid>
            </FlexGrid>
        </PaddingBox>
    );
};