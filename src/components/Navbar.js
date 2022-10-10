import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'
import './me.css';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-whitee p-0 text-monospace oswald " >
      <a
        className="navbar-brand col-sm-3 col-md-2 mr-0 oswald "
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        
      >
        <img src={box} width="250" height="155" className="align-top margin-l mb-0 pb-0 " alt="" />
        
      </a>
      <ul className="navbar-nav px-4 mb-1">
        <li className='oswald'>
          <div id="account">
            <a target="_blank"
               alt=""
               className="blackk fs-3 text shadow-sm p-3 mb-5 bg-body rounded"
               rel="noopener noreferrer"
               href={"https://etherscan.io/address/" + this.props.account}>
              {this.props.account ? this.props.account.substring(0,6) : "0x0"}{this.props.account ? this.props.account.substring(6,42) : "0x0"}
            </a>
          </div>
          {/* { this.props.account
            ? <img
                alt=""
                className='ml-2'
                width='40'
                height='40'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
            : <span></span>
          } */}
        </li>
      </ul>
    </nav>
  );
}
}

export default Navbar;