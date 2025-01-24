import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/pages/MainPage/MainPage';
import Layout from './components/organisms/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store'; // Your Redux store

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/post/${id}" element={<div></div>} />
          </Routes>
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;
