import React from 'react'
import CardComponent from '../components/CardComponent';
import Welcome from '../components/WelcomeComponent';

class Exersises extends React.Component {
    render () {
        return (
            <div>
                <Welcome
                username='JD'
                />
            
                <CardComponent 
                title='Guías Tecnicas'
                description='Parrafo de prueba que dice cualquier cosa'
                img='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
                leftColor='#A74CF2'
                rightColor='#617BFB'
                />
            </div>
        )
    }
}

export default Exersises;