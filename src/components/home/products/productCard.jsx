import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";


const CardOuter = styled.div`
    padding: 16px;
    width: 33%;
`;

const CardInner = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    jusitfy-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    text-align: left;
    position: relative;
    cursor: pointer;
    background-color: #f2f8f9;

    &:before {
        content: "";
        position: absolute;
        z-index: 0;
        top: -16px;
        right: -16px;
        background: #00838d;
        height: 32px;
        width: 32px;
        border-radius: 32px;
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
`;

const UcModel = styled.h3`
    margin-bottom: 30px;
    z-index: 1
`;

const UcInfoField = styled.li`
    margin-top: 5px;
    z-index: 1
`;

const GoCorner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #00838d;
    border-radius: 0 4px 0 32px;
`;



const GoArrow = styled.div`
    margin-top: -4px;
    margin-right: -4px;
    color: white;
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