import React, { Component } from 'react'
import itemService from './../services/items'
import FolderItem from './../components/FolderItem'
import ImageItem from './../components/ImageItem'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            folders: [],
            images: [],
            allLoaded: false
        }
    }
    
    componentDidMount() {
        itemService.getIndex()
          .then(items => { 
            let folders = []
            let images = []
            console.log(items)
            items.forEach(item => {
                if (item.type === 'folder') {
                    folders.push(item)
                } else {
                    images.push(item)
                }
            })
            this.setState({ folders, images, allLoaded: true })
            })
          .catch(err => { console.log('err:' + err) })
    }
      
    render() {
        const allLoaded = this.state.allLoaded
        
        let folderItems = this.state.folders.map(folder => {
            return <FolderItem key={folder.path} folder={folder} />
        })
        let imageItems = this.state.images.map(image => {
            return <ImageItem key={image.path} image={image} />
        })

        return (
            <div className="list-container">
                {!allLoaded && 'Loading'}
                {folderItems}
                {imageItems}            
            </div>
        )
    }
}

export default List