import React from 'react'

const FolderItem = ({ folder }) => {
    return (
        <div className="list-item folder-item">
        <ion-icon name="folder"></ion-icon>
         {folder.name}
        </div>
    )
}

export default FolderItem