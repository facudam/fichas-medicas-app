import { Context } from "./Context"


export const ContextProvider = ({ children }) => {
    
    const pacientes = [];




    return(
        <Context.Provider  value={{ pacientes }} >
            { children }
        </Context.Provider>
    )
}