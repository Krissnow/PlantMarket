import React, { useState } from "react";
import styles from "./CartComponent.module.css";
import CartEmpty from "./CartEmpty";

interface Plant {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartComponentProps {
  initialItems: Plant[]; // Początkowe rośliny w koszyku
}

const CartComponent: React.FC<CartComponentProps> = ({ initialItems }) => {
  const [cartItems, setCartItems] = useState<Plant[]>(initialItems);

  // Zwiększ ilość sztuk rośliny
  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Zmniejsz ilość sztuk rośliny
  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Oblicz całkowitą kwotę do zapłaty
  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cart}>
      <h2>Twój koszyk</h2>
      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.itemPrice}>{item.price} zł</span>
                <div className={styles.quantityControl}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <span className={styles.itemTotal}>
                  Razem: {(item.price * item.quantity).toFixed(2)} zł
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <h3>Całkowita kwota: {calculateTotal()} zł</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
