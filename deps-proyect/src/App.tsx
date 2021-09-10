import React, {useEffect} from "react";
import Register from "./pages/Register/Register";
import {ToastContainer} from 'react-toastify';
import { Route, Switch, useHistory} from 'react-router-dom';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    const history = useHistory();

    useEffect(() => {
        history.push('/register');
        
    });

    return (
        <>
            <Switch>
                <Route exact path='/register' component={Register}/>
            </Switch>
            <ToastContainer/>
        </>
    );
}

export default App;