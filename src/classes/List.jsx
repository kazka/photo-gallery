import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import itemService from './../services/items'
import FolderItem from './../components/FolderItem'
import ImageItem from './../components/ImageItem'
import SelectedImage from './../components/SelectedImage'
import Breadcrumb from './../components/Breadcrumb'

const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i

const List = () => {
    const [path, setPath] = useState('')
    const [allLoaded, setAllLoaded] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    const [images, setImages] = useState([])
    const [folders, setFolders] = useState([])

    useEffect(() => {
        getPathItems(path)

        if (!imageReg.test(path)) {
            setSelectedImage(null)
        }
    }, [path])

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
                {/*<Route path={`/:folderPath`} component={FolderItem} />*/}
            </div>                                                                                                                                                                                                  
        </div>
    )
}

export default List