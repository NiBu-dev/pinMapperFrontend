import React from "react";
import styled from "styled-components";
import NavigationItemComponent from "./navigationItem";
import ProductComponent from "./product";

const NavigationLayout = styled.nav`
    height: 100%;
    width: 1032px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProductSection = styled.section`
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media screen and (max-width: 768px) {
		display: none;
		
	}
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
                    <MenuItem link="/contact">Contact</MenuItem>
                </MenuItemWrapper>
            </MenuContainer>
        </NavigationLayout>
    )
};

export default NavigationComponent;