/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheet/App.css';


class HalfPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
        {this.props.children}
      </>
    );
  }
}

export default HalfPage;
