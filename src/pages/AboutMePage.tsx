import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.5rem;
`;

const Content = styled.div`
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
`;

const AboutMe: React.FC = () => {
    return (
        <AboutMeContainer>
            <Title>About Me</Title>
            <Content>
                <p>
                    Welcome to Pet Plaza! Here you can find more information on the site's creator (me!).
                </p>
                <p>
                    Hi! My name is Maya! I am a recent graduate from St. John's University with a 
                    Bachelor of Applied Science - BASc in Computer Science. I am pursuing a career in 
                    Full Stack Development and have recently completed a certification course from Columbia Engineering
                    in Full Stack working with essential languages, libraries and platforms for web development.
                    My academic background has prepared me prioritizing a strong understanding of data structures and algorithms,
                    database management, application development, and software design methods.
                </p>
            </Content>
        </AboutMeContainer>
    );
};

export default AboutMe;