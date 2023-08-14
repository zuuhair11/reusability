import Toggle from '../Toggle/index' ;


function Menu({ children }) {


    return (
        <Toggle>
            <div className='menu'>
                { children }
            </div>
        </Toggle>
    );
}


export default Menu ;
