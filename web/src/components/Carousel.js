import React from 'react'
import ImageGallery from 'react-image-gallery'
import styled from 'styled-components'
import AchievementCard from './AchievementCard';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            images: [
                {
                    original: 'https://picsum.photos/id/1018/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1018/250/150/',

                },
                {
                    original: 'https://picsum.photos/id/1015/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1015/250/150/',
                },
                {
                    original: 'https://picsum.photos/id/1019/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1019/250/150/',
                },
                ]
        };
    }

    componentDidMount() {
    const today = new Date();
    const date = today.getFullYear().toString() + leftpad(today.getMonth() + 1, 2) + leftpad(today.getDate(), 2);
    const achievementCards = [];
    fetch(`http://localhost:5000/achievements?date=${date}`).then(
        (response) => response.json().then((data)=>{
            data.forEach(point => {
                const achievementCard = <AchievementCard {...point}/>;
                achievementCards.push({
                    original: point.image_url,
                    thumbnail: point.image_url,
                    height: 200,
                    width: 50,
                    achievementCard: achievementCard
                });
            });
            this.setState({items: achievementCards});
        })
    );
    function leftpad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }
    }

    imageGalleryRenderer(item) {
        return item.achievementCard;
    }

    render() {    
        console.log(this.state.items);
        return (
        <div>
            <Container>
                <ImageContainer>
                    <ImageGallery items={this.state.items} showFullscreenButton={false} renderItem={this.imageGalleryRenderer.bind(this)}/>
                </ImageContainer>
                <ImageContainer></ImageContainer>
            </Container>
        </div>
    )
    }
}

export default Carousel

const Container = styled.div`

`

const ImageContainer = styled.div`


`
