import React from 'react';
import '../stylesheet/App.css';

class MIMIMITranslator extends React.Component {
  render() {
    return (
      <p className="text">{this.props.value.replace(/[aeiou-áéíóú]/ig, 'i')}</p>
    );
  }
}

export default MIMIMITranslator;