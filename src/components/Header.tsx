import React from 'react';
import styled from 'styled-components';


const HeaderWrap = styled.header`
    background-color: #3C4F76;
    color: #fff;
    padding: 10px 0;
`;

const NavWrap = styled.nav`
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        font-size: 120%;
        font-family: avenir;
    }
    li{
        margin: 0 10px;
    }
    a{
        color: #fff;
        text-decoration: none;
        transition: transform 0.3s ease;
        &:hover {
            color: #ADBCC8;
            transform: translateY(-5px); 
        }
    }
`;


const Title = styled.h1`
    margin-bottom:20px;
    text-align: center;
    font-size: 400%;
    font-family: avenir;

`;

const Header: React.FC = () => {
    return (
        <HeaderWrap>
             <Title>Pet Plaza</Title>
            <NavWrap>
                <ul>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/aboutme">About Me</a></li>
                </ul>
            </NavWrap>
        </HeaderWrap>
        
    );
};

export default Header;