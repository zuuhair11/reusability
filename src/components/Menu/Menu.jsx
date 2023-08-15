import { createContext } from 'react' ;
import useToggle from '../../hooks/useToggle' ;


const MenuContext = createContext();

function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle({ onToggle: onOpen});


    return (
        <MenuContext.Provider
            value={{
                open: open,
                toggleOpen: toggleOpen
            }}
        >
            <div className='menu'>
                { children }
            </div>
        </MenuContext.Provider>  
    );
}


export { MenuContext } ;
export default Menu ;
