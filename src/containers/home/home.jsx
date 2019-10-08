import React from "react";
import styled from "styled-components";
import WorkWindowComponent from "../../components/home/workWindow";
import PeripheralsComponent from "../../components/home/peripherals/peripherals";
import SignalsComponent from "../../components/home/signals/signals";
import PropertiesComponent from "../../components/home/properties/properties";

const HomeLayout = styled.div`
    height: 100%;
    padding: 20px 0;
    display: grid;
    grid-template-columns: 24px minmax(20%, 1fr) minmax(20%, 1fr) minmax(40%, 2fr) 24px;
    grid-template-rows: minmax(35vh, 1fr) minmax(35vh, 1fr) 15vh;
    justify-content: center;
    align-items: center;
    grid-gap: 15px;
`;

const HomeSection = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

const PeripheralsSection = styled(HomeSection)`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
`;

const SignalsSection = styled(HomeSection)`
    grid-column: 3 / 4;
    grid-row: 1 / 3;
`;

const PropertiesSection = styled(HomeSection)`
    grid-column: 4 / 5;
    grid-row: 1 / 2;
`;

const MappResSection = styled(HomeSection)`
    grid-column: 4 / 5;
    grid-row: 2 / 4;
`;

const LogSection = styled(HomeSection)`
    grid-column: 2 / 4;
    grid-row: 3 / 4;
`;

const HomeComponent = () => {
    return (
        <HomeLayout data-tag="home-layout---div">
            <PeripheralsSection data-tag="peripheral-section--div">
                <WorkWindowComponent title="Peripherals">
                    <PeripheralsComponent />
                </WorkWindowComponent>
            </PeripheralsSection>
            <SignalsSection data-tag="signals-section--div">
                <WorkWindowComponent title="Signals">
                    <SignalsComponent />
                </WorkWindowComponent>
            </SignalsSection>
            <PropertiesSection data-tag="properties-section--div">
                <WorkWindowComponent title="Signals">
                    <PropertiesComponent />
                </WorkWindowComponent>
            </PropertiesSection>
            <MappResSection data-tag="map-res-section--div">
                <WorkWindowComponent>
                    Map results
                </WorkWindowComponent>
            </MappResSection>
            <LogSection data-tag="log-section--div">
                <WorkWindowComponent title="Log">
                    logger
                </WorkWindowComponent>
            </LogSection>
        </HomeLayout>
    )
}

export default HomeComponent;