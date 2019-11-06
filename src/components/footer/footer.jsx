import React from "react";
import styled from "styled-components";
import ProductComponent from "../navigation/product";
import { NavLink } from "react-router-dom";

const FooterLayout = styled.div`
    min-height: 20vh;
    background-color: ${props => props.theme.footer}
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
`;

const ProductSection = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: fit-content;
    justify-self: center;
    align-self: center;
`;

const MenuSection = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: flex;
    

`;

const MenuGroup = styled.div`
    width: 90%;
    padding: 15px;
`;

const MenuItem = styled(NavLink)`
    display: block;
    width: fit-content;
    text-align: center;

    color: ${props => props.theme.text_color}
    text-decoration: none;
    margin: 10px auto;

    &:hover,
    &:focus {
        text-decoration: none;
    }
`;


const FooterComponent = () => {
    return (
        <FooterLayout data-tag="footer-layout--div">
            <ProductSection data-tag="product-section--div">
                <ProductComponent />
            </ProductSection>
            <MenuSection data-tag="menu-section--div">
                <MenuGroup data-tag="menu-group--div">
                    <MenuItem data-tag="menu-item--span" to="/" replace>
                        Home
                    </MenuItem>
                    <MenuItem data-tag="menu-item--span" to="/contact" replace>
                        Contact
                    </MenuItem>
                </MenuGroup>
            </MenuSection>
        </FooterLayout>
    )
};

export default FooterComponent;