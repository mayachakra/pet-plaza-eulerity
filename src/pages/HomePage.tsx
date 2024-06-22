import React, { useState, useEffect} from 'react';
//import styled from 'styled-components';
import PetGallery from '../components/Gallery';
//import petData from '../hooks/petData';
//import { Pet } from '../models/Pet';
import styled from 'styled-components';


const HomePageWrap = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    margin-bottom:20px;
    text-align: center;
    font-size: 300%;
    font-style: bold;
`;

const Desc = styled.p`
    text-align: center;
`;

////why doesnt it center

const HomePage: React.FC = () => {
    return (
        <HomePageWrap>
            <Title>Welcome</Title>
            <Desc>Here at <strong>Pet Plaza</strong> you may meet our lovely furry friends down below.
                <br></br> You are welcome to download their photos once selected!</Desc>
            <PetGallery />
        </HomePageWrap>
    );
};

export default HomePage;