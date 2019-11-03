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
    }

`;

const NavigationItem = ({ link, ...otherProps }) => {
    const onActiveStyle = {
        borderBottom: "2px solid #e30034",
        backgroundColor: "linear-gradient(to right, rgb(188, 78, 156), rgb(248, 7, 89))"
    }

    return (
        <Link data-tag="nav-link" to={link} replace exact activeStyle={onActiveStyle}>
            {otherProps.children}
        </Link>
    )
}




export default NavigationItem;
