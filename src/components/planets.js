import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Planets =(props) => {
    const {num} = props;
    const [results, setResults] =useState([])


useEffect(() => {
    axios.get('https://swapi.dev/api/planets/'+num)
    .then(resp => { 
        setResults(resp.data)
    })
    .catch(err => {console.log(err)})
},[]);


    return(
        <div className= 'container' style={{border: '1px solid black', width: '500px', textAlign: 'center', marginTop:'50px'}}>
            <h1 style={{fontWeight:'bold'}}>PLANET</h1>
            <h3>{results.name}</h3>
            <h5>Climate: {results.climate}</h5>
            <h5>Terrain: {results.terrain}</h5>
            <h5>Surface Water: {results.surface_water}%</h5>
            <h5>Population: {results.population}</h5>
            <br/>
            <Link to='/'>Back Home</Link>
        </div>
    )
}

export default Planets;