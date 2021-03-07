import React from "react";
import styled from "styled-components"
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

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
                <a href="/"><Exit href="/"/></a>                
                </NameContainer>
                <PictureContainer>
                    <img src={achievement.image_url} alt=""/>     
                    <InfoContainer>
                        <h1>{achievement.category}</h1>
                        <LinkContainer>
                            {
                                achievement.links.map(link => (
                                    <LinkButton href={link} target="_blank">
                                        Click Here
                                    </LinkButton> 
                                ))
                            }
                        </LinkContainer>
                        
                    </InfoContainer>                                   
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
    grid-template-rows: 100px 300px auto;

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
    margin-left:300px;
    margin-right:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        border: 6px solid  #f50057;
        box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb( 0 0 0 /24%);
        border-radius: 10px;  
        width:30%;   
        margin-right: 50px;  
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
    box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb( 0 0 0 /24%);

`

const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left:100px;
    h1 {
        color: white;
        box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb( 0 0 0 /24%);
        padding-left:10px;
        padding-right:10px;
        border-radius: 6px;
        display:flex;
        justify-content: center;

    }

`

const LinkButton = styled.a`
    margin-top: 50px;
    margin-left: 30px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: white;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    box-shadow: 0 2px 6px rgb(0 0 0 /12%), 0 2px 6px rgb( 0 0 0 /24%);
    :hover {
        background: #ffebee;
    }

`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Exit = styled(ExitToAppIcon)`
    margin-left: 10px;
    display: flex;
    align-items: center; 
    background: white;
    border-radius: 6px;
    cursor: pointer;
`