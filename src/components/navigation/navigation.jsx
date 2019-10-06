import React from "react";
import styled from "styled-components";
import NavigationItemComponent from "./navigationItem";

const NavigationLayout = styled.nav`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 20vw 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
`;

const ProductContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
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
`;

const MenuContainer = styled.div`
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const MenuItemWrapper = styled.li`
    width: 100px;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuItem = styled(NavigationItemComponent)`
    a {
        text-decoration: none !important;
    }
`;

const NavigationComponent = () => {
    return (
        <NavigationLayout data-tag="navigation-component--nav">
            <ProductContainer data-tag="product-container--div">
                <LogoWrapper data-tag="logo-wrapper--div">
                    <LogoImg src={require("../../assests/images/logo_transparent.png")}/>
                </LogoWrapper>
                <ProductTitle data-tag="product-title--h1">Pin Mapper</ProductTitle>
            </ProductContainer>
            <MenuContainer data-tag="menu-container--div">
                <MenuItemWrapper data-tag="menu-item-wrapper--div">
                    <MenuItem link="/">Home</MenuItem>
                </MenuItemWrapper>
                <MenuItemWrapper data-tag="menu-item-wrapper--div">
                    <MenuItem link="/team">Team</MenuItem>
                </MenuItemWrapper>
                <MenuItemWrapper data-tag="menu-item-wrapper--div">
                    <MenuItem link="/about">About</MenuItem>
                </MenuItemWrapper>
                <MenuItemWrapper data-tag="menu-item-wrapper--div">
                    <MenuItem link="/contact">Contact</MenuItem>
                </MenuItemWrapper>
            </MenuContainer>
        </NavigationLayout>
    )
};

export default NavigationComponent;