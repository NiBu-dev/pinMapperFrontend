import React from "react";
import styled from "styled-components";
import ProductCard from "./productCard";

const ProductsSection = styled.section`
    width: 1032px;
    margin: auto;
    padding: 4rem 0;
`;

const Title = styled.h2`
    font-size: 2.5rem;
`;

const ProductsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

const Products = () => {

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
        <ProductsSection data-tag="products-section">
            <Title data-tag="title--h2">Try it out</Title>
            <ProductsContainer data-tag="products-container--div">
                {products.map((product, index) => {
                    return <ProductCard key={index} productData={product}/>
                })}
            </ProductsContainer>
        </ProductsSection>
    )
};

export default Products;