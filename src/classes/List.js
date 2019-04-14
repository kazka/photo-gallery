import React, { Component } from 'react'
import itemService from './../services/items'
import FolderItem from './../components/FolderItem'
import ImageItem from './../components/ImageItem'
import Breadcrumb from './../components/Breadcrumb'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            path: '',
            folders: [],
            images: [],
            allLoaded: false
        }
    }
    
    componentDidMount() {
        this.getPathItems('')
    }

    setPath = (path) => {
        console.log('path', path)
        this.setState({ path })
        this.getPathItems(path)
    }

    getPathItems = (path) => {
        itemService.getPath(path)
        .then(items => { this.parseItems(items) })
        .catch(err => { console.log('err:' + err) })
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
      
    render() {
        const allLoaded = this.state.allLoaded

        let folderItems = this.state.folders.map(folder => {
            return <FolderItem key={folder.path} folder={folder} handleFolderClick={this.setPath} />
        })
        let imageItems = this.state.images.map(image => {
            return <ImageItem key={image.path} image={image} />
        })

        return (
            <div className="list">
                <Breadcrumb path={this.state.path} handleBreadcrumbClick={this.setPath} />
                <div className="list-container">
                    {!allLoaded && 'Loading'}
                    {folderItems}
                    {imageItems}            
                </div>
            </div>
        )
    }
}

export default List