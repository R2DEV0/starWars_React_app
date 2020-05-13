import React, {useState} from 'react';
import { navigate } from '@reach/router';

const Home =(props) => {
    const{state, setState, id} = props;
    const[num, setNum] = useState('');


    const onChange = (e) => {
        id.num = e.target.value;
        setNum(id.num)
    }


    const selecter = (e) => {
        id.page = e.target.value;
        setState(id.page)
    }


    const onClick = (e) =>{
        e.preventDefault();
        navigate('/'+state+'/'+num);
    }


    return(
        <div className='container'>  
            <h1> Welcome to the Star Wars Search App</h1>      
                <label name='selectBar' style={{marginRight:'5px', marginTop: '30px'}}>Search For: </label>
                <select onChange={selecter}>
                    <option name='select' value=''>Select One</option>
                    <option name='people' value='people'>People</option>
                    <option name='planets' value='planets'>Planets</option>
                </select>
                <label name='inputBar'style={{marginLeft:'20px', marginRight:'5px'}}>ID: </label>
                <input type='number' onChange={onChange} />
                <input style={{marginLeft:'20px'}}className='btn btn-primary btn-md' type='button' onClick={onClick} value='Search' />
        </div>
    )}

export default Home;