import React from 'react'

const FolderItem = ({ folder, handleFolderClick }) => {
    return (
        <div className="list-item folder-item" onClick={() => handleFolderClick(folder.path)}>
            <div className="folder-item-content">
                <ion-icon name="folder"></ion-icon>
                {folder.name}
            </div>
        </div>
    )
}

export default FolderItem