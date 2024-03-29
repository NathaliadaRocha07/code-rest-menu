import React from 'react';
//import "./style.css";

function menuContent() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link nav_pad active" aria-current="page" href="#">
          <span className="my_l my_h3 my_big">See order</span>
          <span className="my_p2 my_mg" style={{ paddingLeft: '10px'}}>03 items</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav_pad active" aria-current="page" href="#">
          <span className="my_l my_h3 my_big">back to menu</span>
        </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link nav_pad" aria-current="page" href="#">
          <span className="my_l my_h4 my_big">Contact</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav_pad active" aria-current="page" href="#">
          <span className="my_l my_h4 my_big">about the restaurant</span>
        </a>
      </li>
      <form className="d-flex nav_pad active">
        <input className="form-control form-control-lg me-2 my_p1 my_bg_d" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light my_p1" type="submit">OK</button>
      </form>
      <li className="nav-item my_l my_p2 text-end my_min ">
        powerded <a href="www.avcd.com" style={{ color: '#f1f1f1' }}>avcd.com</a>
      </li>
  </ul>
  );
}

export default menuContent;
