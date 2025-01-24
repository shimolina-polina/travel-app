import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/pages/MainPage/MainPage';
import Layout from './components/organisms/Layout';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router basename="/travel-app">
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
