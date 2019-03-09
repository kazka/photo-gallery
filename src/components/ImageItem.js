import React from 'react'

const ImageItem = ({ image }) => {
    return (
        <div className="list-item Image-item">
        <ion-icon name="image"></ion-icon>
         {image.name}
        </div>
    )
}

export default ImageItem