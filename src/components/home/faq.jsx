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
    margin-top: 15px;
`;

const StepsContainer = styled.div`
    display:flex;
    justify-content: space-evenly;
    border-bottom: 1px solid rgb(248, 7, 89);
    padding-bottom: 16px;
`;

const StepContainer = styled.div`
    cursor: pointer;

    &:hover #content{
        font-weight: 700;
    }

    &:hover #circle:before {
        transform: rotate(-360deg);
    }

`;
const StepCircle = styled.div`
    margin: 0 auto;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgb(0, 90, 167), rgb(255, 253, 228));
        border-radius: 50%;
        transition: .5s;
    };

    &:after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
        background: #f85032;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #e73827, #f85032);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #e73827, #f85032); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */        
        border-radius: 50%;
    }


`;

const StepTitle = styled.span`
    color: white;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
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
                    <StepCircle data-tag="step-circle--div" id="circle">
                        <StepTitle data-tag="step-title--span">
                            Step1
                        </StepTitle>
                    </StepCircle>
                    <StepContentWrapper data-tag="step-content-wrapper--div">
                        <StepContentText data-tag="step-content-text--span" id="content">
                            Choose the microcontroller version.
                        </StepContentText>
                    </StepContentWrapper>
                </StepContainer>
                <StepContainer data-tag="step-container--div">
                    <StepCircle data-tag="step-circle--div" id="circle">
                        <StepTitle data-tag="step-title--span">
                            Step2
                        </StepTitle>
                    </StepCircle>
                    <StepContentWrapper data-tag="step-content-wrapper--div">
                        <StepContentText data-tag="step-content-text--span" id="content">
                            Select wanted peripherals while the mapping is assigned by the algorithm.
                        </StepContentText>
                    </StepContentWrapper>
                </StepContainer>
                <StepContainer data-tag="step-container--div">
                    <StepCircle data-tag="step-circle--div" id="circle">
                        <StepTitle data-tag="step-title--span">
                            Step3
                        </StepTitle>
                    </StepCircle>
                    <StepContentWrapper data-tag="step-content-wrapper--div">
                        <StepContentText data-tag="step-content-text--span" id="content">
                            Download mapping results as csv file.
                        </StepContentText>
                    </StepContentWrapper>
                </StepContainer>
            </StepsContainer>
        </FaqLayout>
    )
};

export default FaqComponent;