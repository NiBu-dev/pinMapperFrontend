import React, { useEffect } from "react";
import styled from "styled-components";
import SignalCardComponent from "./signalCard";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUcData, selectPortsBySignals, selectMappingResult, selectMappingResultObject } from "../../../redux/mapper/mapper.selectors";
import { setMappingResults, setMappingResultObject } from "../../../redux/mapper/mapper.actions";
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


const SignalsComponent = ({ 
    ucData,
    portsBySignals,
    selectedPeripheral,
    addSignal,
    removeSignal,
    chosenSignals,
    printMessage,
    setMapping,
    mappingResult,
    setMappingResultObject,
    mappingObject }) => {

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
    };

    // Print State handling section
    useEffect(() => {
        if (chosenSignals.length > 0) {
            const newMappingResult = Mapper(chosenSignals, portsBySignals);
            setMapping(newMappingResult);
            if (mappingResult) {
                if (Object.keys(mappingResult).length > Object.keys(newMappingResult).length) {
                    const resultCheck = Object.keys(mappingResult).filter(signal => {
                        return !Object.keys(newMappingResult).includes(signal)
                    });
                    printMessage(`Signal ${resultCheck[0]} is removed from port: ${mappingResult[resultCheck[0]]}`)
                } else {
                    const resultCheck = Object.keys(newMappingResult).filter(signal => {
                        return !Object.keys(mappingResult).includes(signal)
                    });
                    printMessage(`Signal ${resultCheck[0]} is mapped on port: ${newMappingResult[resultCheck[0]]}`)
                }
            } else {
                printMessage(`Signal ${Object.keys(newMappingResult)[0]} is mapped on port: ${newMappingResult[Object.keys(newMappingResult)[0]]}`)
            }

        } else {
            setMapping(null);
            if (mappingResult) {
                printMessage(`Signal ${Object.keys(mappingResult)[0]} is removed from port: ${mappingResult[Object.keys(mappingResult)[0]]}`)

            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chosenSignals, portsBySignals, setMapping, printMessage]);

    useEffect(() => {
        console.log(mappingResult)
    }, [mappingResult])


    // Add mapped signals as signal objects to an array in redux => used in viewResultsTree
    useEffect(() => {
        if (mappingResult) {
            //add signals
            let [...arraySignals] = mappingObject;
            let currentSignals = arraySignals.map((signal) => {
                return signal.primarySignalName
            })
            console.log('curr', currentSignals)
            for (let major in ucData) {
                if (Object.keys(ucData[major]).includes(selectedPeripheral)) {
                    for (let signal of ucData[major][selectedPeripheral]) {
                        if (Object.keys(mappingResult).includes(signal.primarySignalName)) {
                            console.log('sig in map res')
                            if (!currentSignals.includes(signal.primarySignalName)) {
                                // add signal
                                setMappingResultObject([...arraySignals, signal]);
                            } else if (Object.keys(mappingResult).length < currentSignals.length) {
                                // remove signal
                                let newArray = arraySignals.filter((localSig, index) => {
                                    return Object.keys(mappingResult).includes(localSig.primarySignalName)
                                });
                                setMappingResultObject(newArray);
                            }
                        } else {
                            console.log('sig not in map res')
                            if (currentSignals.includes(signal.primarySignalName)) {
                                // remove signal
                                console.log('to delete', signal.primarySignalName)
                                let newArray = arraySignals.filter((localSig, index) => {
                                    return localSig.primarySignalName !== signal.primarySignalName
                                });
                                console.log(newArray)
                                setMappingResultObject(newArray);
                            } else {
                                // do nothing 
                            }
                        }
                    }
                }
            }
        } else {
            //clear signals
            if (selectedPeripheral) {
                setMappingResultObject([]);
            }

        }
        // update only on mappingResult change
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                return (<SignalCardComponent key={index} signalData={signal} onToogleChooseSignal={onToggle} />);
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
    mappingResult: selectMappingResult,
    mappingObject: selectMappingResultObject
});

const mapDispatchToProps = dispatch => {
    return {
        addSignal: signal => dispatch(addSelectedSignal(signal)),
        removeSignal: signal => dispatch(removeSelectedSignal(signal)),
        printMessage: message => dispatch(addMessage(message)),
        setMapping: (mapping) => dispatch(setMappingResults(mapping)),
        setMappingResultObject: (mappingObject) => dispatch(setMappingResultObject(mappingObject))
    }
};

export default connect(mapSateToProps, mapDispatchToProps)(SignalsComponent);