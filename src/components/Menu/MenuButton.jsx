import Button from '../Button/Button' ;
import Toggle from '../Toggle/index' ;

function MenuButton({ children }) {


    return (
        <Toggle.Button>
            <Button>
                { children }
            </Button>
        </Toggle.Button>
    );
}


export default MenuButton ;
