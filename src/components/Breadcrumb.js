import React from 'react'

const Breadcrumb = ({ path, handleBreadcrumbClick }) => {
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

    console.log('path items', pathsWithFullPaths)

    const breadcrumb = pathsWithFullPaths.map(item => {
        return (
            <div className="breadcrumb-item" key={item.name}>
                <span>&nbsp;></span>
                <a onClick={() => handleBreadcrumbClick(item.path)}> {item.name} </a>
            </div>
        )
    })

    return (
        <div className="breadcrumb">
            <div className="breadcrumb-item">
                <a onClick={() => handleBreadcrumbClick('')}>Index</a>
            </div>  
            {breadcrumb}
        </div>
    )
}

export default Breadcrumb