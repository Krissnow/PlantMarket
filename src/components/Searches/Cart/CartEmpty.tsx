import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImg from "../../../../public/emptyCart.png";
import style from "./CartEmpty.module.css";

const CartEmpty: React.FC = () => {
  return (
    <>
      <div className={`${style.cart} ${style["cart__empty"]}`}>
        <h2>Koszyk jest pusty 😕</h2>
        <p>
          Najprawdopodobniej nie masz żadnych zamówionych roślin.
          <br />
          Aby dodać roślinę do koszyka przejdź na stronę sklepu.
        </p>
        <img src={cartEmptyImg} alt="Empty cart" />
        <Link
          to="/shop"
          className={`${style.button} ${style["button__green"]}`}
        >
          <span>Powrót do sklepu</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
