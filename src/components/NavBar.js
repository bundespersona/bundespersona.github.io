import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {

  static propTypes = {
    menuItems: PropTypes.array.isRequired,
  }

  render() {
    return(
      <div className='nav-bar'>
        { this.props.menuItems }
      </div>
    )
  }
}

export default NavBar