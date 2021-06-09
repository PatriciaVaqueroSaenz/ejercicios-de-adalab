import "../stylesheet/App.scss";
import React from "react";
import palettes from "../data/palettes.json";
import Colapsable from "./Colapsable";

function App() {
  return palettes.map((palette, index) => {
    return (
      <Colapsable
        key={index}
        id={index}
        from={palette.from}
        name={palette.name}
      />
    );
  });
}

export default App;
