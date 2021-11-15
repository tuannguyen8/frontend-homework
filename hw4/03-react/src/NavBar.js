import './App.css';
import React from 'react';
import {  Link } from "react-router-dom";
//import * as ReactBootStrap from "react-bootstrap"
export default function navbar(){
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
    <li>
      <Link to="/houses">Houses</Link>
    </li>
  </div>

  );
}
