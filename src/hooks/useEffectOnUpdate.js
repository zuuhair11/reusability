import { useEffect, useRef } from 'react' ;


// Will run after the first render
function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = useRef(true);

    useEffect( () => {
        if(firstRender.current) {
            firstRender.current = false;
            
        } else {
            effectFunction();
        }

    }, deps);
}


export default useEffectOnUpdate ;
