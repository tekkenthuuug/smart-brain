import React from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';

class ProfileIcon extends React.Component {
  constructor(props) {
    super();
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  handleSignOut = () => {
    this.props.onRouteChange('signout');
    const token = sessionStorage.getItem('token');
    sessionStorage.removeItem('token');
    fetch('http://localhost:3000/signout', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
  };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={this.state.dropdownOpen}>
            <img src="http://tachyons.io/img/logo.jpg" alt="Profile icom" className="br-100 ba h3 w3 dib" />
          </DropdownToggle>
          <DropdownMenu
            right={true}
            className="b--transparent shadow-5"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)', right: '0px' }}
          >
            <DropdownItem onClick={this.props.toggleModal}>View profile</DropdownItem>
            <DropdownItem onClick={this.handleSignOut}>Sign out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
