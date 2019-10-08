import React from "react";
import styled from "styled-components";

const WorkWindowLayout = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 4px;
    ${props => props.theme.elevation_02};
`;

const WindowTitleSection = styled.div`
    width: 100%;
    min-height: 5%;
    border-bottom: 1px solid gray;
    position: relative;
`;
const SquareHighlight = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 10px;
    height: 100%;
    background-color: ${props => props.theme.secondary_color}
`;

const WindowTitle = styled.h2`
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 10px;
    margin: 0 20px;
`;

const WorkWindowComponent = ({ title, ...props }) => {

    let titleContent = null;

    if (title) {
        titleContent = (
            <WindowTitleSection data-tag="window-title-section--div">
                <SquareHighlight data-tag="square-highlight--div" />
                <WindowTitle data-tag="window-title">{title}</WindowTitle>
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

export default WorkWindowComponent;