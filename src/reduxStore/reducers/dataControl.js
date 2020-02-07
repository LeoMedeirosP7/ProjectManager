const {User, Project, Objective, Goal} = require('./../../classes');
const arrayMove = require('array-move');

const {
    newUser, 
    deleteUser, 
    newProject,
    updateProject,
    deleteProject,
    sortObjetives,
    newObjetive,
    updateObjetive,
    deleteObjetive,
    sortGoals,
    newGoal,
    updateGoal,
    deleteGoal,
    onSortEndProject
} = require('./../actions/dataControl');

const initialState={
    users: []    
};

const dataControlReducer = (state=initialState, action) => {
    switch(action.type){
        case onSortEndProject:{
            debugger
            const users = [...state.users];
            for(let item of users){
                if(item.name === action.username){
                    const arr = item.projects;
                    arrayMove( item.projects, action.oldIndex, action.newIndex );
                    return {
                        ...state,
                        users: users
                    }
                }
            }
            return state;
        }
     
        case newUser: {
            const curData = [...state.users];
            const {username, password} = action;
            const newUserCreated = new User(username, password);
            curData.push(newUserCreated);
            return {
                ...state,
                users: curData
            }
        }

        case deleteUser:{
            break;
        }            

        case newProject:{
            const users = [...state.users];

            for(let i of users){
                if(action.username === i.name){
                    const {username, name, description} = action;
                    i.projects.push(new Project(username.name, name, description, false));
                    return{
                        ...state,
                        users: users
                    }
                }
            }
            return state;
        }

        case updateProject:{
            break;
        }

        case deleteProject:{
            const users = [...state.users];
            for(let item of users){
                if(action.username === item.name){
                    for(let project of item.projects){
                        let index = 0
                        if(action.project === project){
                            item.projects.splice(index, 1);
                            debugger
                            return {
                                ...state,
                                users: users
                            }
                        }
                        index ++;
                    }
                }
            }
            return state;
        }

        case sortObjetives:{
            break;
        }

        case newObjetive:{
            break;
        }

        case updateObjetive:{
            break;
        }

        case deleteObjetive:{
            break;
        }

        case sortGoals:{
            break;
        }

        case newGoal:{
            break;
        }


        case updateGoal:{
            break;
        }

        case deleteGoal:{
            break;
        }
        
        default:
            return state;
    }
};

export default dataControlReducer;