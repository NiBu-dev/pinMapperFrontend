import React, { useEffect } from "react";
import styled from "styled-components";
import SignalCardComponent from "./signalCard";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUcData, selectPortsBySignals } from "../../../redux/mapper/mapper.selectors";
import { selectCurrentPeripheral } from "../../../redux/peripherals/peripherals.selectors";
import { addSelectedSignal, removeSelectedSignal } from "../../../redux/signals/signals.actions";
import { selectChosenSignals } from "../../../redux/signals/signals.selectors";
import { addMessage } from "../../../redux/logger/logger.actions";

import Mapper from "../../../algorithm/algorithm";


const SignalsLayout = styled.div`
    padding: 10px;
    height: 73vh;
    overflow-y: scroll;
`;


const SignalsComponent = ({ ucData, portsBySignals, selectedPeripheral, addSignal, removeSignal, chosenSignals, printMessage }) => {
    const uniquePeriphSignals = [];
    let majorGroup;
    let signals;

    const onToggle = (signal) => {
        if (chosenSignals.includes(signal)) {
            removeSignal(signal);
        } else {
            addSignal(signal);
        }
        // console.log(Mapper(chosenSignals, portsBySignals));
        // console.log(portsBySignals)
    };

    useEffect(() => {
        let mappingResult;
        if (chosenSignals.length > 0) {
            mappingResult = Mapper(chosenSignals, portsBySignals);
            // console.log(Object.keys(mappingResult)[Object.keys(mappingResult).length - 1])

        }
    }, [chosenSignals, portsBySignals]);

    if (!ucData || !selectedPeripheral) {
        return (<SignalsLayout data-tag="signals-layout--div">

        </SignalsLayout>);
    } else {
        majorGroup = (Object.keys(ucData).filter(majorGroup => {
            return (Object.keys(ucData[majorGroup]).includes(selectedPeripheral))
        }));
        signals = ucData[majorGroup][selectedPeripheral].map((signal, index) => {
            if (!uniquePeriphSignals.includes(signal.primarySignalName)) {
                uniquePeriphSignals.push(signal.primarySignalName);
                return (<SignalCardComponent key={index} signalName={signal.primarySignalName} onToogleChooseSignal={onToggle} />);
            } else {
                return null;
            }
        });
    }

    return (
        <SignalsLayout data-tag="signals-layout--div">
            {signals}
        </SignalsLayout>
    )
};

const mapSateToProps = createStructuredSelector({
    ucData: selectUcData,
    portsBySignals: selectPortsBySignals,
    selectedPeripheral: selectCurrentPeripheral,
    chosenSignals: selectChosenSignals
});

const mapDispatchToProps = dispatch => {
    return {
        addSignal: signal => dispatch(addSelectedSignal(signal)),
        removeSignal: signal => dispatch(removeSelectedSignal(signal)),
        printMessage: message => dispatch(addMessage(message))
    }
};

export default connect(mapSateToProps, mapDispatchToProps)(SignalsComponent);