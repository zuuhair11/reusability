import React from 'react' ;


const MenuContext = React.createContext();

function Menu({ children }) {
    const [open, setOpen] = React.useState(false);

    function toggle() {
        setOpen(prevOpen => !prevOpen);
    }
    
    
    return (
        <MenuContext.Provider 
            value={{
                open: open,
                toggle: toggle
            }}
        >
            <div className="menu">
                { children }
            </div>
        </MenuContext.Provider>
        
    );
}


export { MenuContext } ;
export default Menu ;