import {FC} from "react";
import {FlexGrid} from "../../components/FlexGrid";
import {PaddingBox} from "../../components/PaddingBox";
import {ProductCard} from "../../components/ProductCard/ProductCard";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const Shop: FC = () => {
    const products = useTypedSelector(state => state.products);

    return (
        <FlexGrid column gap='small' center>
            <PaddingBox small>
                <h1>Products</h1>
            </PaddingBox>
            <PaddingBox small style={{width: '100%'}}>
                <FlexGrid gap='small' wrap spaceAround>
                    {products.map(item => (
                        <ProductCard item={item} key={item.id}/>
                    ))}
                </FlexGrid>
            </PaddingBox>
        </FlexGrid>
    );
};