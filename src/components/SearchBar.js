import React, { useState } from 'react';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value)
    } 

    const onFormSubmit = event => {
        event.preventDefault();
        props.onTermSubmit(term);
    }

    return (
      <div className="form-container">
        <form onSubmit={onFormSubmit} className="form">
          <div className="field">
            <label className='form-label'>Video Search</label>
            <input
              type="text"
              value={term}
              onChange={onInputChange}
              className='form-input'
            />
          </div>
        </form>
      </div>
    );
}

export default SearchBar;