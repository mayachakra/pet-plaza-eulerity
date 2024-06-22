import React from 'react';
import { Pet } from '../models/Pet';
import styled from 'styled-components';

interface CardProps {
    isSelected: boolean;
}

const CardWrap = styled.div<CardProps>`
    background-color: ${props => props.isSelected ? '#718040' : '#3C4F76'};
    color: #FEEFDD;
    padding: 10px 0;
    text-align: left;
    border-radius: 8px;
    border: 1px;
    box-shadow: 0 0 10px;
    transition: transform 0.3s ease;
    max-width: 350px;
    margin: 20px;

    &:hover{
        transform: translateY(-5px);
    }
`;

const CardTitle = styled.h2`
    text-align:center;
    margin-top, margin-bottom: 5px;
    font-size: 200%;
    font-family: avenir;
`;

const PetImage = styled.img`
    width:100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const CardAlign = styled.div`
    text-align:left;
    margin: 20px;
    font-family: avenir;
`;

const PetDesc = styled.p`
    font-size: larger;
    font-style: italic;
    font-family: serif;
`;

interface PetCardProperty{
    pet: Pet;
    isSelected: boolean;
    onSelect: () => void;
}

const PetCard: React.FC<PetCardProperty> = ({ pet, isSelected, onSelect }) => {
    return (
        <CardWrap isSelected={isSelected} onClick={onSelect}>
            <CardTitle>{pet.name}</CardTitle>
            <PetImage src={pet.imageURL} alt={pet.name}/>
            <CardAlign>
            <PetDesc>{pet.description}</PetDesc>
            <p>Category: {pet.category}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <p>Gender: {pet.gender}</p>
            </CardAlign>
            </CardWrap>
    );
};

export default PetCard;