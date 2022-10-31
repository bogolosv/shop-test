import React, {FC} from "react";
import {Route, Routes} from "react-router";
import {Shop} from "./modules/Shop";
import {RouterPath} from "./App/const";
import {Basket} from "./modules/Basket";
import {ProductPage} from "./modules/ProductPage";
import {ProfilePage} from "./modules/ProfilePage";
import {ProfileEditPage} from "./modules/ProfileEditPage";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path={RouterPath.SHOP} element={<Shop/>}/>
            <Route path={RouterPath.BASKET} element={<Basket/>}/>
            <Route path={RouterPath.PROFILE} element={<ProfilePage/>}/>
            <Route path={`${RouterPath.PRODUCT}/:id`} element={<ProductPage/>}/>
            <Route path={RouterPath.PROFILE_EDIT} element={<ProfileEditPage/>}/>
        </Routes>
    );
};