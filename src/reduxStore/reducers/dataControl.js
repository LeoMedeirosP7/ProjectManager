const {User, Project, Objective, Goal} = require('./../../classes');
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
    deleteGoal
} = require('./../actions/dataControl');

const initialState={
    users: []    
};

const dataControlReducer = (state=initialState, action) => {
    switch(action.type){
        case newUser:
            break;

        case deleteUser:
            break;

        case sortProjects:
            break;

        case newProject:
            break;

        case updateProject:
            break;

        case deleteProject:
            break;

        case sortObjetives:
            break;

        case newObjetive:
            break;

        case updateObjetive:
            break;

        case deleteObjetive:
            break;

        case sortGoals:
            break;

        case newGoal:
            break;

        case updateGoal:
            break;

        case deleteGoal:
            break;
        default:
            return state;
    }
};

export default dataControlReducer;