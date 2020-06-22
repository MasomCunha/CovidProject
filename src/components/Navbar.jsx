import React from 'react';
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavOptions = ({ changeRequest, changeList, sortType }) => {

  
  const CovidCases = () => { changeRequest("cases") }

  const CovidDeaths = () => { changeRequest("deaths") }

  const CovidRecovered = () => { changeRequest("recovered") }

  const Largest = () => { sortType("Largest") }

  const Smallest = () => { sortType("Smallest") }
  
  const ShowAll = () => { changeList(true) }

  return (
    <div>
      <Nav tabs>
        <NavItem style={{cursor:'pointer', background:'#ff9933' } } onClick = { ShowAll }>
          <NavLink>All</NavLink>
        </NavItem>
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
              <DropdownToggle nav caret>
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