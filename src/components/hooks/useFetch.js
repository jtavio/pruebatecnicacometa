import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    
    const [state, setState] = useState({data:null, loading: true, error: null});

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            /*cambia el valor para que no dispare la renderizacion de mi componente solo se mantiene la referencia al mismo */
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        /*esto  vuelve a colocar un nuevo estado para visualizar el loading*/
        setState({data:null, loading:true, error:null});
        fetch(url, {
            method: 'GET',
            headers:{
                'hash': 'OcJn4jYChW'
            }
        })
            .then((res) => res.json())
            .then(data => {
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        data
                    })
                }
            })
    }, [url]);

    return state;

}  