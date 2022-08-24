import { Context } from "./Context"


export const ContextProvider = ({ children }) => {

    let river = 'descendido'


    return(
        <Context.Provider  value={{ river }} >
            { children }
        </Context.Provider>
    )
}