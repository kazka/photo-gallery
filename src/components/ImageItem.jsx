import React from 'react'

const ImageItem = ({ image, handleClick }) => {
    const style = { backgroundImage: 'url(' + image.thumbnail + ')' }

    return (
        <div className="list-item image-item" style={style} onClick={() => handleClick(image)}>
        </div>
    )
}

export default ImageItem