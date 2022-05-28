import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGoogleSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";

import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="container">
      <div className="nav-ico">
        <a href="/">Restaurant</a>
      </div>
      <div className="nav-links">
        <ul>
          <li className="nav-link">
            <a href="/">Delivery</a>
          </li>
          <li className="nav-link">
            <a href="/">About us</a>
          </li>
          <li className="nav-link">
            <a href="/">Menu</a>
          </li>
          <li className="nav-link">
            <a href="/">Contacts</a>
          </li>
          <li className="nav-link">
            <button>Sign In</button>
          </li>
        </ul>
      </div>
      <div className="social-link">
        <ul>
          <li>
            <a href="/">
              <i>
                <AiFillFacebook />
              </i>
            </a>
          </li>
          <li>
            <a href="/">
              <i>
                <AiFillTwitterSquare />
              </i>
            </a>
          </li>
          <li>
            <a href="/">
              <i>
                <AiFillGoogleSquare />
              </i>
            </a>
          </li>
          <li>
            <a href="/">
              <i>
                <AiFillLinkedin />
              </i>
            </a>
          </li>
        </ul>

        <a href="/" className="cart-ico">
          <i>
            <BsHandbag />
          </i>
        </a>
      </div>
    </nav>
  );
};
