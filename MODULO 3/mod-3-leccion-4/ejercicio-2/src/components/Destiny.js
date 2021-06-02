import React from "react";

class Destiny extends React.Component {
  render() {
    const onClickListener = ev => {
        alert(`Tu destino es viajar a ${ev.target.value}`);
      
    };
    
    return (
        <select onChange={onClickListener}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
    );
  }
}

export default Destiny;
