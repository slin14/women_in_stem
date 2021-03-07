import React from "react";

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            achievement: null,
        };
    }

    componenDidMount() {
        fetch(`http://localhost:5000/achievements/${this.props.match.params.id}`).then(
            function(response) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    this.setState({
                        achievement: data
                    });
                });
            }
        ).catch(function(err) {
            console.log('Error calling API')
        });
    }

    render() {
        return (
            <p>{this.state.achievement.description}</p>
        );
    }
}

export default Details;