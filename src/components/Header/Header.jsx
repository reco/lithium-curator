import React, { Component }  from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';


class Header extends Component {
  render() {
    return <header>
      <nav>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/pages'>Pages</Link></li>
        <li><Link to='/curator'>Curator</Link></li>
      </nav>
    </header>;
  }
}

export default Header;
