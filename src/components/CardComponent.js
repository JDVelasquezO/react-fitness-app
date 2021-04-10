import React from 'react';
import exerciseImg from '../images/exercise.png';
import './styles/Card.css';

class CardComponent extends React.Component {
    render() {
        return (
            <div className='card mx-auto Fitness-Card'>
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img className='float-right' src={exerciseImg} />
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1>Guías Tecnicas</h1>
                            <p>Parrafo de prueba que dice cualquier cosa</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardComponent;
