import React from 'react';

function Search( props ){

    function click(event){
        event.preventDefault();
        props.search(event.target.search.value);
    }

    return (
    	<div id="images">
	        <form onSubmit={(event) => click(event)} id="searchForm">
	            <label htmlFor="search"> Search breed: </label>
	            <input name="search" type="text" id="search" />
	            <button type="submit">
	                Buscar
	            </button>
	        </form>
	    </div>
    )
}

export default Search;