import React, {Component} from 'react';
import NavBar from './NavBar';

class Landing extends Component {

  render() {
    return(
      <div>
        <NavBar menuItems={['ÜBER UNS', 'DIGITAL IDENTITÄTS DEUTSCHLANDS', 'DIGITALE IDENTITÄTEN IN DER EU']} />
      </div>
    )
  }
}

export default Landing