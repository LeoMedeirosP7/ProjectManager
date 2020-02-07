import React, {useState} from 'react';
import InputText from './../../../AuxiliarComponents/InputText';
import Button from './../../../AuxiliarComponents/Button';
import Toolbar from './../../../AuxiliarComponents/Toolbar';
import Menu from './../../../AuxiliarComponents/Toolbar/Menu';
import './styles.css';

import {connect} from 'react-redux';
import {newProject} from './../../../../reduxStore/actions/dataControl';

const Info = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [concluded, setConcluded] = useState('');

    const {mode, method} = props.match.params;

    const addProjectHandler = () => {
        props.addProject(
            props.location.state.name,
            name,
            description
        );

        props.history.replace(`/Gerenciador/${mode}`, props.location.state);
    };
    
    return(
        <>
            <Toolbar 
                mode={mode}
                logout={() => props.history.replace('/')}
                showMenu={() => {
                    setShowMenu(!showMenu);
                    //disposição do menu
                }}
            />

            {
                showMenu ?
                    <Menu
                        mode={mode}
                        replace={() => props.history.replace('/info/Projetos/Add', props.location.state)} 
                        myProjects={() => props.history.replace('/Gerenciador/Projetos', props.location.state)}
                    />
                :
                    null
            }

            <InputText 
                exportValue={(value) => setName(value)}
                labelValue="Name"
                inputType="text"
            />

            <InputText 
                exportValue={(value) => setDescription(value)}
                labelValue="Description"
                inputType="text"
            />

            <div className="InfoHoc">
                <form className="Concluded">
                    <input 
                        className="Check" 
                        type="checkbox"
                        disabled={mode==="Projetos"} 
                    /> 
                    <span>Concluded</span>
                </form>
            
                <Button
                    onClick={
                        mode === "Projetos" ?
                            addProjectHandler
                        :
                            null
                    }
                >
                    {method} {mode.substr(0, mode.length -1)}
                </Button>
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    addProject: (username, name, description) => dispatch({type: newProject, username: username, name: name, description: description}),
});

export default connect(null, mapDispatchToProps)(Info);