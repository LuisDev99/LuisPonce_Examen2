import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            msj1: 'Bienvenido',
            msj2: 'Weather App'
        }
    }

    intercalar = () => {
        let temp = (this.state.msj1 === 'Bienvenido') ? 'Weather App' : 'Bienvenido';
        let temp2 = (this.state.msj2 === 'Bienvenido') ? 'Weather App' : 'Bienvenido';

        this.setState({
            msj1: temp,
            msj2: temp2
        });
    }

    render(){

        return(
            <div>
                <h1>{this.state.msj1}</h1>
                <h1>{this.state.msj2}</h1>

                <Button onClick={this.intercalar} color="primary">Intercalar</Button>

                <ul>
                    <li>
                        <Link to="/Weather/March/20">Weather for March 20</Link>
                    </li>
                    <li>
                        <Link to="/Weather/March/21">Weather for March 21</Link>
                    </li>
                    <li>
                        <Link to="/Weather/March/22">Weather for March 22 </Link>
                    </li>
                    <li>
                        <Link to="/Weather/March/23">Weather for March 23</Link>
                    </li>
                </ul>   


                
            </div>
        )
    }
}


export default Home;
