import React from 'react';
import ButtonImg from '../images/add.png';
import './styles/Card.css';
import { Link } from 'react-router-dom';

function ButtonComponent(props) {
    return (
        <div>
            <Link to='/exercise/new'>
                <img className='Fitness-Add' src={ButtonImg} />
            </Link>
        </div>
    )
}

export default ButtonComponent;