import react, { createContext, useContext, useReducer } from 'react'

// mempersiapkan data layer
export const StateContext = createContext();

// membungkus data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// dorong informasi dari data layer
export const useStateValue = () => useContext(StateContext);