import React from "react";
import { withRouter } from "react-router";
import "react-image-gallery/styles/css/image-gallery.css"

class AchievementCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            achievement: props.achievement,
            image_url: props.image_url,
            id: props.id,
        };
    }

    handleClick = () => {
        this.props.history.push("/details/" + this.state.id);
    }

    render() {
        return(
            <div className='image-gallery-image' onClick={this.handleClick}>
                <h1>{this.state.name}</h1>
                <h2>{this.state.achievement}</h2>
                <img src={this.state.image_url}></img>
            </div>
        );
    }
}

export default withRouter(AchievementCard);
