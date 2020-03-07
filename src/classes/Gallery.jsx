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
        console.log('path', path)
        getPathItems(path)
        setUrl(path)

        if (!imageReg.test(path)) {
            setSelectedImage(null)
        }
        window.addEventListener('popstate', back)
        return () => window.removeEventListener('popstate', back)
    }, [path])

    const back = e => {
        console.log('back', path, e.state)
        setPath(e.state.path)
    }

    const setUrl = pathForUrl => {
        const newurl = '/' + pathForUrl/*window.location.protocol + '//' +
                       window.location.host + '/' +
                       pathForUrl*/
     
                       console.log(window.history.state.path, newurl)
        const history = window.history.state
        if (!history || (history.path !== newurl && '/' + history.path !== newurl)) {
            console.log('pushing', pathForUrl)
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
        <ImageItem key={image.path} image={image} handleClick={setSelectedImage} />
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