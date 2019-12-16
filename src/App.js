import React from 'react';
import { Provider } from 'react-redux';

import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';
import './App.css';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <SearchBar />

      <WeatherList />
    </Provider>
  );
}

export default App;
