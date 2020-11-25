import React from 'react';

const Nav = () => {
  return (
    <div className='nav-container'>
      <nav>
        <h1 id='logo'>U.K Carbon Intensity</h1>
        <ul>
          <li>
            <a href='https://carbon-intensity.github.io/api-definitions/?javascript--nodejs#get-intensity-from-to'>
              API
            </a>
          </li>
          <li>
            <a href='https://formidable.com/open-source/victory/about'>
              Learn More
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
