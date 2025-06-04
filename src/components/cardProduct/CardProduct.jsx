import { incCart, decCart, removeCart } from "../../context/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import CartForm from "./CartForm";
import './CardProduct.css'

function CartProduct({ data }) {
  let dispatch = useDispatch();

  return (
    <div className="container">
      <div className="cart__wrapper">
        <div className="cart__products">
          {data.map((product) => (
            <div key={product.id} className="cart__item">
              <Link to={`product/${product.id}`} className="cart__item-left">
                <img src={product.url} alt={product.title} />
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <p>Kategoriya: {product.category}</p>
                </div>
              </Link>
              <div className="cart__item-right">
                <div className="cart__item-btns">
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() => dispatch(decCart(product))}
                  >
                    -
                  </button>
                  <button>{product.quantity}</button>
                  <button onClick={() => dispatch(incCart(product))}>+</button>
                </div>
                <div className="product-cart-prices">
                  <button
                    onClick={() => dispatch(removeCart(product))}
                    className="cart__trash-btn"
                  >
                    <FaRegTrashAlt />
                  </button>
                  <h3>{product.price} som</h3>
                  <p> {product.price * product.quantity} som</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__register">
          <CartForm data={data} />
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
