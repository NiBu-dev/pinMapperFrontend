import React, {useEffect} from "react";
import styled from "styled-components";
import WorkWindowComponent from "../../components/mapper/workWindow";
import PeripheralsComponent from "../../components/mapper/peripherals/peripherals";
import SignalsComponent from "../../components/mapper/signals/signals";
import PropertiesComponent from "../../components/mapper/properties/properties";
import LoggerComponent from "../../components/mapper/logger";
import MapResultComponent from "../../components/mapper/mapResultView/mapResultView";

import { connect } from "react-redux";

import { setInitUcData } from "../../redux/mapper/mapper.actions";


const MapperLayout = styled.div`
    height: 100%;
    padding: 20px 0;
    display: grid;
    grid-template-columns: 24px minmax(20%, 1fr) minmax(20%, 1fr) minmax(40%, 2fr) 24px;
    // grid-template-rows: minmax(35vh, 1fr) minmax(35vh, 1fr) 15vh;
    grid-template-rows: minmax(37vh,38ch) minmax(33vh,13vh) 15vh;
    justify-content: center;
    align-items: center;
    grid-gap: 15px;
`;

const MapperSection = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`;

const PeripheralsSection = styled(MapperSection)`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
`;

const SignalsSection = styled(MapperSection)`
    grid-column: 3 / 4;
    grid-row: 1 / 3;
`;

const PropertiesSection = styled(MapperSection)`
    grid-column: 4 / 5;
    grid-row: 1 / 2;
`;

const MappResSection = styled(MapperSection)`
    grid-column: 4 / 5;
    grid-row: 2 / 4;
`;

const LogSection = styled(MapperSection)`
    grid-column: 2 / 4;
    grid-row: 3 / 4;
`;

const MapperComponent = ({setInitUcData}) => {

    useEffect(() => {
        setInitUcData();
    },[setInitUcData]);

    return (
        <MapperLayout data-tag="mapper-layout---div">
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
                    <MapResultComponent />
                </WorkWindowComponent>
            </MappResSection>
            <LogSection data-tag="log-section--div">
                <WorkWindowComponent title="Log">
                    <LoggerComponent />
                </WorkWindowComponent>
            </LogSection>
        </MapperLayout>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        setInitUcData: () => dispatch(setInitUcData())
    }
};


export default connect(null, mapDispatchToProps)(MapperComponent);