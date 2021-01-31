import React from 'react'
import TweetCard from '../Tweet/TweetCard'
import axios from 'axios';

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
import '../../App.css'
class Explore extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.state = {
            searchit: '',
            searchResult: ''
        }
        this.searching = this.searching.bind(this)
        this.handelchange = this.handelchange.bind(this)


    }

    componentDidMount() {
        var header = document.getElementById("searchdiv");
        console.log(header)
        var btns = header.getElementsByClassName("searchfilter");
        console.log(btns)

        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                console.log('clicked')
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    searching() {
        axios.post('/search', { search: this.state.searchit.toUpperCase() })
            .then((response) => {
                console.log(response.data)
                this.setState({
                    searchResult: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    handelchange(e) {
        this.setState({
            searchit: e.target.value,
        })
    }
    render() {

        return (
            <>
                <ExploreContainer>
                    <ExplorWrapper >
                        <Sidebar id='searchdiv'>
                            <SearchFilter className='searchfilter active' >Top</SearchFilter>
                            <SearchFilter className='searchfilter'>Latest</SearchFilter>
                            <SearchFilter className='searchfilter'>People</SearchFilter>
                            <SearchFilter className='searchfilter'>Media</SearchFilter>
                        </Sidebar>
                        <Mainbar>
                            <Searchbar>
                                <SearchIcon className="fa fa-search" aria-hidden="true" ></SearchIcon>
                                <SearchField type="text" placeholder="Search" onChange={this.handelchange}></SearchField>
                                <SearchBtn onClick={this.searching} >Search</SearchBtn>
                            </Searchbar>

                            <Tweetbar>
                                {this.state.searchResult && (
                                    this.state.searchResult.slice(0).reverse().map((tweet, key) =>
                                    (<TweetCard username={tweet.username} key={key}
                                        createdAt={tweet.createdAt}
                                        description={tweet.description}
                                        images={tweet.images}></TweetCard>))


                                )}
                            </Tweetbar>
                        </Mainbar>

                    </ExplorWrapper>
                </ExploreContainer>
            </>
        )
    }
}

export default Explore