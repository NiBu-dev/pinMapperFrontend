import React, { useState } from "react";
import styled from "styled-components";

const Node = styled.div`
`;

const NodeChild = styled.div`
    display: ${props => props.expanded ? "block" : "none"};
    margin-left: 20px;

`;

const NodeTitleContainer = styled.div`
    padding: 5px;
`;

const NodeLabel = styled.span`
    cursor: pointer;
    margin-left: 10px;
    border-radius: 4px;
    padding: 5px;
    margin-right: 10px;
    background-color: ${props => props.theme.color_green};
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.5rem;

`;

const Triangle = styled.div`
    display: inline-block;
    width: 6px;
    height: 10px;
    background-color: ${props => props.theme.text_color}
    clip-path: polygon(0 0, 100% 50%, 0 100%);

    transform: ${props => props.expanded ? "rotateZ(90deg)" : "rotateZ(0)"};
    transition: all .2s ease-out;

    cursor: pointer;

`;

const TreeNodeComponent = ({ label,setIsChosen, isChosen, ...otherProps }) => {
    const [nodeState, toggleNodeState] = useState(true);

    const onToggleNode = () => {
        toggleNodeState(!nodeState);
        if (!otherProps.children) {
            setIsChosen(label);
        }
    };
    let triangle = null;
    if (otherProps.children) {
        triangle = <Triangle expanded={nodeState} />;
    }

    return (
        <Node data-tag="node--div">
            <NodeTitleContainer data-tag="node-title-container--div" onClick={onToggleNode}>
                {triangle}
                <NodeLabel  nodeIsChosen={isChosen === label}>{label}</NodeLabel>
            </NodeTitleContainer>
            <NodeChild data-tag="node-child--div" expanded={nodeState}>
                {otherProps.children}
            </NodeChild>
        </Node>
    )
};



export default TreeNodeComponent;