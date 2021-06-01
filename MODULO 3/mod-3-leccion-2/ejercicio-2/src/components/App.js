/* eslint-disable no-unused-vars */
import React from "react";
import './App.js';
import MediaCard from "./MediaCard";

class App extends React.Component {
  render() {
    return (
      <MediaCard  name='Patricia Vaquero' date='Lunes 31 de mayo de 2021'
      content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...' />

    );
  }
}

export default App;
