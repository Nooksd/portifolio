import { createStore } from 'redux';
import { darkTheme } from '../config/Colors';

const initialState = {
    theme: darkTheme,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MODE': {
            return {theme: action.theme};
        }

        default: {
            return state;
        }
    }
}

const store = createStore(reducer);

export default store;