import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExerciseNewContainer from '../pages/ExerciseNewContainer';
import Exersises from '../pages/Exersises';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/exercise' component={Exersises} />
                <Route exact path='/exercise/new' component={ExerciseNewContainer} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;