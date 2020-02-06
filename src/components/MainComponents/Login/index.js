import React, { useState } from 'react';
import InputText from '../../AuxiliarComponents/InputText';
import './styles.css';
import Button from './../../AuxiliarComponents/Button';
import {connect} from 'react-redux';


const Login = (props) => {
    const { users } = props.dataControl;

    const [user, updateUser] = useState('');
    const [password, updatePassword] = useState('');

    const login = () => {
        for (let item of users){
            console.log(item);
            if(item.name === user){
                if(item.password === password){
                    debugger
                    props.history.replace('/Gerenciador/Projetos', users);
                    return 0;
                }
            }
            debugger
        }
        alert('Invalid Login')
        return 0;        
    }

    console.log(props);
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
                    (value) => updatePassword(value)
                }
                labelValue="Senha"
            />

            <div className="ButtonsHoc">
                    <Button onClick={() => props.history.push('/CriaConta')}>Criar Conta</Button>

                    <Button onClick={() => login()}>Login</Button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    dataControl: state.dataControl,
});

export default connect(mapStateToProps)(Login);
