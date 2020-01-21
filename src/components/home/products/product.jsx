import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import SnakeButton from "../../UI/snakeButton";

const Card = styled.div`
    width: 200px;
    height: 250px;
    background: #f85032;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #e73827, #f85032);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #e73827, #f85032); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    
    

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
    margin-bottom: 5px;
    font-size: 16px;
`;


const NotAvailableContainer = styled.div`
    width: 100%;
    background: ${props => props.theme.primary_color};
    margin-bottom: 24px;
`;

const ProductComponent = ({ available, productData, ...props }) => {

    const onTryHandler = () => {
        console.log('try')
        props.history.push(`/${productData.name}`);
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
                    {productData.name}
                </UcModel>
            </UcTitleWrapper>
            <Features data-tag="features--div">
                <Feature data-tag="feature--span">
                    {productData.package} package
                </Feature>
                <Feature data-tag="feature--span">
                    {productData.ports} ports
                </Feature>
                <Feature data-tag="feature--span">
                    {productData.signals} signals
                </Feature>
            </Features>
            {tryButton}
        </Card>
    )
};

export default withRouter(ProductComponent);