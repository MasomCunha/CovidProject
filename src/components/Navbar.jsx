import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavOptions = ({ changeRequest, changeList}) => {

  const CovidCases = () => { changeRequest("cases") }

  const CovidDeaths = () => { changeRequest("deaths") }

  const CovidRecovered = () => { changeRequest("recovered") }
 
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
      </Nav>
    </div>
  );
}

export default NavOptions;