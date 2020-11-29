import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import FilmBox from './filmBox'

const StyledSelector = styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    top: 200px;
`;

const Selector = () => {

    const [films, setfilms] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_ADDRESS + '/films')
            .then((response) => response.json())
            .then((data) => setfilms(data));
    },[])

    return (
        <StyledSelector>
            <p>Films: </p>
            { films && films.map( (film, i) => (
                <FilmBox key={i} film={film}/>
            ))}
        </StyledSelector>
    )
}

export default Selector
