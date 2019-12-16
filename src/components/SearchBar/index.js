import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateWeatherRequest } from '../../store/modules/weather/actions';

// import { Container } from './styles';

export default function SearchBar() {
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  function onInputChange(event) {
    setTerm(event.target.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    dispatch(updateWeatherRequest(term));

    setTerm('');
  }

  return (
    <form onSubmit={onFormSubmit} className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Get a five-day forecast in your favorite cities"
        value={term}
        onChange={onInputChange}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </span>
    </form>
  );
}
