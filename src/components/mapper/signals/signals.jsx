import React from "react";
import styled from "styled-components";
import SignalCardComponent from "./signalCard";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUcData } from "../../../redux/mapper/mapper.selectors";
import { selectCurrentPeripheral } from "../../../redux/peripherals/peripherals.selectors";


const SignalsLayout = styled.div`
    padding: 10px;
    height: 73vh;
    overflow-y: scroll;
`;


const SignalsComponent = ({ ucData, selectedPeripheral }) => {
    let majorGroup;

    if (!ucData || !selectedPeripheral) {
        return (<SignalsLayout data-tag="signals-layout--div">

        </SignalsLayout>)
    } else {
        majorGroup = Object.keys(ucData).filter(majorGroup => {
                return (Object.keys(ucData[majorGroup]).includes(selectedPeripheral))

            })
    }

    return (
        <SignalsLayout data-tag="signals-layout--div">
            {/* {signalData} */}
            {ucData[majorGroup][selectedPeripheral].map((signal, index) => {
                return <SignalCardComponent key={index} signalName={signal.primarySignalName}/>
            })}
        </SignalsLayout>
    )
};

const mapSateToProps = createStructuredSelector({
    ucData: selectUcData,
    selectedPeripheral: selectCurrentPeripheral
});

export default connect(mapSateToProps)(SignalsComponent);