import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './navbar.css';

// render: function() {
//         var targetOfGreeting = "world";
//         return <div>Hello, { targetOfGreeting }!</div>;
//     }

class NavBar extends Component {
  render() {
    // network="tumblr"
    var urls = [
      'https://www.linkedin.com/in/darwiche2005/',
      'https://github.com/alidarwiche',
      'https://www.instagram.com/whenknights/'
    ];
    return (
      <div className="NavBar">
        <header className="NavBar-header">
          <h1 className="NavBar-title">Ali M. Darwiche</h1>
          <SocialIcon url={urls} />
          <select className="NavBar-dropdown">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </header>
      </div>
    );
  }
}

export default NavBar;
