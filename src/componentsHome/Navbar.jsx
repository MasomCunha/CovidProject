import React from 'react';
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavOptions = ({ changeRequest, sortType }) => {

  
  const CovidCases = () => { changeRequest("cases") }

  const CovidDeaths = () => { changeRequest("deaths") }

  const CovidRecovered = () => { changeRequest("recovered") }

  const Largest = () => { sortType("Largest") }

  const Smallest = () => { sortType("Smallest") }

  return (
    <div>
      <Nav tabs>
        <NavItem style={{cursor:'pointer', background:'yellow' } } onClick = { CovidCases }>
          <NavLink>Cases</NavLink>
        </NavItem>
        <NavItem style={{cursor:'pointer', background:'red'}} onClick = { CovidDeaths }>
          <NavLink>Deaths</NavLink>
        </NavItem>
        <NavItem style={{cursor:'pointer', background:'green'}} onClick = { CovidRecovered }>
          <NavLink>Recovered</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style = {{background: "#654de5", color: "black"}}>
                Sort
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick = { Largest }>
                  Descending
                </DropdownItem>
                <DropdownItem onClick = { Smallest}>
                  Ascending
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
      </Nav>
    </div>
  );
}

export default NavOptions;