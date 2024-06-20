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
    font-size: 400%;
    font-family: serif;

`;

////why doesnt it center

const HomePage: React.FC = () => {
    /*
    const { petData, loading, error} = petData();
    const [ selectedPets, setSelectedPets ] = useState<Pet[]>([]);
    const [ sortOrder, setSortOrder ] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        //fetch data
    }, []);

    //add handle functions

    const sortedPetData = petData.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.title.localeCompare(b.title);
        }
        return b.title.localeCompare(a.title); 
    });
    */

    return (
        <HomePageWrap>
            <Title>Pet Plaza</Title>
            <p>Here is the home page!</p>
            <PetGallery />
        </HomePageWrap>
    );
};

export default HomePage;