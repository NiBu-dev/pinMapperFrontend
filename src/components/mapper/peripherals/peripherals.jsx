import React, { useState } from "react";
import styled from "styled-components";
import TreeNodeComponent from "./treeview";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setSelectedPeripheral } from "../../../redux/peripherals/peripherals.actions";
import { selectUcData } from "../../../redux/mapper/mapper.selectors";

const TreeLayout = styled.div`
    padding: 1rem 0 1rem 1rem;
    height: 68vh;
    overflow-y: scroll;
`;


const PeripheralsComponent = ({ ucData, setSelectedPeripheral }) => {
    const [nodeChosen, setNodeChosen] = useState('');

    const onNodeChooseHandler = (node) => {
        setNodeChosen(node);
        setSelectedPeripheral(node);
    };

    if (!ucData) {
        return (<TreeLayout data-tag="tree-layout--div">
            Loading...
        </TreeLayout>)
    }


    return (
        <TreeLayout data-tag="tree-layout--div">
            {Object.keys(ucData).map((group, index) => {
                return (
                    <TreeNodeComponent key={index} label={group}>
                        {Object.keys(ucData[group]).map((minorGroup, index) => {
                            return (
                                <TreeNodeComponent key={index} label={minorGroup} setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                            )
                        })}
                    </TreeNodeComponent>
                )
            })}
        </TreeLayout>
    )
};

const mapSateToProps = createStructuredSelector({
    ucData: selectUcData
});

const mapDispatchToProps = dispatch => {
    return {
        setSelectedPeripheral: peripheral => dispatch(setSelectedPeripheral(peripheral))
    }
};

export default connect(mapSateToProps, mapDispatchToProps)(PeripheralsComponent);
