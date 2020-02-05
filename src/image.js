import React from 'react';

function Image( props ){

    return (
    	<div id="images">
	        <img src={props.img} />
	    </div>
    )
}

export default Image;