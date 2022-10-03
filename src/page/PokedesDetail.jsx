import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import Header from '../components/Header';


const PokedesDetail = () => {

    const { id } = useParams();

    const [ pokemonSelect, setPokemonSelect ] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemonSelect(res.data))
    },[])

    console.log(pokemonSelect)

    return (
        <div className='container-p'>
            <Header />
            <div className='container-detail'>
                <h1>{pokemonSelect.name}</h1>
                <img className='img-detail' src={pokemonSelect.sprites?.other.dream_world.front_default} alt="" />
                <div className='exp'>
                    <p>Altura: <b>{pokemonSelect.height}</b> cm</p>
                    <p>Peso: <b>{pokemonSelect.weight}</b> gramos</p>
                </div>
                <Detail url={pokemonSelect.species?.url}/>
            </div>
        </div>
    );
};

export default PokedesDetail;