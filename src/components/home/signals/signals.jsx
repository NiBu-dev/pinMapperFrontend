import React from "react";
import styled from "styled-components";
import SignalCardComponent from "./signalCard";

const SignalsLayout = styled.div`
    padding: 10px;
    height: 73vh;
    overflow-y: scroll;
`;


const SignalsComponent = () => {
    const dummySignals = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    return (
        <SignalsLayout data-tag="signals-layout--div">
            {dummySignals.map((signal, index) => {
                return <SignalCardComponent key={index}/>
            })}
        </SignalsLayout>
    )
};

export default SignalsComponent;