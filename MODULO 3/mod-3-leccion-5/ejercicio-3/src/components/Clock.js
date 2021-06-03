import React from 'react';

class Clock extends React.Component {
  
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds()
        };
    
        setInterval(
          () => { this.updateClock() },
          1000);
    
        this.updateClock = this.updateClock.bind(this);
    }
    
    updateClock() {
        const date = new Date();
        this.setState({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds()
        })
      }
  
  
    render() {
    return (
        <div>
          <p>Hora: {this.state.hours}:{this.state.minutes}:{this.state.seconds}
          </p>
  
        </div>
      );
  }
}


export default Clock;