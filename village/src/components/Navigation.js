import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Link className="navigation" to="/smurfs">The SMURFS </Link>
      <br />
      <Link to="/smurfs" className='navigation'> Smurfs </Link>
      <br />
      <Link to="/smurf-form" className='navigation'>Add A Smurf </Link>
    </div>
  );
};


export default Navigation;