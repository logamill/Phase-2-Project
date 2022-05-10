import React from 'react';

function Search({ handleSearch }) {
    return (
        <div class='topnav' style={{ borderRadius: '10px' }}>
            <input className='search'
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}/>
             <i className="circular search link icon"></i>
        </div>
    )
}

export default Search;