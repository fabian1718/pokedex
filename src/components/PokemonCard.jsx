import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const [ pokemon, setPokemon ] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(url)
            .then(res => setPokemon(res.data))
    },[])

    const toGoDetail = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <div className='card' onClick={toGoDetail}>
            <img className='img-card' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <h2>{pokemon.name}</h2>
            <p>Altura: <b>{pokemon.height}</b> cm</p>
            <p>Peso: <b>{pokemon.weight}</b> gramos</p>
        </div>
    );
};

export default PokemonCard;