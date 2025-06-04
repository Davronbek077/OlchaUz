import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";

function Likes() {
  let likes = useSelector((state) => state.likes.value);

  return (
    <div className="h-80">
      {!likes.length ? (
        <Empty
        likePhoto={"https://olcha.uz/_nuxt/empty-img.CsNCz2BZ.png"}
        likeTitle={"Sevimli mahsulotlar yo'q"}
        />
      ) : (
        <Product data={likes} />
      )}
    </div>
  );
}

export default Likes;
