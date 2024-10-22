import React from "react";
import CartEmpty from "./CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItems,
  selectCart,
  TCartItem,
} from "../../../redux/slices/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import style from "./CartComponent.module.css";

const CartComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: { count: number }) => sum + item.count,
    0
  );

  const onClickClear = () => {
    if (window.confirm("Opróżnić kosz?")) {
      dispatch(clearItems());
    }
  };

  if (items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className={`${style.container} ${style.container__cart}`}>
      <div className={style.cart}>
        <div className={style.cart__top}>
          <h2 className={style.content__title}>Koszyk</h2>
          <button onClick={onClickClear} className={style.cart__clear}>
            <span>Wyczyść kosz</span>
          </button>
        </div>
        <div className={style.content__items}>
          {items.map((item: TCartItem) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className={style.cart__bottom}>
          <div className={style.cart__bottom_details}>
            <span>
              Roślin razem: <b>{totalCount} szt.</b>
            </span>
            <span>
              Calkowita kwota: <b>{totalPrice} zł</b>
            </span>
          </div>
          <div className={style.cart__bottom_buttons}>
            <Link
              to="/"
              className={`${style.button} ${style.button__outline} ${style.button__add} ${style.go_back_btn}`}
            >
              <span>Wróć</span>
            </Link>
            <div className={`${style.button} ${style.pay_btn}`}>
              <span>Opłacić</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
