import React from 'react';


class PersonDetail extends React.Component {
  
  renderProductoDetail (match) {
    const routerPersonId = match.params.id;
    const personFound = data.find(user => user.id === routerPersonId);
    if (personFound) {
      return user={personFound};
    } else {
      return '';
    }
  };
    
  render() {
        return (
            <div>
            <h3>Nombre: {this.user.name}</h3>
            <img src={this.person.image} alt={this.person.name} />
              <ul>
                <li>Género: {this.props.data.gender}</li>
                <li>Email: {this.props.data.email}</li>
                <li>Nick: {this.props.data.username}</li>
                <li>Ciudad: {this.props.data.city}</li>
                <li>País: {this.props.data.country}</li>
                <li>Edad: {this.props.data.age}</li>
              </ul>
            </div>

);
}
}

export default PersonDetail;
