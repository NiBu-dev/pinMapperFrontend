import React from "react";
import styled from "styled-components";
import Presentation from "../../components/home/presentation";
import Steps from "../../components/home/steps";
import Products from "../../components/home/products/products";

const HomeLayout = styled.div`
`;


const HomeComponent = () => {
    return (
        <HomeLayout data-tag="home-layout--div">
            <Presentation />
            <Steps />
            <Products />
        </HomeLayout>
    )
};

export default HomeComponent;