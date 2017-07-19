import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Home.css'
const BASE_URL = 'http://swapi.co/api/';



class Home extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],
        }
    }

    componentDidMount() {
        axios.get(BASE_URL + 'planets')
            .then(response => {
                console.log(response);
                this.setState({planets: response.data.results})
            })
    }

    render() {
        const planets = this.state.planets.map(planets => {
            return (
                <div className="About">
                    <Link className="Link-planet" to={planets/ + planets.name} key={planets.diameter} >
                        <h3 className="planet">Planet {planets.name}: {planets.climate}</h3>
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <h1>About SW Planets</h1>
                <br />
                <p>click here to find out more</p>
                <div className="planet-wrap">
                    {planets}
                </div>
            </div>
        )
    }
}

export default Home;