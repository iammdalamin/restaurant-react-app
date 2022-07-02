import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillGoogleSquare,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <nav className="container">
      <div className="nav-ico">
        <a href="/">Restaurant</a>
      </div>
      <div className={!toggleMenu ? "nav-links mobile-nav-links" : "nav-links"}>
        <ul>
          <li className="nav-link" style={{ "--i-": 1 }}>
            <Link to="/order-page">Delivery</Link>
          </li>
          <li className="nav-link" style={{ "--i-": 2 }}>
            <Link to="/about-page">About us</Link>
          </li>
          <li className="nav-link" style={{ "--i-": 3 }}>
            <Link to="/menu-page">Menu</Link>
          </li>
          <li className="nav-link" style={{ "--i-": 4 }}>
            <Link to="/contact-page">Contacts</Link>
          </li>
          <li className="nav-link" style={{ "--i-": 5 }}>
            <button>Sign In</button>
          </li>
        </ul>
      </div>
      <div
        className={
          !toggleMenu ? "social-link mobile-social-link" : "social-link"
        }
      >
        <ul>
          <li style={{ "--i-": 1 }}>
            <a href="/">
              <i>
                <AiFillFacebook />
              </i>
            </a>
          </li>
          <li style={{ "--i-": 2 }}>
            <a href="/">
              <i>
                <AiFillTwitterSquare />
              </i>
            </a>
          </li>
          <li style={{ "--i-": 3 }}>
            <a href="/">
              <i>
                <AiFillGoogleSquare />
              </i>
            </a>
          </li>
          <li style={{ "--i-": 4 }}>
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
      <div className="res-ico">
        {toggleMenu ? (
          <CgMenu
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <MdClose
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
      </div>
    </nav>
  );
};
