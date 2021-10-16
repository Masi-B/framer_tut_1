import React, { Component } from "react";
import { MenuList } from "./MenuList";
import './NavBar.css'

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    
  render() {
    return (
      <nav className="navItems">
        <h1 className="navLogo">
          Masimba Banda
          <i className="masi"></i>
        </h1>
        <div className="menuIcon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 
      'nav-menu'}>
          {MenuList.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
