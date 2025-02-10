import './style.css';

export default function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">$30</p>
          <div className="product__rating">⭐⭐⭐</div>

          <img
            src="https://m.media-amazon.com/images/I/71Bx4JWyDSL._AC_SX466_.jpg"
            alt="skirt"
            width="200"
          />

          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}
