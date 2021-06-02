/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheet/App.css';


class HalfPage extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="half-page">
        {this.props.children}
      </div>
    );
  }
}

export default HalfPage;
