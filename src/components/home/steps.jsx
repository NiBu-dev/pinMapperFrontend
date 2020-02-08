import React from "react";
import styled from "styled-components";
import SVG from 'react-inlinesvg';
import Step1Svg from "../../assets/svg/step1.svg";
import Step2Svg from "../../assets/svg/step2.svg";
import Step3Svg from "../../assets/svg/step3.svg";


const StepsSection = styled.section`
    width: 1032px;
    margin: auto;
    padding: 40px 0;
`;

const Title = styled.h2`

`;

const FaqCardsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StepContainer = styled.div`
    width: 30%;
    height: 235px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 16px;
    position: relative;
`;

const StepSvgWrapper = styled.div`
    height: 100px;
    width: 100px;
    margin: auto;
`;

const StepSvg = styled(SVG)`
    width: 100%;
    height: 100%;
    position: relative;
    fill: gray;
`

const StepText = styled.span`
    display: block;
    margin-top: 16px;
`;

const CircleNumber = styled.span`
    position: absolute;
    bottom: -25px;
    right: 50%;
    transform: translateX(50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    padding-top: 15px;
    border: 1px solid gray;
    background-color: white;
    z-index: 100;
    font-weight: 700;
`;




const Steps = () => {
    return (
        <StepsSection data-tag="steps-section">
            <Title data-tag="title--h2">
                How it works?
            </Title>
            <FaqCardsContainer data-tag="faq-cards-container--div">
                <StepContainer data-tag="step-container--div">
                    <StepSvgWrapper data-tag="step-svg--div">
                        <StepSvg src={Step1Svg} />
                    </StepSvgWrapper>
                    <StepText data-tag="step-text--span">
                        Choose the micrcocontroller version
                    </StepText>
                    <CircleNumber>1</CircleNumber>
                </StepContainer>
                <StepContainer data-tag="step-container--div">
                    <StepSvgWrapper data-tag="step-svg--div">
                        <StepSvg src={Step2Svg} />
                    </StepSvgWrapper>
                    <StepText data-tag="step-text--span">
                        Select wanted signals while the mapping is assigned by the algorithm automagically
                    </StepText>
                    <CircleNumber>2</CircleNumber>
                </StepContainer>
                <StepContainer data-tag="step-container--div">
                    <StepSvgWrapper data-tag="step-svg--div">
                        <StepSvg src={Step3Svg} />
                    </StepSvgWrapper>
                    <StepText data-tag="step-text--span">
                    Download mapping results as csv file
                    </StepText>
                    <CircleNumber>3</CircleNumber>
                </StepContainer>
            </FaqCardsContainer>
        </StepsSection>
    )
};

export default Steps;