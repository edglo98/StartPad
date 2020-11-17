import React from 'react'
import PropTypes from 'prop-types'
import "./styles.css"
import images from "../../assets/images"
import PerfileImage from "../../components/PerfileImage"

function MainPerfile( { background = images.DefaultBackground, name } ) {
    return (
        <div 
            className="background-perfile" 
            style={{
                backgroundImage: `url(${ background })`
            }} 
        >
            <div style={{width: 80, height: 80}}>
                <PerfileImage />
            </div>
            <h1>
                { name }
            </h1>
        </div>
    )
}

MainPerfile.propTypes = {
    background: PropTypes.string.isRequired
}

export default MainPerfile

