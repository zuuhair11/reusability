import { cloneElement, useState } from 'react' ;
import { Children } from 'react' ;


function Menu({ children }) {
    const [open, setOpen] = useState(true);

    function toggle() {
        setOpen(prevOpen => !prevOpen);
    }
    


    return (
        <div className="menu">
            {
                // Iterates through each child component within the Menu component's children
                Children.map( children, child => {
                    // For each child, it clones the child component and adds two props: 
                    // "open": which is set to the open state variable of the Menu component
                    // "toggle": which is set to the toggle function of the Menu component
                    return cloneElement(child, {
                        open: open,
                        toggle: toggle
                    });
                })
            }
        </div>
    );
}


export default Menu ;
