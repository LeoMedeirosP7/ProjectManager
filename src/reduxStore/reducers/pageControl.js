const {
    changeAutenticated,
    changeMode,
    setUser
} = require('./../actions/pageControl');

const initialState = {
    isAutenticated: false,
    mode: '',
    user: null
};

const pageControlReducer = (state=initialState, action) => {
    switch(action.type){
        case changeAutenticated:
            break;

        case changeMode:
            break;

        case setUser:
            break;
        
        default:
            break;
    }
};

export default pageControlReducer;