import './style.css';

export default function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">$30</p>
          <div className="product__rating">⭐⭐⭐</div>

          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
