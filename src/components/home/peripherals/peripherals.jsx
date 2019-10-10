import React, { useState } from "react";
import styled from "styled-components";
import TreeNodeComponent from "./treeview";
import MockData from "../../../backend-mock";

const TreeLayout = styled.div`
    padding: 10px 0 10px 10px;
    height: 73vh;
    overflow-y: scroll;
`;


const PeripheralsComponent = () => {
    const [nodeChosen, setNodeChosen] = useState('');

    const onNodeChooseHandler = (node) => {
        setNodeChosen(node);
        console.log(node)
    };


    return (
        <TreeLayout data-tag="tree-layout--div">
            {Object.keys(MockData).map(group => {
                return (
                    <TreeNodeComponent label={group}>
                        {Object.keys(MockData[group]).map(minorGroup => {
                            return (
                                <TreeNodeComponent label={minorGroup} setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                            )
                        })}
                    </TreeNodeComponent>
                )
            })}
        </TreeLayout>
    )
};

export default PeripheralsComponent;
