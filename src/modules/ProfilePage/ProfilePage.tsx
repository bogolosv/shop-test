import React, {FC} from 'react';
import classes from './style/index.module.scss';
import {FlexGrid} from "../../components/FlexGrid";
import {Button} from "../../components/Button";
import {Back} from "../../components/Icons/Back";
import {PaddingBox} from "../../components/PaddingBox";
import {EmptyMessageBlock} from "../../components/EmptyMessageBlock";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Edit} from "../../components/Icons/Edit";
import {OrderCard} from "../../components/OrderCard";
import {RouterPath} from "../../App/const";

type ProfilePageType = {}

export const ProfilePage: FC<ProfilePageType> = () => {
    const { user, orders } = useTypedSelector(state => state);

    return (
        <PaddingBox small>
            <FlexGrid column spaceBetween gap='small'>
                <FlexGrid spaceBetween center>
                    <Button status='light' link>
                        <Back fill='none' viewBox = '0 0 7 15' width='30' height='30'/>
                    </Button>
                    <h1>Profile</h1>
                    <Button status='light' link to={RouterPath.PROFILE_EDIT}>
                        <Edit viewBox = '0 0 19 19' width='20' height='20'/>
                    </Button>
                </FlexGrid>
                <FlexGrid column>
                </FlexGrid>
                <FlexGrid gap='small'>
                    <div className={classes.image} style={{backgroundImage: `url(${user.imageUrl})` }}/>
                    <PaddingBox small>
                        <div className={classes.name}>{user.name}</div>
                        <div className={classes.email}>{user.email}</div>
                    </PaddingBox>
                </FlexGrid>
                <h2 className={classes.orders}>Orders</h2>
                {orders.length === 0 && (
                    <EmptyMessageBlock>
                        <PaddingBox small>
                            You don't have any orders. <br/>
                            Let's do some purchases!
                        </PaddingBox>
                        <Button link to={RouterPath.SHOP}>
                            Shop
                        </Button>
                    </EmptyMessageBlock>
                )}
                {orders.map(order => {
                    return (
                        <OrderCard key={order.id} order={order}/>
                    )
                })}
            </FlexGrid>
        </PaddingBox>
    );
}