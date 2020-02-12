import React, { useState } from 'react';
import InputText from '../../AuxiliarComponents/InputText';
import './styles.css';
import Button from './../../AuxiliarComponents/Button';
import Toolbar from './../../AuxiliarComponents/Toolbar';
import {connect} from 'react-redux';


const Login = (props) => {
    const { users } = props.dataControl;

    const [user, updateUser] = useState('');
    const [password, updatePassword] = useState('');

    const login = () => {
        for (let item of users){
            if(item.name === user){
                if(item.password === password){
                    props.history.replace('/Gerenciador/Projetos', item);
                    return 0;
                }
            }
        }
        alert('Invalid Login')
        return 0;        
    }

    return (
        <>
            <Toolbar />
            <div className='LoginPage'>
                <InputText
                    inputType="text"
                    exportValue={(value) => updateUser(value)}
                    labelValue="Usuário" 
                />

                <InputText
                    inputType="password"
                    exportValue={
                        (value) => updatePassword(value)
                    }
                    labelValue="Senha"
                />

                <div className="ButtonsHoc">
                        <Button onClick={() => props.history.push('/CriaConta')}>Criar Conta</Button>

                        <Button onClick={() => login()}>Login</Button>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    dataControl: state.dataControl,
});

export default connect(mapStateToProps)(Login);
