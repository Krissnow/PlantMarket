import React from "react";
import styles from "./NotFound.module.css";

const NotFoundComponent: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>☹️</span>
        <br />
        Ups! Strona nie została znaleziona
      </h1>
      <p className={styles.description}>
        Przepraszamy, nie mamy takiej strony..
      </p>
    </div>
  );
};

export default NotFoundComponent;
