import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import InputText from './../../AuxiliarComponents/InputText';
import Button from './../../AuxiliarComponents/Button';
import './styles.css';

const CreateAccount = (props) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    
    return(
        <>
            <InputText 
                exportValue={(value) => setUsername(value)}
                inputType="text"
                labelValue="Usuario"
            />

            <InputText 
                exportValue={(value) => setPassword(value)}
                inputType="password"
                labelValue="Senha"
            />

            <InputText 
                exportValue={(value) => setPasswordConfirm(value)}
                inputType="password"
                labelValue="Confirma Senha"
            />

            <div className='CreateAccountButtonHoc'>
                <NavLink className='CreateAccountLink' to='/'>
                    <Button>Criar Conta</Button>
                </NavLink>
            </div>
        </>
    );
};

export default CreateAccount;