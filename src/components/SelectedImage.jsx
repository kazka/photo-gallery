import React, { useState } from 'react'

const SelectedImage = ({ image }) => {
    const [isLoaded, setLoaded] = useState(false)

    return (
        <div className="selected-image">
            {!isLoaded && <div id="loading"></div>}
            <img 
                onLoad={() => setLoaded(true)}
                src={image.download}
                className={!isLoaded ? 'hidden' : ''}
            />
        </div>
    )
}

export default SelectedImage