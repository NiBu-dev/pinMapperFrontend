import React, { useState } from "react";
import styled from "styled-components";
import { SketchPicker } from 'react-color';

const PaletteLayout = styled.div`
    background-color: #676767;
    position: relative;
    // clip-path: polygon(19% 0, 100% 0%, 100% 100%, 16% 100%, 17% 24%, 0 30%, 17% 12%);
`;

const CloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 18px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.secondary_color};
    }

    &:before,
    &:after {
        position: absolute;
        left: 9px;
        content: ' ';
        height: 18px;
        width: 2px;
        background-color: ${props => props.theme.text_color};
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`;

const PaletteWrapper = styled.div`

`;

const OptionWrapper = styled.div`
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OptionText = styled.span`

`;

const PaletteComponent = ({ onClose, sendSelectedColor }) => {
    const [currentColor, setCurrentColor] = useState('green');
    const handleChange = (color, event) => {

        setCurrentColor(color);
        sendSelectedColor(color);
    };


    return (
        <PaletteLayout data-tag="palette-layout--div">
            <CloseButton data-tag="close-button--div" onClick={onClose} />
            <OptionWrapper data-tag="option-wrapper--div">
                <OptionText data-tag="option-text--span">
                    Color for chosen signals:
                </OptionText>
            </OptionWrapper>
            <PaletteWrapper data-tag="palette-wrapper--div">
                <SketchPicker onChangeComplete={handleChange} color={currentColor} />
            </PaletteWrapper>
        </PaletteLayout>
    )
};

export default PaletteComponent;