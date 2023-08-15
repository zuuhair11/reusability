import { createContext, useState, useEffect, useRef } from 'react' ;
import useEffectOnUpdate from '../../hooks/useEffectOnUpdate' ;
import useToggle from '../../hooks/useToggle' ;


const ToggleContext = createContext();

function Toggle({ children, onToggle = () => {} }) {
    const [on, toggle] = useToggle();

    useEffectOnUpdate(onToggle, [on]);
    

    return (
        <ToggleContext.Provider
            value={{
                on: on,
                toggle: toggle
            }}
        >
            { children }
        </ToggleContext.Provider>
    );
}


export { ToggleContext } ;
export default Toggle ;
