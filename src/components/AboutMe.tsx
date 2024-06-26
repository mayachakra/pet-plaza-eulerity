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
    text-align: center;
`;

const Content = styled.div`
    font-size: 1.2rem;
    line-height: 1.6;
    color: #555;
`;

const PfpImage = styled.img`
    width:100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
`;

const WelcomeMessage = styled.p`
    text-align: center;
`;

const AboutMe: React.FC = () => {
    return (
        <AboutMeContainer>
            <Title>About Me</Title>
            <Content>
                <WelcomeMessage>
                    Welcome to Pet Plaza! Here you can find more information on the site's creator (me!).
                </WelcomeMessage>
                <PfpImage src='https://media.licdn.com/dms/image/D4E22AQGdbn3U3ZPcew/feedshare-shrink_2048_1536/0/1716384810223?e=1721865600&v=beta&t=yp3n48c7xyXcuPNihEO-vq4DrRGYwtA4iFlJvhZTdpc' alt='Maya Chakravarty graduation photo'/>
                <p>
                    Hi! My name is Maya! I have recently graduated with a 
                    <strong> Bachelor of Applied Science - BASc in Computer Science</strong>. I am pursuing a career in 
                    <strong> Full Stack Development</strong> and have recently completed a certification course from Columbia Engineering
                    in Full Stack working with essential languages, libraries and platforms for web development.
                    My academic background has prepared me prioritizing a strong understanding of data structures and algorithms,
                    database management, application development, and software design methods. You may view more projects at my GitHub below.
               </p>
            </Content>
        </AboutMeContainer>
    );
};

export default AboutMe;