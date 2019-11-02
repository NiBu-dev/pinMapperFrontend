import React from "react";
import styled from "styled-components";
import ProductComponent from "./product";

const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 0;
`;

const ProductsComponent = () => {
    const products = [1, 2, 3, 4];
    return (
        <ProductsContainer data-tag="products-container--div">
            {products.map((product, index) => {
                return <ProductComponent key={index} />
            })}
        </ProductsContainer>
    )
};

export default ProductsComponent;