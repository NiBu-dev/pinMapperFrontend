import React from "react";
import styled from "styled-components";
import {Button} from "../../UI/button";

const PropertiesLayout = styled.div`
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3fr 1fr;
`;

const PropertyContainer = styled.div`
    padding: 24px;
`;

const PropertiesContainerPrimary = styled(PropertyContainer)`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
`;

const PropertiesContainerSecondary = styled(PropertyContainer)`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
`;

const EditContainer = styled.div`
    padding: 10px 24px;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    border-top: 1px solid gray;
`;

const PropertyWrapper = styled.div`
    width: 80%;
    border-bottom: 1px solid gray;
    margin-bottom: 16px;
    display: flex;
    justify-content: start;
`;

const PropertyTitle = styled.span`
    font-size: 16px;
    font-weight: 600;
    width: 50%;
`;

const PropertyValue = styled.span`
    font-size: 14px;
    font-weight: 400;
`;

const AlternativeText = styled.span`
    margin-right: 24px;
`;

const AlternativeNameInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid gray;
    color: ${props => props.theme.text_color};
    font-size: 18px;

    &:focus,
    &:active {
        outline: none;
        border-bottom: 1px solid ${props => props.theme.primary_color};
    }
`;

const SaveButton = styled(Button)`
    margin-left: 30px;

    &:active {
        transform: translateY(-4px);
        transition: all .3s ease;
    }
`;


const PropertiesComponent = () => {
    return (
        <PropertiesLayout data-tag="properties-layout--div">
            <PropertiesContainerPrimary data-tag="properties-cotnainer--div">
                <PropertyWrapper data-tag="property-wrapper--div">
                    <PropertyTitle data-tag="property-title--span">Description:</PropertyTitle>
                    <PropertyValue data-tag="property-value--span">General Purpose I/O</PropertyValue>
                </PropertyWrapper>
                <PropertyWrapper data-tag="property-wrapper--div">
                    <PropertyTitle data-tag="property-title--span">Direction:</PropertyTitle>
                    <PropertyValue data-tag="property-value--span">Input output</PropertyValue>
                </PropertyWrapper>
                <PropertyWrapper data-tag="property-wrapper--div">
                    <PropertyTitle data-tag="property-title--span">Initial Z:</PropertyTitle>
                    <PropertyValue data-tag="property-value--span">High Z</PropertyValue>
                </PropertyWrapper>
                <PropertyWrapper data-tag="property-wrapper--div">
                    <PropertyTitle data-tag="property-title--span">Pad:</PropertyTitle>
                    <PropertyValue data-tag="property-value--span">A1</PropertyValue>
                </PropertyWrapper>
                <PropertyWrapper data-tag="property-wrapper--div">
                    <PropertyTitle data-tag="property-title--span">Power:</PropertyTitle>
                    <PropertyValue data-tag="property-value--span">VDDP3</PropertyValue>
                </PropertyWrapper>
            </PropertiesContainerPrimary>
            <PropertiesContainerSecondary data-tag="properties-cotnainer--div">
            </PropertiesContainerSecondary>
            <EditContainer data-tag="edit-container--div">
                <AlternativeText data-tag="alternative-text--span">Add alternative naming:</AlternativeText>
                <AlternativeNameInput data-tag="alternative-name--input" />
                <SaveButton data-tag="save--button">Save</SaveButton>
            </EditContainer>
        </PropertiesLayout>
    )
};

export default PropertiesComponent;
