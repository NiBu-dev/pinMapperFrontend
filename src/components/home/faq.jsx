import React from "react";
import styled from "styled-components";

const FaqLayout = styled.div`
    margin: 0 15%;

    @media screen and (max-width: 768px) {
        margin: 0 12px;
	}
`;

const Title = styled.h1`
    text-align: center;
`;

const StepsContainer = styled.div`
    display:flex;
    justify-content: space-evenly;
    border-bottom: 1px solid gray;
    padding-bottom: 16px;
`;

const StepContainer = styled.div`
    
`;
const StepCircle = styled.div`
    margin: 0 auto;
    height: 60px;
    width: 60px;
    border-radius: 500px;
    background-color: ${props => props.theme.secondary_color};
    background: linear-gradient(to right, rgb(188, 78, 156), rgb(248, 7, 89));
    position: relative;
    cursor: pointer;
    transition: .3s;
    position: relative;

    &:hover {
        box-shadow: 0 5px 10px rgba(0,0,0, 0.5);
        background: linear-gradient(to right, rgb(188, 78, 156), rgb(248, 7, 89));
        transform: translateY(-2px);
    }
`;

const StepTitle = styled.span`
    color: white;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const StepContentWrapper = styled.div`
    margin-top: 10px;
    min-width: 100px;
    max-width: 140px;
    text-align:center;
    color: ${props => props.theme.primary_color};
`;

const StepContentText = styled.span`
`;


const FaqComponent = () => {
    return (
        <FaqLayout data-tag="faq-layout--div">
            <Title data-tag="title--h1">
                How it works?
            </Title>
            <StepsContainer data-tag="steps-container--div">
                <StepContainer data-tag="step-container--div">
                    <StepCircle data-tag="step-circle--div">
                        <StepTitle data-tag="step-title--span">
                            Step1
                        </StepTitle>
                    </StepCircle>
                    <StepContentWrapper data-tag="step-content-wrapper--div">
                        <StepContentText data-tag="step-content-text--span">
                            Choose the microcontroller version.
                        </StepContentText>
                    </StepContentWrapper>
                </StepContainer>
                <StepContainer data-tag="step-container--div">
                    <StepCircle data-tag="step-circle--div">
                        <StepTitle data-tag="step-title--span">
                            Step2
                        </StepTitle>
                    </StepCircle>
                    <StepContentWrapper data-tag="step-content-wrapper--div">
                        <StepContentText data-tag="step-content-text--span">
                            Select wanted peripherals while the mapping is assigned by the algorithm.
                        </StepContentText>
                    </StepContentWrapper>
                </StepContainer>
                <StepContainer data-tag="step-container--div">
                    <StepCircle data-tag="step-circle--div">
                        <StepTitle data-tag="step-title--span">
                            Step3
                        </StepTitle>
                    </StepCircle>
                    <StepContentWrapper data-tag="step-content-wrapper--div">
                        <StepContentText data-tag="step-content-text--span">
                            Download mapping results as csv file.
                        </StepContentText>
                    </StepContentWrapper>
                </StepContainer>
            </StepsContainer>
        </FaqLayout>
    )
};

export default FaqComponent;