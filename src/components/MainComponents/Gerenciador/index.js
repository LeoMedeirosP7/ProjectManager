import React, {useState} from 'react';
import Toolbar from './../../AuxiliarComponents/Toolbar';
import Mark from './Mark';
import Menu from './../../AuxiliarComponents/Toolbar/Menu';

import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import './styles.css';

import {connect} from 'react-redux';
import * as Actions from './../../../reduxStore/actions/dataControl';


const Gerenciador = (props) => {

    const {
        onSortEndRedux,
        users,
        removeProject
    }=props;

    const onSortEnd = (itens, oldIndex, newIndex) => {
        onSortEndRedux(oldIndex, newIndex, props.location.state.name);
    }

    const returnProjects = () =>{
        const name = props.location.state.name;
        for(let item of users){
            if(item.name === name){
                return item.projects;
            }
        }
        return [];
    }

    const projectList = returnProjects(); 

    const markRemove = (value) => {
        removeProject(props.location.state.name, value.name);
        setChanger(!changer);
    }

    const SortableItem = SortableElement(
        ({value}) => (
            <Mark 
                mark={value}
                remove={() => markRemove(value)}
            />
        )
    );

    const SortableList = SortableContainer(
        ({itens}) => {
            return (
                <ul className="MarkList">
                    {itens.map(
                        (value, index) => (
                            <SortableItem key={`item=${value.name}`} index={index} value={value} />
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
                    showMenu ? 
                        <Menu 
                            mode={props.match.params.mode} 
                            replace={() => props.history.replace('/info/Projetos/Add', props.location.state)}
                            myProjects={() => props.history.replace('/Gerenciador/Projetos', props.location.state)}
                        />
                    :
                        null
                }

                <SortableList itens={projectList} onSortEnd={onSortEnd}/>
            </div>
        </>
    );
};


const mapStateToProps = state => ({
    users: state.dataControl.users
});

const mapDispatchToProps = dispatch => ({
        onSortEndRedux: (oldIndex, newIndex, username) => dispatch( {
            type: Actions.onSortEndProject, 
            username: username,
            oldIndex: oldIndex, 
            newIndex: newIndex
        }),
        removeProject: (username, project) => dispatch({
            type: Actions.deleteProject, 
            username: username, 
            project: project
        })
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Gerenciador);