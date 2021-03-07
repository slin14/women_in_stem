import React from 'react'
import ImageGallery from 'react-image-gallery'
import styled from 'styled-components'

function Carousel() {

    const images = [
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
    ];


    return (
        <div>
            <Container>
                <ImageContainer>

                </ImageContainer>
                <ImageContainer>
                    <ImageGallery items={images} />
                </ImageContainer>
                <ImageContainer></ImageContainer>
            </Container>
        </div>
    )
}

export default Carousel

const Container = styled.div`
    // display: grid;
    // grid-template-rows: 64px auto min-content; 

`

const ImageContainer = styled.div`
    // height: 70%;
    // width: 70%;
    // display: flex;
    // justify-content: right;
    // align-items: bottom;
`
