import React from "react";

class Colapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(ev) {
    this.setState({
      isClosed: !this.state.isClosed,
    });
  }

  render() {
    const content = this.state.isClosed ? "" : this.props.from;
    return (
      <>
        <li key={this.props.id} className="list">
          <h2>{this.props.name}</h2>
          <button
            className="iconButton"
            id={this.props.i}
            onClick={this.handleClick}
          >
            <i className="fas fa-plus"></i>
          </button>
        </li>
        <p>{content}</p>
      </>
    );
  }
}

export default Colapsable;
