import React from 'react'
import "./styles.css"
import MainPerfile from '../../components/MainPerfile'


function PerfilePage() {
    return (
        <>
            <MainPerfile 
                name="Edgar Lopez Lopez"
            />
            <div className="perfile-content">
                <div>
                    about me
                </div>
                <div>
                    Historias
                </div>
            </div>
        </>
    )
}

export default PerfilePage