import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const People =(props) => {
    const {num} = props;
    const [results, setResults] =useState([])


useEffect(() => {
    axios.get('https://swapi.dev/api/people/'+num)
    .then(resp => { 
        setResults(resp.data)
    })
    .catch(err => {console.log(err)})
},[]);

    return(
        <div className= 'container' style={{border: '1px solid black', width: '500px', textAlign: 'center', marginTop:'50px'}}>
            <h1 style={{fontWeight:'bold'}}>PERSON</h1>
            <h3>{results.name}</h3>
            <h5>Height: {results.height}</h5>
            <h5>Hair Color: {results.hair_color}</h5>
            <h5>Eye Color: {results.eye_color}</h5>
            <h5>Skin Color: {results.skin_color}</h5>
            <br/>
            <Link to='/'>Back Home</Link>
        </div>
    )
}

export default People;