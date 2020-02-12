import React, {useState} from 'react';
import InputText from './../../../AuxiliarComponents/InputText';
import Button from './../../../AuxiliarComponents/Button';
import Toolbar from './../../../AuxiliarComponents/Toolbar';
import Menu from './../../../AuxiliarComponents/Toolbar/Menu';
import './styles.css';
import {connect} from 'react-redux';
import {actNewProject, actNewObjective, actNewGoal} from './../../../../reduxStore/actions/dataControl';

const Info = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [concluded, setConcluded] = useState('');

    const {mode, method} = props.match.params;

    const {addProject, addObjective, addGoal} = props;

    const addProjectHandler = () => {
        addProject(
            props.location.state.name,
            name,
            description
        );
        props.history.replace(`/Gerenciador/${mode}`, props.location.state);
    };

    const addObjectiveHandler = () => {
        const username = props.location.state.name;
        const projectName = props.location.state.project.name;

        addObjective(
            username,
            projectName,
            name,
            description
        );
        props.history.replace(`/Gerenciador/${mode}/${projectName}`, props.location.state);
    };

    const addGoalHandler = () => {
        const username = props.location.state.name;
        const projectName = props.location.state.project.name;
        const objectiveName = props.location.state.objective.name;

        addGoal(
            username,
            projectName,
            objectiveName,
            name,
            description
        );
        props.history.replace(`/Gerenciador/${mode}/${projectName}/${objectiveName}`, props.location.state);
    }

    let onClickButton = null;
    if(method === 'Add'){
        switch(mode){
            case 'Projetos':{
                onClickButton = addProjectHandler;
                break;
            }
            case 'Objetivos':{
                onClickButton = addObjectiveHandler;
                break;
            }
            case 'Metas':{
                onClickButton = addGoalHandler;
                break;
            }
            default:
                break;
        }
    }
    
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
                    onClick={onClickButton}
                >
                    {method} {mode.substr(0, mode.length -1)}
                </Button>
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    addProject: (username, name, description) => dispatch(
        actNewProject(username, name, description)
    ),
    addObjective: (username, project, name, description) => dispatch(
        actNewObjective(username, project, name, description)
    ),
    addGoal: (username, project, objective, name, description) => dispatch(
        actNewGoal(username, project, objective, name, description)
    ),
});

export default connect(null, mapDispatchToProps)(Info);