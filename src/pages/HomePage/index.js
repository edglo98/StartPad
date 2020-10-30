import React from 'react'
import LastStories from '../../components/LastStories'
import Loading from '../../components/Loading'

function HomePage() {

    // const number = useMemo(
    //     () => RanNumber(671)
    // ,[])
    
    // const {data, loading} = useFetch(`https://rickandmortyapi.com/api/character/${ number }`)

    return (
        <div style={{width: "100%", height: "100%"}}>
            {
            false?
                <Loading />
            :
                <div>
                    contenido
                </div>
            }
            <LastStories/>

        </div>
    )
}

export default HomePage

