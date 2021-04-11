import React from 'react';
import ButtonImg from '../images/add.png';
import './styles/Card.css';

function ButtonComponent(props) {
    return (
        <div>
            <img className='Fitness-Add' src={ButtonImg} />
        </div>
    )
}

export default ButtonComponent;