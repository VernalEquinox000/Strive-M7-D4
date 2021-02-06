import { createStore } from 'redux'
import rootReducer from '"../reducers'

const initialState = {
    jobSearch: {
        jobs: []
    }
}



export default function ConfigureStore() {

    return createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );

}
