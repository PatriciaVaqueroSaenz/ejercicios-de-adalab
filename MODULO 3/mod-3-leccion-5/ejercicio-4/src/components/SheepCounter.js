import React from 'react';

class SheepCounter extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        };
    
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(){
        this.setState((prevState, props) => {
            let prevValue = prevState.counter;
            let nextCounter = prevValue+1;
            return {
              counter: nextCounter
            };
        });

    }


    render() {
    return (
        <div className='content'>
            <p className='numberOfSheeps'>{this.state.counter}</p>
            <button onClick= {this.handleClick} className='button'>Add a Sheep</button>
        </div>
    );
  }
}


export default SheepCounter;