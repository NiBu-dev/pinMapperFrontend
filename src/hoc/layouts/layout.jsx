import React from "react";
import { BrowserRouter } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";
import Routes from "../../utils/router.jsx";
import NavigationComponent from "../../components/navigation/navigation";
import FooterComponent from "../../components/footer/footer";
import BgImage from "../../assets/images/vectors.jpg";

const GlobalStyle = createGlobalStyle`
    body {
    color: ${props => props.theme.text_color};
    margin: 0;
    font-family: 'Open Sans', sans-serif;
	}
	
`;
const Header = styled.header`
    background: ${props => props.theme.header_bg_color};
	width: 100%;
	height: 7rem;
	color: ${props => props.theme.primary_gray};
`;
const Main = styled.main`
    min-height: calc(90vh - 7rem);
    background-blend-mode: screen;

    background-image: linear-gradient(to right bottom, #fff, #c3c3c3), url(${BgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Footer = styled.footer`
    background-color: ${props => props.theme.header_bg_color}
`;

const Layout = () => {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header id='header' data-tag="header">
                    <NavigationComponent />
                </Header>
                <Main id='page-content-wrapper' role='main'>
                    <Routes />
                </Main>
                <Footer data-tag="footer-section">
                    <FooterComponent />
                </Footer>
            </BrowserRouter>
        </>
    );

};

export default Layout;
