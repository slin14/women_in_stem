import React from "react";
import styled from "styled-components"

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
            return( 
                <Container>
                    <PromptContainer>
                        <p>loading...</p>
                    </PromptContainer>
                </Container>)
        } else {
        return (
            <PersonContainer>
                <NameContainer>
                <p>{achievement.name}</p>
                </NameContainer>
                <PictureContainer>
                    <img src={achievement.image_url} alt=""/>
                </PictureContainer>
                <DetailsContainer>
                    <p>{achievement.description}</p>
                </DetailsContainer>
            </PersonContainer>
        );
        }
    }
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

const PromptContainer = styled.div` 
  background: #99d5ca;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb( 0 0 0 /24%);
    
`

const PersonContainer = styled.div`
    background: #99d5ca;
    display: grid;
    grid-template-rows: 100px 400px auto;

`

const NameContainer= styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 30px;
    font-weight: 900;
    color: #f50057;
    
    p {
        text-decoration: underline;
    }
`

const PictureContainer = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left:150px;
    display: flex;
    justify-content: left;
    align-items: center;
    img {
        border: 6px solid  #f50057;
        border-radius: 10px;  
        width:20%;     
    }
`

const DetailsContainer = styled.div`
    margin-left:100px;
    margin-right: 100px;
    margin-bottom: 100px;
    background:white;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
`