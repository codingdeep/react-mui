import React, {useState, useEffect} from 'react';
import PageContainer from "../components/PageContainer/PageContainer";
import PageHeader from "../components/PageHeader/PageHeader";
import {Products} from "../types/types";
import {Api} from "../api";
import ProductList from "../components/Products/ProductList";

type ProductsList =
    | Products | undefined
const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<ProductsList>();
    useEffect(() => {
        const fetchProductList = async () => {
            const productResponse = await fetch(Api.APIURL);
            const productJson = await productResponse.json();
            setProducts(productJson.products)
        }
        fetchProductList();
    }, []);
    return (
        <PageContainer>
            <PageHeader>Products</PageHeader>
            <ProductList products={products}/>
        </PageContainer>
    )
}
export default ProductPage;