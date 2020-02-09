import React from "react";
import styled from "styled-components";
import SVG from 'react-inlinesvg';
import Step1Svg from "../../assets/svg/step1.svg";
import Step2Svg from "../../assets/svg/step2.svg";
import Step3Svg from "../../assets/svg/step3.svg";


const StepsSection = styled.section`
    max-width: 1000px;
    margin: auto;
    padding: 4rem 0;

    @media screen and (max-width: 1023px) {
        margin: 0 2rem;
	}
`;

const Title = styled.h2`
    font-size: 2.5rem;
`;

const FaqCardsContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StepContainer = styled.div`
    width: 30%;
    height: 20rem;
    text-align: center;
    position: relative;

    @media screen and (max-width: 1023px) {
        height: 27rem;
    }
`;

const StepSvgWrapper = styled.div`
    height: 10rem;
    width: 10rem;
    margin: auto;
`;

const StepSvg = styled(SVG)`
    width: 100%;
    height: 100%;
    position: relative;
    fill: ${props => props.theme.tertiary_color_rgba};
`

const StepText = styled.span`
    display: block;
    margin-top: 1.5rem;
    font-size: 1.6rem;
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
                </StepContainer>
                <StepContainer data-tag="step-container--div">
                    <StepSvgWrapper data-tag="step-svg--div">
                        <StepSvg src={Step2Svg} />
                    </StepSvgWrapper>
                    <StepText data-tag="step-text--span">
                        Select wanted signals while the mapping is assigned by the algorithm automagically
                    </StepText>
                </StepContainer>
                <StepContainer data-tag="step-container--div">
                    <StepSvgWrapper data-tag="step-svg--div">
                        <StepSvg src={Step3Svg} />
                    </StepSvgWrapper>
                    <StepText data-tag="step-text--span">
                    Download mapping results as csv file
                    </StepText>
                </StepContainer>
            </FaqCardsContainer>
        </StepsSection>
    )
};

export default Steps;