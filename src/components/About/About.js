import React, { Component } from 'react'
import axios from 'axios'
import './About.css'
const BASE_URL = 'http://swapi.co/api/';


class About extends Component {
    constructor() {
        super();
        this.state = {
            planet: {}
        }
    }
    componentDidMount() {
        const id = parseInt(this.props.match.params.name)
        console.log(id);
        axios.get(BASE_URL + 'planets')
            .then( response=> {
                const planetData = response.data.results;
                const planetName = planetData.find(planet=>{
                    return planet.name === id;
                })
                this.setState( {
                    planet: planetName
                })
            })
    }
    render() {
        const {planet} = this.state;
        return (
            <div className="planet-container">
                <h2>{planet.name}</h2>
                <div className="about">
                    <h1>About this planet</h1>
                    <h4>Rotation Period {planet.rotation_period}</h4>
                    <h4> gravity {planet.gravity}</h4>
                    <h4>population {planet.population}</h4>
                </div>
            </div>
        )
    }

}

export default About;