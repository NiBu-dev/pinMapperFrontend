import React from "react";

import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Link = styled(NavLink)`
    color: ${props => props.theme.text_color}
    text-decoration: none;
    padding: 20px 0;
    width: 100%;
    text-align: center;

`;


const NavigationItem = ({ link, ...otherProps }) => {
    const onActiveStyle = {
        borderBottom: "1px solid #66fcf1",
        backgroundColor: "rgba(255, 255, 255, 0.05)"
    }

    return (
        <Link data-tag="nav-link" to={link} replace activeStyle={onActiveStyle}>
            {otherProps.children}
        </Link>
    )
}




export default NavigationItem;
