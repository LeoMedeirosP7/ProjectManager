export const newUser = 'NEW_USER';
export const actNewUser = (username, password) => ({
    type: newUser, username, password
});

export const deleteUser = 'DELETE_USER';

//-----------------------------------------------------------------------------
export const onSortEndProject = 'ON_SORT_END_PROJECT';
export const actOnSortEndProject = (oldIndex, newIndex, username) => ({
    type: onSortEndProject, 
    username: username,
    oldIndex: oldIndex, 
    newIndex: newIndex
});

export const newProject = 'NEW_PROJECT';
export const actNewProject = (username, name, description) => ({
    type: newProject,
    username: username,
    name: name,
    description: description
});

export const updateProject = 'UPDATE_PROJECT';

export const deleteProject = 'DELETE_PROJECT';
export const actDeleteProject = (username, project) => ({
    type: deleteProject, 
    username: username, 
    project: project
});

//-----------------------------------------------------------------------------

export const onSortEndObjectives = 'ON_SORT_END_OBJECTIVES';
export const actOnSortEndObjectives = (oldIndex, newIndex, username, project) => ({
    type: onSortEndObjectives, 
    username: username,
    project: project,
    oldIndex: oldIndex, 
    newIndex: newIndex
});

export const newObjetive = 'NEW_OBJECTIVE';
export const actNewObjective = (username, project, name, description) => ({
    type: newObjetive,
    username: username,
    project: project,
    name: name,
    description: description
});

export const updateObjetive = 'UPDATE_OBJECTIVE';

export const deleteObjetive = 'DELETE_OBJECTIVE';
export const actDeleteObjective = (username, project, objective) => ({
    type: deleteObjetive, 
    username: username, 
    project: project,
    objective: objective
});

//------------------------------------------------------------------------------

export const onSortEndGoals = 'ON_SORT_END_GOALS';
export const actOnSortEndGoals = (oldIndex, newIndex, username, project, objective) => ({
    type: onSortEndGoals, 
    username: username,
    project: project,
    objective: objective,
    oldIndex: oldIndex, 
    newIndex: newIndex
});

export const newGoal = 'NEW_GOAL';
export const actNewGoal = (username, project, objective, name, description) => ({
    type: newGoal,
    username: username,
    project: project,
    objective: objective,
    name: name,
    description: description
});

export const updateGoal = 'UPDATE_GOAL';


export const deleteGoal = 'DELETE_GOAL';
export const actDeleteGoal = (username, project, objective, goal) => ({
    type: deleteGoal, 
    username: username, 
    project: project,
    objective: objective,
    goal: goal
});

export const setGoal = 'SET_GOAL';
