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
        justify-content: center;
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
`;

const Footer: React.FC = () => {
    return (
        <HeaderWrap>
            <Title></Title>
            <NavWrap>
                <ul>
                    <li><a href="https://www.linkedin.com/in/maya-chakravarty-968b6322a/">LinkedIn</a></li>
                    |
                    <li><a href="https://github.com/mayachakra">GitHub</a></li>
                </ul>
            </NavWrap>
        </HeaderWrap>
        
    );
};

export default Footer;