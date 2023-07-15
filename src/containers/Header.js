
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div style={{width:'100%',height:'60px',backgroundColor:'gray',color:'black'}}>
            <Link to={'/'} >Home</Link>
            <Link to={'/card'} >Card</Link>
        </div>
    );
}

export default Header;