import React from 'react'

const FolderItem = ({ folder, handleFolderClick }) => {
    return (
        <div className="list-item folder-item" onClick={() => handleFolderClick(folder.path)}>
            <ion-icon name="folder"></ion-icon>
            {folder.name}
        </div>
    )
}

export default FolderItem