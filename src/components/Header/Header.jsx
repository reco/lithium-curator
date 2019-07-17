import React, { Component }  from 'react'
import { Link } from 'react-router-dom';

import { styled } from 'baseui';
import {StatefulInput} from 'baseui/input';

import './Header.scss';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

class Header extends Component {
  render() {
    return <header>
      <nav>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/pages'>Pages</Link></li>
        <li><Link to='/curator'>Curator</Link></li>
      </nav>
      <Centered>
        <StatefulInput />
      </Centered>
    </header>;
  }
}

export default Header;
