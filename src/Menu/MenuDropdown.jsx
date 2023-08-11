import { Children, cloneElement } from 'react' ;
function MenuDropdown({ children, open }) {

    
    // Conditionally render its contents based on the value of the open prop.
    // Let's say I want to pass also the "open" to the MenuItem
    return open && (
        <div className="menu-dropdown">
            { 
                Children.map( children, child => {
                    // return child;
                    return cloneElement(child, {
                        open: open
                    });
                })
            }
        </div>
    );
}


export default MenuDropdown ;
