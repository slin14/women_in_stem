import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'

function SearchContainer() {
    return (
        <Container>
            <Main>
                <SearchIcon />
                <SearchContain>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContain>
            </Main>
            <UserContainer>
                <Name>
                </Name>
            </UserContainer>
        </Container>
    )
}

export default SearchContainer


const Container = styled.div`
    color: white;
    display:flex;
    align-items: center;
    justify-content: center; 
    position: relative;
    margin-top: 20px;
    // spread the item as far as possible from each other^


`

const Main = styled.div`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
`

const SearchContain = styled.div`
    min-width:400px;
    margin-left: 16px;
    margin-right: 16px;
    // margin is outside the element, padding is inside the element
`

const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px white;
    border-radius: 6px;
    display: flex;
    align-items:center;

    input{
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: white;
        padding-top:4px;
        padding-bottom:4px;
        ::placeholder { 
            color: white;
            opacity: 0.8;
        }
        
    }

    input:focus{
        outline:none;
    }
`

const UserContainer = styled.div`
    display:flex;
    align-items:center;
    padding-right: 16px;
    position: absolute;
    //this takes this element out of context of the Container, so it will always stick to the right hand side 
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`
