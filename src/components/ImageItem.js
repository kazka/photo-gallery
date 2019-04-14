import React from 'react'

const ImageItem = ({ image }) => {
    const style = { backgroundImage: 'url(' + image.thumbnail + ')' }

    return (
        <div className="list-item Image-item" style={style}>
        </div>
    )
}

export default ImageItem