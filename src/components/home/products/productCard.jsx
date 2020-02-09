import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";


const CardOuter = styled.div`
    padding: 1.5rem;
    width: 33%;

    @media screen and (max-width: 1023px) {
        width: 50%;
    }

    @media screen and (max-width: 320px) {
        width: 100%;
        padding: 1rem 0;
    }
`;

const CardInner = styled.div`
    width: 100%;
    height: 100%;
    border-radius: .4rem;
    overflow: hidden;
    display: flex;
    jusitfy-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem;
    text-align: left;
    position: relative;
    cursor: pointer;
    background-color: #ecb6be;

    &:before {
        content: "";
        position: absolute;
        z-index: 0;
        top: -1.5rem;
        right: -1.5rem;
        background: ${props => props.theme.secondary_color_rgba};
        height: 3rem;
        width: 3rem;
        border-radius: 3rem;
        transform: scale(1);
        transform-origin: 50% 50%;
        transition: transform .5s ease-out;
    }

    &:hover {

        &:before {
            transform: scale(35);
        }

        h3,
        ul {
            color: white;
        }

    }


    ul {
        z-index: 1;
    }
`;


const UcName = styled.h3`
    z-index: 1
    font-size: 2rem;
`;

const UcModel = styled.h3`
    margin-bottom: 3rem;
    font-size: 3rem;
    z-index: 1
`;

const UcInfoField = styled.li`
    margin-top: 5px;
    z-index: 1
    font-size: 1.5rem;
`;

const GoCorner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.secondary_color_rgba};
    border-radius: 0 .4rem 0 3rem;
`;



const GoArrow = styled.div`
    margin-top: -.4rem;
    margin-right: -.4rem;
    color: white;
    font-size: 1.5rem;
`;


const ProductCard = ({ productData, ...props }) => {

    const onClickHandler = (product) => {
        props.history.push(`/${product}`);
    }
    return (
        <CardOuter data-tag="card-outer--div">
            <CardInner data-tag="card-inner--div" onClick={() => onClickHandler(productData.name)}>
                <UcName data-tag="uc-name--h3">AURIX</UcName>
                <UcModel data-tag="uc-model--h3">{productData.name}</UcModel>
                <ul>
                    <UcInfoField data-tag="uc-info-field--span">{productData.package} package</UcInfoField>
                    <UcInfoField data-tag="uc-info-field--span">{productData.ports} ports</UcInfoField>
                    <UcInfoField data-tag="uc-info-field--span">{productData.signals} signals</UcInfoField>
                </ul>
                <GoCorner>
                    <GoArrow>
                        →
                    </GoArrow>
                </GoCorner>
            </CardInner>
        </CardOuter>
    )
};

export default withRouter(ProductCard);