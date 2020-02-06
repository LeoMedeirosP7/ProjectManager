import React, {useState} from 'react';
import Toolbar from './../../AuxiliarComponents/Toolbar';
import Mark from './Mark';
import Menu from './../../AuxiliarComponents/Toolbar/Menu';

import {SortableContainer, SortableElement} from 'react-sortable-hoc';

import * as Styles from './styles';

import {connect} from 'react-redux';
import * as Actions from './../../../reduxStore/actions/dataControl';

const {
    MarkList,
} = Styles;

const Gerenciador = (props) => {
    const {
        onSortEnd,
        users
    }=props;



    const returnProjects = () =>{
        const name = props.location.state[0].name;
        for(let item of users){
            if(item.name === name){
                return item.projects;
            }
        }
        return [];
    }

    const projectList = returnProjects();
    


    const SortableItem = SortableElement(
        ({value}) => <Mark markName={value} />
    );

    const SortableList = SortableContainer(
        ({itens}) => {
            return (
                <MarkList>
                    {itens.map(
                        (value, index) => (
                            <SortableItem key={`item=${value}`} index={index} value={value} />
                        )
                    )}
                </MarkList>
            );
        }
    );

    const [showMenu, setShowMenu] = useState(false);
    
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

            {
                showMenu ? 
                    <Menu />
                :
                    null
            }

            <SortableList itens={projectList} onSortEnd={onSortEnd}/>
        </>
    );
};


const mapStateToProps = state => ({
    users: state.dataControl.users
});

const mapDispatchToProps = dispatch => ({
        onSortEnd: (oldIndex, newIndex, username) => dispatch( {
                type: Actions.onSortEndProject, 
                username: username,
                oldIndex: oldIndex, 
                newIndex: newIndex
            }
        )
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Gerenciador);