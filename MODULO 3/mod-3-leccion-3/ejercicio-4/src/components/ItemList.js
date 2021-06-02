import React from "react";
import Item from "./Item.js";

const items = [
  {
    index: 0,
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    index: 1,
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    index: 2,
    quantity: 2,
    category: "Bebida",
    price: "a"
  }
];

class ItemList extends React.Component {
    render() {
      const ArrayItems = items
        .map((item) => {
          return (
            <li key={item.index}>
              <Item 
              name={item.name} 
              description={item.description} 
              quantity={item.quantity} 
              category={item.category} 
              price={item.price} />
            </li>
          );
        });
      return <ul className="item-list">{ArrayItems}</ul>;
    }
}

export default ItemList;