import React from "react";

class Item extends React.Component {
  render() {
    return (
      <>
        <p className="quantity">Cantidad: {this.props.quantity}</p>
        <div>
          <p>Nombre: {this.props.name}</p>
          <p>Descripción: {this.props.description}</p>
        </div>
        <p>Categoría: {this.props.category}</p>
        <p className="price">Precio: {this.props.price}€</p>
      </>
    );
  }
}

Item.defaultProps = {
  description: "No hay descripción"
};

export default Item;