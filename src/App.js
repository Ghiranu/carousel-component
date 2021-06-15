import React, { useState } from "react";
import DisplayData from "./Components/DisplayData";
import SlideNavigator from "./Components/SlideNavigator";

const App = () => {
  const [slide, setSlide] = useState(0);
  return (
    <section>
      <DisplayData slide={slide} handleSetSlide={setSlide} />
      <SlideNavigator slide={slide} handleSetSlide={setSlide} />
    </section>
  );
};

export default App;
