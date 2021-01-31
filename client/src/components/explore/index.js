import React from 'react'
import Tweet from '../Tweet/Tweet'
import {
    ExploreContainer,
    Sidebar,
    Mainbar,
    Searchbar,
    Tweetbar,
    ExplorWrapper,
    SearchFilter,
    SearchIcon,
    SearchField,
    SearchBtn
} from './exploreelements'

const Explore = () => {
    return (
        <>
            <ExploreContainer>
                <ExplorWrapper >
                    <Sidebar>
                        <SearchFilter>Top</SearchFilter>
                        <SearchFilter>Latest</SearchFilter>
                        <SearchFilter>People</SearchFilter>
                        <SearchFilter>Media</SearchFilter>
                    </Sidebar>
                    <Mainbar>
                        <Searchbar>
                            <SearchIcon className="fa fa-search" aria-hidden="true" ></SearchIcon>
                            <SearchField type="text" placeholder="Search" ></SearchField>
                            <SearchBtn >Search</SearchBtn>
                        </Searchbar>

                        <Tweetbar>
                            <Tweet></Tweet>
                            <Tweet></Tweet>
                            <Tweet></Tweet>
                        </Tweetbar>
                    </Mainbar>

                </ExplorWrapper>
            </ExploreContainer>
        </>
    )
}

export default Explore