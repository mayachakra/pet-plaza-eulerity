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
    }
    li{
        margin: 0 10px;
    }
    a{
        color: #fff;
        text-decoration: none;

        &:hover {
            transition: font-sixe 0.3s ease;
        }
    }
`;

const Header: React.FC = () => {
    return (
        <HeaderWrap>
            <NavWrap>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/aboutme">About Me</a></li>
                </ul>
            </NavWrap>
        </HeaderWrap>
    );
};

export default Header;