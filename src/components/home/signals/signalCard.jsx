import React, { useState } from "react";
import styled from "styled-components";

const SignalCardLayout = styled.div`
    width: 100%;
    height: 48px;
    border-radius: 4px;
    ${props => props.theme.elevation_03}

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

const SignalText = styled.span`
    color: ${props => props.theme.text_color};
    font-size: 16px;
    font-weight: 500;
    margin-left: 24px;
`;

const SignalSelectButton = styled.button`
    margin-right: 24px;
    background-color: transparent;
    color: ${props => props.isChosen ? props.theme.secondary_color : props.theme.primary_color};
    padding: 8px 16px;
    border: 1px solid  ${props => props.isChosen ? props.theme.secondary_color : props.theme.primary_color};
    border-radius: 4px;
    cursor: pointer;
`;

const SignalCardComponent = () => {
    const [signalIsChosen, setSignalIsChosen] = useState(false);

    const onToogleChooseSignal = () => {
        setSignalIsChosen(!signalIsChosen);
    };

    let buttonText = "Select";

    if (signalIsChosen) {
        buttonText = "Unselect";
    }

    return (
        <SignalCardLayout data-tag="signal-card-layout--div">
            <SignalText data-tag="signal-text--span">Signal1</SignalText>
            <SignalSelectButton data-tag="signal-select--button" onClick={onToogleChooseSignal} isChosen={signalIsChosen}>{buttonText}</SignalSelectButton>
        </SignalCardLayout>
    )
};

export default SignalCardComponent;