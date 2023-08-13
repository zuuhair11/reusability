import { createContext, useState } from 'react' ;


const ToggleContext = createContext();

function Toggle({ children }) {
    const [on, setOn] = useState(false);

    function toggle() {
        setOn( prevOn => !prevOn );
    }
    

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
