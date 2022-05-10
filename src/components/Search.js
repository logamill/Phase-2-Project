import React from 'react';

function Search() {
    return (
        <div class='topnav'>
            <input className='search'
            type="text"
            placeholder="Search..."
            onChange={(e) => console.log(e.target.value)}/>
             <i className="circular search link icon"></i>
        </div>
    )
}

export default Search;