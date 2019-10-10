import React, { useState } from "react";
import styled from "styled-components";
import TreeNodeComponent from "./treeview";
import MockData from "../../../backend-mock";

import { connect } from "react-redux";

import {setSelectedPeripheral} from "../../../redux/peripherals/peripherals.actions";

const TreeLayout = styled.div`
    padding: 10px 0 10px 10px;
    height: 73vh;
    overflow-y: scroll;
`;


const PeripheralsComponent = ({setSelectedPeripheral}) => {
    const [nodeChosen, setNodeChosen] = useState('');

    const onNodeChooseHandler = (node) => {
        setNodeChosen(node);
        setSelectedPeripheral(node);
        console.log(node)
    };


    return (
        <TreeLayout data-tag="tree-layout--div">
            {Object.keys(MockData).map((group, index) => {
                return (
                    <TreeNodeComponent key={index} label={group}>
                        {Object.keys(MockData[group]).map((minorGroup, index) => {
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

const mapDispatchToProps = dispatch => {
    return {
        setSelectedPeripheral: peripheral => dispatch(setSelectedPeripheral(peripheral))
    }
};

export default connect(null, mapDispatchToProps)(PeripheralsComponent);
