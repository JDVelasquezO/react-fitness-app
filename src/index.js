import React from 'react';
import ReactDom from 'react-dom';

const user = {
  first: 'JD',
  last: 'Velasquez',
  avatar: 'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'
};

function getName (user) {
  return `${user.first} ${user.last}`;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hola a {getName(user)}</h1>;
  }
  return <h1>Hola amigo</h1>;
}

const element = (
  <div>
    {getGreeting(user)}
    <img src={user.avatar} width='200px' />
  </div>
);

const container = document.getElementById('root');
ReactDom.render(element, container);
