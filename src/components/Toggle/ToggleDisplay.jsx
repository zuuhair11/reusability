import { useContext } from 'react' ;
import { ToggleContext } from './Toggle' ;


function ToggleDisplay({ children }) {
    const { on } = useContext(ToggleContext);

    // This  chilren is actually a function that take an "on" argument
    // So the parent get render based on the value of the state
    return children(on);
};


export default ToggleDisplay ;
