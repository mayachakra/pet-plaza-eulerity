import React from 'react';
import petData from '../hooks/petData';
import sampleData from '../utils/dataUtils';
import PetCard from './PetCard';
import styled from 'styled-components';

const Gallery: React.FC = () => {
    const { pets } = petData(sampleData);
    return (
        <div>
            <h1>Gallery</h1>
            <div className="gallery">
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;