import React from 'react'
import Tweet from '../Tweet/Tweet'

import { ExploreContainer, Sidebar, Mainbar, Searchbar, Tweetbar, ExplorWrapper, SearchFilter, SearchIcon, SearchField, SearchBtn } from './exploreelements'
const Explore = () => {

    return (
        <>
            <ExploreContainer>
                {/* <ExploreContainer style={{ position: 'fixed' }}></ExploreContainer> */}
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
                            <SearchBtn>Search</SearchBtn>
                        </Searchbar>

                        <Tweetbar>
                            <Tweet></Tweet>
                            <Tweet></Tweet>
                            <Tweet></Tweet>

                            {/* <h1 style={{ marginTop: '150px' }}> </h1> */}

                        </Tweetbar>
                    </Mainbar>

                </ExplorWrapper>
            </ExploreContainer>

            <h1></h1>
        </>
    )
}

export default Explore
