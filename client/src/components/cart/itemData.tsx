import { Product } from "../../graphql/products";
import { priceToString } from "../products/item";

//장바구니 세부내역(이미지, 가격, 이름)
const ItemData = ({
  imageUrl,
  price,
  title,
}: Pick<Product, "imageUrl" | "price" | "title">) => (
  <div>
    <img className="cart-item__image" src={imageUrl} />
    <div className="product-information">
      <p className="cart-item__price">
        <label className="price-label">{priceToString(price)}</label>원
      </p>
    </div>
  </div>
);

export default ItemData;
