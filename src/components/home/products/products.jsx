import React from "react";
import styled from "styled-components";
import ProductComponent from "./product";

const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 15%;
    padding-bottom: 15px;

    @media screen and (max-width: 768px) {
        margin: 0 12px;
	}
`;

const ProductsComponent = () => {
    const products = [
        {
            name: 'TC237',
            package: 'BGA292',
            ports: 208,
            signals: 685
        },
        {
            name: 'TC267',
            package: 'BGA292',
            ports: 246,
            signals: 950
        },
        {
            name: 'TC277',
            package: 'BGA292',
            ports: 292,
            signals: 1182
        },
        {
            name: 'TC297',
            package: 'BGA292',
            ports: 292,
            signals: 1242
        }];
    return (
        <ProductsContainer data-tag="products-container--div">
            {products.map((product, index) => {
                return <ProductComponent key={index} available productData={product} />
            })}
        </ProductsContainer>
    )
};

export default ProductsComponent;