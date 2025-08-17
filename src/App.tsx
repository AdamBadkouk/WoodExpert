import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';

// Component to handle app content
function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-custom-dark-bg transition-colors duration-300">
      <Header />
      <main className="mb-16 fade-in-scale">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </DarkModeProvider>
  );
}

export default App;