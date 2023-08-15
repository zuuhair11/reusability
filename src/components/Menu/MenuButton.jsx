import { useContext } from 'react' ;
import Button from '../Button/Button' ;
import { MenuContext } from './Menu' ;


function MenuButton({ children }) {
    const { toggleOpen } = useContext(MenuContext);

    return (
        <Button
            onClick={ toggleOpen }
        >
            { children }
        </Button>
    );
}


export default MenuButton ;
