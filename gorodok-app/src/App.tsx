import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Layout from './components/organisms/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HotelsPage from './components/pages/HotelsPage';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router basename="/travel-app">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="hotels" element={<HotelsPage />} />
            <Route path="*" element={<div>404: Page Not Found</div>} />
          </Routes>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
