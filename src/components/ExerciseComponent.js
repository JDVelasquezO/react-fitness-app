import React from 'react';
import CardComponent from './CardComponent';

function ExerciseComponent(props) {
    return (
        <div>
            {
                props.exercises.map((excercise) => {
                    return (
                        <CardComponent 
                        title={excercise.title}
                        description={excercise.description}
                        img={excercise.img}
                        leftColor={excercise.leftColor}
                        rightColor={excercise.rightColor}
                        />
                    )
                })
            }
        </div>
    )
}

export default ExerciseComponent;