import React, { useState } from 'react';
import InputText from '../../AuxiliarComponents/InputText';
import './styles.css';
import Button from './../../AuxiliarComponents/Button';
import {NavLink} from 'react-router-dom';


const Login = (props) => {
    const [user, updateUser] = useState('');
    const [password, updatePassword] = useState('');

    return (
        <div className='LoginPage'>
            <InputText
                inputType="text"
                exportValue={(value) => updateUser(value)}
                labelValue="Usuário"
            />

            <InputText
                inputType="password"
                exportValue={
                    (value) => value
                }
                labelValue="Senha"
            />

            <div className="ButtonsHoc">
                <NavLink to='/Gerenciador/Projetos' className='Link'><Button>Login</Button></NavLink>
                
                <NavLink to='/CriaConta' className='Link'><Button>Criar Conta</Button></NavLink>
            </div>
        </div>
    );
};

export default Login;
