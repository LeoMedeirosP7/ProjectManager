import React, {useState} from 'react';
import Toolbar from './../../AuxiliarComponents/Toolbar';
import Mark from './Mark';
import Menu from './../../AuxiliarComponents/Toolbar/Menu';

import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import './styles.css';
import {connect} from 'react-redux';
import * as dataControlActions from './../../../reduxStore/actions/dataControl';


const Gerenciador = (props) => {
    debugger
    const {
        onSortEndProject,
        onSortEndObjective,
        onSortEndGoal,
        users,
        removeProject,
        removeObjective,
        removeGoal
    } = props;

    const findMark = (mark=[], name='') => {
        debugger
        for(let item of mark){
            if(item.name === name)
                return item;
        }
    }
    const user = findMark(users, props.location.state.name);
    let currentMarks = null;
    let markClick = null;
    let markRemove=null;
    let onSortEnd=null;
    let locationMenu = null;

    switch(props.match.params.mode){
        case 'Projetos': {
            currentMarks=user.projects;
            markClick = (value) => props.history.push(`/Gerenciador/Objetivos/${value.name}`, user);

            //for remove projects
            markRemove = (value) => {
                removeProject(user.name, value.name);
                setChanger(!changer);
            };

            onSortEnd = ({oldIndex, newIndex}) => {
                onSortEndProject(oldIndex, newIndex, props.location.state.name);
            }
            locationMenu = props.location.state;
            break;
        }

        case 'Objetivos': {
            const project = findMark(user.projects, props.match.params.projectId);
            currentMarks = project.objectives;
            markClick=(value) => props.history.push(`/Gerenciador/Metas/${project.name}/${value.name}`, user);

            markRemove = (value) => {
                removeObjective(user.name, project.name, value.name);
                setChanger(!changer);
            };

            onSortEnd = ({oldIndex, newIndex}) => {
                debugger
                onSortEndObjective(oldIndex, newIndex, props.location.state.name, project.name);
                debugger
            }

            locationMenu = {...props.location.state, project};
            break;
        }

        case 'Metas': {
            const project = findMark(user.projects, props.match.params.projectId);
            const objective = findMark(project.objectives, props.match.params.objectiveId);
            currentMarks = objective.goals;
            markClick=null;

            markRemove = (value) => {
                removeGoal(user.name, project.name, objective.name, value.name);
                setChanger(!changer);
            }

            onSortEnd = ({oldIndex, newIndex}) => {
                onSortEndGoal(oldIndex, newIndex, props.location.state.name, project.name, objective.name);
            }

            locationMenu = {...props.location.state, project, objective};
            break;
        }
        default:
            break;
    }


    const SortableItem = SortableElement(
        ({value}) => (
            <Mark 
                mark={value}
                remove={() => markRemove(value)}
                click={
                    markClick != null ?
                        () => markClick(value)
                    :
                        null
                }
            />
        )
    );

    const SortableList = SortableContainer(
        ({itens}) => {
            return (
                <ul className="MarkList">
                    {itens.map(
                        (value, index) => (
                            <SortableItem 
                                key={`item=${value.name}`} 
                                index={index} 
                                value={value} 
                            />
                        )
                    )}
                </ul>
            );
        }
    );

    const [showMenu, setShowMenu] = useState(false);
    const [changer, setChanger] = useState(false);
    debugger
    return(
        <>
            <Toolbar 
                mode={props.match.params.mode}
                logout={() => props.history.replace('/')}
                showMenu={() => {
                    setShowMenu(!showMenu);
                    //disposição do menu
                }}
            />
            <div className="HocPage">
                {
                    //universalizar botão de adicionar e criar botão Info nos Marks
                    showMenu ? 
                        <Menu 
                            mode={props.match.params.mode} 
                            replace={() => props.history.replace(`/info/${props.match.params.mode}/Add`, locationMenu)}
                            myProjects={() => props.history.replace('/Gerenciador/Projetos', props.location.state)}
                        />
                    :
                        null
                }
                <SortableList itens={currentMarks} onSortEnd={onSortEnd} distance={1} />
            </div>
        </>
    );
};

const {
    actOnSortEndProject,
    actOnSortEndObjectives,
    actOnSortEndGoals,
    actDeleteProject,
    actDeleteObjective,
    actDeleteGoal,
} = dataControlActions;

const mapStateToProps = state => ({
    users: state.dataControl.users
});

const mapDispatchToProps = dispatch => ({
        onSortEndProject: (oldIndex, newIndex, username) => dispatch( 
            actOnSortEndProject(oldIndex, newIndex, username)
        ),

        onSortEndObjective: (oldIndex, newIndex, username, project) => dispatch(
            actOnSortEndObjectives(oldIndex, newIndex, username, project)
        ),

        onSortEndGoal: (oldIndex, newIndex, username, project, objective) => dispatch(
            actOnSortEndGoals(oldIndex, newIndex, username, project, objective)
        ),


        removeProject: (username, project) => dispatch(
            actDeleteProject (username, project)
        ),
        removeObjective: (username, project, objective) => dispatch(
            actDeleteObjective(username, project, objective)
        ),
        removeGoal: (username, project, objective, goal) => dispatch(
            actDeleteGoal(username, project, objective, goal)
        ),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Gerenciador);