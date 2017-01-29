import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export const Header = () => (
    <div >
        <h1>React Redux Starter Kit</h1>
        <IndexLink to='/' className='btn btn-default' activeClassName='btn-primary'>
            Home
        </IndexLink>
        {' · '}
        <Link to='/counter' className='btn btn-default' activeClassName='btn-primary'>
            Counter
        </Link>
        {' · '}
        <Link to='/convertCsv' className='btn btn-default' activeClassName='btn-primary'>
            Convert CSV
        </Link>
    </div>
);

export default Header;
