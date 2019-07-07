import React from 'react'

class SelectedImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }   
    }

    handleImageLoaded() {
        this.setState({ isLoaded: true });
    }

    render () {
        const loaded = this.state.isLoaded
        return (
            <div className="selected-image">
                {!loaded && <div id="loading"></div>}
                <img 
                    onLoad={this.handleImageLoaded.bind(this)}
                    src={this.props.image.download}
                    className={!loaded && 'hidden'}
                />
            </div>
        )
    }
}

export default SelectedImage