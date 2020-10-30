import React from 'react'
import PropTypes from 'prop-types'
import "./styles.css"

function PerfileImage( { img } ) {
    return (
        <span
            className="perfile-image"
            style={{
                backgroundImage: `url(${ img })`
            }}
        />
    )
}

PerfileImage.propTypes = {
    img: PropTypes.string.isRequired
}

export default PerfileImage

