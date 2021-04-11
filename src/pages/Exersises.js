import React from 'react'
import ExerciseComponent from '../components/ExerciseComponent';
import Welcome from '../components/WelcomeComponent';
import ButtonComponent from '../components/ButtonComponent';
import Data from '../res/data.json'; // Se sustituyo por la api en server
import Loading from '../components/Loading';
import Error from '../pages/Error';

class Exersises extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null
        }
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();
            this.setState({ // seteamos el estado
                data,
                loading: false
            });
            console.log(data);
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    async componentDidMount() {
        await this.fetchExercises()
    }

    render () {
        if (this.state.loading)
            return <Loading />

        if (this.state.error)
            return <Error />

        return (
            <React.Fragment>
                <Welcome
                username='JD'
                />
                <ButtonComponent />
                <ExerciseComponent
                    exercises={this.state.data}
                />
            </React.Fragment>
        )
    }
}

export default Exersises;