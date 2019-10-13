import React from "react";
import styled from "styled-components";
import SignalCardComponent from "./signalCard";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUcData, selectPortsBySignals } from "../../../redux/mapper/mapper.selectors";
import { selectCurrentPeripheral } from "../../../redux/peripherals/peripherals.selectors";
import Mapper from "../../../algorithm/algorithm";


const SignalsLayout = styled.div`
    padding: 10px;
    height: 73vh;
    overflow-y: scroll;
`;


const SignalsComponent = ({ ucData, selectedPeripheral }) => {
    const uniquePeriphSignals = [];
    let majorGroup;
    let signals;

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
                return (<SignalCardComponent key={index} signalName={signal.primarySignalName}/>);
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
});

export default connect(mapSateToProps)(SignalsComponent);