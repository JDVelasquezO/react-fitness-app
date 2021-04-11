import React from 'react'
import ExerciseNew from '../pages/ExerciseNew';

class ExerciseNewContainer extends React.Component {
    state = {
        form: {
            title: '',
            description: '', 
            leftColor: '', 
            rightColor: '', 
            img: ''
        },
        loading: false,
        error: null
    }
    handleChange = (e) => {
        // console.log(`${e.target.name}: ${e.target.value}`);
        // Forma Larga
        // let partialState = {};
        // partialState[e.target.name] = e.target.value;
        // this.setState(partialState);

        // Forma Corta
        this.setState({
            form: {
                ...this.state.form, // Con esto le decimos que mantenga todo lo que tenía
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault();
        try {
            // Preparamos datos de la peticion
            let config = {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:8000/api/exercises', config);
            let json = await res.json();
            console.log(json);
            this.setState({
                loading: false
            })

            this.props.history.push('/exercise')
        } catch (error) {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        return <ExerciseNew 
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
        />
    }
}

export default ExerciseNewContainer;