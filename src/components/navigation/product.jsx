import React from "react";
import styled from "styled-components";
import SVG from 'react-inlinesvg';
import logo from "../../assets/svg/chip.svg"

const ProductContainer = styled.a`
    width: fit-content;
    display: flex;
    align-items: center;

    &:hover,
    &:active {
        text-decoration: none;
    }
`;

const LogoWrapper = styled.div`

    display: inline-block;
    margin-right: 20px;
`;

const LogoSvg = styled(SVG)`
    height: 60px;
    width: 60px;
`;


const ProductTitle = styled.h1` 
    display: inline-block;
    font-size: 24px;
    color: white;
    font-weight: 700;
    margin-top: 8px;
    color: black;
`;

const ProductComponent = () => {
    return (
        <ProductContainer data-tag="product-container--a" href="/">
            <LogoWrapper data-tag="logo-wrapper--div">
                <LogoSvg src={logo}/>
            </LogoWrapper>
            <ProductTitle data-tag="product-title--h1">Pin Mapper</ProductTitle>
        </ProductContainer>
    )
};

export default ProductComponent;