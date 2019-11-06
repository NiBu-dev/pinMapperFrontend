import React from "react";
import styled from "styled-components";
import SVG from 'react-inlinesvg';
import Mobile from "../../assets/svg/smartphone.svg";

const NotAvailableLayout = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1023px) {
        display: none;
	}
`;

const NotAvailableText = styled.h1`
    text-align: center;
`;

const SvgWrapper = styled.div`
    width: 50vw;
`

const ReaperSvg = styled(SVG)`
    width: 100%;
    height: 30vh;
    position: relative;
`;


const NotFoundComponent = () => {
    return (
        <NotAvailableLayout data-tag="not-found-layout--div">
            <SvgWrapper>
                <ReaperSvg src={Mobile} />
            </SvgWrapper>
            <NotAvailableText data-tag="not-found-text--h1">Oppsie, it seems like your device screen is to small......</NotAvailableText>
        </NotAvailableLayout>
    )
};

export default NotFoundComponent;