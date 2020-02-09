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
    margin-right: 2rem;

    svg {
        fill: ${props => props.theme.primary_color_rgba};
    }
`;

const LogoSvg = styled(SVG)`
    height: 6rem;
    width: 6rem;
`;


const ProductTitle = styled.h1` 
    display: inline-block;
    font-size: 2.5rem;
    color: white;
    font-weight: 700;
    margin-top: .8rem;
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