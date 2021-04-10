import React from 'react'
import './styles/Card.css';

function Welcome(props) {
    return(
        <div className='container'>
            <div className='Fitness-User-Info'>
                <h1>Hola {props.username}</h1>
                <p>Esto es una prueba desde un componente funcional</p>
            </div>
        </div>
    );
}

export default Welcome;
