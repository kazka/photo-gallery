import React from 'react'

const ImageItem = ({ image, handleImageClick }) => {
    const style = { backgroundImage: 'url(' + image.thumbnail + ')' }

    return (
        <div className="list-item image-item" style={style} onClick={() => handleImageClick(image)}>
        </div>
    )
}

export default ImageItem