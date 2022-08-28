import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './pages/SignIn';
import Blog from './pages/Blog';
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <SignIn />
                    </Route>
                    <Route exact path="/home">
                        <Blog />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;