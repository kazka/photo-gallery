import React, { Component } from 'react'
import itemService from './../services/items'
import FolderItem from './../components/FolderItem'
import ImageItem from './../components/ImageItem'
import SelectedImage from './../components/SelectedImage'
import Breadcrumb from './../components/Breadcrumb'

const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: '',
            folders: [],
            images: [],
            allLoaded: false,
            selectedImage: null
        }
    }
    
    componentDidMount() {
        this.getPathItems('')
    }

    setPath = (path) => {
        this.setState({ path })
        this.getPathItems(path)

        if (!imageReg.test(path)) {
            this.setState({ selectedImage: null })
        }
    }

    getPathItems = (path) => {
        itemService.getPath(path)
        .then(items => this.parseItems(items))
        .catch(err => console.err('err:' + err))
    }

    parseItems = (items) => {
        let folders = []
        let images = []

        items.forEach(item => {
            if (item.type === 'folder') {
                folders.push(item)
            } else {
                images.push(item)
            }
        })
        this.setState({ folders, images, allLoaded: true })
    }

    showImage = (selectedImage) => {
        this.setState({ selectedImage })
    }

    handleImageSelect = (image) => {
        this.setPath(image.path)
        this.showImage(image)
    }
      
    render() {
        const allLoaded = this.state.allLoaded
        const selectedImage = this.state.selectedImage

        let folderItems = this.state.folders.map(folder => {
            return <FolderItem key={folder.path} folder={folder} handleFolderClick={this.setPath} />
        })
        let imageItems = this.state.images.map(image => {
            return <ImageItem key={image.path} image={image} handleImageClick={this.handleImageSelect} />
        })

        return (
            <div class="content">
                <div class="breadcrumb-container">
                    <Breadcrumb path={this.state.path} selectedImageName={selectedImage ? selectedImage.name : null} handleBreadcrumbClick={this.setPath} />
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
}

export default List