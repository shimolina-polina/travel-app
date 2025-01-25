import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Layout from './components/organisms/Layout';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import HotelsPage from './components/pages/HotelsPage';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';


function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Router basename="/travel-app">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="hotels" element={<HotelsPage />} />
              <Route path="*" element={<div>404: Page Not Found</div>} />
            </Routes>
          </Router>
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
