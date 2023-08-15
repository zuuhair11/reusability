import { BsStar, BsStarFill } from 'react-icons/bs' ;
import useToggle from '../hooks/useToggle' ;


function Star({ onChange }) {
    const [on, toggle] = useToggle();


    return (
        <div onClick={ toggle }>
            {
                on 
                ? <BsStarFill className='star filled' />
                : <BsStar className='star' />
            }
        </div>
    );
}


export default Star ;
