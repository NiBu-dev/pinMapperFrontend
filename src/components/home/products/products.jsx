import React from "react";
import styled from "styled-components";
import ProductComponent from "./product";

const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 16px 0;
    margin: 0 15%;

    @media screen and (max-width: 768px) {
        margin: 0 12px;
	}
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