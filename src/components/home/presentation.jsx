import React from "react";
import styled from "styled-components";
import ProcessorImg from "../../assets/images/processor-2.jpg";

const PresentationSection = styled.section`
    width: 1032px;
    margin: auto;
    padding: 40px 0;
    display: flex;
    justify-content:center;
    align-items: center;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.border_color};
`;

const TextBlock = styled.div`
    width: 50%;
`;

const ImageBlock = styled.div`
    height: 300px;
    width: 50%;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(255, 255, 255, 0.6),rgba(97, 97, 97, 0.4)), url(${ProcessorImg});
    filter: grayscale(1);
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
`;

const DescriptionText = styled.h2`
    margin-top: 30px;
    font-size: 32px;
    font-weight: 500;
`;

const Presentation = () => {
    return (
        <PresentationSection data-tag="presentation-section">
            <TextBlock data-tag="text-block--div">
                <Title data-tag="title--h1">Pin Mapper</Title>
                <DescriptionText data-tag="description-text--h2">
                    Simple tool to automap signals to pins.
                </DescriptionText>
            </TextBlock>
            <ImageBlock data-tag="image-block--div">
                
            </ImageBlock>
        </PresentationSection>
    )
};

export default Presentation;