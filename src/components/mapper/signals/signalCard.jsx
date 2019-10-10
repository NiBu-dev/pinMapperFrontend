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
    cursor: pointer;
    border: ${props => props.isChosen ? `1px solid ${props.theme.primary_color}` : 'none'};
    box-sizing: border-box;
`;

const SignalText = styled.span`
    color: ${props => props.theme.text_color};
    font-size: 16px;
    font-weight: 500;
    margin-left: 24px;
`;

const SignalSelectText = styled.span`
    margin-right: 16px;
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
        <SignalCardLayout data-tag="signal-card-layout--div" onClick={onToogleChooseSignal} isChosen={signalIsChosen}>
            <SignalText data-tag="signal-text--span">Signal1</SignalText>
            <SignalSelectText data-tag="signal-select--button">{buttonText}</SignalSelectText>
        </SignalCardLayout>
    )
};

export default SignalCardComponent;