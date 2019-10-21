import React, { useState } from "react";
import styled from "styled-components";
import MatIcon from '@material-ui/core/Icon';
import SVG from 'react-inlinesvg';
import boot from "../../../assets/svg/277.svg"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMappingResult } from "../../../redux/mapper/mapper.selectors";
// import $ from 'jquery';


const MapResultLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    ${props => props.fullscreen ? "position: fixed; top: 9vh; left: 3vw; z-index: 2; width: 93vw; height:89vh; background-color: #676767;" : null}
`;

const MapResToolbarContainer = styled.div`
    height: 100%;
    width: 50px;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-right: 1px solid gray;
    position: relative;
`;

const SquareHighlight = styled.div`
    display: inline-block;
    width: 100%;
    height: 10px;
    margin-bottom: 15px;
    background-color: ${props => props.theme.secondary_color}
`;


const MapResViewWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ToolbarIcon = styled(MatIcon)`
    cursor: pointer;

    margin-bottom: 15px;
`;

const MySvg = styled(SVG)`
    height: 90%;
    width: 410px;
    background-color: white;

    ${props => props.fullscreen === "true" ? "width: 100%;" : null}

    g {
        g {
            g {
                rect {
                cursor: pointer;
                    
                
                }
                text {
                    cursor: pointer;
                    
                    tspan {
                    }
                }
            }
            ${props => props.selected.map(sel => {
    return `.${sel} {fill: green !important}`
})} 

            ${props => props.conflicts.map(sel => {
    return `.${sel} {fill: red !important}`
})} 

        }
    }
`;




const MapResultComponent = ({ mappingResult }) => {
    const [fullScreenState, setFullScreenState] = useState(false);
    let selectedSignals = [];
    let conflicts = []

    if (mappingResult) {
        selectedSignals = Object.values(mappingResult);
    };

    const svg = (<MySvg data-tag="my-svg"
        src={boot}
        selected={selectedSignals}
        conflicts={conflicts} 
        fullscreen={fullScreenState.toString()}/>)

    const onFullScreenHandler = () => {
        setFullScreenState(!fullScreenState);
    };

    return (
        <MapResultLayout data-tag="mar-res-layout--div" fullscreen={fullScreenState}>
            <MapResToolbarContainer data-tag="map-res-toolbar-container--div">
                <SquareHighlight data-tag="square-highlight--div" />
                <ToolbarIcon data-tag="toolbar-icon" onClick={onFullScreenHandler}>fullscreen</ToolbarIcon>
                <ToolbarIcon data-tag="toolbar-icon">palette</ToolbarIcon>
            </MapResToolbarContainer>
            <MapResViewWrapper data-tag="map-res-view-wrapper--div">
                {svg}
            </MapResViewWrapper>
        </MapResultLayout>
    )
};

const mapSateToProps = createStructuredSelector({
    mappingResult: selectMappingResult
});


export default connect(mapSateToProps)(MapResultComponent);