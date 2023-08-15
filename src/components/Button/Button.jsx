import { createContext, useState } from 'react' ;


const ToggleButton = createContext();

function Button({  children, isSquare }) {
    const [square, setSquare ] = useState(isSquare);

    function toggle() {
        setSquare( prevSquare => !prevSquare );
    }

    return (
        <ToggleButton.Provider
            value={{
                square: square,
                toggle: toggle
            }}
        >
            <div className='badge-container'>
                { children }
            </div>
        </ToggleButton.Provider>
    );
}


export { ToggleButton } ;
export default Button ;
