import React, { useState, useEffect } from 'react'
import itemService from './../services/items'
import FolderItem from './../components/FolderItem'
import ImageItem from './../components/ImageItem'
import SelectedImage from './../components/SelectedImage'
import Breadcrumb from './../components/Breadcrumb'

const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i

const Gallery = () => {
    const [path, setPath] = useState(window.location.pathname.substr(1))
    const [allLoaded, setAllLoaded] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [images, setImages] = useState([])
    const [folders, setFolders] = useState([])

    useEffect(() => {
        if (!selectedImage) {
            getPathItems(path)
        }
        
        setUrl(path)
        
        if (selectedImage && !imageReg.test(path)) {
            setSelectedImage(null)
        }
        if (!selectedImage && imageReg.test(path)) {
            setSelectedImage(images.find(image => image.path === path))
        }
    }, [path, selectedImage])

    useEffect(() => {
        window.addEventListener('popstate', navigateBack)
        return () => window.removeEventListener('popstate', navigateBack)
    }, [])

    const navigateBack = e => {
        setPath(e.state.path)
    }

    const setUrl = pathForUrl => {
        const newurl = '/' + pathForUrl
        const history = window.history.state

        if (!history || (history.path !== newurl && '/' + history.path !== newurl)) {
            window.history.pushState({ path: pathForUrl }, '', newurl)
        }
    }

    const getPathItems = path => itemService.getPath(path)
        .then(items => {
            setImages(items.filter(item => item.type === 'image'))
            setFolders(items.filter(item => item.type === 'folder'))
            setAllLoaded(true)
        })
        .catch(err => console.err('Error loading data:' + err))

    const folderItems = folders.map(folder => (
        <FolderItem key={folder.path} folder={folder} handleClick={setPath} />
    ))
    const imageItems = images.map(image => (
        <ImageItem key={image.path} image={image} handleClick={image => {
            setSelectedImage(image)
            setPath(image.path)
        }} />
    ))
      
    return (
        <div className="content">
            <div className="breadcrumb-container">
                <Breadcrumb
                    path={path}
                    selectedImageName={selectedImage ? selectedImage.name : null}
                    handleClick={path => {
                        setPath(path)
                        setSelectedImage(null)
                    }}
                />
            </div>
            <div className="list">
                {!selectedImage && <div className="list-container">
                    {!allLoaded && 'Loading'}
                    {folderItems}
                    {imageItems}            
                </div>}
                {selectedImage && <SelectedImage image={selectedImage} />}
            </div>                                                                                                                                                                                                  
        </div>
    )
}

export default Gallery