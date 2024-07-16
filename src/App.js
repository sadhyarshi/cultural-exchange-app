import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Stories from './components/stories';
import Recipes from './components/Recipes';
// Import other components for routes

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/recipes" element={<Recipes />} />
          {/* Define routes for other sections */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
