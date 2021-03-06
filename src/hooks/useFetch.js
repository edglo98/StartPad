import { useState, useEffect } from "react"


export const useFetch = ( url ) => {
    const [state, setState] = useState( { data: null, loading: true, error: null } )

    useEffect(() => {
        
        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                setState({
                    data,
                    error: null,
                    loading: false
                })

            })

    }, [url])
    
    return state
}