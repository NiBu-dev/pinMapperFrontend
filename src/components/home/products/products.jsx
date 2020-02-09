import React from "react";
import styled from "styled-components";
import ProductCard from "./productCard";

const ProductsSection = styled.section`
    max-width: 1000px;
    margin: auto;
    padding: 4rem 0;

    @media screen and (max-width: 1023px) {
        margin: 0 2rem;
        padding: 0;
	}
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

const DisclaimerText = styled.span`
    color: ${props => props.theme.text_color_dim};
    font-size: 1.5rem;
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
            <Title data-tag="title--h2">Try it out
            </Title>
            <DisclaimerText data-tag="disclaimer--span">*available only for big screen sizes</DisclaimerText>
            <ProductsContainer data-tag="products-container--div">
                {products.map((product, index) => {
                    return <ProductCard key={index} productData={product}/>
                })}
            </ProductsContainer>
        </ProductsSection>
    )
};

export default Products;