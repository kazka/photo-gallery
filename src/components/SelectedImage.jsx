import React, { useState } from 'react'

const SelectedImage = ({ image }) => {
    const [isLoaded, setLoaded] = useState(false)

    return (
        <div className="selected-image">
            {!isLoaded && <div className="loading"></div>}
            <img 
                onLoad={() => setLoaded(true)}
                src={image.download}
                className={!isLoaded ? 'hidden' : ''}
                alt={image.name}
            />
        </div>
    )
}

export default SelectedImage