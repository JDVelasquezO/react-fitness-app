import React from 'react';
import ReactDom from 'react-dom';
import CardComponent from './components/CardComponent';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
ReactDom.render(<CardComponent />, container);
