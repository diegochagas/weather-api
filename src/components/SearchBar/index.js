import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateWeatherRequest } from '../../store/modules/weather/actions';

// import { Container } from './styles';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  function onInputChange(event) {
    setTerm(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();

    if (term) {
      dispatch(updateWeatherRequest(term));

      setTerm('');

      setErrorMessage('');
    } else {
      setErrorMessage('Write city name');
    }
  }

  return (
    <form className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Get a five-day forecast in your favorite cities"
        value={term}
        onChange={onInputChange}
      />
      <span className="input-group-btn">
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={handleSearch}
        >
          Submit
        </button>
      </span>

      <div>
        <small style={{ color: 'red' }}>{errorMessage}</small>
      </div>
    </form>
  );
}
