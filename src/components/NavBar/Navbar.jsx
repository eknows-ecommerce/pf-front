import React, { useEffect, useState } from 'react'
// import SearchBar from "./SearchBar";
import { Link, NavLink } from 'react-router-dom'
// import { useAuth0 } from "@auth0/auth0-react";
import { FaShoppingCart } from 'react-icons/fa'
import logo2 from '../../assets/logo2.png'
import Style from './navbar.module.css'
// import { Login } from '../Users/LogIn';

//--------------CART-USER--------------
// import { useDispatch, useSelector } from 'react-redux';
// import { addCartToBack, getCartbyUser } from '../redux/actions'
// import Admin from "../Admin/Admin";
export default function Navbar() {
  return (
    <div className={Style.main}>
      <div className={Style.header}>
        <Link to="#Landing">
          <img src={logo2} alt="" />
        </Link>
        {/*<Link to="/create" ><button className={Style.btnH}> New Product </button></Link>*/}
        {/* <SearchBar /> */}

        <Link style={{ textDecoration: 'none', color: 'black' }} to="#Home">
          <p className={Style.of}>Tienda</p>
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to="#MasVendidos"
        >
          <p className={Style.of}>Mas vendidos</p>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="#ofertas">
          <p className={Style.of}>Ofertas</p>
        </Link>

        <h1 className={Style.title}></h1>
        <div className={Style.contIcons}>
          <Link to="">
            <button className={Style.iconCart}>
              <FaShoppingCart />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
