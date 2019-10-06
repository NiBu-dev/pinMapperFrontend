import React from "react";
import { BrowserRouter } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";
import Routes from "../../utils/router.jsx";
import NavigationComponent from "../../components/navigation/navigation";
import FooterComponent from "../../components/footer/footer";

const GlobalStyle = createGlobalStyle`
    body {
    color: ${props => props.theme.text_color};
    margin: 0;
	}
	

`;
const Header = styled.header`
	background: ${props => props.theme.header_background};
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 70px;
	color: ${props => props.theme.primary_gray};
`;
const Main = styled.main`
    min-height: 90vh;
    padding-top: 70px;
    background-color: ${props => props.theme.background}
`;

const Footer = styled.footer`

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
