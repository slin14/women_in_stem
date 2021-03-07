import React from "react";

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            achievement: undefined,
        };
    }

    componentDidMount() {
        fetch(`http://localhost:5000/achievements/${this.props.match.params.id}`).then(
            (response) => response.json().then((data)=>{
                console.log(data);
                this.setState({achievement: data});
            })
        );
    }

    render() {
        const {achievement} = this.state;
        if (!achievement) {
            return <p>loading...</p>
        } else {
        return (
            <p>{achievement.name}</p>
        );
        }
    }
}
