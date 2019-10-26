import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
    width: fit-content;
    margin-left: auto;
    display: flex;
    align-items: center;
`;

const LogoWrapper = styled.div`
    display: inline-block;
    margin-right: 20px;
`;

const LogoImg = styled.img`
    width: 60px;
`;

const ProductTitle = styled.h1` 
    display: inline-block;
    font-size: 24px;
    color: white;
    font-weight: 700;
    color: ${props => props.theme.text_color}
`;

const ProductComponent = () => {
    return (
        <ProductContainer data-tag="product-container--div">
            <LogoWrapper data-tag="logo-wrapper--div">
                <LogoImg src={require("../../assets/images/logo_transparent.png")} />
            </LogoWrapper>
            <ProductTitle data-tag="product-title--h1">Pin Mapper</ProductTitle>
        </ProductContainer>
    )
};

export default ProductComponent;