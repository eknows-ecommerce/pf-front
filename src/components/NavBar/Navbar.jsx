import { Link, Outlet } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { images } from '../../assets/img'
import Style from './navbar.module.css'

export default function Navbar() {
  return (
    <>
      <div className={Style.main}>
        <div className={Style.header}>
          <Link to="/">
            <img src={images.logo} alt="" />
          </Link>
          {/*<Link to="/create" ><button className={Style.btnH}> New Product </button></Link>*/}
          {/* <SearchBar /> */}

          <Link style={{ textDecoration: 'none', color: 'black' }} to="Home">
            <p className={Style.of}>Tienda</p>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="#MasVendidos"
          >
            <p className={Style.of}>Mas vendidos</p>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="#ofertas"
          >
            <p className={Style.of}>Ofertas</p>
          </Link>

          <h1 className={Style.title}></h1>
          <div className={Style.contIcons}>
            <Link to="#">
              <button className={Style.iconCart}>
                <FaShoppingCart />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}
