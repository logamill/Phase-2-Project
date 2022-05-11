import React from 'react';

function Search({ handleSearch }) {
    return (
        <div className='topnav'>
            <input className="form-control mr-sm-2"
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}/>
             <i className="circular search link icon"></i>
        </div>
    )
}

export default Search;