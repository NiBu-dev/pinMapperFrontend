import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import SnakeButton from "../../UI/snakeButton";

const Card = styled.div`
    width: 200px;
    height: 250px;
    background: #ff406c;
    background: linear-gradient(to right, rgb(188, 78, 156), rgb(248, 7, 89));

    margin: 25px 15px;
    color: white;
    text-align: center;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    box-shadow: 0 5px 10px rgba(0,0,0, 0.5);


    &:before {
        content: '';
        position: absolute;
        top: 8px;
        left: 8px;
        z-index: -1;
        height: 100%;
        width: 100%;
        background-color: ${props => props.theme.primary_color};

        transition: transform .3s ease-in-out;
        transform-origin: right;
        transform: scaleX(0);
    }

    &:hover:before {
        transform-origin: left;
        transform: scaleX(1);
    }

    &:after {
        content: '';
        position: absolute;
        top: 8px;
        left: 8px;
        z-index: -1;
        height: 100%;
        width: 100%;
        background-color: white;
        box-sizing: border-box;
        border: 1px solid ${props => props.theme.primary_color};
        transition: .3s;
    }

    &:hover:after {
        top: -8px;
        left: -8px;
    }

    @media screen and (max-width: 768px) {
        width: 125px;
        height: 200px;
	}
`;

const UcTitleWrapper = styled.div`

`;

const UcName = styled.h2`
    margin: 0;
`;

const UcModel = styled.h2`
    margin: 0;
    justify-self: start;
`;

const Features = styled.div`

`;

const Feature = styled.h3`
    margin: 0;
    font-size: 16px;
`;


const NotAvailableContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.primary_color};
    margin-bottom: 24px;
`;

const ProductComponent = ({ available, name, ...props }) => {

    const onTryHandler = () => {
        console.log('try')
        props.history.push('/tc277');
    };

    let tryButton = <SnakeButton data-tag="try--button" onClick={onTryHandler}>
        Try it
    </SnakeButton>

    if (!available) {
        tryButton = <NotAvailableContainer>Coming soon...</NotAvailableContainer>
    }

    return (
        <Card data-tag="card--div">
            <UcTitleWrapper data-tag="uc-title-wrapper--div" className="title">
                <UcName data-tag="uc-name--h2">
                    Aurix
                </UcName>
                <UcModel data-tag="uc-model--h2">
                    {name}
                </UcModel>
            </UcTitleWrapper>
            <Features data-tag="features--div">
                <Feature data-tag="feature--span">
                    275 pins
                    </Feature>
                <Feature data-tag="feature--span">
                    69 peripherals
                    </Feature>
            </Features>
            {tryButton}
        </Card>
    )
};

export default withRouter(ProductComponent);