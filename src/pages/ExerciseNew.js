import React from 'react'
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/CardComponent';

class ExerciseNew extends React.Component {
    state = {
        form: {
            title: '',
            description: '', 
            leftColor: '', 
            rightColor: '', 
            img: ''
        }
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

    render() {
        return (
            <div className='row'>
                <div className='col-sm'>
                    <Card 
                        { ...this.state.form }
                    />
                </div>

                <div className='col-sm'>
                    <ExerciseForm 
                        onChange={this.handleChange}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }
}

export default ExerciseNew;