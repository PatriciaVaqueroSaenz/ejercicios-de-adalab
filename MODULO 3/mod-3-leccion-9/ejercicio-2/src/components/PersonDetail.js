import React from 'react';


class PersonDetail extends React.Component {

    render() {
        return (
            <div>
            <h3>Nombre: {this.props.name}</h3>
            <img src={this.props.image} alt={this.props.data.name} />
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
