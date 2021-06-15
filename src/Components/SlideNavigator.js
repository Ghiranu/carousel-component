import React from "react";
import styles from "./SlideNavigator.module.css";
import { Data } from "./Data";

const SlideNavigator = ({ handleSetSlide }) => {
  return (
    <article className={styles.slider}>
      {Data.map((item, i) => {
        return (
          <button
            className={styles.dots}
            key={item.id}
            onClick={() => handleSetSlide(i)}
          />
        );
      })}
    </article>
  );
};

export default SlideNavigator;
