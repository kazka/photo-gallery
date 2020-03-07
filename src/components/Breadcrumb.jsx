import React from 'react'

const Breadcrumb = ({ path, selectedImageName, handleClick }) => {
    const getPathStart = (index) => {
        let pathStart = ''
        for (let i = 0; i < index; i++) {
            pathStart = pathStart + pathItems[i] + '/'
        }
        return pathStart
    }

    let pathsWithFullPaths = []

    let pathItems = path.split('/')
    pathItems = pathItems.slice(0, pathItems.length - 1)

    /* get full paths */
    pathItems.forEach((item, index) => {
        const fullPath = getPathStart(index) + item + '/'
        pathsWithFullPaths.push({
            name: item,
            path: fullPath
        })
    })

    const breadcrumb = pathsWithFullPaths.map(item => (
        <div className="breadcrumb-item" key={item.name}>
            <span>&nbsp;></span>
            <button onClick={() => handleClick(item.path)}> {item.name} </button>
        </div>
    ))

    return (
        <div className="breadcrumb">
            <div className="breadcrumb-item">
                <button onClick={() => handleClick('')}>All</button>
            </div>  
            {breadcrumb}
            {selectedImageName && 
                <div className="breadcrumb-item breadcrumb-image-name">
                    ><button>{selectedImageName}</button>
                </div>
            }
        </div>
    )
}

export default Breadcrumb