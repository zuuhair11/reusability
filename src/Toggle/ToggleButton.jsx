import { useContext } from 'react' ;
import { ToggleContext } from './Toggle' ;


function ToggleButton({ children }) {
    const { toggle } = useContext(ToggleContext);


    return (
        <button 
            onClick={ toggle }
        >
            { children }
        </button>
    );
}


export default ToggleButton ;
