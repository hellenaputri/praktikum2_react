import React from 'react'
import Home from './pages/home'
import {Route,Switch} from 'react-router-dom'


export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        )
    }
}