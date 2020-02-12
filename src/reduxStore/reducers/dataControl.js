const {User, Project, Objective, Goal} = require('./../../classes');
const arrayMove = require('array-move');
const {
    newUser, 
    deleteUser, 
    onSortEndProject,
    newProject,
    updateProject,
    deleteProject,
    onSortEndObjectives,
    newObjetive,
    updateObjetive,
    deleteObjetive,
    onSortEndGoals,
    newGoal,
    updateGoal,
    deleteGoal,
} = require('./../actions/dataControl');

const initialState={
    users: []    
};

const dataControlReducer = (state=initialState, action) => {
    switch(action.type){
        
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

        
        
        case onSortEndProject:{
            const users = [...state.users];
            for(let user of users){
                if(user.name === action.username){
                    let arr = [...user.projects];
                    arr = arrayMove( arr, action.oldIndex, action.newIndex );
                    user.projects=arr;
                    return {
                        ...state,
                        users: users 
                    }
                }
            }
            return state;
        }

        case newProject:{
            const users = [...state.users];
            for(let user of users){
                if(action.username === user.name){
                    const {username, name, description} = action;
                    user.projects.push(new Project(username, name, description, false));
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
            for(let user of users){
                if(action.username === user.name){
                    let index = 0
                    for(let project of user.projects){
                        if(action.project === project.name){
                            user.projects.splice(index, 1);
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

        



        case onSortEndObjectives:{
            const users = [...state.users];
            for(let user of users){
                if(user.name === action.username){
                    for(let project of user.projects){
                        if(project.name === action.project){
                            let arr = [...project.objectives];
                            arr = arrayMove( project.objectives, action.oldIndex, action.newIndex );
                            project.objectives=arr;
                            return {
                                ...state,
                                users: users 
                            }
                        }
                    }
                }
            }
            return state;
        }

        case newObjetive:{
            const users = [...state.users];
            for(let user of users){
                if(action.username === user.name){
                    for(let projectIt of user.projects){
                        if(projectIt.name === action.project){
                            const {username, project, name, description} = action;
                            projectIt.objectives.push(new Objective(username, project, name, description, false));
                            return{
                                ...state,
                                users: users
                            }
                        }
                    }
                }
            }
            return state;
        }

        case updateObjetive:{
            break;
        }

        case deleteObjetive:{
            const users = [...state.users];
            for(let user of users){
                if(action.username === user.name){
                    for(let project of user.projects){
                        if(action.project === project.name){
                            let index = 0;
                            for(let objective of project.objectives){
                                if(objective.name === action.objective){
                                    let arr = [...project.objectives];
                                    arr.splice(index, 1);
                                    project.objectives = arr;
                                    return {
                                        ...state,
                                        users: users
                                    }
                                }
                                index ++;
                            }
                        }
                    }
                }
            }
            return state;
        }



        case onSortEndGoals:{
            const users = [...state.users];
            for(let user of users){
                if(user.name === action.username){
                    for(let project of user.projects){
                        if(project.name === action.project){
                            for(let objective of project.objectives){
                                let arr = [...objective.goals];
                                arr = arrayMove( arr, action.oldIndex, action.newIndex );
                                objective.goals=arr;
                                return {
                                    ...state,
                                    users: users 
                                }
                            }
                        }
                    }
                }
            }
            return state;
        }

        case newGoal:{
            const users = [...state.users];
            for(let i of users){
                if(action.username === i.name){
                    for(let projectIt of i.projects){
                        if(projectIt.name === action.project){
                            for(let objectiveIt of projectIt.objectives){
                                if(objectiveIt.name === action.objective){
                                    const {username, project, objective, name, description} = action;
                                    objectiveIt.goals.push(new Goal(username, project, objective, name, description, false));
                                    return{
                                        ...state,
                                        users: users
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return state;
        }

        case deleteGoal:{
            const users = [...state.users];
            for(let user of users){
                if(action.username === user.name){
                    for(let project of user.projects){
                        if(action.project === project.name){
                            for(let objective of project.objectives){
                                if(action.objective === objective.name){
                                    for(let goal of objective.goals){
                                        let index = 0;
                                        if(action.goal === goal.name){
                                            let arr = [...objective.goals];
                                            arr.splice(index, 1);
                                            objective.goals = arr;
                                            return {
                                                ...state,
                                                users: users
                                            }
                                        }
                                        index ++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return state;
        }

        case updateGoal:{
            break;
        }

        
        default:
            return state;
    }
};

export default dataControlReducer;