import React from 'react'
import ExerciseComponent from '../components/ExerciseComponent';
import Welcome from '../components/WelcomeComponent';
import ButtonComponent from '../components/ButtonComponent';
import Data from '../res/data.json';

class Exersises extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: Data
        }
    }

    render () {
        return (
            <div>
                <Welcome
                username='JD'
                />
                <ExerciseComponent
                    exercises={this.state.data}
                />
                <ButtonComponent />
            </div>
        )
    }
}

export default Exersises;