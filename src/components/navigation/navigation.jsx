import React from "react";
import styled from "styled-components";
import NavigationItemComponent from "./navigationItem";
import ProductComponent from "./product";

const NavigationLayout = styled.nav`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 20vw 1fr 1fr;
    grid-template-rows: 100%;
    justify-content: center;
    align-items: center;
`;

const ProductSection = styled.section`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
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
            <ProductSection data-tag="product-section">
                <ProductComponent />
            </ProductSection>
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