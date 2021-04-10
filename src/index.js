import React from 'react';
import ReactDom from 'react-dom';
import CardComponent from './components/CardComponent';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
ReactDom.render(<CardComponent 
  title='Guías Tecnicas'
  description='Parrafo de prueba que dice cualquier cosa'
  img='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
  leftColor='#A74CF2'
  rightColor='#617BFB'
/>, container);
