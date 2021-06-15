import React from 'react';

const UserDetail = props => {
  return (
    <div className="card">
      <span className="modal__close icon fas fa-times"></span>
      <header>
        <h2>{props.user.name}</h2>
      </header>
      <section>
        <img className="card__img" src={props.user.image} alt={props.user.name} />
        <h4 className="card__title">{props.user.name}</h4>
        <ul className="ml-1 mt-1">
          <li>Género: {props.user.gender}</li>
          <li>Email: {props.user.email}</li>
          <li>Nick: {props.user.username}</li>
          <li>Ciudad: {props.user.city}</li>
          <li>País: {props.user.country}</li>
        </ul>
      </section>
    </div>
  );
};

export default UserDetail;
