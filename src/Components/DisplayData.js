import React, { useState } from "react";
import { Data } from "./Data";
import styles from "./DisplayData.module.css";

const DisplayData = ({ slide, handleSetSlide }) => {
  const length = Data.length;
  let clientX, clientY;

  const next = () => {
    handleSetSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const previous = () => {
    handleSetSlide(slide === 0 ? length - 1 : slide - 1);
  };

  const getCoordinates = (e) => {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  };

  const decideActionByCoordinates = () =>
    clientX <= 700 ? previous() : next();

  return (
    <section className={styles.slider}>
      <button className={styles["left-button"]} onClick={previous}>
        Prev
      </button>
      <button className={styles["right-button"]} onClick={next}>
        Next
      </button>
      {Data.map((item, index) => {
        return (
          slide === index && (
            <article className={styles.notes} key={index}>
              <img
                src={item.image}
                alt="logo"
                className={styles.image}
                onTouchStart={getCoordinates}
                onTouchEnd={decideActionByCoordinates}
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          )
        );
      })}
    </section>
  );
};

export default DisplayData;
