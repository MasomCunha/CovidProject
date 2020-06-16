import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavOptions = ({ changeRequest }) => {

  const CovidCases = () => { changeRequest("cases") }

  const CovidDeaths = () => { changeRequest("deaths") }

  const CovidRecovered = () => { changeRequest("recovered") }
 
  

  return (
    <div>
      <Nav tabs>
        <NavItem style={{cursor:'pointer'}} onClick = { CovidCases }>
          <NavLink>Cases</NavLink>
        </NavItem>
        <NavItem style={{cursor:'pointer'}} onClick = { CovidDeaths }>
          <NavLink>Deaths</NavLink>
        </NavItem>
        <NavItem style={{cursor:'pointer'}} onClick = { CovidRecovered }>
          <NavLink>Recovered</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavOptions;