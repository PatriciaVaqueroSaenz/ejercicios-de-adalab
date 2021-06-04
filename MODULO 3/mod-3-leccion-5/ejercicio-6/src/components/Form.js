import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(ev){
    console.log(this.props);
    this.props.handleChangeLifting(ev.target.name,ev.target.value)
  }
  
  
  render() {

    return (
        <form className='content'>
            <label className='label'>
              Nombre
              <input 
              name="firstName" 
              type="text" 
              className='input' 
              onChange = {this.handleChange}/>
            </label>
              
            <label className='label'>
              Apellido
              <input 
              name="lastName" 
              type="text" 
              className='input' 
              onChange = {this.handleChange}/>
            </label>
            
            <p>Fecha de Nacimiento:</p>
            <label className='label'>
              Día
              <input 
              name="day" 
              type="number" 
              className='input' 
              min='1' 
              max='31'
              onChange = {this.handleChange}/>
            </label>
            
            <label className='label'>
              Mes
              <input 
              name="month" 
              type="number" 
              className='input' 
              min='1' 
              max='12'
              onChange = {this.handleChange}/>
            </label>
            
            <label className='label'>
              Año
              <input 
              name="year" 
              type="number" 
              className='input'
              min='1900' 
              max='2021'
              onChange = {this.handleChange}/>
            </label>
        </form>
    );
  }
}


export default Form;