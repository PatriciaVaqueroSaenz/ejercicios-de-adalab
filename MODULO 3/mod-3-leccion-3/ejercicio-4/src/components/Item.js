import React from "react";
import PropTypes from 'prop-types';


class Item extends React.Component {
  render() {
    return (
      <>
        <p className="quantity">Cantidad: {this.props.quantity}</p>
        <p>Nombre: {this.props.name}</p>
        <p>Descripción: {this.props.description}</p>
        <p>Categoría: {this.props.category}</p>
        <p>Precio: {this.props.price}€</p>
      </>
    );
  }
}

Item.defaultProps = {
  description: "No hay descripción"
};
Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Item;