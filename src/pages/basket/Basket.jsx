import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import CardProduct from "../../components/cardProduct/CardProduct";

function Cart() {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  return (
    <div className="products-basket">
      {cart.length ? (
        <CardProduct data={cart} />
      ) : (
        <Empty
        url={"https://olcha.uz/_nuxt/cart.DYGF4swC.png"}
        title={"Savatchangiz bo'sh"}
        desc={"Lekin siz uni har doim to'ldirishingiz mumkin"}
        btnTitle={"Asosiy sahifaga"}
        />
      )}
    </div>
  );
}

export default Cart;
