import React, {Component} from 'react';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";


const mapStateToProps = state => ({
    weathers: state.weather
   });

const mapDispatchToProps = dispatch => ({
    
    search : dia => dispatch(ACTIONS.getDetail(dia))
    });


class Weather extends Component {

    componentWillMount() {
        this.props.search(this.props.match.params.day);
        }
    
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return(
            <div>
            Hola ince, por alguna razon no agarra los props y ademas hice todos los cambios desde el cel porque mi compu no agarro el cable ethernet
            <br/>
            Puede hacer console log al reducer en el getWeather y si funciona y todo hasta se agregan a los props, pero me da error
            <br/>
            Espero su comprension
            </div>
        )
    }

}

export default Weather;
