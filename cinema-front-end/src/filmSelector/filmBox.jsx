import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledFilmBox = styled.div`
    width: 100px;
    height: 200px;
    border: 1px solid black;
`;

const StyledTitle = styled.p`
    margin: 0 auto;
    display: block;
    position: relative;
`

const FilmBox = ({film}) => {

    let films = []

    useEffect(() => {
        fetch(process.env.REACT_APP_API_ADDRESS + '/films')
            .then((response) => response.json())
            .then((data) => films = data);
    },[])

    return (
        <StyledFilmBox>
            <StyledTitle>{film.title}</StyledTitle>
        </StyledFilmBox>
    )
}

export default FilmBox
