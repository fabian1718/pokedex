import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    };

    return (
        <div className='header'>
            <div onClick={back} className='back'>
                <i className="fa-solid fa-chevron-left"></i>
                <p>regresar</p>
            </div>
            <div className='back'>
                <img className='img-header' src="https://images.genial.ly/583d491cba1aa639b083159f/1e3b359a-3d13-429e-8411-cd52d2d689b4.png" alt="" />
                <h2>Pokedex</h2>
            </div>
            
        </div>
    );
};

export default Header;