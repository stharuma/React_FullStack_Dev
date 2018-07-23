import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  Container
} from 'reactstrap';

class AppNavbar extends Component{
  // constructor(props) {
  //    super(props);
  //    this.toggle = this.toggle.bind(this);
  //    this.state = {
  //      isOpen: false
  //    };
  //  }
  //  toggle() {
  //    this.setState({
  //      isOpen: !this.state.isOpen
  //    });
  //  }

   state = {
    isOpen: false
   };

   toggle = ()=> {
     this.setState({
       isOpen: !this.state.isOpen
     });
   }


   render() {
    return (
      <div>
        <Navbar color="light" light  expand="sm" className="mb-5">
          <Container> 
              <NavbarBrand href="/">Shopping List </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/stharuma">GitHub</NavLink>
                </NavItem>
              {/*  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>

                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
                </Nav>
              </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default AppNavbar;
