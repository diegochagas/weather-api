import React from 'react';
import { Provider } from 'react-redux';

import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';

import { store } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <SearchBar />

      <GlobalStyle />

      <WeatherList />
    </Provider>
  );
}

export default App;
