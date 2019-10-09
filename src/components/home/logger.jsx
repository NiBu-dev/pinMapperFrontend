import React from "react";
import styled from "styled-components";

const LoggerLayout = styled.div`
    padding: 10px;
    overflow-y: scroll;
    height: 57%;
`;

const LogText = styled.span`
    color: green;
    display: block;
    color: ${props => props.theme.primary_color}
`;

const LoggerComponent = () => {
    return (
        <LoggerLayout data-tag="logger-layout--div">
            <LogText data-tag="log-text--span">Mapping.....</LogText>
            <LogText data-tag="log-text--span">Mapped Successfully!</LogText>
            <LogText data-tag="log-text--span">Combulating Discombulator...</LogText>
            <LogText data-tag="log-text--span">Flaps Overheating!!! Danger!</LogText>
            <LogText data-tag="log-text--span">Mapping.....</LogText>
            <LogText data-tag="log-text--span">Mapping.....</LogText>
            <LogText data-tag="log-text--span">Mapping.....</LogText>

        </LoggerLayout>
    )
};

export default LoggerComponent;