import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectChosenSignals } from "../../../redux/signals/signals.selectors";

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

const SignalCardComponent = ({ signalName, chosenSignals, onToogleChooseSignal }) => {

    return (
        <SignalCardLayout data-tag="signal-card-layout--div" onClick={() => onToogleChooseSignal(signalName)} isChosen={chosenSignals.includes(signalName)}>
            <SignalText data-tag="signal-text--span">{signalName}</SignalText>
            <SignalSelectText data-tag="signal-select--button">{chosenSignals.includes(signalName) ? "Unselect" : "Select"}</SignalSelectText>
        </SignalCardLayout>
    )
};

const mapSateToProps = createStructuredSelector({
    chosenSignals: selectChosenSignals
});


export default connect(mapSateToProps)(SignalCardComponent);
