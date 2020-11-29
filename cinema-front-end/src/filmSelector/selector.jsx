import React, {useEffect, useState} from 'react';
import FilmBox from './filmBox'

const Selector = () => {

    let films = []

    useEffect(() => {
        fetch(process.env.REACT_APP_API_ADDRESS + '/films')
            .then((response) => response.json())
            .then((data) => films = data);
    },[])

    return (
        <div>
            { films && films.map(( film ) => {
                <FilmBox film={film}/>
            }) }
        </div>
    )
}

export default Selector
