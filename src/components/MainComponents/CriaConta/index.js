import React, {useState} from 'react';
import InputText from './../../AuxiliarComponents/InputText';
import Button from './../../AuxiliarComponents/Button';
import './styles.css';
import { connect } from 'react-redux';
import * as Actions from './../../../reduxStore/actions/dataControl';

const CreateAccount = (props) => {
    const {
        newUser,
        data
    } = props;
    
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const createAccount = () => {
        if(password === passwordConfirm){
            if(data.users.indexOf({name: userName}) === -1){
                newUser(userName, password);
                alert('New user created :D');
                props.history.replace('/');
                return 0;
            }
            else{
                alert('Type other username.');
            }
        }
        else{
            alert("These passwords isn't equals");
        }
        props.history.replace('/CriaConta');
        return 0;
    }
    
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
                <Button 
                    onClick={() => createAccount()}
                > 
                    Criar Conta
                </Button>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    data: state.dataControl,
});

const mapDispatchToProps = dispatch => ({
    newUser: (username, password) => dispatch({type: Actions.newUser, username, password})
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);