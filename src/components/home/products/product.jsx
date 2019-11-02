import React from "react";
import styled from "styled-components";

const Card = styled.div`
    min-width: 200px;
    height: 250px;
    background: linear-gradient(rgba(255,0,0, .2), rgba(0,0,255, .2));
    margin: 12px 8px 0 0;
    border-radius: 4px;
`;

const InnerCard = styled.div`
    width: 150px;
    height: 200px;
    background: ${props => props.theme.secondary_color};
    margin: 25px auto;
    color: white;
    text-align: center;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all .3s ease-out;

    &:hover {
        transform: scaleY(1.1);
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

const TryBytton = styled.button`
    width: fit-content;
    margin: 16px auto;
    padding: 8px 24px;
    // background: linear-gradient(to right, rgb(142, 45, 226), rgb(74, 0, 224));
    background: ${props => props.theme.primary_color};
    border-style: none;
    border-radius: 4px;
    transition: all .2s;

    &:hover {
        transform: translateY(-4px);
    }
`;


const ProductComponent = () => {
    return (
        <Card data-tag="card--div">
            <InnerCard>
                <UcTitleWrapper data-tag="uc-title-wrapper--div">
                    <UcName data-tag="uc-name--h2">
                        Aurix
                </UcName>
                    <UcModel data-tag="uc-model--h2">
                        TC277
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
                <TryBytton data-tag="try--button">
                    Try it
                </TryBytton>
            </InnerCard>
        </Card>
    )
};

export default ProductComponent;