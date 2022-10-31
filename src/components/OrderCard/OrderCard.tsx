import React, {FC} from 'react';
import classes from './style/index.module.scss';
import {OrderItemType} from "../../store/types/order";
import {FlexGrid} from "../FlexGrid";
import {PaddingBox} from "../PaddingBox";
import {getFormattedCurrency} from "../../tools/currencyTools";
import classNames from "classnames";
import dateFormat from "dateformat";

type OrderCardType = {
    order: OrderItemType;
}

export const OrderCard: FC<OrderCardType> = (
    {
        order
    }
) => {
    const statusClasses = classNames(
        classes.status,
        {
            [classes.status_done]: order.isDone,
            [classes.status_inProgres]: !order.isDone
        }
    );

    return (
        <FlexGrid column gap='scanty'>
            <PaddingBox small className={classes.background}>
                <FlexGrid spaceBetween>
                    <div>
                        Order №{order.id}
                    </div>
                    <div>
                        {dateFormat(order.time, "dd.mm.yyyy (HH:MM)")}
                    </div>
                </FlexGrid>
            </PaddingBox>
            <PaddingBox small className={classes.background}>
                {order.products.map(({product, count}) => {
                    return (
                        <FlexGrid spaceBetween key={product.id}>
                            <div>
                                {product.title} {count > 1 && ` x${count}`}
                            </div>
                            <div>
                                {getFormattedCurrency(product.price * count)}
                            </div>
                        </FlexGrid>
                    )
                })}
                <PaddingBox topSmall>
                    <FlexGrid spaceBetween>
                        <div>
                            Quantity: {order.products.reduce((prev, current) => prev + current.count, 0)}
                        </div>
                        <div>
                            Total amount: {getFormattedCurrency(order.products.reduce((prev, current) => prev + (current.count * current.product.price), 0))}
                        </div>
                    </FlexGrid>
                </PaddingBox>
                <PaddingBox topSmall>
                    <div className={statusClasses}>
                        {order.isDone ? 'Done' : 'In Progress'}
                    </div>
                </PaddingBox>
            </PaddingBox>
        </FlexGrid>
    );
}