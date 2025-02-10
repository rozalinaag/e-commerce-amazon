import './style.css';
import back from './img/back.png';
import Product from '../../components/Product/Product';

export default function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="home__container">
          <img src={back} alt="background" className="home__image" />

          <div className="home__row">
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
