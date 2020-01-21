import React from "react";
import styled from "styled-components";
import SVG from 'react-inlinesvg';
import Reaper from "../../assets/svg/reaper.svg";

const NotFoundLayout = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FF5F6D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFC371, #FF5F6D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFC371, #FF5F6D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const NotFoundText = styled.h1`
    text-align: center;
`;

const SvgWrapper = styled.div`
    width: 50vw;
`

const ReaperSvg = styled(SVG)`
    width: 100%;
    position: relative;

    &:hover {
        fill: red;
    }
`;


const NotFoundComponent = () => {
    return (
        <NotFoundLayout data-tag="not-found-layout--div">
            <SvgWrapper>
                <ReaperSvg src={Reaper} />
            </SvgWrapper>
            <NotFoundText data-tag="not-found-text--h1">Oppsie, page was not found......</NotFoundText>
        </NotFoundLayout>
    )
};

export default NotFoundComponent;