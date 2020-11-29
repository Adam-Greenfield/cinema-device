import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledFilmBox = styled.div`
    width: 100px;
    height: 200px;
    border: 1px solid black;
    display: inline-block;
    margin: 60px 40px 0;
`;

const StyledTitle = styled.p`
    margin: 0 auto;
    display: block;
    position: relative;
`

const FilmBox = ({film}) => {


    useEffect(() => {

    },[])

    return (
        <StyledFilmBox>
            <StyledTitle>{film.title}</StyledTitle>
        </StyledFilmBox>
    )
}

export default FilmBox
