import React from "react";
import styled from "styled-components";
import { selectMessages } from "../../redux/logger/logger.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


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

const LoggerComponent = ({ messages }) => {
    return (
        <LoggerLayout data-tag="logger-layout--div">
            {messages.map((message, index) => {
                return (
                    <LogText data-tag="log-text--span" key={index}>{message}</LogText>
                )
            })}
        </LoggerLayout>
    )
};

const mapSateToProps = createStructuredSelector({
    messages: selectMessages
});

export default connect(mapSateToProps)(LoggerComponent);