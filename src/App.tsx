//import whatever is needed
import React from 'react';
import './styles/style.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Container>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
