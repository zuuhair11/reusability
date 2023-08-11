import Button from '../Button/Button'


function MenuButton({ children, toggle }) {


    return (
        <Button onClick={ toggle }>{ children }</Button>
    );
}


export default MenuButton ;
