import React from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Link = styled(NavLink)`
    color: ${props => props.theme.text_color}
    text-decoration: none;
    padding: 20px 0;
    width: 100%;
    text-align: center;

    &:hover,
    &:active,
    &:focus {
        text-decoration: none;
        color: ${props => props.theme.text_color}
        font-weight: 600;
    }

`;

const NavigationItem = ({ link, ...otherProps }) => {
    const onActiveStyle = {
        borderBottom: "2px solid rgba(18, 130, 162, 1)",
        fontWeight: "600"
    }

    return (
        <Link data-tag="nav-link" to={link} replace exact activeStyle={onActiveStyle}>
            {otherProps.children}
        </Link>
    )
}




export default NavigationItem;
