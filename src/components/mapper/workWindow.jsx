import React from "react";
import styled from "styled-components";
import { CSVLink } from "react-csv";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMappingResult } from "../../redux/mapper/mapper.selectors";


const WorkWindowLayout = styled.div`
    height: 100%;
    width: 100%;
    border-radius: .4rem;
    background: ${props => props.theme.color_gray};
    overflow: hidden;
`;

const WindowTitleSection = styled.div`
    width: 100%;
    position: relative;
    background: ${props => props.theme.color_gray_dark_2};
`;
const SquareHighlight = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 10px;
    height: 100%;
    background-color: ${props => props.theme.primary_color_rgba}
`;

const WindowTitle = styled.h2`
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem;
    margin: 0 2rem;
`;

const DownloadRes = styled(CSVLink)`
    background-color: ${props => props.theme.primary_color_rgba};
    padding: .5rem 1.5rem;
    color: white;
    transition: transform .3s ease;
    display: inline-block;

    &:hover {
        text-decoration: none;
        color: white;
        transform: scale(1.1);
    }
`;

const WorkWindowComponent = ({ title, download, mappingResult, ...props }) => {


    let titleContent = null;
    let downloadBtn = null;


    if (download) {
        let csvData = [];

        if (mappingResult) {
            csvData = Object.keys(mappingResult).map((result) => {
                return { signal: result, port: mappingResult[result] }
            })
        }
        downloadBtn = <DownloadRes data={csvData} filename='results.csv'>Download results</DownloadRes>;


    }

    if (title) {
        titleContent = (
            <WindowTitleSection data-tag="window-title-section--div">
                <SquareHighlight data-tag="square-highlight--div" />
                <WindowTitle data-tag="window-title">{title}</WindowTitle>
                {downloadBtn}
            </WindowTitleSection>
        );
    }

    return (
        <WorkWindowLayout data-tag="work-window-layout--div">
            {titleContent}
            {props.children}
        </WorkWindowLayout>
    )
};

const mapSateToProps = createStructuredSelector({
    mappingResult: selectMappingResult
});

export default connect(mapSateToProps)(WorkWindowComponent);