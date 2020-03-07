import React from 'react'

const FolderItem = ({ folder, handleClick }) => {
    if (!folder) {
        return null
    }

    return (
        <div className="list-item folder-item" onClick={() => handleClick(folder.path)}>
            <div className="folder-item-content">
                <ion-icon name="folder"></ion-icon>
                {folder.name}
            </div>
        </div>
    )
}

export default FolderItem