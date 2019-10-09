import React, { useState } from "react";
import styled from "styled-components";
import TreeNodeComponent from "./treeview";

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
    }

    return (
        <TreeLayout data-tag="tree-layout--div">
            <TreeNodeComponent label="ASCLIN0">
                <TreeNodeComponent label="ASCLIN0 input" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="ASCLIN0 output" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
            </TreeNodeComponent>
            <TreeNodeComponent label="ASCLIN1 input">
                <TreeNodeComponent label="ASCLIN1 input" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="ASCLIN1 output" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
            </TreeNodeComponent>
            <TreeNodeComponent label="CAN">
                <TreeNodeComponent label="CAN node 0" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="CAN node 1" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="CAN node 2" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="CAN node 3" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
            </TreeNodeComponent>
            <TreeNodeComponent label="CCU">
                <TreeNodeComponent label="CCU60" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="CCU61" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="CCU62" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="CCU63" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
            </TreeNodeComponent>
            <TreeNodeComponent label="MMC">
                <TreeNodeComponent label="MMC1" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="MMC2" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="MMC3" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="MMC4" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
            </TreeNodeComponent>
            <TreeNodeComponent label="DPC">
                <TreeNodeComponent label="DPC input" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="DPC output" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="DPC clock" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
                <TreeNodeComponent label="DPC pw" setIsChosen={onNodeChooseHandler} isChosen={nodeChosen} />
            </TreeNodeComponent>

        </TreeLayout>
    )
};

export default PeripheralsComponent;
