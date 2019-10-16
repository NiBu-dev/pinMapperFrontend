import React, { useEffect } from "react";
import styled from "styled-components";
import SignalCardComponent from "./signalCard";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUcData, selectPortsBySignals, selectMappingResult } from "../../../redux/mapper/mapper.selectors";
import { setMappingResults } from "../../../redux/mapper/mapper.actions";
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


const SignalsComponent = ({ ucData, portsBySignals, selectedPeripheral, addSignal, removeSignal, chosenSignals, printMessage, setMapping, mappingResult }) => {
    const uniquePeriphSignals = [];
    let majorGroup;
    let signals;

    const onToggle = (signal) => {
        if (chosenSignals.includes(signal)) {
            removeSignal(signal);
            printMessage(`Trying to remove signal: ${signal} .....`);
        } else {
            addSignal(signal);
            printMessage(`Trying to map signal: ${signal} .....`);
        }
        // console.log(Mapper(chosenSignals, portsBySignals));
        // console.log(portsBySignals)
    };

    useEffect(() => {
        if (chosenSignals.length > 0) {
            const newMappingResult = Mapper(chosenSignals, portsBySignals);
            setMapping(newMappingResult);
            if (mappingResult) {
                if (Object.keys(mappingResult).length > Object.keys(newMappingResult).length) {
                    const resultCheck = Object.keys(mappingResult).filter(signal => {
                        return !Object.keys(newMappingResult).includes(signal)
                    });
                    console.log('resulTCheck remove', resultCheck[0])
                    printMessage(`Signal ${resultCheck[0]} is removed from port: ${mappingResult[resultCheck[0]]}`)
                } else {
                    const resultCheck = Object.keys(newMappingResult).filter(signal => {
                        return !Object.keys(mappingResult).includes(signal)
                    });
                    console.log('resulTCheck add', resultCheck[0])
                    printMessage(`Signal ${resultCheck[0]} is mapped on port: ${newMappingResult[resultCheck[0]]}`)
                }
            } else {
                console.log("add", Object.keys(newMappingResult)[0])
                printMessage(`Signal ${Object.keys(newMappingResult)[0]} is mapped on port: ${newMappingResult[Object.keys(newMappingResult)[0]]}`)
            }

        } else {
            setMapping(null);
            if (mappingResult) {
                console.log(Object.keys(mappingResult)[0])
                printMessage(`Signal ${Object.keys(mappingResult)[0]} is removed from port: ${mappingResult[Object.keys(mappingResult)[0]]}`)

            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chosenSignals, portsBySignals, setMapping, printMessage]);

    useEffect(() => {
        console.log(mappingResult)
    }, [mappingResult])

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
    chosenSignals: selectChosenSignals,
    mappingResult: selectMappingResult
});

const mapDispatchToProps = dispatch => {
    return {
        addSignal: signal => dispatch(addSelectedSignal(signal)),
        removeSignal: signal => dispatch(removeSelectedSignal(signal)),
        printMessage: message => dispatch(addMessage(message)),
        setMapping: (chosenSignals, portsBySignals) => dispatch(setMappingResults(chosenSignals, portsBySignals))
    }
};

export default connect(mapSateToProps, mapDispatchToProps)(SignalsComponent);