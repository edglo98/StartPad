import React from 'react'
import Loading from '../../components/Loading'

function HomePage() {

    // const number = useMemo(
    //     () => RanNumber(671)
    // ,[])
    
    // const {data, loading} = useFetch(`https://rickandmortyapi.com/api/character/${ number }`)

    return (
        <div style={{width: "100%", height: "75vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            {
            true?
                <Loading />
            :
                <div>
                    contenido
                </div>
            }

        </div>
    )
}

export default HomePage

