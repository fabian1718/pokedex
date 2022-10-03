import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pokeUser } from '../store/slices/user.slice';
import pika from '../assets/img/pika.png'
import '../login.css'

const Login = () => {

    const { register, handleSubmit } = useForm();

    const dispacth = useDispatch();

    const navigate = useNavigate();

    const onToGo = (data) => {
        dispacth(pokeUser(data.name));
        navigate('/pokedex')
    }

    return (
        <form className='form' onSubmit={handleSubmit(onToGo)}>
            <div className="welcome">
                <h1>Bienvenido a la pokedex</h1>
            </div>
            <div className="container-img-login" >
                <img className='img-login' src={pika} alt="" />
            </div>
            <div className="container-input">
                <h2>Ingresa tu nombre</h2>
                <input
                    className="input-login" 
                    type="text" 
                    id='name'
                    required
                    placeholder="Nombre"
                    {...register("name")}
                
                />
            </div>

            <div className="container-input">
                <button className="btn-login">Ingresar</button>
            </div>

        </form>
    );
};

export default Login;