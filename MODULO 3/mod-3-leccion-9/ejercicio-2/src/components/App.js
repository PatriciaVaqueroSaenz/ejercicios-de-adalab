import React from 'react';
import getDataFromApi from '../services/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filterCity: '',
      filterGender: '',
      isLoading: true
    };

    getDataFromApi().then(data => {
      console.log(data);
      this.setState({
        users: data,
        isLoading: false
      });
    });

    this.handleFilterCity = this.handleFilterCity.bind(this);
    this.handleFilterGender = this.handleFilterGender.bind(this);
  }

  handleFilterCity (ev) {
    this.setState({
      filterCity: ev.target.value
    });
  }

  handleFilterGender(ev) {
    this.setState({
      filterGender: ev.target.value
    });
  }

  renderSeriesList() {
    
    return this.state.users
      .filter(user => {
        return user.city.toLowerCase().includes(this.state.filterCity.toLowerCase());
      })
      .filter(user => {
        return user.gender.toLowerCase().includes(this.state.filterGender.toLowerCase());
      })
      .map(user => {
        return <li key={user.name}>
          <section>
              <h3>Nombre: {user.name}</h3>
              <img src={user.image} alt={user.name} />
              <ul>
                <li>Género: {user.gender}</li>
                <li>Email: {user.email}</li>
                <li>Nick: {user.username}</li>
                <li>Ciudad: {user.city}</li>
                <li>País: {user.country}</li>
                <li>Edad: {user.age}</li>
              </ul>
            </section>
          
          </li>;
      });
  }

  render() {
    return (
      <div>
        <h1>React Linkedin</h1>
        <p>{this.state.isLoading ? 'Cargando..' : ''}</p>

        <input type="text" onChange={this.handleFilterCity} placeholder="filter by city" />
        <input type="text" onChange={this.handleFilterGender} placeholder="filter by gender" />

        <ul>{this.renderSeriesList()}</ul>
      </div>
    );
  }
}

export default App;
