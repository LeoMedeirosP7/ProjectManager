const {User, Project, Objective, Goal} = require('./../../classes');
const arrayMove = require('array-move');

const {
    newUser, 
    deleteUser, 
    sortProjects,
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
            let x = 0;
            for(let item of state.users){
                if(item === action.username){
                    const users = [...state.users];
                    users[x] = arrayMove(users[x], action.oldIndex, action.newIndex);

                    return {
                        ...state,
                        users: users
                    }
                }
                x++;
            }
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

        case sortProjects:{
            break;
        }
            

        case newProject:{
            break;
        }

        case updateProject:{
            break;
        }

        case deleteProject:{
            break;
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