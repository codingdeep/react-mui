import React, {useCallback} from 'react';
import {Product, Products} from "../../types/types";
import {Grid} from "@mui/material";
import ProductItem from "./ProductItem";

interface Props {
    products: Products | undefined
}

const ProductList: React.FC<Props> = ({products}) => {
    const renderProduct = useCallback((product: Product) => {
        return (
            <ProductItem product={product}/>
        )
    }, [])
    return (
        <Grid container direction="row" spacing={2}>
            {products && products.length && products.map((product: Product) => {
                return renderProduct(product)
            })}</Grid>);
}
export default ProductList;