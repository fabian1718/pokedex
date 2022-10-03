import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';
import '../pokedex.css'

const Pokedex = () => {

    const user = useSelector(state => state.user)

    const [ inputValue, setInputValue ] = useState("");

    const [ pokemones, setPokemones ] =useState([]);

    const [ typeList, setTypeList ] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155`)
            .then(res => setPokemones(res.data.results))

            axios
                .get(`https://pokeapi.co/api/v2/type`)
                .then(res => setTypeList(res.data.results))
    },[])

    const elementSearch = inputValue.toLowerCase()

    const shearchPokemon = () => {
            navigate(`/pokedex/${elementSearch}`)
    }

    const shearchType = (typeUrl) => {
        axios
            .get(typeUrl)
            .then(res => setPokemones(res.data.pokemon))
    }
    
    const [page, setPage] = useState(1);
    const cantPokemones = 12;
    const secondIndex = page * cantPokemones;
    const firtIndex = secondIndex - cantPokemones;

    const pagesPokemones = pokemones.slice(firtIndex, secondIndex); // paginacion
    
    const totalPages = Math.ceil(pokemones.length / cantPokemones); // redonde para aboajo

    const pagesNumbers = [];

    for (let i = 1; i < totalPages; i++) {
            pagesNumbers.push(i)
    }

    return (
        <div className='conatainer'>
            <Header />
            <div className='hello'>
                <p>Hola, <b style={{color:'red'}}>{user}</b> escoge tu pokemon favorito !</p>
            </div>

            <div className='container-pokedex'>
                <div>
                    <button 
                        onClick={() =>setPage(page-1)}
                        disabled = { page ===1 }                
                        >
                            anterior

                        </button>
                        {
                            pagesNumbers.map(page => (
                                    <button className='btn-page' onClick={() => setPage(page)}>{page}</button>
                            ))
                        }

                    <button 
                        onClick={() =>setPage(page+1)}
                        disabled = { page ===  totalPages}
                        >
                            Siguiente
                        </button>
                </div>
                
                <div className='search'>
                    <input 
                        type="text" 
                        placeholder='Buscar por nombre'
                        value={inputValue}
                        onChange= {e => setInputValue(e.target.value)}
                    />
                    <button onClick={shearchPokemon}>Buscar</button>
                </div>
                
                <div className='select'>
                    <select onChange={e => shearchType(e.target.value)}>
                    <option value="">Seleccionar por tipo</option>
                        {
                            typeList.map(type => (
                                <option value={type.url} key={type.url}>{type.name}</option>
                            ))
                        }
                
                    </select>
                </div>
                
                <div className='grid'>
                    {// cambia pokemones por pages ya que tiene el metodo para paginar
                        pagesPokemones.map(pokemon => (
                            <PokemonCard url={pokemon.url ? pokemon.url : pokemon.pokemon.url} key={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Pokedex;