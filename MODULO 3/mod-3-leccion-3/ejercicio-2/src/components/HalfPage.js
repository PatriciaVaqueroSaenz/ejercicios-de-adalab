import React from 'react';
import '../stylesheet/App.css';


class HalfPage extends React.Component {
  render() {
    return (
      <div className={this.props.styling}>
        {this.props.children}
      </div>
    );
  }
}

export default HalfPage;
