import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export const Header = () => (

    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <IndexLink className="navbar-brand" to='/'>Convert CSV to SQL</IndexLink>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <IndexLink to='/' activeClassName='route--active'>Home</IndexLink>
                    </li>
                    <li>
                        <Link to='/counter' activeClassName='route--active'>Counter</Link>
                    </li>
                    <li>
                        <Link to='/convertCsv' activeClassName='route--active'>Convert CSV</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
