import React from "react";

class OnionHater extends React.Component {
  render() {
    const onClickListener = ev => {
      if(ev.target.value=== "cebolla"){
        alert('ODIO LA CEBOLLA');
      }
    };
    
    return (
        <textarea onChange={onClickListener}></textarea>
    );
  }
}

export default OnionHater;
