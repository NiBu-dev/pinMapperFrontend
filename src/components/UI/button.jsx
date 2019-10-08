import styled from "styled-components";

export const Button = styled.button`
    margin-right: 24px;
    background-color: transparent;
    color: ${props => props.isChosen ? props.theme.secondary_color : props.theme.primary_color};
    padding: 8px 16px;
    border: 1px solid  ${props => props.isChosen ? props.theme.secondary_color : props.theme.primary_color};
    border-radius: 4px;
    cursor: pointer;
`;