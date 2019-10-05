import React from "react";
import { BrowserRouter } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";
import Routes from "../../utils/router.jsx";

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
    min-height: 100vh;
    background-color: gray;
`;

const Footer = styled.footer`

`;

const Layout = () => {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header id='header'>
                    <div>
                        navigation
                    </div>
                </Header>
                <Main id='page-content-wrapper' role='main'>
                    <Routes />
                </Main>
                <Footer>
                    Footer
                </Footer>
            </BrowserRouter>
        </>
    );

};

export default Layout;
