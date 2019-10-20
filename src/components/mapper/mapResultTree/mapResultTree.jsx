import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TreeNodeComponent from "./mapTreeView";

import { selectMappingResultObject, selectMappingResult } from "../../../redux/mapper/mapper.selectors";

const MapResultTreelayout = styled.div`
    padding: 15px;
    overflow-y: scroll;
    height: 29vh;
`;

const MapWrapper = styled.div`
    position: relative;
    margin: 10px 0 10px 140px;

    &:first-child {

        .line-connect {
            top: -11px;
            height: 21px;
        }
    }

`;

const Label = styled.span`
    padding: 5px;
    margin-right: 10px;
    ${props => props.theme.elevation_02}
    border-radius: 4px;
    cursor: pointer;
`;

const SignalLabel = styled(Label)`

`;

const PortLabel = styled(Label)`

`;

const DeleteButton = styled.div`
    display: inline-block;
    background-color:red;
    height: 15px;
    width: 15px;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    cursor: pointer;
`;

const LineConnect = styled.div`
    position: absolute;
    top: -20px;
    left: -90px;
    width: 88px;
    height: 30px;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
`;


const MapResultTreeComponent = ({ mappingResult, mappingResultObject }) => {
    let mapResultContent = null;
    let treeData = {};

    if (mappingResult) {
        for (let signalObject of mappingResultObject) {
            if (!Object.keys(treeData).includes(signalObject['minorGroup'])) {
                let temp = {};
                temp[signalObject['primarySignalName']] = mappingResult[signalObject['primarySignalName']];
                treeData[signalObject['minorGroup']] = temp;
            } else {
                let temp = {};
                temp[signalObject['primarySignalName']] = mappingResult[signalObject['primarySignalName']];
                treeData[signalObject['minorGroup']] = { ...treeData[signalObject['minorGroup']], ...temp };
            }
        };
    }

    if (mappingResult) {
        mapResultContent = (
            Object.keys(treeData).map((minorgroup, index) => {
                return (
                    <TreeNodeComponent key={index} label={minorgroup}>
                        {Object.keys(treeData[minorgroup]).map((signal, index) => {
                            return (
                                <MapWrapper key={index} data-tag="map-wrapper--div">
                                    <LineConnect data-tag="line-connect" className="line-connect" />
                                    <SignalLabel data-tag="signal-label--span">{signal}</SignalLabel>
                                    <PortLabel data-tag="port-label--span">{treeData[minorgroup][signal]}</PortLabel>
                                    <DeleteButton data-tag="delete-button" />
                                </MapWrapper>
                            )
                        })}
                    </TreeNodeComponent>)
            })
        )
    }


    return (
        <MapResultTreelayout data-tag="map-result-tree-layout--div">
            {mapResultContent}
        </MapResultTreelayout>
    )
};

const mapSateToProps = createStructuredSelector({
    mappingResultObject: selectMappingResultObject,
    mappingResult: selectMappingResult
});

export default connect(mapSateToProps)(MapResultTreeComponent);