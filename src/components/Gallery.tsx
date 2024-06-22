import React, { useState, useCallback, useEffect } from 'react';
import petData from '../hooks/petData';
import sampleData from '../utils/dataUtils';
import PetCard from './PetCard';
import styled from 'styled-components';

const GalleryContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px;

`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
`;

const GalleryGridResp = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

`;

const ModificationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 8px 15px;
    background-color: #477494;
    color: white;
    border: none;
    border-radius: 4px;
    margin: 30px;
    cursor: pointer;
    &:hover {
        background-color: #718040;
    }
`;


const Gallery: React.FC = () => {
    const { pets } = petData(sampleData);
    const [selectedPets, setSelectedPets] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [sortedPets, setSortedPets] = useState(pets);


    const togglePetSelect = useCallback((id: string) => {
        setSelectedPets(prev =>
            prev.includes(id) ? prev.filter(petId => petId !== id) : [...prev, id]
            );
    }, []);


    const sortPets = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc': 'asc');
    };

    useEffect (() => {
        const sorted = [...pets].sort((a,b) => {
            if (sortOrder === 'asc'){
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setSortedPets(sorted);
    }, [pets, sortOrder]);

    const downloadSelectImg = async () => {
        for (const id of selectedPets){
            const pet = pets.find(p => p.id === id);
            if (pet) {
                try{
                const resp = await fetch(pet.imageURL);
                const blobResp = await resp.blob();
                const url = window.URL.createObjectURL(blobResp);
                const link = document.createElement('a');
                link.href=url;
                link.download=`${pet.name}.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                await new Promise(resolve => setTimeout(resolve, 100));
                } catch (error) {
                    console.error(`Failed to download image for ${pet.name}`, error);
                }
            }
        }
    };

    // const sortedPets = useMemo(() => {
    //     return[...pets].sort((a,b) => {
    //         if (sortOrder === 'asc'){
    //             return a.name.localeCompare(b.name);
    //         } else {
    //             return b.name.localeCompare(a.name);
    //         }
    //     });
    // }, [pets, sortOrder]);

    const selectAll = () => {
        setSelectedPets(pets.map(pet => pet.id));
    };

    const clearSelection = () => {
        setSelectedPets([]);
    };

    return (
        <GalleryContainer>
            <ModificationContainer>
            <Title>Gallery</Title>
                <Button onClick={selectAll}>Select All</Button>
                <Button onClick={clearSelection}>Clear All</Button>
                <Button onClick={sortPets}>
                Sort {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}
                </Button>
                <Button onClick={downloadSelectImg}>
                    Dowload Selected
                </Button>
            </ModificationContainer>


            <GalleryGridResp>
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} isSelected={selectedPets.includes(pet.id)} onSelect={() => togglePetSelect(pet.id)}/>
                ))}
            </GalleryGridResp>
        </GalleryContainer>
    );
};

export default Gallery;