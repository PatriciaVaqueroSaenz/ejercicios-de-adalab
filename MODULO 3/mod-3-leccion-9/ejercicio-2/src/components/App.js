import React from 'react';
import getDataFromApi from '../services/api';
import { Link, Route, Switch } from 'react-router-dom';
import PersonDetail from './PersonDetail'

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
      .map((user,index) => {
        return <li key={user.name}>
          <section>
              <Link to={`/child/${index}`}>{user.name}</Link>
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
        
        <Switch>
          <Route
            path="/child/:id"
            //:id es lo que se define en link como ${index}
            //de aqui sale routerProps.match.params.id
            render={(routerProps) => (
              <PersonDetail
                match={routerProps.match}
                data={this.state.users}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
