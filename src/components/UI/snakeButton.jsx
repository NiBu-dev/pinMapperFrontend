import React from "react";
import styled from "styled-components";

const Button = styled.a`
    padding: 16px 28px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    color: white;
    box-shadow: 0 0 40px rgba(0,0,0, 0.5);
    width: fit-content;
    margin: 10px auto;
    position: relative;
    overflow: hidden;

    &:hover {
        text-decoration: none;


        span:nth-child(1) {
            transition: .5s;
            transform: translateY(-100%);
        }

        span:nth-child(2) {
            transition: .75s;
            transition-delay: .25s;
            transform: translateX(100%);
        }

        span:nth-child(3) {
            transition: .5s;
            transition-delay: .5s;
            transform: translateY(0);
        }

        span:nth-child(4) {
            transition: .5s;
            transform: translateY(100%);
        }

        span:nth-child(5) {
            transition: .75s;
            transform: translateX(-100%);
        }

        span:nth-child(6) {
            transition: .5s;
            transition-delay: .5s;

            transform: translateY(0);
        }
    }
    
    @media screen and (max-width: 768px) {
        padding: 8px 16px;        
	}
`;

const Border = styled.span`
    position: absolute;
    background: ${props => props.theme.primary_color};

    &:nth-child(1) {
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        transform: translateY(0);
    }

    &:nth-child(2) {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        transform: translateX(-100%);
    }

    &:nth-child(3) {
        top: 0;
        right: 0;
        width: 2px;
        height: 100%;
        transform: translateY(-100%);
    }

    &:nth-child(4) {
        top: 0;
        right: 0;
        width: 2px;
        height: 100%;
        transform: translateY(0);
    }

    &:nth-child(5) {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        transform: translateX(100%);
    }


    &:nth-child(6) {
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        transform: translateY(100%);
    }
`;


const ButtonComponent = ({ children }) => {
    return (
        <Button>
            {children}
            <Border />
            <Border />
            <Border />
            <Border />
            <Border />
            <Border />
        </Button>
    )
};

export default ButtonComponent;