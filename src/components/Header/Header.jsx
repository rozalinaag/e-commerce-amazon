import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import logo from './img/logoAmazon.png';
import './Header.css';

export default function Header() {
  return (
    <div className="wrapper">
      <div className="header__logo">
        <img src={logo} alt="" width="150" />
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello, sign in</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <div className="nav__itemBasket">
          <span className="nav__itemLineOne">
            <ShoppingBasketIcon className="itemBasket" />
          </span>
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
