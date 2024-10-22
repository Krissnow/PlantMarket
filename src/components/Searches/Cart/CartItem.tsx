import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  minusItem,
  removeItem,
  TCartItem,
} from "../../../redux/slices/cartSlice";
import style from "./CartItem.module.css";

type CartItemProps = {
  id: string;
  title: string;
  fullTitle: string;
  price: number;
  imageUrl: string;
  size: string;
  count: number;
};

const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, title, fullTitle, size, price, count, imageUrl } = props;
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as TCartItem)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={style.cart__item}>
      <div className={style.cart__item_img}>
        <img className={style.plant_block__image} src={imageUrl} alt="Plant" />
      </div>
      <div className={style.cart__item_info}>
        <h3>{title}</h3>
        <p>
          {fullTitle}, {size} cm.
        </p>
      </div>
      <div className={style.cart__item_count}>
        <button
          disabled={count === 1}
          onClick={count > 1 ? onClickMinus : undefined}
          className={`${style.button} ${style.button__outline} ${style.button__circle} ${style.cart__item_count_minus}`}
        >
          -
        </button>
        <b>{count}</b>
        <button
          onClick={onClickPlus}
          className={`${style.button} ${style.button__outline} ${style.button__circle} ${style.cart__item_count_plus}`}
        >
          +
        </button>
      </div>
      <div className={style.cart__item_price}>
        <b>{price * count} zł</b>
      </div>
      <div className={style.cart__item_remove}>
        <button
          onClick={onClickRemove}
          className={`${style.button} ${style.button__outline} ${style.button__circle}`}
        ></button>
      </div>
    </div>
  );
};
export default CartItem;
