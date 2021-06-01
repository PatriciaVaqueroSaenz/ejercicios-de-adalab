import React from "react";

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    //se puede hacer asi 
        //width={this.props.width !== null ? this.props.width:400} 
        //height={this.props.height !== null ? this.props.height:200}
        //src={`http://lorempixel.com/${width}/${height}/cats/${randomCat}`}

    return (
      <a href="http://lorempixel.com">
        <img
          src={`http://lorempixel.com/400/200/cats/${randomCat}`}
          alt="Random cat"
          width={this.props.width !== null ? this.props.width:400} 
          height={this.props.height !== null ? this.props.height:200}
        />
      </a>
    );
  }
}

export default RandomCat;