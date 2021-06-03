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
        this.setState((prevState) => {
            let prevValue = prevState.counter;
            let nextCounter = prevValue+1;
            return {
              counter: nextCounter
            };
        });

    }


    render() {
      const sheeps=[];
      for (let i = 0; i < this.state.counter; i++) {
        sheeps.push(
        <img 
        width='35px' 
        src='http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png' alt='sheep-cartoon'
        />)
      }
    return (
        <div className='content'>
            <p className='numberOfSheeps'>{this.state.counter}</p>
            <div className='sheepsContainer'>
            {sheeps}
            </div>
            <button onClick= {this.handleClick} className='button'>Add a Sheep</button>
            
        </div>
    );
  }
}


export default SheepCounter;